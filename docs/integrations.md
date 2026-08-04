# integrations.md — Third-Party Services

## EmailJS (contact form)

**Why:** No backend/database needed, sends real email straight from the
client using `@emailjs/browser`, free tier is enough for a portfolio's traffic.

**Setup (Jeremy does this once, outside the code):**
1. Create an EmailJS account, add an email service (e.g. Gmail).
2. Create an email template with variables matching the form fields:
   `from_name`, `from_email`, `message`.
3. Grab three values: **Service ID**, **Template ID**, **Public Key**.

**Where they live:** Vercel environment variables & local `.env.local`, prefixed `NEXT_PUBLIC_`
(EmailJS's browser SDK requires the public key client-side — this is
expected and safe, it's not a secret key):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

**Client flow (`ContactForm` component):**
1. User fills the "mail client" form → submit calls
   `emailjs.send(serviceId, templateId, { from_name, from_email, message }, publicKey)`.
2. While pending: button shows a terminal-style `sending_packet...` state.
3. On success: replace the form with a `packet delivered ✓` terminal message.
4. On failure: show a clear, non-technical error ("Message didn't send —
   try again or email me directly at j3remyz1on@gmail.com") plus a `mailto:` fallback
   link and a "Reset Connection" button so a recruiter is never stuck.

**Spam protection (no backend, so keep it simple):**
- A honeypot field (`bot-field` hidden input real users never fill; if filled,
  silently drops the submission client-side).
- Basic client-side validation (HTML5 `required`, valid email format)
  before calling EmailJS, to cut down on junk sends eating the free-tier quota.

## Vercel

- Hosting + CI/CD: auto-deploy `main`, preview URLs per branch/PR.
- Environment variables set per-project in the Vercel dashboard and `.env.local`.

## Resume file

- Store the actual resume as a PDF in `/public/resume.pdf`, with a visible
  "Resume" action in the navbar that links directly to `/resume.pdf`.

## GitHub

- Repo stays linked to `github.com/CremaCrem` (already referenced from the
  site). Keep the README on that repo up to date since it's one click away
  from the portfolio.

## Things intentionally NOT added (for now)

- No CMS (Contentful/Sanity) — five projects don't need one; a TS data file
  is easier to maintain and faster to ship.
- No reCAPTCHA — honeypot + EmailJS's own abuse limits should be enough at
  this traffic level; revisit only if spam becomes a real problem.
- No database — nothing here needs persistence beyond email delivery.