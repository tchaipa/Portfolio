# Tafadzwa Chaipa — Portfolio

A redesigned version of your live site (tchaipa.vercel.app), rebuilt with
**React + Vite**. Same dark theme, green/teal accent, and content — Experience,
Projects, Skills, Services, Contact — restructured to be sleeker and more
effective for job hunting.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview   # serve the production build locally
```

The build output lands in `dist/` — that's what you deploy (e.g. drag the
`dist` folder into Vercel, or connect the repo and Vercel will run
`npm run build` for you automatically).

## What to edit before you deploy

Everything content-related lives in **`src/data.js`** — you generally don't
need to touch the component files. In particular:

- `profile.photo` — drop your real headshot in as `public/photo.jpg`
  (shows a placeholder frame until you do).
- `profile.resumeUrl` — drop your CV in as `public/resume.pdf`.
- `profile.socials` — the GitHub / LinkedIn / Facebook / Instagram URLs are
  placeholders (`TODO`) — fill in your real profile links.
- `profile.phone` — double check the formatting.
- `projects[].image` — drop real project screenshots into `public/projects/`
  matching the filenames already referenced (`portfolio.jpg`,
  `vostertech.jpg`, `voxvoyager.jpg`, `website.jpg`), and fill in the two
  `href: "#"` project links.

## Structure

```
src/
  data.js              ← all copy/content (pulled from your live site)
  index.css            ← design tokens (colors, type, spacing)
  App.jsx              ← composes the page
  components/          ← Nav, RoleRotator, StatusBadge, Footer
  sections/            ← Hero, Experience, Projects, Skills, Services, Contact
```

## Features

- Sticky nav with scroll-spy active-section highlighting + mobile menu
- Hero with a rotating role subtitle and a live "Open to new roles" badge
- Alternating experience timeline, 4-category skills grid, services grid
- Contact form that opens a pre-filled email (no backend needed)
- SEO + Open Graph meta tags in `index.html`
- Fully responsive, keyboard-focus visible, accessible color contrast,
  respects `prefers-reduced-motion`
