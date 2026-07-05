# Raj Gaurav Tiwari — Portfolio

> **Building Intelligent Systems at Scale.**
> A premium, futuristic personal-brand website for an AI / Software / Machine Learning Engineer.

Not a résumé site — a product-launch-grade personal brand, engineered to make recruiters from
Microsoft, Google, OpenAI, Anthropic, Meta, NVIDIA, Databricks and top startups stop and think
_"this person is exceptional."_

Built with **Next.js 15**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**,
**Three.js / React Three Fiber**, **GSAP** and **Lenis**. Dark-mode-first, 60 fps, fully
responsive, SEO-optimized and ready to deploy to **Vercel**.

---

## ✨ Highlights

- **Cinematic hero** — full-screen Three.js particle field, glassmorphism, parallax, animated gradient headline and living stat counters.
- **Microsoft showcase (the centerpiece, ~40% of the page)** — product-launch storytelling for the 13.4 M-tenant fraud-detection system: problem → dual-detector architecture → animated pipeline → SHAP feature-contribution chart → metric counters.
- **Interactive career timeline** — a scroll-driven rail that fills as you read.
- **Featured projects** — 3D-tilt + spotlight cards (Fraud Detection, CVAlign, Fault-Tolerant Quadrotor, Pneumonia Detector).
- **Engineering dashboard** — proficiency shown as segmented signal meters (no boring progress bars).
- **Competitive programming** — Codeforces rating graph + algorithm radar (Recharts).
- **Achievements wall** — spotlight bento cards.
- **Leadership** — impact measured in metrics, not paragraphs.
- **GitHub Intelligence** — live GitHub API fetch (repos / stars / followers) + contribution heatmap, with graceful fallback.
- **Research knowledge graph** — an animated, interactive node/edge map.
- **Contact** — magnetic CTAs, copy-to-clipboard email, premium social cards.

Plus: Lenis smooth scroll, dynamic Open Graph image, `sitemap.xml`, `robots.txt`, JSON-LD
structured data, and `prefers-reduced-motion` support.

---

## 🧰 Tech stack

| Area              | Tools                                                                 |
| ----------------- | --------------------------------------------------------------------- |
| Framework         | Next.js 15 (App Router), React 18, TypeScript                         |
| Styling           | Tailwind CSS v3, `tailwindcss-animate`, shadcn-style UI primitives    |
| Animation         | Framer Motion, GSAP, custom 60 fps interactions                       |
| 3D                | Three.js, `@react-three/fiber`, `@react-three/drei`                   |
| Smooth scroll     | Lenis                                                                  |
| Charts            | Recharts                                                              |
| Icons             | Lucide                                                                 |
| Fonts             | Self-hosted variable fonts (Inter, Space Grotesk, JetBrains Mono)     |

---

## 🚀 Getting started

### Prerequisites

- **Node.js 18.18+** (Node 20 or 22 LTS recommended — this project was built and verified on Node 24)
- **npm** (ships with Node)

Check your versions:

```bash
node --version
npm --version
```

### 1. Install dependencies

From the project folder (`raj-portfolio`):

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser. The page hot-reloads as you edit.

### 3. Build for production

```bash
npm run build
npm start
```

`npm start` serves the optimized production build at **http://localhost:3000**.

> **Windows note:** the site builds and runs on Windows. The dynamic Open Graph image
> (`/opengraph-image`) is rendered on demand rather than at build time, because `@vercel/og`
> has a path-with-spaces quirk during static export on Windows. It generates perfectly on
> Vercel's Linux build. Everything else is fully static.

> **Running from a OneDrive / cloud-synced folder (like `Desktop`):**
> - The **first** `npm run dev` compile can take ~60–90 s because OneDrive slows disk I/O
>   (subsequent reloads are fast). For the snappiest dev experience, copy the project to a
>   non-synced path such as `C:\dev\raj-portfolio`.
> - If you switch between `npm run build` and `npm run dev` and see an
>   `EINVAL: invalid argument, readlink … .next\static\…` error, just delete the `.next`
>   folder and re-run:
>   ```powershell
>   Remove-Item -Recurse -Force .next
>   npm run dev
>   ```

---

## 🔧 Configuration

All content lives in **one file** — edit [`lib/data.ts`](./lib/data.ts) to change any text,
metric, project, skill, achievement or link. No component surgery required.

### Environment variables (optional)

Copy `.env.local.example` → `.env.local`:

```bash
# Windows (PowerShell)
Copy-Item .env.local.example .env.local
# macOS / Linux
cp .env.local.example .env.local
```

| Variable                      | Purpose                                                        | Default  |
| ----------------------------- | -------------------------------------------------------------- | -------- |
| `NEXT_PUBLIC_GITHUB_USERNAME` | Username for live GitHub stats + contribution heatmap          | `RajGauravTiwari` |

If the GitHub user isn't found (or you're rate-limited), the dashboard automatically falls back
to curated numbers and a representative heatmap — it never looks broken.

### Common customizations

| Want to change…            | Edit                                                    |
| -------------------------- | ------------------------------------------------------- |
| Any text / numbers / links | `lib/data.ts`                                           |
| Colors / theme tokens      | `app/globals.css` (`:root`) and `tailwind.config.ts`    |
| Résumé PDF                 | Replace `public/Raj_Gaurav_Tiwari_CV.pdf`               |
| Section order              | `app/page.tsx`                                          |
| SEO / metadata / OG image  | `app/layout.tsx`, `app/opengraph-image.tsx`             |

---

## 📁 Project structure

```
raj-portfolio/
├── app/
│   ├── layout.tsx            # Root layout: fonts, SEO metadata, JSON-LD, providers
│   ├── page.tsx              # Assembles all sections in order
│   ├── globals.css           # Theme tokens + premium utilities
│   ├── opengraph-image.tsx   # Dynamic OG social-share image
│   ├── icon.svg              # Favicon (gradient "RT" mark)
│   ├── sitemap.ts            # /sitemap.xml
│   └── robots.ts             # /robots.txt
├── components/
│   ├── sections/             # Hero, Timeline, MicrosoftShowcase, Projects, …
│   ├── layout/               # Navbar, Footer
│   ├── providers/            # Lenis smooth-scroll provider
│   ├── three/                # R3F particle field (client-only, dynamic)
│   ├── fx/                   # Reveal, TiltCard, SpotlightCard, Magnetic, AnimatedCounter…
│   └── ui/                   # shadcn-style Button, Card, Badge, Tooltip
├── lib/
│   ├── data.ts               # ← single source of truth for ALL content
│   └── utils.ts              # cn() + formatting helpers
├── public/                   # Résumé PDF + static assets
├── tailwind.config.ts
├── next.config.mjs
├── vercel.json
└── package.json
```

---

## ▲ Deploying to Vercel

Vercel is the recommended host (Next.js is made by Vercel — zero config needed).

### Option A — Git + Vercel dashboard (recommended)

1. Push this folder to a **GitHub / GitLab / Bitbucket** repo:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio website"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to **https://vercel.com/new**, import the repository.
3. Vercel auto-detects Next.js. Framework preset **Next.js**, build command `next build`,
   output handled automatically. Click **Deploy**.
4. (Optional) In **Project → Settings → Environment Variables**, add
   `NEXT_PUBLIC_GITHUB_USERNAME`.
5. Your site is live at `https://<project>.vercel.app`. Add a custom domain under
   **Settings → Domains**.

### Option B — Vercel CLI

```bash
npm i -g vercel      # install once
vercel               # preview deploy (follow the prompts)
vercel --prod        # production deploy
```

### After deploying

Update the canonical URL so SEO, `sitemap.xml` and the OG image use your real domain — edit
`site.url` in [`lib/data.ts`](./lib/data.ts).

---

## 📈 Performance, SEO & accessibility

- **Static-first**: the home page is prerendered as static HTML for fast LCP; heavy 3D is
  code-split and loaded client-side only (skipped on mobile / reduced-motion).
- **SEO**: per-page metadata, Open Graph + Twitter cards, dynamic OG image, `sitemap.xml`,
  `robots.txt`, and Person JSON-LD structured data.
- **Accessibility**: semantic landmarks, keyboard-focusable interactive nodes, `aria-label`s,
  and full `prefers-reduced-motion` handling.
- **Target**: Lighthouse 95+ on a production Vercel deployment.

---

## 📜 Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server (hot reload)    |
| `npm run build` | Production build                     |
| `npm start`     | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

---

Designed & built with Next.js, Three.js and Framer Motion.
# Portfolio
