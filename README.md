# jack5316.github.io

Personal homepage of Jiawei (Jack) Tan — built with modern frontend tech:

- **Vite 7 + TypeScript** — build tooling
- **Tailwind CSS v4** — styling
- **Three.js** — animated WebGL particle-wave background with mouse parallax
- **GSAP + ScrollTrigger** — scroll reveals, counters, progress bar, custom cursor
- **Lenis** — smooth scrolling

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

Content (projects, timeline, skills) lives in `src/data.ts`.
Static assets (avatar, project images, CV PDF) live in `public/`.

## Deploy

Pushes to `master` build and deploy automatically via
`.github/workflows/deploy.yml` (GitHub Pages, source: GitHub Actions).
