Project

Personal portfolio website for Amsale Gebrehana — a full-stack software engineer based in London, UK. Single-page, responsive, SEO-optimised site that presents who I am, my skills, and my work, and gives visitors a way to get in touch. Inspired in structure and polish by a modern Vercel-hosted Next.js portfolio (hero → about → skills → projects → experience → testimonials → contact), but the content, copy, and visual identity are my own.


Primary goals, in priority order:

    1. Credible, recruiter-ready first impression within 5 seconds of load.
    2. Fast (Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO).
    3. Easy for me to update content without touching layout code.

Tech stack
Framework: Next.js (App Router) + React + TypeScript (strict).
Styling: Tailwind CSS. No CSS-in-JS runtime libraries.
Animation: Framer Motion for scroll-reveal and hover transitions. Keep it subtle — never block content or reading.
Icons: lucide-react.
Fonts: next/font (self-hosted, no layout shift). A clean sans for body, a slightly distinctive display face for headings.
Deployment: Vercel. main auto-deploys to production.
Package manager: pnpm.

Do not add a backend, database, or CMS unless I ask. Content lives in typed data files, not a service.

Architecture & conventions
Content is data-driven. All editable content (projects, skills, experience, social links, metadata) lives in src/data/*.ts as typed exports. Sections map over this data. To change what the site says, edit a data file — never hardcode copy inside a component.
One component per section in src/components/sections/ (Hero, About, Skills, Projects, Experience, Testimonials, Contact). Shared UI in src/components/ui/.
Section order is fixed in src/app/page.tsx; don't reorder without asking.
Every section has a stable id matching its nav anchor.
Server Components by default. Add "use client" only for components that use state, effects, or Framer Motion.
Path alias @/ → src/.

Design direction
- Theme: light-first, two-colour. White background (
#ffffff, with a very light grey 
#f5f7fa for alternating section bands) and navy blue (around 
#1b2a47, deeper 
#0f1b33 for emphasis) as the primary brand colour — used for headings, the nav, buttons, links, and accents. Body text is a dark navy-tinted near-black on white; navy sections use white text. Keep the palette to these two colours plus neutral greys — no third accent hue. All combinations must pass WCAG AA contrast.
- Define the palette as CSS variables / Tailwind theme tokens (--bg, --bg-alt, --navy, --navy-deep, --text, --text-on-navy) so it's changed in one place.
- Type: large confident navy hero heading, generous line-height, comfortable measure (~65ch) for prose.
- Layout: centred max-width container (~1100px), roomy vertical rhythm between sections, consistent spacing scale. Consider a navy hero or navy footer band to anchor the white page.
- Motion: fade-and-rise on scroll into view, gentle hover lift on cards. Respect prefers-reduced-motion — disable non-essential animation.
- Aim for distinctive and intentional, not a template default.

Content
- Use my resume Amsale_Gebrehana_weldehawaryat_resume.pdf as the source of truth for work experience, skills, and education. Do not invent or embellish.
- Use my LinkedIn profile as the source of truth for testimonials(https://www.linkedin.com/in/amsale-gebrehana-weldehawaryat/)
- Projects → data/projects.ts: each has title, short description, tech tags, an image/screenshot, and (where public) live + repo links
- Testimonials → data/testimonials.ts: client feedback from my Upwork profile screenshots are in upwork_testimonies folder

Do not invent anything — no names, employers, dates, metrics, project details, testimonials, or links. Use only what the CV and I provide. If something is missing, add a // TODO with a one-line note and leave it for me.


SEO & metadata (do not skip)
Full metadata export in app/layout.tsx: title, description, keywords, metadataBase, Open Graph (title, description, 1200×630 og.png, url, type, locale, site_name) and Twitter summary_large_image.
theme-color set to the navy (
#1b2a47).
Generate sitemap.ts and robots.ts; robots: index, follow.
Add Person JSON-LD structured data in the layout.
Semantic HTML: one <h1> (the hero), <section> per block, <nav>, descriptive alt on every image, labelled form fields.

Working style for Claude
Prefer editing data/ files over touching layout for content changes.
Make focused changes; don't refactor unrelated code in passing.
When adding a dependency, say why and keep the footprint small.
Keep responses short; show the diff/result, not a lecture.
If a request is ambiguous (which project, which link, which wording), ask one quick question rather than guessing.