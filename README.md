# The Enginar Group website

This workspace contains the source-of-truth copy for the Google Site and a
Cloudflare Worker that adds agent-facing discovery resources without replacing
Google Sites as the visual host.

## Structure

- `content/site-copy.md` — approved human-facing page copy.
- `agent-gateway/src/content.ts` — concise Markdown representations for agents.
- `agent-gateway/src/index.ts` — pass-through Worker and discovery endpoints.

The Google Site remains the human-facing origin. The Worker is intended to run
as a route in front of `theenginargroup.ltd.uk` and only intercept agent-specific
requests and well-known discovery paths.
