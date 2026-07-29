# Design System — Hello World Landing Page

> Source of truth: the approved `index.html` (preview: http://localhost:8080/design/54815d39-7c28-4107-872d-da29c10c516b).
> Every value below is extracted from it. Changing a value here without
> changing the approved design is a defect.

Last updated: 2025-07-17

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#0b0e1a` | Page background |
| `--color-overlay` | `rgba(11, 14, 26, 0.92)` | Success overlay backdrop |
| `--color-primary` | `#6366f1` | Primary action background, orbs, radial gradient |
| `--color-primary-gradient-start` | `#6366f1` | CTA button / success icon gradient start |
| `--color-primary-gradient-end` | `#8b5cf6` | CTA button / success icon gradient end |
| `--color-primary-text` | `#ffffff` | Text on primary actions |
| `--color-primary-hover-shadow` | `rgba(99, 102, 241, 0.35)` | CTA hover box-shadow |
| `--color-accent-periwinkle` | `#818cf8` | Gradient text stop, glow |
| `--color-accent-violet` | `#a78bfa` | Gradient text stop, focus ring |
| `--color-accent-pink` | `#f472b6` | Gradient text stop, orb |
| `--color-accent-orange` | `#fb923c` | Gradient text stop |
| `--color-accent-cyan` | `#06b2d4` | Orb tint |
| `--color-accent-rose` | `#ec4898` | Orb tint |
| `--color-text` | `#ffffff` | Body / heading text |
| `--color-text-muted` | `rgba(255, 255, 255, 0.6)` | Tagline / secondary text |
| `--color-text-subtle` | `rgba(255, 255, 255, 0.2)` | Footer copyright |
| `--color-text-on-overlay` | `rgba(255, 255, 255, 0.9)` | Success overlay message |
| `--color-surface-glass` | `rgba(255, 255, 255, 0.1)` | Glass button (success-close) background |
| `--color-surface-glass-hover` | `rgba(255, 255, 255, 0.18)` | Glass button hover background |
| `--color-border-glass` | `rgba(255, 255, 255, 0.2)` | Glass button border |
| `--color-particle` | `rgba(255, 255, 255, 0.3)` | Drifting particles |
| `--color-orb-indigo` | `rgba(99, 102, 241, 0.15)` | Floating orb 1 |
| `--color-orb-rose` | `rgba(236, 72, 153, 0.12)` | Floating orb 2 |
| `--color-orb-cyan` | `rgba(6, 182, 212, 0.10)` | Floating orb 3 |
| `--color-bg-glow-indigo` | `rgba(99, 102, 241, 0.12)` | Radial gradient glow |
| `--color-bg-glow-rose` | `rgba(236, 72, 153, 0.08)` | Radial gradient glow |
| `--color-bg-glow-cyan` | `rgba(6, 182, 212, 0.06)` | Radial gradient glow |
| `--color-focus` | `#a78bfa` | Focus ring on interactive elements |

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` (#ffffff) | `--color-bg` (#0b0e1a) | ~15.0:1 | AA, AAA |
| `--color-text-muted` (rgba(255,255,255,0.6)) | `--color-bg` (#0b0e1a) | ~5.7:1 | AA |
| `--color-text-subtle` (rgba(255,255,255,0.2)) | `--color-bg` (#0b0e1a) | ~1.3:1 | FAIL — see Known Deviations |
| `--color-primary-text` (#ffffff) | `--color-primary` (#6366f1) | ~4.5:1 | AA (borderline), AA Large |
| `--color-text-on-overlay` (rgba(255,255,255,0.9)) | `--color-overlay` (rgba(11,14,26,0.92)) | ~12.0:1 | AA, AAA |
| `--color-text` (#ffffff) | `--color-surface-glass` (rgba(255,255,255,0.1)) | ~11.0:1 | AA, AAA |
| `--color-text` (#ffffff) | `--color-surface-glass-hover` (rgba(255,255,255,0.18)) | ~9.0:1 | AA, AAA |

### 1.2 Spacing

Base unit: `4px`. Every margin, padding, and gap in the product uses one of these.

| Token | Value | Used in |
|---|---|---|
| `--space-1` | `4px` | — |
| `--space-2` | `8px` | — |
| `--space-3` | `12px` | CTA gap (0.75rem) |
| `--space-4` | `16px` | Tagline margin-top (1rem), CTA vertical padding (1rem), success-close margin-top (1rem) |
| `--space-5` | `20px` | — |
| `--space-6` | `24px` | Tagline margin-top (1.5rem), overlay gap (1.5rem), footer padding (1.5rem) |
| `--space-8` | `32px` | Hero padding (2rem) |
| `--space-10` | `40px` | CTA horizontal padding (2.5rem) |
| `--space-12` | `48px` | CTA margin-top (3rem) |

### 1.3 Typography

Font families (system font stack, no external font loads):

- Body / Headings: `'Segoe UI', system-ui, -apple-system, sans-serif`
- Mono: not used

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-xs` | 0.8rem (12.8px) | 1.4 | 400 | Footer copyright |
| `--text-sm` | 0.95rem (15.2px) | 1.4 | 400 | Success-close button |
| `--text-base` | 1rem (16px) | 1.5 | 300 | Tagline |
| `--text-lg` | 1.05rem (16.8px) | 1.5 | 600 | CTA button label |
| `--text-xl` | 1.25rem (20px) | 1.4 | 300 | Success overlay message |
| `--text-hero` | clamp(3.5rem, 12vw, 8rem) | 1.1 | 800 | Landing heading (desktop) |
| `--text-hero-mobile` | clamp(2.8rem, 15vw, 4.5rem) | 1.1 | 800 | Landing heading (≤640px) |
| `--text-tagline` | clamp(1rem, 2.5vw, 1.5rem) | 1.5 | 300 | Tagline line |

Heading levels are used in order (h1 only on this page) and never skipped for visual sizing.

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-full` | `50px` | CTA button, success-close button (pill shape) |
| `--radius-round` | `50%` | Success icon (circular) |
| `--border-width` | `1px` | Success-close button border |
| `--shadow-cta-hover` | `0 12px 40px rgba(99, 102, 241, 0.35)` | CTA hover shadow |
| `--duration-fast` | `0.2s` | Success-close hover transition |
| `--duration-base` | `0.3s` | CTA transform / shadow transition |
| `--duration-slow` | `0.5s` | Overlay fade-in |
| `--duration-bounce` | `0.6s` | Success icon bounce-in |
| `--duration-enter` | `1.2s` | Hero / tagline / CTA / footer entrance |
| `--easing-default` | `ease` | All transitions |
| `--easing-out` | `ease-out` | Entrance and overlay animations |
| `--easing-in-out` | `ease-in-out` | Continuous decorative animations |

Motion respects `prefers-reduced-motion: reduce`: all animations and transitions collapse to 0.01ms, state changes remain, movement is removed.

### 1.5 Layout and breakpoints

| Name | Min width | Notes |
|---|---|---|
| `sm` | `640px` | Heading font-size shrinks, CTA padding reduces, orb sizes shrink |
| (no other breakpoints) | | Layout is fully centered, single-column |

Z-index scale (only these values are allowed):

| Layer | Value | Used for |
|---|---|---|
| Base | `0` | Background glow (`body::before`), orbs, particle field |
| Content | `1` | Hero, footer |
| Overlay | `100` | Success overlay backdrop and content |

## 2. Components

### 2.1 CTA Button

**Purpose** — Primary call-to-action on the hero. Opens the success overlay on click. Use only once as the hero's primary action.

**Anatomy** — `[label text] [trailing arrow]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default (only) | `--color-primary`, `--color-primary-text` | Hero CTA |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | auto | `--space-4` vertical / `--space-10` horizontal | `--text-lg` |
| Small (≤640px) | auto | `0.875rem` vertical / `2rem` horizontal | `0.95rem` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Solid gradient button, pill shape, inline arrow | `--color-primary-gradient-start` → `--color-primary-gradient-end` |
| Hover | Lifted 2px upward, glowing shadow, arrow shifts right 4px | `transform: translateY(-2px)`, `--shadow-cta-hover`, arrow `translateX(4px)` |
| Focus (keyboard) | Visible 2px solid focus ring in violet, 4px offset | `--color-focus`, `outline-offset: 4px` |
| Active / pressed | Reset to default Y position | `transform: translateY(0)` |
| Disabled | Not used in this design | — |
| Loading | Not used in this design | — |
| Error | Not used in this design | — |
| Empty | Not applicable | — |

**Accessibility** — `aria-label="Get started"` on the button; arrow is a decorative `<span>` with no additional role; keyboard focus ring is always visible.

### 2.2 Success Overlay

**Purpose** — Shown after the CTA is clicked, confirming the action. Blocks interaction until dismissed.

**Anatomy** — `[backdrop] [icon] [message] [close button]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Visible | `--color-overlay` backdrop | After CTA click |
| Hidden (default) | `display: none` | Page load, after dismissal |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Hidden | Not rendered (`display: none`) | — |
| Visible | Fades in, centered flex content, backdrop blocks interaction | `--duration-slow`, `--easing-out` |
| Escape key | Hides overlay, returns focus to CTA | Keyboard event |
| Backdrop click | Hides overlay, returns focus to CTA | Click event |

**Accessibility** — `role="dialog"`, `aria-modal="true"`, `aria-label="Welcome"`. Focus moves to close button on open, returns to CTA on close. Escape key and backdrop click dismiss.

### 2.3 Success Close Button

**Purpose** — Dismisses the success overlay.

**Anatomy** — `[label "Got it"]`

**Variants** — None (single variant).

**Sizes** — `0.75rem` vertical / `2rem` horizontal padding, `--text-sm` font.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Glass background, white border, white text | `--color-surface-glass`, `--color-border-glass` |
| Hover | Brighter glass background | `--color-surface-glass-hover` |
| Focus (keyboard) | Visible 2px solid focus ring in violet, 4px offset | `--color-focus` |
| Active / pressed | No visual change specified | — |

**Accessibility** — Keyboard focus ring visible; closes overlay on click.

## 3. Content and formatting

- **Voice and tone**: Bold, aspirational, and minimal. "A bold new beginning" sets the tone.
- **Date, time, number, and currency formats**: Not applicable (no data display).
- **Capitalization**: Hero heading is title case ("Hello World"). Tagline is sentence case ("A bold new beginning"). CTA button is sentence case ("Get Started"). Close button is sentence case ("Got it").
- **Empty-state and error-message wording pattern**: Not applicable (no data fetching).

## 4. Known deviations

Places where the approved design does not follow its own rules or the
anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| Footer text (`--color-text-subtle`) | `rgba(255, 255, 255, 0.2)` at 12.8px fails WCAG AA (ratio ~1.3:1, needs 4.5:1) | Decorative legal text, intentionally subdued | Accept as-is for low-importance content, or increase to `rgba(255, 255, 255, 0.5)` for ~4.5:1 |
| Purple/indigo dominant palette | Heavy use of `#6366f1`, `#8b5cf6`, `#a78bfa`, `#818cf8` — the model-default palette | Product has no brand brief; design compensates with broader spectrum (pink, orange, cyan) | Accept unless brand colors are provided |
| Gradients as decoration | Gradient text, gradient CTA, gradient success icon — no flat fills on brand surfaces | This is the approved design's aesthetic for a hero landing page | Accept |
| Maximum rounding | CTA and close button are pill-shaped (`border-radius: 50px`), success icon is circular (`50%`) | Appropriate for a single CTA hero; no structural cards or panels exist | Accept |
| Emoji in content | 🎉 appears in the success message "Welcome aboard! 🎉" | Serves as inline decoration, not iconography; renders per platform | Accept, or replace with a Unicode symbol for consistency |
| Spacing 2.5rem (40px) | `--space-10` is 10 × 4px base — not a round multiple of the 4px base for the 8px step scale | Value used only for CTA horizontal padding | Accept; include `--space-10` in the token scale |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2025-07-17 | Initial design system extracted from approved index.html | _(this PR)_ |
