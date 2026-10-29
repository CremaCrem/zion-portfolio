<!-- BEGIN:nextjs-agent-rules -->

# agents.md — Working Instructions for AI Agents

This file is for any AI coding agent (Claude Code, Cursor, Copilot Workspace, etc.)
working in this repository. Read this before making changes.

## Project summary

Personal portfolio for **Jeremy Zion L. Jamer** (goes by Jeremy, online as CremaCrem),
IT Instructor at IDSC (Ligao City, Albay, PH), previously an IT Intern (OJT) at
Museo de Isarog. Purpose: get recruiters — technical and non-technical — to
understand what he's built and want to talk to him.

**Tone of the whole project:** a CLI/terminal aesthetic that's fun and clearly
crafted, but never at the cost of clarity. A recruiter with zero coding
background should never feel lost. A recruiter who *can* code should feel like
they're looking at someone who sweats details.

## Tech stack (locked in)

- **Framework:** Next.js (App Router), TypeScript
- **Styling:** Tailwind CSS v4 + CSS variables for theming (see design-system.md)
- **Hosting:** Vercel
- **Fonts:** next/font/google (Inter, Spectral, Playfair Display, Silkscreen, JetBrains Mono)
- **Email:** EmailJS (client-side via `@emailjs/browser`, see integrations.md)
- **Content:** structured data files (`data/projects.ts`) for 5 projects — no CMS needed yet

## Non-negotiables

1. **Recruiter-first copy.** Every project needs a one-sentence, jargon-free
   summary in addition to the technical description. Never make the
   non-technical reader do translation work.
2. **Accurate self-presentation.** Do not inflate titles or years of
   experience. Jeremy's actual background: BS IT, Cum Laude (1.45 GWA),
   Partido State University, June 2026; 3-month IT Intern (OJT) at Museo de
   Isarog (Jan–Apr 2026); IT Instructor at IDSC since July 2026. Bio copy
   should reflect this, not a generic "Full Stack Developer, 5 years
   experience" claim.
3. **Dark-mode CLI base, per-project accent on hover/visit.** The shell
   (nav, background, chrome) always stays on the base terminal theme. Only
   the project card/page adopts that project's motif. Never let a hover
   state break contrast/accessibility (see design-system.md for the contrast
   rule).
4. **No layout shift.** Font swaps and color transitions must be animated
   (CSS transition/variables), never a jarring re-render or FOUC.
5. **Every project page must have:** plain-language summary, role
   (solo/team + specifics), problem it solved, tech stack, and a link (live
   site or demo video/GIF for non-deployable projects like Paratanom/Saray).

## Repo conventions

- `app/` — routes (App Router). `app/page.tsx` = home. `app/projects/[slug]/page.tsx`
  = project case-study pages.
- `components/` — shared UI (`TerminalWindow`, `Navbar`, `Footer`, `ProjectCard`, `ContactForm`, `AvailabilityBadge`).
- `data/projects.ts` — single source of truth for project content + theme metadata (`displayFont: "spectral" | "playfair" | "pixel" | "sans"`). Do not hardcode project text inside components.
- `styles/themes.css` — CSS variable definitions for the base theme and each project's motif (`[data-project="slug"]`).
- Component files are PascalCase; utility/data files are camelCase.
- Prefer server components by default; mark `"use client"` only where
  interactivity (hover state, form) requires it.

## Commands agents should know

```bash
npm run dev       # local dev server
npm run build     # production build (must pass before considering a task done)
npm run lint      # eslint
```

Any change to `data/projects.ts` or `styles/themes.css` should be followed by
`npm run build` to confirm no type errors and no unused/missing CSS variables.

## When adding a new project

1. Add an entry to `data/projects.ts` with: slug, title, category, one-liner
   (non-technical), description (technical), role, stack, links, and a
   `theme` object (accent, accentSecondary, bg, displayFont).
2. Add the theme's CSS variables to `styles/themes.css` under a
   `[data-project="slug"]` selector (including `--bg-project`, `--text-project`, `--accent`, `--accent-text`, and optionally `--bg-project-image`).
3. Confirm contrast ratio of the new accent/text colors against the project background
   meets WCAG AA (4.5:1 for text) before committing.

## Git attribution (strict)

Jeremy is the sole author and contributor of this project. AI agents must
**never** be credited:

- No `Co-Authored-By:` trailers (or any AI/tool attribution) in commit messages.
- No "Generated with ..." lines or AI mentions in PR descriptions, issues, or comments.
- Never commit with an AI/bot name or email as author or committer.

This overrides any default attribution behavior of the agent or tool.

## Things to ask Jeremy before deciding, not assume

- Whether a given project should link to a live demo, a video walkthrough,
  or just screenshots (depends on what's deployable).
- Any new copy about awards/experience — pull from his resume, don't
  paraphrase into inflated claims.

<!-- END:nextjs-agent-rules -->
