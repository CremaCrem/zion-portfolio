# Jeremy Zion L. Jamer — Portfolio

This is my personal portfolio site. I built it to show what I've been working on
and give recruiters (both technical and non-technical) a quick way to get a feel
for who I am and what I can do.

## What's on it

- A short intro about me and my background
- A skills section covering what I work with day to day
- Cards for all my projects — each one has a different color theme that shows
  up when you hover over it
- A contact form that actually sends me an email
- A resume download link

## Projects featured

1. **IDSC Pulse** — a publication platform for IDSC students to share their work
2. **Saray** — a desktop app I made to help the museum staff catalog artifacts faster
3. **MDI Artifact Repository** — a web dashboard for the museum's digital collection
4. **Museo de Isarog** — the museum's public-facing landing page
5. **Paratanom** — my capstone project, an AR farming game with real-time object detection

## Running it locally

You'll need Node.js installed. Clone the repo and:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

If you want the contact form to actually work, you'll need to create a `.env.local`
file with your own EmailJS credentials (it's in `.gitignore` so it won't be pushed):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Built with

Next.js, TypeScript, Tailwind CSS, EmailJS

Deployed on Vercel.
