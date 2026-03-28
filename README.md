# LAIRE Starter App

Clean GitHub-ready React + Vite starter for branded and white-labeled projects.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project structure

```text
.
├── index.html
├── package.json
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   ├── config/
│   │   └── project.config.js
│   └── components/
│       └── BrandProjectTemplatePreview.jsx
└── vite.config.js
```

## Notes

- Headers use Montserrat
- Body copy uses Lato
- Top-left logo uses the live LAIRE SVG
- Theme is dark by default
- Config is separated so this can be reused for white-labeled client builds
