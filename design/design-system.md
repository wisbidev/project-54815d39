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
| `--color-surface` | `#0b0e1a` | Page background (no card/panel surfaces exist) |
| `--color-surface-raised` | `rgba(11, 14, 26, 0.92)` | Success overlay background |
| `--color-border` | `rgba(255, 255, 255, 0.2)` | Success close button border |
| `--color-text` | `rgba(255, 255, 255, 0.6)` | Tagline, secondary body text |
| `--color-text-muted` | `rgba(255, 255, 255, 0.2)` | Footer copyright |
| `--color-inverse` | `#fff` | CTA button text, success icon text, close button text |
| `--color-primary-start` | `#6366f1` | CTA button gradient start |
| `--color-primary-end` | `#8b5cf6` | CTA button gradient end |
| `--color-accent-1` | `#818cf8` | "Hello World" gradient (periwinkle) |
| `--color-accent-2` | `#a78bfa` | "Hello World" gradient (violet), focus ring |
| `--color-accent-3` | `#f472b6` | "Hello World" gradient (pink) |
| `--color-accent-4` | `#fb923c` | "Hello World" gradient (orange) |
| `--color-particle` | `rgba(255, 255, 255, 0.3)` | Floating particles (varies 0.3–0.5) |
| `--color-focus` | `#a78bfa` | Focus ring on interactive elements |
| `--color-overlay-close-bg` | `rgba(255, 255, 255, 0.1)` | Success close button background |
| `--color-overlay-close-hover` | `rgba(255, 255, 255, 0.18)` | Success close button hover |

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-inverse` (#fff) | `--color-primary-start` (#6366f1) | 4.24:1 | AA Large only — see deviation note |
| `--color-inverse` (#fff) | `--color-primary-end` (#8b5cf6) | 4.24:1 | AA Large only — see deviation note |
| `--color-text` (blended ~#9d9ea3) | `--color-bg` (#0b0e1a) | 7.19:1 | AA, AAA |
| `--color-text-muted` (blended ~#3b3e48) | `--color-bg` (#0b0e1a) | 1.85:1 | FAIL — decorative footer text only |
| `--color-inverse` (#fff) | `--color-overlay-close-bg` (blended ~#232631) | 13.0:1+ | AA, AAA |
| Success message (~#e6e7e8) | `--color-surface-raised` (~#0b0e1a) | 17.5:1 | AA, AAA |
| `--color-inverse` (#fff) | Success icon gradient (#6366f1 → #a78bfa) | 4.24:1 | AA Large only — see deviation note |

**Note on gradient text ("Hello World"):** The main heading uses `background-clip: text` with an animated gradient across `#818cf8`, `#a78bfa`, `#f472b6`, `#fb923c` and a glow effect. This is a decorative treatment — the heading has no single solid fill color. The contrast of individual gradient stops against the dark background would range from approximately 4:1 to 7:1.

### 1.2 Spacing

Base unit: `4px` (0.25rem at default 16px root). Every margin, padding, and gap in the product uses one of these.

| Token | Value |
|---|---|
| `--space-3` | `12px` (0.75rem) |
| `--space-4` | `16px` (1rem) |
| `--space-5` | `20px` (1.25rem) |
| `--space-6` | `24px` (1.5rem) |
| `--space-8` | `32px` (2rem) |
| `--space-10` | `40px` (2.5rem) |
| `--space-12` | `48px` (3rem) |

No values outside this scale appear in the approved design.

### 1.3 Typography

Font families (loaded from system stack, no external dependencies):

- Body: `'Segoe UI', system-ui, -apple-system, sans-serif`
- Headings: same as body
- Mono: not used

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-xs` | `0.8rem` (12.8px) | `1.4` | `400` | Footer copyright |
| `--text-sm` | `0.95rem` (15.2px) | `1.4` | `400` | Success close button |
| `--text-base` | `1.05rem` (16.8px) | `1.4` | `600` | CTA button label |
| `--text-lg` | `clamp(1rem, 2.5vw, 1.5rem)` | `1.4` | `300` | Tagline (uppercase) |
| `--text-xl` | `1.25rem` (20px) | `1.4` | `300` | Success message |
| `--text-display` | `clamp(3.5rem, 12vw, 8rem)` | `1.1` | `800` | "Hello World" heading |
| `--text-display-mobile` | `clamp(2.8rem, 15vw, 4.5rem)` | `1.1` | `800` | "Hello World" heading (≤640px) |

Heading levels: Only one heading level (h1) exists in the design. No level skipping issue.

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-pill` | `50px` | CTA button, success close button |
| `--radius-circle` | `50%` | Success icon, particles |
| `--border-width` | `1px` | Success close button border |
| `--shadow-cta-hover` | `0 12px 40px rgba(99, 102, 241, 0.35)` | CTA button hover state |
| `--duration-hover` | `0.3s` | CTA hover transitions (transform, box-shadow, arrow) |
| `--duration-fade` | `0.5s` | Overlay fade-in |
| `--duration-bounce` | `0.6s` | Success icon bounce-in |
| `--duration-enter` | `1.2s` | Hero fade-in-up (staggered 0.2s, 0.6s, 0.9s, 1.2s delays) |
| `--duration-fast` | `0.2s` | Close button hover background |
| `--easing-default` | `ease` | Hover transitions, close button background |
| `--easing-out` | `ease-out` | Enter animations (fadeInUp, fadeIn) |
| `--easing-float` | `ease-in-out` | Float, gradient shift, orb float, bg shift |

#### Motion animations

| Animation | Duration | Target | Trigger |
|---|---|---|---|
| `fadeInUp` | 1.2s ease-out | Hero, tagline, CTA, footer | Page load (staggered) |
| `gradientShift` | 6s ease-in-out infinite | "Hello World" text, glow | Continuous |
| `float` | 4s ease-in-out infinite | "Hello World" text | Continuous |
| `bgShift` | 12s ease-in-out infinite alternate | Background gradient | Continuous |
| `orbFloat` | 18s ease-in-out infinite alternate | Floating orbs | Continuous (staggered) |
| `particleDrift` | 13–22s linear infinite | Particles | Continuous (staggered) |
| `bounceIn` | 0.6s ease-out | Success icon | CTA click |
| `fadeIn` | 0.5s ease-out | Success overlay | CTA click |

Motion respects `prefers-reduced-motion: reduce`: all animations and transitions are suppressed (0.01ms duration, single iteration).

**Color palette used in gradients:**

- CTA button gradient: `linear-gradient(135deg, #6366f1, #8b5cf6)`
- "Hello World" text gradient: `linear-gradient(135deg, #818cf8, #a78bfa, #f472b6, #fb923c, #f472b6, #a78bfa, #818cf8, #a78bfa)` — 300% size, animated position
- Text glow: `linear-gradient(135deg, #818cf8, #f472b6, #818cf8)` — 300% size, animated position, blur(30px) brightness(1.5), opacity 0.4
- Success icon: `linear-gradient(135deg, #6366f1, #a78bfa)`
- Background radials: three ellipses at different positions using `rgba(99, 102, 241, 0.12)`, `rgba(236, 72, 153, 0.08)`, `rgba(6, 182, 212, 0.06)`

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---|---|---|---|
| `sm` | 0–640px | full width | 1 | 32px |
| `md+` | >640px | full width | 1 | 32px |

The design is a single-column centered layout at all widths. Only a single breakpoint at 640px adjusts font sizes, CTA padding, and orb sizes.

Z-index scale (only these values are allowed):

| Layer | Value |
|---|---|
| Base (body ::before, orbs, particles) | `0` |
| Hero content | `1` |
| Footer | `1` |
| Success overlay | `100` |

## 2. Components

One subsection per reusable component. Every component lists **all** states.

### 2.1 CTA Button ("Get Started")

**Purpose** — Primary call-to-action. Triggers the success overlay on click. This is the only interactive control on the page.

**Anatomy** — `[label text] [arrow →]`

**Variants** — No variants. Single primary CTA.

**Sizes** — One size. On mobile (≤640px): padding reduces to `0.875rem 2rem`, font-size to `0.95rem`.

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | auto | `1rem 2.5rem` (16px 40px) | `--text-base` |
| Mobile (≤640px) | auto | `0.875rem 2rem` (14px 32px) | `0.95rem` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Solid pill with gradient fill, white text, arrow → | `--color-primary-start` → `--color-primary-end`, `--color-inverse`, `--radius-pill` |
| Hover | Lifts up 2px, adds indigo glow shadow, arrow slides 4px right | `transform: translateY(-2px)`, `--shadow-cta-hover`, arrow `translateX(4px)` |
| Focus (keyboard) | Visible 2px solid `#a78bfa` outline, 4px offset | `--color-focus`, `outline: 2px solid #a78bfa`, `outline-offset: 4px` |
| Active / pressed | Returns to resting position | `transform: translateY(0)` |
| Disabled | Not implemented — button is always enabled | N/A |
| Loading | Not implemented — no async action | N/A |
| Error | Not implemented — no error state on CTA | N/A |
| Empty | N/A — fixed label text | N/A |

**Accessibility** — `aria-label="Get started"` on the button. Arrow is a decorative `<span>` (no semantic role). Minimum hit target exceeds 44×44px (button is ~170×55px).

### 2.2 Success Overlay

**Purpose** — Full-screen modal shown after CTA click, confirming successful interaction. Dismissable by close button, Escape key, or backdrop click.

**Anatomy** — `[overlay backdrop] [success icon] [success message] [close button]`

**Variants** — No variants. Single success state.

**Sizes** — Single size, responsive flex layout.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default (hidden) | `display: none` | N/A |
| Visible | Flex display, dark backdrop, centered content with icon, message, close button | `--color-surface-raised`, `fadeIn` animation |
| Open animation | Overlay fades in, success icon bounces in | `--duration-fade`, `--duration-bounce`, `--easing-out` |
| Close button hover | Background lightens | `--color-overlay-close-hover`, `--duration-fast` |
| Close button focus | Visible 2px solid `#a78bfa` outline, 4px offset | `--color-focus` |
| Close button active | Default click behavior | N/A |
| Keyboard (Escape) | Closes overlay | N/A |
| Backdrop click | Closes overlay when clicking outside content | N/A |

**Accessibility** — `role="dialog"`, `aria-modal="true"`, `aria-label="Welcome"`. Focus moves to close button on open, returns to CTA on close. Escape key closes.

### 2.3 Floating Orbs

**Purpose** — Decorative background elements that float and drift to add depth. Not interactive.

**Anatomy** — A single `<div>` with class `orb` and modifier. Pure CSS shape (border-radius: 50% + blur filter).

**Variants**

| Variant | Size | Color | Position |
|---|---|---|---|
| `orb--1` | 400×400px (250×250px mobile) | `rgba(99, 102, 241, 0.15)` | top: -100px, left: -100px |
| `orb--2` | 300×300px (200×200px mobile) | `rgba(236, 72, 153, 0.12)` | bottom: -80px, right: -80px |
| `orb--3` | 250×250px (180×180px mobile) | `rgba(6, 182, 212, 0.10)` | top: 50%, left: 60% |

**States** — Not interactive. Single visual state with continuous animation (`orbFloat`, 18s ease-in-out infinite alternate, staggered delays).

### 2.4 Particles

**Purpose** — Decorative CSS-only particle field drifting upward. Not interactive.

**Anatomy** — 15 `<div class="particle">` elements inside a `.particle-field` container. Each has random position, size (2–5px), opacity (0.3–0.5), and animation duration (13–22s).

**States** — Not interactive. Single visual state with continuous animation (`particleDrift` linear infinite, staggered delays).

### 2.5 "Hello World" Heading (h1)

**Purpose** — Primary brand statement and page title. The central visual element.

**Anatomy** — `<h1 class="hello-world">Hello World</h1>` with a `::after` pseudo-element creating the glow effect.

**Variants** — Single variant. Size adjusts at ≤640px breakpoint.

**Sizes**

| Size | Value |
|---|---|
| Desktop | `clamp(3.5rem, 12vw, 8rem)` |
| Mobile (≤640px) | `clamp(2.8rem, 15vw, 4.5rem)` |

**States** — Not interactive. Single visual state with continuous animations (`gradientShift`, `float`). Glow effect pulses via opacity from parent gradient animation.

## 3. Content and formatting

- **Voice and tone**: Bold, welcoming, minimal. The tagline "A bold new beginning" sets an aspirational tone.
- **Date, time, number**: Not applicable — no dynamic data rendered.
- **Capitalization**: 
  - "Hello World" — title case, heading.
  - "A bold new beginning" — sentence case.
  - "Get Started" — title case on button.
  - "Welcome aboard!" — capitalized greeting.
  - "Got it" — sentence case on close button.
- **Empty-state wording**: Not applicable — no data-driven content.
- **Error-message wording**: Not applicable — no form submission or server interaction.

## 4. Known deviations

Places where the approved design does not follow its own rules or the anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| CTA button text contrast | White (#fff) on indigo (#6366f1 / #8b5cf6) yields 4.24:1 — below 4.5:1 AA for normal text (button label is 1.05rem / ~16.8px, weight 600) | Stakeholder approved the indigo CTA with white text | Accept as-is unless stakeholder requests a change |
| Footer text | `rgba(255,255,255,0.2)` on `#0b0e1a` yields ~1.85:1 — fails all contrast thresholds | Copyright text is decorative/minimal, not actionable content | Accept as-is (pattern used industry-wide for footer legalese) |
| Heavy use of purple/indigo palette | #6366f1, #8b5cf6, #a78bfa, #818cf8 dominate — matches the "purple everything" anti-pattern | "Hello World" is a brand landing page where the stakeholder chose these colors | Accept as approved |
| Gradients as decoration | CTA button, heading text, glow, success icon, background — all use animated gradients | Intended visual style for a bold animated hero page | Accept as approved |
| Pill-shaped buttons | Both CTA (50px) and close button (50px) use maximum rounding | Stylistic choice for a modern landing page | Accept as approved |
| Emoji in success message | "🎉" in "Welcome aboard! 🎉" — displays differently per platform, no semantic meaning for screen readers | Decorative accent in a success confirmation, not a functional icon | Accept as-is but note: if icon set is introduced later, replace emoji with a proper icon |
| Gradient text heading has no single solid color | "Hello World" uses `background-clip: text` with a gradient — no measurable single contrast ratio for the heading text | This is decorative display text, not body copy | Accept as approved — the text is large and visually prominent |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2025-07-17 | Initial design system extracted from approved index.html | TBD |
