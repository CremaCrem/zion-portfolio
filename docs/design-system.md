# design-system.md — Visual & Content System

## Design principle

**One shell, many moods.** The site is a dark terminal by default. Every
project has its own accent color + font "motif" that only appears when you're
looking at that project — on hover (desktop) or on tap/focus (mobile/a11y),
and persistently on that project's own case-study page. This is how the site
shows range without looking chaotic: the frame never changes, only the
content inside it does.

## Base theme (default / shell)

| Token | Value | Use |
|---|---|---|
| `--bg-base` | `#0A0A0B` (near-black) | page background |
| `--bg-panel` | `#111114` | cards, terminal windows |
| `--text-primary` | `#E4E4E7` | body text |
| `--text-dim` | `#71717A` | comments, timestamps, secondary text |
| `--accent-base` | `#4ADE80` (terminal green) | prompts, cursor, links, default hover ring |
| `--font-mono` | `"JetBrains Mono", ui-monospace` | all base UI, nav, code-style bio |

Dynamic per-project CSS variables mapped in `styles/themes.css`:
- `--bg-project`: project card/page background
- `--bg-project-image`: gradient or grid pattern background
- `--text-project`: project card/page text color
- `--accent`: primary accent color
- `--accent-secondary`: secondary accent color
- `--accent-text`: readable contrast accent color for headings/links
- `--font-display`: display font applied to headings on project focus/visit

The base font is monospace everywhere by default — that's the "CLI" read.
Per-project fonts only apply *inside* that project's card/page, never
to the nav or global chrome.

## Per-project motifs

Each project gets an accent color pair + background theme + display font that activates
on hover/focus/visit. The mono base font is kept for metadata (dates, tags, labels)
so it never feels like a totally different site — only the headline and mood shift.

### IDSC Pulse — "Academic Forest & Charcoal Neutral"
Technical publication platform for university students.
- Accent: `#059669` (emerald green) + `#047857`
- Background: `#FFFFFF` (clean white)
- Text: `#1F2937` (charcoal)
- Display font: `"Playfair Display"` (`var(--font-playfair)`) for title
- Mood: Academic, clean, trustworthy, high-contrast print publication feel

### Saray — "Sleek & Ethereal"
Desktop application for physical museum artifact accessioning.
- Accent: `#6366F1` (indigo 500) + `#818CF8`
- Background: `#0B0F19` with top radial glow spotlights (`rgba(84, 105, 212, 0.15)` & `rgba(59, 130, 246, 0.15)`)
- Text: `#F4F4F5` (zinc 100)
- Display font: `"Inter"` (`var(--font-sans)`) with uppercase tracking (`tracking-[0.18em]`)
- Mood: Atmospheric frosted glass, modern technical desktop tool

### Museo De Isarog (Landing & Repository) — "Earthy Heritage & Warm Sepia"
Cultural heritage museum landing page and digital artifact repository.
- Accent: `#6B8E23` (muted moss green) + `#C9A227` (museum gold)
- Background: `#2C1E16` (earthy brown)
- Text: `#FDFBF7` (warm cream)
- Accent Text: `#C9A227` (gold used for text elements to meet 4.5:1 contrast)
- Display font: `"Inter"` (`var(--font-sans)`)
- Mood: Archival warmth, quiet elegance, cultural heritage preservation

### Paratanom — "Tech-Meets-Nature / Retro Grid"
Augmented reality 2D farming game with real-time YOLOv8N inference.
- Accent: `#22C55E` (farming green) + `#EA580C` (warm earthy orange)
- Background: `#F8F9FA` (off-white) with 20px light graph grid overlay (`rgba(0,0,0,0.05)`)
- Text: `#1E3A8A` (deep retro blue)
- Accent Title: `#EA580C` (orange for title text)
- Display font: `"Silkscreen"` (`var(--font-pixel)`) for titles
- Mood: Nostalgic 8-bit/16-bit farming sim meets modern engineering grid

### PageantTabulator — "Gala Stage"
Offline live-scoring system used at Mr. and Ms. IDSC 2026.
- Accent: `#D4AF37` (stage gold) + `#B76E79` (rose gold)
- Background: `#1C0F1A` (deep plum) with a gold top spotlight (`rgba(212, 175, 55, 0.14)`)
- Text: `#FBF5E9` (ivory)
- Display font: `"Playfair Display"` (`var(--font-playfair)`)
- Mood: Pageant night, spotlight on stage, formal elegance

### SHELLOC — "Sonar Deep Water"
Web/mobile dashboards + backend for a water-remediation robot vessel.
- Accent: `#22D3EE` (sonar cyan) + `#0EA5E9`
- Background: `#04131C` (deep water) with sonar rings from the top-right corner (`rgba(34, 211, 238, 0.07)`)
- Text: `#E0F2FE` (ice)
- Display font: `"Inter"` (`var(--font-sans)`)
- Mood: Mission control, underwater radar HUD

### KYS – Keep Yourself Safe — "Vault"
Offline family password manager.
- Accent: `#F59E0B` (vault amber) + `#FBBF24`
- Background: `#0F1417` (gunmetal) with faint 45° security-hatch lines (`rgba(245, 158, 11, 0.05)`)
- Text: `#F5F5F4` (stone 100)
- Accent Text: `#FBBF24` (lighter amber for text)
- Display font: `"Inter"` (`var(--font-sans)`)
- Mood: Safe-deposit vault, solid and trustworthy

### Stack & Trace — "Study Notebook"
Animated DSA lessons and labs for CC 104.
- Accent: `#7C3AED` (violet) + `#F59E0B` (highlighter amber)
- Background: `#FFFBEB` (warm paper) with a 16px dot grid (`rgba(30, 27, 75, 0.12)`)
- Text: `#1E1B4B` (indigo ink)
- Accent Text: `#6D28D9` (deeper violet for text)
- Display font: `"Silkscreen"` (`var(--font-pixel)`), echoing the site's pixel art
- Mood: Playful classroom notebook

### JVCM Songbook — "Sheet Music"
Chord charts and set lists for a worship band.
- Accent: `#9F1239` (hymnal crimson) + `#B45309`
- Background: `#FAF6EE` (sheet-music paper) with faint staff lines every 24px (`rgba(28, 25, 23, 0.06)`)
- Text: `#1C1917` (stone 900)
- Display font: `"Spectral"` (`var(--font-spectral)`)
- Mood: Printed hymnal, warm and reverent

### NutriBox — "Fresh Kitchen"
Mobile companion for an AI meal-nutrition device.
- Accent: `#C2410C` (paprika) + `#65A30D` (leaf green)
- Background: `#FFF7ED` (peach cream)
- Text: `#431407` (roasted brown)
- Display font: `"Inter"` (`var(--font-sans)`)
- Mood: Bright, appetizing, healthy kitchen

> Rule: never use the loud/display font for body copy — only the project name/headline.
> Body copy inside a themed card uses `--text-project` and stays readable.

## Accessibility rule (non-negotiable)

Every accent-on-background pairing above must hit **4.5:1 contrast** for text
use. Verify each with a contrast checker before shipping; if a motif color
fails at text size, use it only for borders/icons/backgrounds and keep text
in `--text-primary`.

Hover-triggered changes must also trigger on **keyboard focus** and **touch
tap** — motifs can't be mouse-only or they're invisible on mobile, which is
how most non-technical recruiters will browse this on their phone.

## Typography scale

- Headings: `text-4xl` / `text-5xl` / `text-2xl`
- Body: `text-lg` / `text-base`, comfortable line-height for non-technical readers
- Code/labels: `text-xs` / `text-sm` mono, `--text-dim`

## Content rules (recruiter-friendly + technical balance)

Every project card/page carries **two layers of copy**, always both visible
(no hidden toggle — don't make anyone click to get the plain version):

1. **Plain-language line** (one sentence, no jargon): *"A desktop app that
   helps museum staff catalog artifacts without manual paperwork."*
2. **Technical line** (stack + approach): *"Tauri + Vue desktop app automating
   artifact cataloging and document generation."*

Same pattern for the bio: lead with what he does and where (IT Instructor at
IDSC; previously built cataloging/archival software during a museum
internship), then let the skills section carry the stack detail.

## Components

- **TerminalWindow** — reusable chrome (dot buttons, title bar) wrapping
  About/Skills/Contact sections and case studies, keeps the CLI framing consistent
- **ProjectCard** — base mono styling; on hover/focus applies
  `data-project="<slug>"` to itself, triggering transition via `.project-card-inner` CSS rules in `styles/themes.css`
- **ContactForm** — styled as a "mail client" sending via EmailJS (`@emailjs/browser`) with honeypot validation, pending `sending_packet...` state, and terminal success/error messages
- **AvailabilityBadge** — explicit status ("Open to freelance & full-time opportunities (Currently IT Instructor)") with an animated pulse indicator
- **Navbar** — sticky navigation bar with section jump links and direct link to `/resume.pdf`
- **Footer** — minimal terminal footer with copyright