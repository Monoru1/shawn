# Shawn — Filmmaker Portfolio

Editorial cinema portfolio concept for Shawn, filmmaker and founder of Kerawa Studio.

## Run locally

```bash
npm install
npm run dev
```

## Content status

All project titles, dates, descriptions, credits, contact links and media currently serve as clearly marked editorial placeholders. Replace them with Shawn's verified content before production release. Central project data lives in `src/content.ts`.

## Motion system

- **GSAP + ScrollTrigger**: large-scale scroll reveals and narrative motion.
- **Lenis**: smooth scrolling, synchronised with ScrollTrigger.
- **Motion**: route fades and mobile navigation state.
- `prefers-reduced-motion` is respected in CSS and JavaScript.

Swiper and Three.js were intentionally not installed: the current art direction does not justify either dependency.
