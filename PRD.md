# PRD: aistudios.pro — AI Agent Content Hub

## Overview
A blog + products site focused on building and shipping with AI agents. Content-first, SEO-optimized, designed to drive traffic and funnel visitors to paid products and an email list.

**Domain:** aistudios.pro  
**Stack:** Next.js (latest stable, App Router) + MDX + Tailwind CSS  
**Hosting:** Vercel (free tier)  
**Database:** None (v1 is static/MDX)  
**Email:** Resend or Buttondown (free tier) for newsletter  

---

## Goals
1. Rank on Google for AI agent-related searches
2. Capture emails via free lead magnet (Vanwida OS basic template)
3. Sell premium products via Gumroad links
4. Establish authority in the "AI agent OS" space
5. Generate content as a byproduct of building

---

## Pages

### 1. Home (`/`)
- Hero section: "Build smarter AI agents" — bold headline, subtitle, CTA to newsletter
- Featured article (latest or pinned)
- 3-4 recent articles in a grid
- Products section (cards linking to Gumroad)
- Newsletter signup with lead magnet: "Get the free Vanwida OS starter template"
- Footer: @vanwidaAI link, aistudios.pro, copyright

### 2. Blog (`/blog`)
- List of all articles, newest first
- Each card: title, excerpt, date, read time, tags
- Filter by tag (optional v2)
- Pagination or infinite scroll

### 3. Article Page (`/blog/[slug]`)
- MDX rendered with custom components
- Table of contents (auto-generated from headings)
- Author: "Vanwida" with the pixel art avatar
- Share buttons (X, copy link)
- CTA at bottom: newsletter signup + related product
- Related articles
- SEO: og:image, description, structured data (Article schema)

### 4. Products (`/products`)
- Grid of product cards
- Each card: image, title, price, short description, "Get it" button → Gumroad
- First product: Vanwida OS ($9)

### 5. About (`/about`)
- Who is Vanwida? The AI entrepreneur story
- Who is AI Studios? What we build and why
- Link to @vanwidaAI on X
- CTA: newsletter signup

### 6. Free Template (`/free` or `/starter`)
- Landing page for the free lead magnet
- Email capture form
- On submit: send the basic Vanwida OS template (SOUL.md, AGENTS.md, IDENTITY.md — stripped down, no crons/guide)
- Upsell: "Want the full system with PDF guide, crons, and nightly consolidation? → Gumroad"

---

## Design

### Brand
- **Primary color:** #6c5ce7 (purple/indigo)
- **Accent:** #a29bfe (light purple)
- **Background:** #0a0a0a (near black) — dark theme
- **Text:** #f0f0f0 (light)
- **Code blocks:** #1a1a2e background, #f0f0f0 text
- **Font:** Inter (body), JetBrains Mono (code)

### Style — Push the Boundaries
- Dark, modern, developer-friendly — but not boring
- Clean typography, generous whitespace
- Pixel art Vanwida avatar used as brand element
- Purple accents on borders, links, buttons
- Mobile-first responsive
- Fast — target 95+ Lighthouse score

### UI/UX — Make It Feel Alive
Go beyond a standard blog. This should feel like a premium product site, not a template:

- **Animated gradient mesh background** on hero — subtle, shifting purple/blue/indigo blobs (CSS or canvas)
- **Glassmorphism cards** — frosted glass effect on article cards and product cards with backdrop-blur
- **Smooth page transitions** — use View Transitions API or Framer Motion for silky route changes
- **Scroll-triggered animations** — articles and sections fade/slide in as you scroll (intersection observer, subtle not flashy)
- **Interactive code blocks** — hover to highlight lines, click to copy, language label badge in top-right
- **Floating table of contents** — sticky sidebar on desktop that highlights current section as you read, collapses to a dropdown on mobile
- **Particle/constellation effect** — subtle floating dots/lines in the hero background, connecting like a neural network (canvas or CSS)
- **Cursor glow effect** — subtle radial gradient that follows the mouse on the hero section
- **Micro-interactions everywhere** — buttons scale on hover, cards lift with shadow, links underline with animation
- **Article reading progress bar** — thin purple bar at the top of the page showing scroll progress
- **Dark/light mode toggle** — with a smooth transition animation (default dark)
- **Bento grid layout** — for the products/features section on the home page, asymmetric cards like Apple's marketing pages
- **Animated newsletter CTA** — the email input glows/pulses subtly to draw attention
- **"Built by AI" badge** — a small animated badge on articles showing "Written by Vanwida 🤖" with a typing animation
- **Terminal-style hero** — optionally show a live-typing terminal animation in the hero: `> vanwida build aistudios.pro --ship`
- **Smooth anchor scrolling** — clicking TOC items scrolls smoothly with offset for fixed header
- **Image zoom** — click article images to expand in a lightbox
- **Easter egg** — Konami code or click the Vanwida avatar 5 times for a fun animation

### Components (Tailwind + custom)
- `<Hero />` — homepage hero with CTA
- `<ArticleCard />` — blog list item
- `<ProductCard />` — product grid item
- `<NewsletterForm />` — email capture with lead magnet copy
- `<TableOfContents />` — auto-generated from MDX headings
- `<CodeBlock />` — syntax highlighted, dark theme
- `<Callout />` — tip/warning/info boxes in articles
- `<AuthorBio />` — Vanwida avatar + byline

---

## MDX Blog Setup

Articles live in `/content/blog/` as `.mdx` files:

```
/content/blog/
├── ai-agent-operating-system.mdx
├── permanent-memory-for-ai-agents.mdx
├── shipped-product-with-ai-entrepreneur.mdx
├── mistakes-that-make-ai-agents-useless.mdx
└── make-money-with-ai-agent.mdx
```

Frontmatter:
```yaml
---
title: "How to Give Any AI Agent Permanent Memory"
slug: "permanent-memory-for-ai-agents"
date: "2026-02-24"
excerpt: "Most AI agents forget everything between sessions. Here's the 3-layer memory system that fixes it."
tags: ["memory", "ai-agents", "tutorial"]
ogImage: "/images/blog/permanent-memory-og.png"
---
```

---

## Email / Newsletter

### Provider
Resend (free up to 3,000 emails/month) or Buttondown (free up to 100 subscribers).

### Flow
1. User enters email on `/free` or any newsletter form
2. API route `/api/subscribe` adds to email list
3. Auto-send welcome email with free template download link
4. Future: weekly digest of new articles

### Lead Magnet
Free Vanwida OS starter kit:
- SOUL.md (template)
- AGENTS.md (template)  
- IDENTITY.md (template)
- Quick-start README

NOT included (premium only):
- TACIT.md, MEMORY.md, HEARTBEAT.md, CRITICAL-RULES.md
- Cron configs
- PDF guide
- USER.md

---

## SEO

- Sitemap auto-generated
- robots.txt allowing all crawlers
- Each article has unique og:image, title, description
- Structured data (JSON-LD) for Article and Product schemas
- Clean URLs: `/blog/slug-here`
- Fast load times (SSG for all pages)
- Internal linking between related articles

### Target Keywords
- "AI agent memory system"
- "how to make AI agents smarter"
- "AI agent operating system"
- "build AI agent"
- "AI entrepreneur"
- "AI agent template"
- "OpenClaw setup"
- "Claude agent memory"

---

## Deployment

1. Repo: `github.com/vanwidaAI/aistudios-pro` (or under Alex's GitHub)
2. Deploy to Vercel, connect aistudios.pro domain
3. Auto-deploy on push to main
4. Preview deploys for PRs

---

## Scope — Ship Everything

Build it all in one session. No v2. No "nice to have." We have coding agents.

- [ ] Home page with hero, recent articles, newsletter signup
- [ ] Blog listing page with tag filtering
- [ ] Article page with MDX rendering + table of contents
- [ ] Products page with Vanwida OS card → Gumroad
- [ ] Newsletter signup (API route + email provider)
- [ ] Free template landing page (`/free`)
- [ ] Dark theme, responsive, fast
- [ ] Full SEO (meta tags, og:image, sitemap, JSON-LD, robots.txt)
- [ ] Search (client-side full-text across articles)
- [ ] View counter per article (Vercel Analytics or simple KV)
- [ ] Comments (Giscus — GitHub Discussions)
- [ ] RSS feed (`/feed.xml`)
- [ ] Auto-generated og:images (using @vercel/og)
- [ ] 1 article published (hero article)
- [ ] Deployed to Vercel on aistudios.pro

---

## File Structure

```
aistudios-pro/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              ← home
│   ├── blog/
│   │   ├── page.tsx          ← blog list
│   │   └── [slug]/
│   │       └── page.tsx      ← article
│   ├── products/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── free/
│   │   └── page.tsx          ← lead magnet
│   └── api/
│       └── subscribe/
│           └── route.ts      ← newsletter API
├── content/
│   └── blog/                 ← MDX articles
├── components/
│   ├── Hero.tsx
│   ├── ArticleCard.tsx
│   ├── ProductCard.tsx
│   ├── NewsletterForm.tsx
│   ├── TableOfContents.tsx
│   ├── CodeBlock.tsx
│   ├── Callout.tsx
│   └── AuthorBio.tsx
├── lib/
│   ├── mdx.ts               ← MDX utils
│   └── newsletter.ts         ← email provider client
├── public/
│   ├── images/
│   │   ├── vanwida-avatar.png
│   │   └── blog/
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## Acceptance Criteria

1. Home page loads in <2s, Lighthouse 90+
2. Articles render from MDX with syntax highlighting
3. Newsletter form captures email and sends welcome email with free template
4. Products page shows Vanwida OS with working Gumroad link
5. Mobile responsive — looks good on phone
6. SEO: proper meta tags, og:image, sitemap.xml
7. Deployed to Vercel on aistudios.pro
