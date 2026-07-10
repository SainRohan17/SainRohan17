# Rohan Sain — Personal Portfolio

> **Clean frontend. Shipped with precision.**

The personal portfolio of [Rohan Sain](https://github.com/SainRohan17) — a frontend and software developer. A single-page site that introduces who he is, what he values, and how to get in touch, wrapped in a minimalist black-and-white aesthetic with subtle motion design.

 **Contact:** [sainrohan17@gmail.com](mailto:sainrohan17@gmail.com)
 **GitHub:** [github.com/SainRohan17](https://github.com/SainRohan17)

---

## Table of Contents

1. [Overview](#overview)
2. [Purpose & Goals](#purpose--goals)
3. [Key Features](#key-features)
4. [Page Structure & Section Map](#page-structure--section-map)
5. [Tech Stack](#tech-stack)
6. [Project Structure](#project-structure)
7. [Design System](#design-system)
8. [Component Reference](#component-reference)
9. [Motion & Interaction Design](#motion--interaction-design)
10. [Available Scripts](#available-scripts)
11. [Accessibility](#accessibility)
12. [SEO & Metadata](#seo--metadata)
13. [License](#license)

---

## Overview

This repository contains the source for **Rohan Sain's personal portfolio site**. It is a single-page Next.js 15 application built with the App Router and React 19.

The page is composed of a hero, a draggable carousel of project mockups, a deep-dive section of selected work, a "Reliable Partner" three-column values block, a typographic pull-quote, a CTA card, a 6-question FAQ, and a minimal footer.

The visual language is intentionally restrained: a pure white background, a near-black ink (`#09090b`), a single warm gray tint (`--color-gray-25`), and a fixed-width mono font for editorial accents. The only flourishes are subtle — a hand-drawn dot grid that follows the cursor, an interactive logo that morphs on hover, and a draggable showcase of project mockups.

> **This is a personal site, not a template.** It is documented for clarity and maintenance, but it is not designed or licensed for reuse as a starter.

---

## Purpose & Goals

| Goal | Implementation |
|------|----------------|
| **Establish credibility** | Selected public work with full tech-stack tags and live links. |
| **Show engineering taste** | Bespoke SVG logo, hand-coded canvas animation, framer-motion reveals, no UI kit. |
| **Make contact effortless** | Email and GitHub links in the footer; FAQ reduces back-and-forth. |
| **Stay fast & portable** | Static-friendly, Tailwind v4 with `@theme` tokens, no database or auth. |
| **Stay maintainable** | Strict TypeScript, modular components, single source of truth in [`page.tsx`](rohan-portfolio/src/app/page.tsx:12). |

---

## Key Features

- **Interactive logo mark** — A 40-segment SVG construction that morphs through four distinct geometry modes on every mouse-enter, smoothly tracks the cursor with a spring rotation, and snaps back to a clean angle on mouse-leave. See [`LogoMark`](rohan-portfolio/src/components/LogoMark.tsx:6).
- **Cursor-reactive dot grid** — A canvas-rendered constellation of dots that brightens and inflates near the mouse cursor, with traveling pulses along pre-computed edges and floating mono-spaced "code snippets" drifting in the background. Respects `prefers-reduced-motion`. See [`DotNoiseBg`](rohan-portfolio/src/components/DotNoiseBg.tsx:81).
- **Draggable project carousel** — A horizontally scrolling gallery of project screenshot mockups with click-and-drag inertia, snap-aligned cards, and a hidden scrollbar. See [`ProjectCarousel`](rohan-portfolio/src/components/ProjectCarousel.tsx:6).
- **Realistic browser & device mockups** — A desktop "browser window" with traffic-light dots and an address bar, plus an iPhone-style frame. See [`ScreenshotMockup`](rohan-portfolio/src/components/ScreenshotMockup.tsx:36).
- **Motion-revealed content** — Every major block fades and slides in using `framer-motion`'s `whileInView` API.
- **Animated FAQ accordion** — Six questions covering tech stack, availability, contact, repo access, code philosophy, and the scope of work — each with a `+ → ×` icon morph driven by framer-motion springs. See [`FAQAccordion`](rohan-portfolio/src/components/FAQAccordion.tsx:11).
- **Sidebar ASCII art accent** — A block of pseudo-binary art printed in a hidden-`sm` `<pre>` next to a typographic pull-quote, reinforcing the "code-adjacent" feel. See [`AsciiBlockSide`](rohan-portfolio/src/components/DotNoiseBg.tsx:312).
- **Fully responsive** — Mobile-first layout that gracefully reflows at `md:` (768px) breakpoints throughout.
- **Lightweight & zero backend** — No database, no API, no auth. Pure static + a tiny client bundle.

---

## Page Structure & Section Map

All visible content lives in a single page at [`src/app/page.tsx`](rohan-portfolio/src/app/page.tsx:12). The sections, in document order, are:

| # | Section | Source Anchor | What it does |
|---|---------|---------------|--------------|
| 1 | **Hero** | [`<section>` lines 48–125](rohan-portfolio/src/app/page.tsx:48) | Centred wordmark, two-line headline (`Clean frontend.` / `Shipped with precision.`), a single "View Projects" anchor, and the live [`DotNoiseBg`](rohan-portfolio/src/components/DotNoiseBg.tsx:81) backdrop. |
| 2 | **Project Carousel** | [`<section>` lines 127–136](rohan-portfolio/src/app/page.tsx:127) | A draggable strip of browser & phone mockups powered by [`ProjectCarousel`](rohan-portfolio/src/components/ProjectCarousel.tsx:6). |
| 3 | **Selected Work** | [`<section>` lines 138–216](rohan-portfolio/src/app/page.tsx:138) | Three full-width project cards, each with name, description, tech-stack pills, **Live ↗** and **Code ↗** links, and a desktop mockup. |
| 4 | **Reliable Partner** | [`<section>` lines 218–290](rohan-portfolio/src/app/page.tsx:218) | Three columns — **Speed of adaptation**, **Code that scales**, **Clear communication** — each with a coloured icon disc. |
| 5 | **Pull-Quote** | [`<section>` lines 292–306](rohan-portfolio/src/app/page.tsx:292) | A typographic quote on a soft gray background, paired with [`AsciiBlockSide`](rohan-portfolio/src/components/DotNoiseBg.tsx:312) (hidden on mobile). |
| 6 | **CTA Card** | [`<section>` lines 308–345](rohan-portfolio/src/app/page.tsx:308) | A dark, rounded card inviting the visitor to email, with a copy-able address. |
| 7 | **FAQ** | [`<section>` lines 347–358](rohan-portfolio/src/app/page.tsx:347) | The 6-item [`FAQAccordion`](rohan-portfolio/src/components/FAQAccordion.tsx:11). |
| 8 | **Footer** | [`<footer>` lines 360–397](rohan-portfolio/src/app/page.tsx:360) | A small flex row with the year, the email link, and a GitHub SVG icon. |

The `<main>` itself uses `isolate min-h-screen bg-white` so the dot-grid stays strictly behind content.

---

## Tech Stack

### Core

| Library | Version | Role |
|---------|---------|------|
| [Next.js](https://nextjs.org) | `15.5.20` | App Router, Turbopack dev, static rendering. |
| [React](https://react.dev) | `19.1.0` | Server components by default, `"use client"` only where interactive. |
| [TypeScript](https://www.typescriptlang.org) | `5.x` | Strict, type-safe code. |
| [Tailwind CSS](https://tailwindcss.com) | `4.x` | Utility-first styling via the new `@theme` token system. |

### Motion & Interaction

| Library | Version | Role |
|---------|---------|------|
| [framer-motion](https://www.framer.com/motion/) | `12.42.2` | Hero text reveals, FAQ height/rotation animations, carousel card fades, spring-driven logo rotation. |
| [lucide-react](https://lucide.dev) | `1.23.0` | Icon set (e.g. the GitHub mark in the footer). |

### Utility

| Library | Version | Role |
|---------|---------|------|
| [clsx](https://github.com/lukeed/clsx) | `2.1.1` | Conditional className composition. |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | `3.6.0` | Safe className merging. |
| [next/font/google](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) | bundled | Self-hosted **Inter** (sans) and **Roboto Mono** (mono). |

### Tooling

- **ESLint** with `next/core-web-vitals` (see [`eslint.config.mjs`](rohan-portfolio/eslint.config.mjs)).
- **Turbopack** for the dev server (`next dev --turbopack`).
- **PostCSS** with `@tailwindcss/postcss` (see [`postcss.config.mjs`](rohan-portfolio/postcss.config.mjs)).

---

## Project Structure

```
rohan-portfolio/
├── public/
│   └── screenshots/                # PNG screenshots used by ScreenshotMockup
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind v4 @theme tokens + utility classes
│   │   ├── icon.svg                # Custom favicon
│   │   ├── layout.tsx              # Root layout with Inter + Roboto Mono fonts
│   │   └── page.tsx                # The single, complete portfolio page
│   └── components/
│       ├── DotNoiseBg.tsx          # Canvas dot-grid + drifting code snippets (default)
│       │                           # + AsciiBlockSide named export
│       ├── FAQAccordion.tsx        # Animated 6-question accordion
│       ├── LogoMark.tsx            # Interactive 40-segment SVG logo
│       ├── ProjectCarousel.tsx     # Draggable screenshot gallery
│       └── ScreenshotMockup.tsx    # Desktop browser & iPhone-style frames
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Design System

All design tokens live in **one place**: [`src/app/globals.css`](rohan-portfolio/src/app/globals.css:3).

### Tailwind v4 `@theme` tokens

```css
@theme {
  --color-gray-25: #fcfcfd;                              /* warm off-white */
  --font-sans: var(--font-inter), sans-serif;
  --font-mono: var(--font-roboto-mono), monospace;
  --shadow-bedo: 0 10px 30px -3px rgba(0,0,0,.02),
                 0 4px 12px -2px rgba(0,0,0,.015),
                 0 1px 3px rgba(0,0,0,.01);              /* used by mockup cards */
}
```

### Global colour variables

```css
:root {
  --background: #ffffff;
  --foreground: #09090b;        /* near-black ink */
}
```

### Reusable utility classes (in `globals.css`)

| Class | Purpose | Defined at |
|-------|---------|------------|
| `.site-title` | `2.25rem` → `3.25rem` extrabold, `-0.035em` tracking. | [`globals.css:23`](rohan-portfolio/src/app/globals.css:23) |
| `.section-title` | `2rem` → `2.75rem` bold, `-0.03em` tracking. | [`globals.css:37`](rohan-portfolio/src/app/globals.css:37) |
| `.btn` | Pill button base — `0.875rem`, `2.75rem` tall, `rounded-full`. | [`globals.css:51`](rohan-portfolio/src/app/globals.css:51) |
| `.btn-dark` | Near-black solid button. | [`globals.css:64`](rohan-portfolio/src/app/globals.css:64) |
| `.btn-light` | White outlined button. | [`globals.css:76`](rohan-portfolio/src/app/globals.css:76) |
| `.hide-scrollbar` | Hides the scrollbar in Webkit & Firefox. | [`globals.css:88`](rohan-portfolio/src/app/globals.css:88) |
| `.animate-snip-float-blur` | Floating + fading keyframe used by code-snippet background. | [`globals.css:126`](rohan-portfolio/src/app/globals.css:126) |

### Palette in practice

| Token | Hex | Where it appears |
|-------|-----|------------------|
| White | `#ffffff` | Page background (`body`, `<main>`). |
| Ink | `#09090b` | Headings, dark button, `LogoMark` strokes, GitHub icon. |
| Gray 25 | `#fcfcfd` | Section separators, soft tinted blocks, FAQ dividers. |
| Neutral 50 / 100 / 150 / 200 / 300 / 500 / 600 / 900 / 950 | Tailwind defaults | Mockup frames, address-bar pill, body text, FAQ hover, mobile phone shell. |
| Emerald / Rose / Amber | `*-50` backgrounds, `*-500` icons | The three "Reliable Partner" column accents. |

### Typography

| Family | Variable | Loaded at |
|--------|----------|-----------|
| **Inter** (sans) | `--font-inter` | [`layout.tsx:11`](rohan-portfolio/src/app/layout.tsx:11) |
| **Roboto Mono** (mono) | `--font-roboto-mono` | [`layout.tsx:18`](rohan-portfolio/src/app/layout.tsx:18) |

Roboto Mono is used for editorial accents: the carousel helper text (`← Drag or scroll to view projects →`), the browser address bar pill, the ASCII block, and the floating code snippets.

---

## Component Reference

### 1. [`DotNoiseBg`](rohan-portfolio/src/components/DotNoiseBg.tsx:81) — *default export*

A full-bleed, fixed-position canvas background used in the hero.

- **Density prop** (`density = 0.15`) — controls the spacing of the static dot grid (the inverse of density).
- **Behaviour**:
  1. Generates 20 (mobile) or 34 (desktop) [`NodePoint`s](rohan-portfolio/src/components/DotNoiseBg.tsx:9) using Poisson-style rejection sampling (min distance 50–70px).
  2. Connects nearby node pairs into [`Edge`s](rohan-portfolio/src/components/DotNoiseBg.tsx:16) (distance < 170).
  3. On every `requestAnimationFrame`, drifts each node by its tiny velocity, bouncing off the canvas walls.
  4. Listens for `mousemove` and inflates / brightens dots within 75px of the cursor.
  5. Spawns a travelling `Pulse` along a random edge every ~900ms.
  6. Respects `prefers-reduced-motion: reduce` (stops the animation loop and drops snippet opacity to 0.04).
- **Visual layers (stacked)**:
  1. `<canvas>` — the dot grid, edges, nodes, and pulses.
  2. A `<div>` of absolutely-positioned `motion-safe:animate-snip-float-blur` snippets — small lines of code that float and blur in and out.
  3. A radial mask fading the centre → edges.
  4. A bottom-up white-to-transparent gradient that blends the grid into the next section.

### 2. [`AsciiBlockSide`](rohan-portfolio/src/components/DotNoiseBg.tsx:312) — *named export*

A small decorative `<pre>` block of pseudo-binary art, hidden below the `sm:` breakpoint, used next to the pull-quote.

### 3. [`LogoMark`](rohan-portfolio/src/components/LogoMark.tsx:6) — *default export*

A 16×16 → 80×80 SVG logo constructed from `N = 40` rotated path segments.

- **Modes** — The `mode` is `shapeIndex % 4`, each with its own `(R_in, R_mid, R_out, theta_mid_offset, theta_out_offset)` triplet, so every hover enters a new geometry. See [`LogoMark.tsx:14`](rohan-portfolio/src/components/LogoMark.tsx:14).
- **Cursor tracking** — On `mousemove`, the angle from the centre to the cursor is computed and added to the current rotation, with a wrap-around delta to keep motion smooth across the 0/360° boundary.
- **Spring** — `useSpring(rotateZ, { damping: 15, stiffness: 120, mass: 0.6 })` makes the rotation feel weighty but responsive.
- **Click** — Each click also bumps `shapeIndex` (in addition to mouse-enter), giving the visitor a tactile way to cycle shapes.

### 4. [`ScreenshotMockup`](rohan-portfolio/src/components/ScreenshotMockup.tsx:36) — *default export*

Renders a chosen project in either **desktop** or **mobile** mode.

- **Desktop frame** — A 100% × 100% white panel with a 32-px top "browser chrome" (3 traffic-light dots, monospaced address bar) and a `next/image` `fill` of the chosen screenshot.
- **Mobile frame** — A 240×440 near-black rounded shell, a notched top bar, and the corresponding mobile screenshot scaled to fit.

All images are loaded from [`/public/screenshots/`](rohan-portfolio/public/screenshots) with `next/image` for automatic optimisation and `draggable={false}` to keep the carousel experience clean.

### 5. [`ProjectCarousel`](rohan-portfolio/src/components/ProjectCarousel.tsx:6) — *default export*

A horizontally scrolling gallery of `ScreenshotMockup` cards with:

- A `ref`d scroll container and manual `mousedown` / `mousemove` / `mouseup` / `mouseleave` handlers implementing click-and-drag scrolling with a `1.5×` sensitivity multiplier.
- A `cursor-grab` → `cursor-grabbing` state swap, plus a subtle `active:scale-[0.99]` press-down effect.
- Hidden scrollbar via `.hide-scrollbar` and a `scroll-smooth` `overscroll-x-contain` interaction.
- A `px-4 md:px-[calc(50%-384px)]` left/right inset so the first and last cards are visually centred on desktop.
- A small mono helper line — `← Drag or scroll to view projects →` — at the bottom.

### 6. [`FAQAccordion`](rohan-portfolio/src/components/FAQAccordion.tsx:11) — *default export*

Six questions with rich-JSX answers:

1. **What technologies do you work with?** — full tech list with `<ul>`.
2. **Are you available for freelance or internship work?**
3. **How can I get in touch with you?** — embedded `mailto:` and GitHub link.
4. **Are your project repositories public?**
5. **What is your approach to code organization?**
6. **Do you only do frontend work?**

The accordion is single-open (`openIndex === idx ? null : idx`), with:

- `aria-expanded={isOpen}` on each trigger button for assistive tech.
- A `+ / ×` icon that rotates `90deg` and collapses to a horizontal bar via `framer-motion` `animate`.
- An `AnimatePresence` block that animates `height: "auto"` and `opacity` with two-stage timings (opacity delayed 0.1s on enter, dropped first on exit).

---

## Motion & Interaction Design

Motion is **deliberate, not decorative**. Every animation has a purpose:

| Animation | Library | Purpose |
|-----------|---------|---------|
| Hero text reveal | `framer-motion` | Staggered fade+slide-in draws the eye to the headline. |
| Hero background loop | `framer-motion` `animate` on dot grid, pulses, snippets | The hero feels alive without being noisy. |
| Project card reveal | `framer-motion` `whileInView` | Cards animate in as the visitor scrolls. |
| FAQ expand/collapse | `framer-motion` `AnimatePresence` | Smooth, accessible height transitions. |
| Logo morph | `framer-motion` `animate` on `<path d>` with spring | The logo feels hand-drawn. |
| Logo cursor tracking | `useSpring` | Adds weight; prevents jitter. |
| Carousel drag | Native mouse events | A 1.5× multiplier gives a tactile feel. |
| Snippet float | CSS keyframe `snip-float-blur` | Subtle background ambience. |
| Button press | CSS `transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1)` | Crisp, app-like feedback. |

Reduced-motion is respected in two places:

- [`DotNoiseBg`](rohan-portfolio/src/components/DotNoiseBg.tsx:87) — stops the animation loop and drops snippet opacity to 0.04.
- `motion-safe:animate-snip-float-blur` on each snippet (Tailwind v4 prefix) — animation is opt-in only when motion is safe.

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `next dev --turbopack` | Start the development server with Turbopack. |
| `build` | `next build` | Create a production build. |
| `start` | `next start` | Serve the production build. |
| `lint` | `next lint` | Lint with the `next/core-web-vitals` config. |

All scripts are defined in [`package.json`](rohan-portfolio/package.json:5).

---

## Accessibility

The portfolio is built with a small but deliberate accessibility pass:

- **Semantic HTML** — `<main>`, `<section>`, `<footer>`, `<h1>`/`<h2>`/`<h3>`, `<nav>` semantics are used throughout.
- **FAQ semantics** — Each question is a `<button>` inside an `<h3>`, with `aria-expanded` reflecting state. See [`FAQAccordion.tsx`](rohan-portfolio/src/components/FAQAccordion.tsx:99).
- **Focus styles** — The FAQ trigger uses `focus:outline-none` paired with the surrounding button shape, preserving keyboard reach.
- **Reduced motion** — The dot-grid background checks `prefers-reduced-motion: reduce` and disables the animation loop ([`DotNoiseBg.tsx:87`](rohan-portfolio/src/components/DotNoiseBg.tsx:87)). Snippet animations are gated behind `motion-safe:`.
- **Decorative content hidden** — The `<DotNoiseBg>` wrapper sets `aria-hidden="true"`; the address-bar pill in the mockup is `select-none`; ASCII art is purely visual.
- **External link safety** — GitHub links in the FAQ use `target="_blank" rel="noopener noreferrer"`.
- **Color contrast** — Ink `#09090b` on white exceeds 19:1; the gray tints used for body copy keep at least 7:1.
- **Touch targets** — Buttons and project cards are at least 44px tall; carousel cards are large drag surfaces.
- **`scroll-smooth` on `<html>`** — Provides native smooth scrolling for in-page anchor jumps ([`layout.tsx:31`](rohan-portfolio/src/app/layout.tsx:31)).

---

## SEO & Metadata

Defined in [`src/app/layout.tsx`](rohan-portfolio/src/app/layout.tsx:25):

```ts
export const metadata: Metadata = {
  title: "Rohan Sain",
  description:
    "Personal portfolio of Rohan Sain, a frontend and software developer. Shipped with precision.",
};
```

- A **favicon** is provided as a custom SVG at [`src/app/icon.svg`](rohan-portfolio/src/app/icon.svg) — Next.js will automatically generate the appropriate `<link rel="icon">` tag.
- Page content uses a single `<h1>` (the hero) and a logical heading hierarchy throughout.
- Body copy is real text (not images), so search engines and screen readers can fully index it.

To extend with structured data (e.g. `Person` JSON-LD) or OpenGraph image, add them to the same `metadata` export or to a per-page export.

---

## License

This is a **personal site**. All rights reserved by [Rohan Sain](https://github.com/SainRohan17).

> *Built with Next.js 15, React 19, Tailwind CSS 4, and framer-motion. Designed and engineered by [Rohan Sain](https://github.com/SainRohan17).*
