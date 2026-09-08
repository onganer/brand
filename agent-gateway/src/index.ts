import {
  canonicalOrigin,
  pageMarkdown,
  productInformationSkill,
} from "./content";

const contentSignal = "ai-train=no, search=yes, ai-input=yes";

const robots = `User-agent: *
Allow: /
Content-Signal: ${contentSignal}

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CCBot
Disallow: /

Sitemap: ${canonicalOrigin}/sitemap.xml
Agentmap: ${canonicalOrigin}/.well-known/ai-catalog.json
`;

const sitemapPaths = [
  "/home",
  "/genephera",
  "/artichoke-steps",
  "/origin",
  "/writing",
  "/genepheraprivacypolicy",
  "/genephera-release-notes-v1",
  "/genephera-release-notes-v2",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths
  .map(
    (path) => `  <url>
    <loc>${canonicalOrigin}${path}</loc>
    <lastmod>2026-09-08</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const llms = `# The Enginar Group
> Independent UK product studio building privacy-conscious health technology.

## Company and ecosystem
- [The Enginar Group](${canonicalOrigin}/home)
- [Genephera](${canonicalOrigin}/genephera)

## Products
- [Artichoke Steps](${canonicalOrigin}/artichoke-steps)
- [Origin](${canonicalOrigin}/origin)

## Supporting information
- [Writing](${canonicalOrigin}/writing)
- [Privacy](${canonicalOrigin}/genepheraprivacypolicy)
- [Artichoke Steps 1.0 release notes](${canonicalOrigin}/genephera-release-notes-v1)
- [Artichoke Steps 2 release notes](${canonicalOrigin}/genephera-release-notes-v2)
`;

const commonHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, max-age=3600",
  "Content-Signal": contentSignal,
};

function textResponse(
  body: string,
  contentType: string,
  status = 200,
): Response {
  return new Response(body, {
    status,
    headers: {
      ...commonHeaders,
      "Content-Type": contentType,
    },
  });
}

async function sha256(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function skillsIndex(): Promise<Response> {
  const digest = await sha256(productInformationSkill);
  return Response.json(
    {
      $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
      skills: [
        {
          name: "enginar-product-information",
          type: "skill-md",
          description:
            "Use this skill when answering factual questions about The Enginar Group, Genephera, Artichoke Steps, or Origin.",
          url: "/.well-known/agent-skills/enginar-product-information/SKILL.md",
          digest: `sha256:${digest}`,
        },
      ],
    },
    {
      headers: {
        ...commonHeaders,
        "Content-Type": "application/json; charset=utf-8",
      },
    },
  );
}

function aiCatalog(): Response {
  return Response.json(
    {
      specVersion: "1.0",
      host: {
        displayName: "The Enginar Group",
        identifier: "https://www.theenginargroup.ltd.uk",
        documentationUrl: `${canonicalOrigin}/home`,
      },
      entries: [
        {
          identifier:
            "urn:air:theenginargroup.ltd.uk:knowledge:product-information",
          displayName: "The Enginar Group product information",
          type: "application/ai-skill+md",
          url: `${canonicalOrigin}/.well-known/agent-skills/enginar-product-information/SKILL.md`,
          description:
            "Canonical company, ecosystem, product, privacy, and availability information.",
          tags: ["health-technology", "privacy", "product-information"],
          representativeQueries: [
            "What is The Enginar Group?",
            "What is Genephera?",
            "How does Artichoke Steps handle Apple Health data?",
            "Is Origin available?",
          ],
          version: "1.0.0",
          updatedAt: "2026-09-08T00:00:00Z",
        },
      ],
    },
    {
      headers: {
        ...commonHeaders,
        "Content-Type": "application/json; charset=utf-8",
      },
    },
  );
}

function addDiscoveryHeaders(response: Response): Response {
  const result = new Response(response.body, response);
  result.headers.set("Content-Signal", contentSignal);
  result.headers.append("Vary", "Accept");
  result.headers.append(
    "Link",
    '</llms.txt>; rel="describedby"; type="text/plain"',
  );
  result.headers.append(
    "Link",
    '</.well-known/ai-catalog.json>; rel="ai-catalog"; type="application/json"',
  );
  result.headers.append(
    "Link",
    '</.well-known/agent-skills/index.json>; rel="service-desc"; type="application/json"',
  );
  return result;
}

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, "") || "/";

    if (path === "/robots.txt") {
      return textResponse(robots, "text/plain; charset=utf-8");
    }
    if (path === "/sitemap.xml") {
      return textResponse(sitemap, "application/xml; charset=utf-8");
    }
    if (path === "/llms.txt") {
      return textResponse(llms, "text/plain; charset=utf-8");
    }
    if (path === "/.well-known/ai-catalog.json") {
      return aiCatalog();
    }
    if (path === "/.well-known/agent-skills/index.json") {
      return skillsIndex();
    }
    if (
      path ===
      "/.well-known/agent-skills/enginar-product-information/SKILL.md"
    ) {
      return textResponse(
        productInformationSkill,
        "text/markdown; charset=utf-8",
      );
    }

    const acceptsMarkdown = (request.headers.get("Accept") || "")
      .toLowerCase()
      .includes("text/markdown");
    if (acceptsMarkdown && pageMarkdown[path]) {
      return textResponse(
        pageMarkdown[path],
        "text/markdown; charset=utf-8",
      );
    }

    const originResponse = await fetch(request);
    return addDiscoveryHeaders(originResponse);
  },
};
