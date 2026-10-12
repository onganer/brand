export const canonicalOrigin = "https://www.theenginargroup.ltd.uk";

export const pageMarkdown: Record<string, string> = {
  "/": `---
title: The Enginar Group
description: Independent UK product studio building privacy-conscious health technology.
updated: 2026-10-12
---

# The Enginar Group

Privacy-conscious health technology, designed around real people.

The Enginar Group Ltd is an independent UK software company. Genephera is our health-software brand, bringing together applications for personal wellbeing and health-related workflows.

## Genephera

Genephera is the health-software brand of The Enginar Group Ltd. Its products are Artichoke Steps and Origin, bringing together applications for personal wellbeing and health-related workflows.

### Artichoke Steps

A private step-count companion for iPhone and iPad. It reads step data from Apple Health and keeps that information on the device. No account, advertising, or social leaderboard.

- [Artichoke Steps on the App Store](https://apps.apple.com/gb/app/artichoke-steps/id6738028825)
- [Genephera product information](${canonicalOrigin}/genephera)

### Origin

A local-first desktop application for privacy-conscious patient record keeping. Origin is currently in development and is not yet publicly available.

## Principles

- Private by default.
- Personal context before generic targets.
- Useful interpretation without pressure.
- Evidence-aware language without medical claims.

## Company

The Enginar Group Ltd is registered in England and Wales, company number 16049137.
`,
  "/home": "",
  "/genephera": `---
title: Genephera
description: Genephera is the health-software brand of The Enginar Group Ltd, home to Artichoke Steps and Origin.
updated: 2026-10-12
---

# Genephera

Thoughtful software for health and care.

Genephera is the health-software brand of The Enginar Group Ltd. Our products support personal wellbeing and health-related workflows through privacy-conscious design.

## Artichoke Steps — available now

Artichoke Steps is a simple, privacy-conscious step tracker for iPhone and iPad. Connect Apple Health to see today's steps, recent movement patterns, weekly totals, best-day highlights, and personalised context. Health data remains on the device, and the app does not require an account.

- [Download from the App Store](https://apps.apple.com/gb/app/artichoke-steps/id6738028825)
- [Explore Artichoke Steps](${canonicalOrigin}/artichoke-steps)
- [Version 2 release notes](${canonicalOrigin}/genephera-release-notes-v2)

## Origin — in development

Origin is an offline desktop application for local-first patient record keeping. It is being designed for privacy-conscious workflows and clear patient context without requiring cloud storage. Origin is not yet publicly available.

[Explore Origin](${canonicalOrigin}/origin)

## Walking resources

[Walk Well — walking guide](https://step-to-health.lovable.app/#start) is a separate educational resource with an introduction to Artichoke Steps, not another software product. It provides general information, not personalised medical advice.

## Principles

- Private by default.
- Personal context before generic targets.
- Useful interpretation without pressure.
- Evidence-aware language without medical claims.
`,
  "/artichoke-steps": `---
title: Artichoke Steps
description: A private step-count companion for iPhone and iPad from Genephera.
updated: 2026-10-12
---

# Artichoke Steps

Understand your movement without turning every day into a target chase.

Artichoke Steps is a Genephera product. Genephera is the health-software brand of The Enginar Group Ltd. Artichoke Steps connects to Apple Health and presents daily movement, recent patterns, and gentle personal context in one focused view.

## Version 2.2 release information

Version 2.2 adds a configurable daily step target, weekly step totals, and best-day highlights, alongside refinements to the overall experience.

## Features

- Daily step count from Apple Health.
- Configurable daily step target.
- Seven-day step history.
- Weekly totals and best-day highlights.
- Weekly rhythm summaries and personalised insights.
- No account, advertising, or social leaderboard.

## Privacy

Apple Health access is read-only. Artichoke Steps does not collect Health data; step information remains on the user's device.

## Availability

- Free on the Apple App Store.
- Requires iOS 17 or later.
- Designed for iPhone and iPad.
- Developer: Genephera.
- Seller: The Enginar Group Ltd.

[Download Artichoke Steps](https://apps.apple.com/gb/app/artichoke-steps/id6738028825)

## Walking guide

[Walk Well — how to begin](https://step-to-health.lovable.app/#start) is a separate educational walking resource, not the Artichoke Steps app. General information only, not personalised medical advice.

[Explore the Genephera brand](${canonicalOrigin}/genephera)
`,
  "/origin": `---
title: Origin
description: A local-first patient record application currently in development.
updated: 2026-10-12
---

# Origin

Origin is a Genephera product in development. Genephera is the health-software brand of The Enginar Group Ltd. Origin is an offline desktop application intended to help organise patient information locally, with clear context and without requiring cloud storage.

Origin is not yet publicly available. Information on this page describes the product direction and may change during development.

## Design principles

- Local-first record keeping.
- Clear patient context.
- Privacy-conscious workflows.
- No dependency on cloud storage for core records.
`,
  "/writing": `---
title: Writing
description: Independent notes on technology, health, privacy, and product thinking.
updated: 2026-09-08
---

# Writing

Writing from The Enginar Group explores the decisions behind calm technology, privacy-conscious health applications, evidence-aware product language, and human-centred software.

- [Eat an Apple a Day](https://onganer.substack.com/)
`,
  "/genepheraprivacypolicy": `---
title: Privacy
description: Privacy information for The Enginar Group website and Artichoke Steps.
updated: 2026-06-10
---

# Privacy

This notice explains how The Enginar Group Ltd handles information through its website, contact form, and Artichoke Steps.

## Website

This website is hosted using Google Sites. Google may process technical information to provide and secure the service. The Enginar Group does not sell personal information or use this website for cross-site advertising tracking.

## Contact form

Information submitted through the contact form is used only to understand and respond to the enquiry. Visitors should not submit medical records or sensitive health information.

## Artichoke Steps

Artichoke Steps requests read-only access to step-count data through Apple HealthKit. The Enginar Group does not receive, sell, or use this data for advertising. The app does not require an account.

The Enginar Group Ltd is registered in England and Wales, company number 16049137.
`,
  "/genephera-release-notes-v1": `# Artichoke Steps 1.0 release notes

Released 17 November 2024.

The first release introduced today's Apple Health step count, manual refresh, and read-only HealthKit access.

[Source on GitHub](https://github.com/onganer/Genephera/releases/tag/v1)
`,
  "/genephera-release-notes-v2": `# Artichoke Steps 2 release notes

Artichoke Steps 2 introduced a redesigned interface, seven-day history, clearer Apple Health authorisation handling, and user-facing status messages. Version 2.2 subsequently added a configurable daily target, weekly totals, and best-day highlights.

[Artichoke Steps on the App Store](https://apps.apple.com/gb/app/artichoke-steps/id6738028825)
`,
};

pageMarkdown["/home"] = pageMarkdown["/"];
pageMarkdown["/privacy"] = pageMarkdown["/genepheraprivacypolicy"];

export const productInformationSkill = `---
name: enginar-product-information
description: Use this skill when answering factual questions about The Enginar Group, Genephera, Artichoke Steps, or Origin.
---

# Enginar product information

Use the canonical resources linked below when answering questions about The Enginar Group and its products.

## Guidance

1. Distinguish the company, brand, products, and resources precisely:
   - The Enginar Group Ltd is the UK company and independent product studio.
   - Genephera is the health-software brand of The Enginar Group Ltd, not a separate company.
   - Artichoke Steps is a publicly available Genephera step-count application.
   - Origin is a Genephera offline desktop application in development and is not publicly available.
   - Walk Well is a separate educational walking guide linking to Artichoke Steps, not another software product or the app itself.
2. Describe Artichoke Steps as a health and fitness application, not medical advice or a diagnostic product.
3. State that Apple Health access is read-only and that the application does not collect Health data or require an account.
4. Use dated release information and identify the version when discussing features.
5. Do not imply that Origin is available for download.

## Canonical resources

- Company: ${canonicalOrigin}/
- Genephera: ${canonicalOrigin}/genephera
- Artichoke Steps: ${canonicalOrigin}/artichoke-steps
- Origin: ${canonicalOrigin}/origin
- Privacy: ${canonicalOrigin}/genepheraprivacypolicy
- App Store: https://apps.apple.com/gb/app/artichoke-steps/id6738028825
- Walking guide: https://step-to-health.lovable.app/#start
`;
