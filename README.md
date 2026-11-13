# PlantCare AI — React frontend (prototype)

Implements the five Google Stitch screens (Home, Detect, Results, Dashboard, Library) with React 19 + Vite + Tailwind 3 (the Stitch `tailwind.config` is reused verbatim) and `react-router-dom`. Icons are Material Symbols, as in the designs.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## This is a demo build — nothing is real
No AI model or backend is connected. All statistics, partners, certifications, telemetry and results are **sample content**, labelled in the UI ("Sample" badges, a "Demo build" pill, a banner on every result). Uploaded images are only previewed in your browser; the mock never inspects them and always returns a labelled sample result. Agronomy text is qualitative and illustrative (no dosages, rates, schedules or products) and needs expert review before any real use.

## Structure
```
src/
  layouts/     Header (+mobile menu), Footer, DemoNotice, SiteLayout
  pages/       Home, Detect, Results, Dashboard, Library, NotFound
  components/  home/ detect/ results/ dashboard/ library/ + Icon, SampleBadge, Toast, PlaceholderAction…
  hooks/       useImageUpload, useAnalysis, useAnalysisStore, useToast
  services/    analysisService (mock ⇄ API switch), mockAnalysis, analysisContract (types)
  data/        site, home, diseases, samples  (all copy lives here)
  assets/      images.js — every image URL in ONE file
  utils/       format, imageQuality (local heuristic checks), exportSummary (CSV)
docs/          api-contract.md, design-comparison/ (Stitch vs. build)
```

## Images
`src/assets/images.js` holds the temporary remote Stitch URLs. To go local, import files and change values there.

## Backend hand-off
See `docs/api-contract.md`. UI → `useAnalysis` → `analyzeLeaf()` → mock **or** `POST /api/v1/analyze` (env flag). No network calls are made by default.

## Testing hooks
`/detect?mock=error` forces the error state. `/results?sample=<early-blight|late-blight|bacterial-spot|leaf-mold|healthy>` shows a given sample.

## Deliberate deviations from Stitch
Honesty edits to unsupported claims/partners/dosages; added empty/error/loading states, a mobile menu (the design had none below 1280px), and mobile spacing from the design system; sample chips use the four tomato diseases that have matching images; dashboard "New Foliar Scan" opens the Detect page (the hidden modal was not rebuilt); library cards open sample results instead of the hidden specimen modal.
