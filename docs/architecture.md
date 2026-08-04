# architecture.md — App Structure & Technical Architecture

## Stack

- Next.js 16 (App Router), TypeScript, React Server Components by default
- Tailwind CSS v4 + CSS variables for theming
- Deployed on **Vercel**
- Fonts via `next/font/google` (`JetBrains_Mono`, `Spectral`, `Playfair_Display`, `Silkscreen`, `Inter`)
- Email via `@emailjs/browser`

## Route map

```
app/
  layout.tsx              # root layout: fonts, base theme, Navbar, Footer
  page.tsx                # home: About, Skills, Projects grid, Contact
  globals.css             # Tailwind v4 import & theme mappings
  projects/
    [slug]/
      page.tsx             # SSG case-study page per project with pre-theming
      opengraph-image.tsx  # per-project OG image placeholder
public/
  resume.pdf              # resume PDF file available for direct download
```

Navbar links to `/#projects` (jumps to the grid) **and** `/resume.pdf` for direct resume download.

## Data layer

Single source of truth: `data/projects.ts`

```ts
export type Project = {
  slug: string;
  title: string;
  category: "Desktop" | "Web" | "Full stack" | "Unity / AR";
  oneLiner: string;        // plain-language, non-technical
  description: string;     // technical description
  role: string;            // "Solo developer", "Lead developer", etc.
  stack: string[];
  links?: { label: string; href: string }[];
  media?: { type: "image" | "video"; src: string; alt: string }[];
  theme: {
    accent: string;
    accentSecondary: string;
    bg: string;
    displayFont: "spectral" | "playfair" | "pixel" | "sans";
  };
};
```

Contains data for 5 projects: `idsc-pulse`, `saray`, `museum-repository`, `museo-de-isarog`, and `paratanom`.

Home page renders `ProjectCard` from this array; `[slug]/page.tsx` uses
`generateStaticParams()` to pre-render each project page at build time
(fully static, fast, cheap on Vercel).

## Theming mechanism

- `styles/themes.css` defines CSS custom properties per project under
  `[data-project="idsc-pulse"]`, `[data-project="saray"]`, `[data-project="museo-de-isarog"]`, `[data-project="museum-repository"]`, `[data-project="paratanom"]`.
- Scoped CSS variables include `--bg-project`, `--bg-project-image`, `--bg-project-size`, `--text-project`, `--accent`, `--accent-text`, and `--font-display`.
- `ProjectCard` is a client component (`"use client"`) that uses `onMouseEnter` / `onFocus` to set `data-project` on itself, applying `.project-card-inner` CSS transitions.
- `[slug]/page.tsx` sets `data-project` at the top `<main>` tag server-side
  (no client JS needed) so the themed case-study page loads pre-themed with zero color flash.

## Rendering strategy

- Fully static (SSG) — nothing here needs per-request data. Fast TTFB,
  cheap hosting, great Lighthouse scores (which matters: recruiters do judge
  a portfolio's own performance).
- Images via `next/image` for automatic optimization; video demos (for
  Paratanom/Saray, which aren't web-deployable) as compressed `.mp4`/`.webm`
  with a poster frame, not GIFs, for load time.

## SEO / shareability

- Per-project `generateMetadata()` — title, description (plain-language
  one-liner), so a recruiter pasting the project link in Slack gets a proper preview card.
- Root metadata: name, role, and a short description for search engines.

## Performance/accessibility budget

- Lighthouse targets: 95+ performance, 100 accessibility on both home and
  project pages.
- Respect `prefers-reduced-motion` — disable transitions in `styles/themes.css` for users who've asked for less motion.

## Deployment

- Vercel project linked to GitHub repository (`CremaCrem/zion-portfolio`), auto-deploy on push to `main`.
- Environment variables (`NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`) set in `.env.local` and Vercel project settings.