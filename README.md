# Zumhoo Studios

Cinematic, multi-page site for Zumhoo Studios — a Cameroonian creative
production studio working across film, brand stories, photography and
graphic design. Vite + React + React Router + Tailwind CSS + GSAP.

## Pages

- `/` — Home: hero, an auto-scrolling highlight reel, teasers into each
  discipline, condensed about/culture, closing CTA.
- `/film`, `/brand-stories`, `/photography`, `/graphic-design` — one gallery
  page per discipline, all rendered by `src/pages/CategoryPage.jsx` from
  `src/data/projects.js#CATEGORY_INFO`.

Every project block links out to a real, working URL — video items to the
studio's YouTube channel, image items to Instagram — never a dead `#`.
Project titles, years, bios and descriptions are clearly bracketed
placeholders (`[PROJECT TITLE]`, `[FOUNDER BIO]`, etc.) pending real content;
see `src/data/site.js` and `src/data/projects.js`.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## Deploying to Vercel

Static Vite build, no special config beyond `vercel.json` (already in the
repo) so client-side routes like `/film` resolve correctly on refresh/deep
link.
