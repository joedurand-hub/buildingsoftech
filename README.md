# BuildingSoft Tech public app catalog

Static company website and source of truth for every app's public product, support, and legal routes. It is safe to host on GitHub Pages because it contains no credentials or private analytics.

## Required structure per app

```text
apps/<slug>/
├── app.json
├── index.html
├── privacy/index.html
├── terms/index.html
├── refunds/index.html
├── support/index.html
├── account-deletion/index.html
└── assets/screenshots/
```

`apps/app.schema.json` defines the machine-readable contract used by the future admin/backend. `apps/catalog.js` controls which apps appear on the home page. Copy `apps/_template/`, replace every `{{PLACEHOLDER}}`, then add the app to the catalog.

An app is not release-ready while any of these are missing:

- product description and actual screenshots from the shipping build;
- product-specific privacy policy and terms;
- support email/route;
- public account and data deletion instructions, including apps that do not use accounts;
- purchase restoration, subscription cancellation, and refund guidance when monetized;
- matching Android package and iOS bundle identifiers;
- localized store metadata for the intended launch languages.

Never add service-account JSON, API keys, store private keys, customer exports, or analytics data to this repository. The admin's safe handoff export may be shared; its encrypted private vault must remain separately controlled.

The support email is declared per app in `app.json` and must match the address shown inside that app.
