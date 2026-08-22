# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** PaperReader Field Notes
**Generated:** 2026-08-22 17:42:47
**Category:** Open Source Project Landing
**Design Dials:** Variance 8/10 (Bold / Asymmetric) | Motion 7/10 (Standard) | Density 4/10 (Standard)

**Implementation status:** The generated recommendations below were reviewed against the shipped page. The final implementation uses the tactile editorial palette and Outfit/DM Mono pairing documented here; the product copy and screenshots remain PaperReader-specific.

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#121212` | `--ink` |
| On Primary | `#FFFDF8` | `--paper` |
| Secondary | `#101010` | `--night` |
| Accent/CTA | `#F5C95D` | `--acid` |
| Background | `#EFECE4` | `--canvas` |
| Foreground | `#121212` | `--ink` |
| Muted | `#5C5A55` | `--muted` |
| Border | `#121212` | `--line` |
| Supporting accent | `#6876E8` | `--cobalt` |
| Supporting surface | `#B9E5CF` | `--mint` |

**Color Notes:** Warm paper canvas, near-black reading surface, acid yellow CTA, cobalt anchor, mint supporting surface.

### Typography

- **Heading and body font:** Outfit
- **Utility font:** DM Mono
- **Mood:** tactile editorial, direct, warm paper, high contrast, evidence-led
- **Google Fonts:** [Outfit + DM Mono](https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Outfit:wght@400;500;600;700;800;900&display=swap)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Outfit:wght@400;500;600;700;800;900&display=swap');
```

### Spacing Variables

*Density: 4/10 — Standard*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-small` | `5px 5px 0 #121212` | Button and small-card lift |
| `--shadow` | `10px 10px 0 #121212` | Bento cards and featured surfaces |
| `--shadow-large` | `16px 16px 0 #121212` | Hero device frame |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #F5C95D;
  color: #121212;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #121212;
  border: 2px solid #121212;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #101010;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-large);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #6876E8;
  outline: none;
  box-shadow: 0 0 0 3px #6876E820;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-large);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Tactile editorial bento

**Keywords:** neobrutalist edges, warm paper, bold type, modular cards, asymmetric evidence, direct hierarchy

**Best For:** Open-source product showcases, reading tools, evidence-led portfolios

**Key Effects:** Shadow lift, restrained scroll reveal, scrubbed manifesto words, CSS-native accordions and scroll-snap

### Page Pattern

**Pattern Name:** AIDA evidence-led showcase

- **Conversion Strategy:** State the product thesis, explain the protected boundaries, prove the interface with real captures, then offer the repository.
- **CTA Placement:** Hero evidence CTA, repository link, footer CTA.
- **Section Order:** 1. Hero, 2. Premise, 3. System boundaries, 4. Emulator evidence, 5. Interaction principles, 6. Field notes, 7. Footer.

---

## Motion

**Evidence scale/fade and scrubbed text** (Standard) — Trigger: scroll | Duration: 450-1000ms | Easing: linear scrub for evidence, `power2.out` for the hero device.

```js
gsap.timeline({ scrollTrigger: { trigger: image, start: 'top 90%', end: 'bottom 10%', scrub: 0.8 } })
  .fromTo(image, { opacity: 0.28, scale: 0.86 }, { opacity: 1, scale: 1, ease: 'none' })
  .to(image, { opacity: 0.24, scale: 0.94, ease: 'none' });
```

**Framework notes:** GSAP is dynamically imported only when reduced motion is not requested. CSS keeps the page readable without JavaScript, and `prefers-reduced-motion` disables the enhancement.

- ✅ Keep image dimensions reserved to avoid layout shift
- ✅ Use native `<details>` and scroll-snap as interaction fallbacks
- ❌ Do not make motion required to understand the product

---

## Anti-Patterns (Do NOT Use)

- ❌ Flat design without depth
- ❌ Text-heavy pages

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
