# Mystica public release package

Canonical public root: `https://buildingsofttech.vercel.app/apps/mystica/`

## Included

- Product landing and catalog entry.
- Product-specific privacy, terms, refunds, support, local-data deletion, and child-safety pages.
- Public `app.json` following `apps/app.schema.json`.
- Google Play icon (512 x 512) and feature graphic (1024 x 500).
- Five real 1080 x 1920 app screenshots for each active interface locale: `en`, `es`, `pt`, and `fr`.
- Screenshot manifest with feature labels, dimensions, locale status, and SHA-256 checksums.
- `CODEX_STORE_RESULT.json` for Store/ASO import and the source launch package used to produce this directory.

## Intentionally not release-ready

- Store screenshot sets for `vi`, `id`, `de`, `pl`, `uk`, `ru`, `zh`, `ja`, and `ko` remain deferred until those app-interface locales are complete.
- The QA paywall capture is excluded because the browser build cannot display real RevenueCat prices.
- The HTTPS URLs become `published` only after this repository is deployed and the control panel reconciles them.
- No AAB was generated or uploaded as part of this web-package task.

Panel-compatible copies of the visual assets also live at `C:\Users\PC\Desktop\Proyectos y Negocios\Mystica\store-assets\mystica\`, because local-path validation in the control panel is scoped to the registered app repository.
