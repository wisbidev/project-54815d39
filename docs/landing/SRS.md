# SRS — Landing Page

Module: `landing`
Last updated: 2025-07-17
Design: [View the approved design](http://localhost:8080/design/54815d39-7c28-4107-872d-da29c10c516b)
Design system: `design/design-system.md`

> One file per module, at `docs/{module}/SRS.md`. It covers only the functions
> that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

The landing module delivers the single-page hero experience for the "Hello World" website. It is the only public face of the product — a visitor lands here, sees the brand statement with animation, and can interact with a single call-to-action that confirms they have arrived. If this module did not exist, the product would have no visible presence.

## 2. Actors

There is no authentication or role system — this is a fully public static page.

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Visitor | Anyone who opens the page URL | View the hero content, see animations, click the CTA, dismiss the success overlay |

No other actors exist. There is no admin, no member, and no logged-in state.

## 3. Scope

**In scope** — the functions specified below, by their plan titles:

- Animated Hello World landing page

**Out of scope** — name what a reader would reasonably expect here and say
where it lives instead. This section prevents the same argument twice.

- Analytics or visitor tracking — deliberately not built; this is a pure static page with no data collection.
- Form submission or email capture — deliberately not built; the CTA shows an overlay, it does not send data.
- Navigation or multi-page routing — deliberately not built; this is a single-page hero with no secondary pages.
- Backend API or database — the project shape is `static`; no server, no database, no persistence.

## 4. Functional requirements

### 4.1 Animated Hello World Landing Page

**Requirement LANDING-001 — Hero heading display with animated gradient**

*As a* Visitor, *I want to* see the text "Hello World" rendered as the page title with an animated gradient fill, *so that* the brand statement is visually striking and memorable.

Behaviour:

1. The page loads and displays an `<h1>` containing exactly the text "Hello World".
2. The text fill is a multi-color animated gradient (periwinkle, violet, pink, orange) that shifts continuously.
3. The text has a soft glow effect behind it that shifts in sync with the gradient.
4. The text floats gently up and down in a continuous motion.
5. On mobile viewports (≤640px), the text size reduces to `clamp(2.8rem, 15vw, 4.5rem)`.
6. On desktop viewports (>640px), the text size is `clamp(3.5rem, 12vw, 8rem)`.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded in a browser | The visitor views the page | The text "Hello World" is visible as an `<h1>` element |
| AC-2 | The page is loaded | The visitor observes the heading | The text fill shows a moving animated gradient spanning periwinkle, violet, pink and orange |
| AC-3 | The page is loaded | The visitor observes the heading | A soft glow effect is visible behind the text, also animated |
| AC-4 | The page is loaded | The visitor observes the heading for ≥4 seconds | The heading exhibits a gentle continuous float (up-and-down motion) |
| AC-5 | The page is loaded on a viewport ≤640px wide | The heading is rendered | The computed font-size is within `clamp(2.8rem, 15vw, 4.5rem)` and fits the viewport without overflow |
| AC-6 | The page is loaded on a viewport >640px wide | The heading is rendered | The computed font-size is within `clamp(3.5rem, 12vw, 8rem)` |

---

**Requirement LANDING-002 — Tagline display**

*As a* Visitor, *I want to* see a tagline below the heading, *so that* I understand the brand's tone.

Behaviour:

1. A tagline reading "A bold new beginning" is displayed below the heading.
2. The tagline is uppercase, light weight, and colored `rgba(255, 255, 255, 0.6)`.
3. The tagline fades in with a staggered entrance animation after the heading.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded | The visitor views the page | The text "A bold new beginning" is visible below the heading |
| AC-2 | The page is loaded | The tagline is rendered | The computed style shows `text-transform: uppercase`, `font-weight: 300`, and the color is `rgba(255, 255, 255, 0.6)` |
| AC-3 | The page is freshly loaded | The visitor observes the entrance | The tagline appears after the heading via a staggered fade-in-up animation |

---

**Requirement LANDING-003 — Call-to-action button**

*As a* Visitor, *I want to* see and click a "Get Started" button, *so that* I can interact with the page and receive a confirmation.

Behaviour:

1. A button labeled "Get Started" with an arrow (→) is displayed below the tagline.
2. The button has a pill shape (`border-radius: 50px`) with an indigo gradient fill (`#6366f1` → `#8b5cf6`).
3. The button text is white (`#fff`), weight 600, and the arrow is inline.
4. On hover, the button lifts 2px upward and gains a box-shadow (`0 12px 40px rgba(99, 102, 241, 0.35)`); the arrow slides 4px to the right.
5. On keyboard focus (`:focus-visible`), a 2px solid `#a78bfa` outline appears with 4px offset.
6. On active/pressed, the button returns to resting position.
7. The button has `aria-label="Get started"`.
8. On mobile (≤640px), padding reduces to `0.875rem 2rem` and font-size to `0.95rem`.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded | The visitor views the CTA | A button with text "Get Started" and a → arrow is visible below the tagline |
| AC-2 | The page is loaded | The visitor inspects the button | The button has `border-radius: 50px`, a gradient background, and white text |
| AC-3 | The button is rendered | The visitor hovers over it | The button moves up 2px, a shadow appears, and the arrow shifts 4px right |
| AC-4 | The button is rendered | The visitor focuses it with a keyboard | A 2px solid `#a78bfa` outline with 4px offset is visible |
| AC-5 | The button is rendered | The visitor inspects the accessibility label | The button has `aria-label="Get started"` |
| AC-6 | The page is loaded on a viewport ≤640px | The button is rendered | The button padding and font-size are smaller than the desktop values |

---

**Requirement LANDING-004 — CTA click shows success overlay**

*As a* Visitor, *I want to* see a success confirmation after clicking the CTA button, *so that* I know the interaction was received.

Behaviour:

1. When the visitor clicks (or activates via Enter/Space) the "Get Started" button, a full-screen overlay appears.
2. The overlay has a dark backdrop (`rgba(11, 14, 26, 0.92)`).
3. The overlay content center-aligns vertically and horizontally, containing:
   - A success icon (✦) in an 80×80px circular gradient badge (`#6366f1` → `#a78bfa`)
   - A message reading "Welcome aboard! 🎉"
   - A "Got it" close button with pill shape, semi-transparent background, and border
4. The overlay enters with a fade-in animation; the icon bounces in.
5. The overlay is a modal dialog: `role="dialog"`, `aria-modal="true"`, `aria-label="Welcome"`.
6. Focus moves to the close button when the overlay opens.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded with the overlay hidden | The visitor clicks "Get Started" | The overlay becomes visible with full-screen dark backdrop |
| AC-2 | The overlay is visible | The visitor views the content | An ✦ icon inside a circular gradient badge, the text "Welcome aboard! 🎉", and a "Got it" button are centered on screen |
| AC-3 | The overlay opens | The visitor observes the entrance | The overlay fades in and the success icon bounces in (scale animation from 0 to 1) |
| AC-4 | The overlay opens | The visitor inspects the element | The overlay container has `role="dialog"`, `aria-modal="true"`, and `aria-label="Welcome"` |
| AC-5 | The overlay opens | Focus is checked | The close button ("Got it") has keyboard focus |

---

**Requirement LANDING-005 — Success overlay dismissal**

*As a* Visitor, *I want to* dismiss the success overlay, *so that* I return to the page content.

Behaviour:

1. The overlay can be dismissed by any of three methods:
   - Clicking the "Got it" close button
   - Pressing the Escape key
   - Clicking the backdrop area outside the content
2. When dismissed, the overlay hides and focus returns to the CTA button.
3. The close button has a hover state (background lightens) and a visible `:focus-visible` outline.
4. The CTA button can be clicked again to re-open the overlay — no limit on repeats.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The overlay is visible | The visitor clicks "Got it" | The overlay hides and the CTA button receives focus |
| AC-2 | The overlay is visible | The visitor presses the Escape key | The overlay hides and the CTA button receives focus |
| AC-3 | The overlay is visible | The visitor clicks the dark backdrop (outside the content) | The overlay hides and the CTA button receives focus |
| AC-4 | The overlay is dismissed | The visitor clicks "Get Started" again | The overlay re-opens fully |
| AC-5 | The close button is rendered | The visitor hovers over it | The background color changes to a visibly lighter shade |
| AC-6 | The close button is rendered | The visitor focuses it with a keyboard | A 2px solid `#a78bfa` outline with 4px offset is visible |

---

**Requirement LANDING-006 — Decorative background elements**

*As a* Visitor, *I want to* see animated decorative background elements (floating orbs, drifting particles, shifting background radials), *so that* the page feels polished and dynamic.

Behaviour:

1. Three floating orbs of varying sizes (400px, 300px, 250px) are positioned at different locations, with a blur filter and low-opacity color fills. They drift continuously via a CSS animation.
2. Fifteen small particles (2–5px) drift upward at random speeds (13–22s) and staggered delays, with varying opacity (0.3–0.5).
3. The body background has animated radial gradients that slowly shift scale and rotation over 12s.
4. All decorative elements are non-interactive (`pointer-events: none`).
5. On mobile (≤640px), orb sizes decrease proportionally.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded | The visitor views the background | Three blurred coloured orbs are visible at different positions, continuously drifting |
| AC-2 | The page is loaded | The visitor views the page | At least 10 small round particles are visible drifting upward at different speeds |
| AC-3 | The page is loaded | The visitor observes the background over 12s | The radial gradients on the body background shift slowly |
| AC-4 | The page is rendered | The visitor attempts to click an orb or particle | No click interaction occurs — decorative elements do not intercept events |
| AC-5 | The page is loaded on a viewport ≤640px | The orbs are rendered | Orb sizes are visibly smaller than their desktop counterparts |

---

**Requirement LANDING-007 — Motion accessibility (prefers-reduced-motion)**

*As a* Visitor with a motion sensitivity preference, *I want to* see the page without animations when my system has `prefers-reduced-motion: reduce` enabled, *so that* the experience does not cause discomfort.

Behaviour:

1. When the system accessibility setting `prefers-reduced-motion: reduce` is active, all CSS animations and transitions are suppressed.
2. The page content (heading, tagline, CTA, overlay) remains fully visible and functional — only the motion is removed.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The system has `prefers-reduced-motion: reduce` enabled | The page is loaded | No CSS animation or transition runs (all durations set to effectively 0.01ms, single iteration) |
| AC-2 | The system has `prefers-reduced-motion: reduce` enabled | The visitor views the page | The heading, tagline, CTA, and footer are all fully visible and readable |
| AC-3 | The system has `prefers-reduced-motion: reduce` enabled | The visitor clicks "Get Started" | The overlay appears (instant, no fade), and all content is functional |

---

**Requirement LANDING-008 — Footer display**

*As a* Visitor, *I want to* see a footer with copyright information, *so that* the page feels complete.

Behaviour:

1. A footer is fixed at the bottom of the viewport.
2. The footer displays the text "© 2024 Hello World. All rights reserved."
3. The text color is `rgba(255, 255, 255, 0.2)`, font-size `0.8rem`.
4. The footer fades in as part of the staggered entrance sequence.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded | The visitor scrolls to or views the bottom of the viewport | The footer is visible with text "© 2024 Hello World. All rights reserved." |
| AC-2 | The page is loaded | The footer is rendered | The text color is `rgba(255, 255, 255, 0.2)` and font-size is approximately `0.8rem` |
| AC-3 | The page is freshly loaded | The footer entrance is observed | The footer appears after the heading, tagline, and CTA via staggered animation |

---

**Requirement LANDING-009 — Page responsiveness**

*As a* Visitor, *I want to* view the page on any screen size without layout breakage, *so that* the experience is consistent across devices.

Behaviour:

1. The page is a single-column centered layout at all widths.
2. At viewport widths of 0–640px, font sizes and CTA padding shrink to mobile values.
3. At viewport widths >640px, desktop sizes apply.
4. No horizontal scrollbar appears at any viewport width ≥320px.
5. All content fits within the viewport without clipping.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded at 320px viewport width | The visitor views the page | All content is visible, centered, and no horizontal scrollbar exists |
| AC-2 | The page is loaded at 768px viewport width | The visitor views the page | All content is visible, centered, and no horizontal scrollbar exists |
| AC-3 | The page is loaded at 1920px viewport width | The visitor views the page | All content is visible, centered, and no horizontal scrollbar exists |
| AC-4 | The page is resized from 320px to 1920px | The visitor continuously observes the layout | Content stays centered in a single column, font sizes adjust fluidly |

**Failure, boundary and permission behaviour**

Since this is a fully public static page with no user input (beyond a button click that toggles a CSS class), the traditional failure modes are limited. Every applicable case is listed below.

| Case | Condition | Expected behaviour |
|---|---|---|
| Invalid input | N/A — no text inputs or forms exist | N/A |
| Boundary — mobile text | Viewport exactly 640px wide | The CSS `@media (max-width: 640px)` rule applies, showing mobile sizes |
| Boundary — mobile text | Viewport exactly 641px wide | The desktop CSS rule applies, showing desktop sizes |
| Not found | N/A — there is no routing or data lookup | N/A |
| Not permitted | N/A — all content is public | N/A |
| Conflict | N/A — no shared mutable state | N/A |
| Upstream failure — CSS not supported | Browser does not support `background-clip: text` | The heading falls back to a solid color (the gradient is decorative, not essential); page remains readable |
| Upstream failure — JavaScript disabled | Browser has JavaScript disabled | The page renders fully with all static content; the CTA click has no effect (overlay requires JS) |
| Motion conflict | `prefers-reduced-motion: reduce` and JavaScript disabled | Same as JS-disabled behaviour — page content is fully visible, no animations |

**Data touched**

No data is persisted, stored, or transmitted. The page is fully static with no server interaction.

## 5. Screens

The design is the source of truth for appearance; this section maps functions
onto it so nothing in the design is unaccounted for and nothing specified here
is missing from the design.

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Landing hero | Full-page hero section (heading, tagline, CTA, footer) | LANDING-001 (heading), LANDING-002 (tagline), LANDING-003 (CTA), LANDING-006 (background), LANDING-008 (footer), LANDING-009 (responsive) | loading/entrance (staggered fade-in-up), default (idle with continuous animations), reduced-motion (no animations) |
| Success overlay | Modal overlay shown on CTA click | LANDING-004 (open overlay), LANDING-005 (dismiss overlay) | hidden (default), visible (with bounce-in icon), closing (dismissed) |

## 6. Non-functional requirements

Only what is real for this module. Delete rows that do not apply rather than
inventing a number nobody will check.

| Area | Requirement |
|---|---|
| Performance | Page achieves a fully loaded and interactive state within 2s on a typical broadband connection (no external resources to load). |
| Accessibility | All interactive elements are keyboard-reachable, have visible focus indicators, labelled inputs/buttons, and text contrast ≥ 4.5:1 for body copy and ≥ 3:1 for large text (≥24px or ≥18.66px bold). |
| Responsive | Layout works at viewport widths from 320px upward; no horizontal page scroll. |
| Localisation | Copy is in English; no date/number formatting applies. |
| Privacy | No personal data is collected, stored, or transmitted — the page has no forms, no analytics, and no server interaction. |
| Motion accessibility | All animations respect `prefers-reduced-motion: reduce` — no motion plays when the user has that system setting enabled. |
| Cross-browser | Page renders without errors in the last two major versions of Chrome, Firefox, Safari, and Edge. |

## 7. Dependencies and assumptions

- **Depends on:** None. The page is fully self-contained with no external services, CDNs, or APIs. All CSS is inline, no external fonts or scripts are loaded.
- **Assumption:** The visitor's browser supports modern CSS features (`background-clip: text`, CSS custom properties, `clamp()`, `@media (prefers-reduced-motion)`). If it does not, the gradient text will fall back to a solid browser-dependent color — the content remains readable.

| Open question | Proposed default | Who decides |
|---|---|---|
| Is the year in the footer copyright meant to be dynamic? | Use a hardcoded "2024" as shown in the design — the page is static. | Stakeholder |

## 8. Traceability

Every plan item in this module appears exactly once, and every requirement id
traces to a test case. A gap in this table is a gap in the build.

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Animated Hello World landing page | LANDING-001 through LANDING-009 | `test-cases/animated-hello-world-landing-page.md` |
