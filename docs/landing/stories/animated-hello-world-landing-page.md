# Story: Animated Hello World Landing Page

**Module:** `landing`
**Plan item:** Animated Hello World landing page
**SRS ref:** LANDING-001 through LANDING-009
**Design system:** `design/design-system.md`
**Approved design:** [Preview](http://localhost:8080/design/54815d39-7c28-4107-872d-da29c10c516b)

---

## User Story

> As a Visitor, I want to see a polished animated hero page displaying "Hello World" with a call-to-action and a success confirmation, so that the brand experience feels bold, modern, and memorable.

---

## In Scope

1. Full-page hero layout with dark background (`#0b0e1a`) and animated radial gradients
2. "Hello World" `<h1>` with animated gradient text fill (periwinkle, violet, pink, orange), soft glow effect, and gentle float animation
3. Tagline "A bold new beginning" in uppercase light-weight text, staggered fade-in entrance
4. "Get Started" CTA pill button with indigo gradient, hover lift + shadow + arrow slide, `:focus-visible` outline, `aria-label="Get started"`
5. Success overlay (full-screen modal): dark backdrop, ✦ icon in gradient badge, "Welcome aboard! 🎉" message, "Got it" close button
6. Overlay dismissal via close button, Escape key, and backdrop click; focus management (CTA ↔ close button)
7. Three animated floating orbs (decorative, `pointer-events: none`)
8. 15 drifting particles (2–5px, CSS-only, `pointer-events: none`)
9. Footer with copyright "© 2024 Hello World. All rights reserved." at `rgba(255,255,255,0.2)`, staggered entrance
10. Responsive layout: single-column centered, breakpoint at 640px for font-size/CTA padding/orb size adjustments
11. `prefers-reduced-motion: reduce` — all animations suppressed, content fully visible and functional
12. Entry animations: staggered `fadeInUp` for heading, tagline, CTA, footer (0.2s, 0.6s, 0.9s, 1.2s delays)
13. All interactive elements keyboard-reachable with `:focus-visible` (`#a78bfa`, 2px solid, 4px offset)

---

## Out of Scope

- **Analytics or visitor tracking** — deliberately not built; the page collects no data.
- **Form submission or email capture** — the CTA shows a client-side overlay only; no network request.
- **Multi-page routing or navigation** — single-page hero only; no other pages.
- **Backend API or database** — project shape is `static`; no server, no database, no persistence.
- **External fonts, CDNs, or scripts** — all resources are self-contained; font stack is system-ui.
- **Server-side rendering data fetching** — the page is fully static with client-side React state for the overlay.
- **Dark/light mode toggle** — only the dark theme exists.
- **Custom 404 or error pages** — not applicable for a single static page.
- **Internationalisation or locale switching** — English only.

---

## UI Scope

This story touches the **entire UI** — there is only one page and one overlay in the entire product.

| Screen | States | Design reference |
|---|---|---|
| Landing hero | Entrance (staggered fadeInUp), default/idle (continuous animations), reduced-motion (no animations) | Full-page hero section in approved design |
| Success overlay | Hidden (default), visible (fadeIn + icon bounceIn), closing (dismissed) | Modal overlay shown on CTA click |

All components are specified in `design/design-system.md`: CTA Button (2.1), Success Overlay (2.2), Floating Orbs (2.3), Particles (2.4), "Hello World" Heading (2.5).

---

## Acceptance Criteria

### AC-1: Hero heading with animated gradient
- Given the page is loaded in a browser, when the visitor views the page, then the text "Hello World" is visible as an `<h1>` element.
- Given the page is loaded, when the visitor observes the heading, then the text fill shows a moving animated gradient spanning periwinkle (`#818cf8`), violet (`#a78bfa`), pink (`#f472b6`), and orange (`#fb923c`).
- Given the page is loaded, when the visitor observes the heading, then a soft glow effect is visible behind the text (blur(30px), brightness(1.5), opacity 0.4) that shifts in sync with the gradient.
- Given the page is loaded, when the visitor observes the heading for ≥4 seconds, then the heading exhibits a gentle continuous float (translateY oscillation via 4s ease-in-out infinite animation).

### AC-2: Heading responsive sizing
- Given the page is loaded on a viewport ≤640px wide, when the heading is rendered, then the computed font-size is within `clamp(2.8rem, 15vw, 4.5rem)` and fits without overflow.
- Given the page is loaded on a viewport >640px wide, when the heading is rendered, then the computed font-size is within `clamp(3.5rem, 12vw, 8rem)`.

### AC-3: Tagline
- Given the page is loaded, when the visitor views the page, then the text "A bold new beginning" is visible below the heading.
- Given the page is loaded, when the tagline is rendered, then it has `text-transform: uppercase`, `font-weight: 300`, and color `rgba(255, 255, 255, 0.6)`.
- Given the page is freshly loaded, when the visitor observes the entrance, then the tagline appears after the heading with a staggered fade-in-up animation.

### AC-4: CTA button
- Given the page is loaded, when the visitor views the CTA, then a button with text "Get Started" and a → arrow is visible below the tagline.
- Given the page is loaded, when the button is inspected, then it has `border-radius: 50px`, an indigo gradient background (`#6366f1` → `#8b5cf6`), and white text.
- Given the button is rendered, when the visitor hovers over it, then it lifts 2px up, a shadow appears (`0 12px 40px rgba(99, 102, 241, 0.35)`), and the arrow shifts 4px right.
- Given the button is rendered, when the visitor focuses it with a keyboard, then a 2px solid `#a78bfa` outline with 4px offset is visible.
- Given the button is rendered, when the visitor inspects accessibility, then it has `aria-label="Get started"`.

### AC-5: CTA mobile sizing
- Given the page is loaded on a viewport ≤640px, when the button is rendered, then padding is `0.875rem 2rem` and font-size is `0.95rem`.

### AC-6: Success overlay — open
- Given the page is loaded with the overlay hidden, when the visitor clicks "Get Started", then the overlay becomes visible with full-screen dark backdrop (`rgba(11, 14, 26, 0.92)`).
- Given the overlay is visible, when the visitor views the content, then an ✦ icon inside an 80×80px circular gradient badge (`#6366f1` → `#a78bfa`), the text "Welcome aboard! 🎉", and a "Got it" button are centered on screen.
- Given the overlay opens, when the visitor observes the entrance, then the overlay fades in (0.5s) and the success icon bounces in (scale 0→1, 0.6s).
- Given the overlay opens, when inspected, then the container has `role="dialog"`, `aria-modal="true"`, and `aria-label="Welcome"`.
- Given the overlay opens, when focus is checked, then the "Got it" close button has keyboard focus.

### AC-7: Success overlay — dismiss
- Given the overlay is visible, when the visitor clicks "Got it", then the overlay hides and the CTA button receives focus.
- Given the overlay is visible, when the visitor presses the Escape key, then the overlay hides and the CTA button receives focus.
- Given the overlay is visible, when the visitor clicks the dark backdrop outside the content, then the overlay hides and the CTA button receives focus.
- Given the overlay is dismissed, when the visitor clicks "Get Started" again, then the overlay re-opens fully (no limit on repeats).
- Given the close button is rendered, when the visitor hovers over it, then the background changes to a visibly lighter shade (`rgba(255, 255, 255, 0.18)`).
- Given the close button is rendered, when the visitor focuses it with a keyboard, then a 2px solid `#a78bfa` outline with 4px offset is visible.

### AC-8: Decorative background orbs
- Given the page is loaded, when the visitor views the background, then three blurred coloured orbs (400px, 300px, 250px) are visible at different positions, continuously drifting via CSS animation.
- Given the page is loaded on a viewport ≤640px, when the orbs are rendered, then their sizes are reduced proportionally (250px, 200px, 180px).

### AC-9: Decorative particles
- Given the page is loaded, when the visitor views the page, then at least 10 small round particles (2–5px, `border-radius: 50%`) are visible drifting upward at different speeds (13–22s durations, staggered delays).
- Given a decorative element (orb or particle) is rendered, when the visitor attempts to click it, then no click interaction occurs — elements have `pointer-events: none`.

### AC-10: Background animation
- Given the page is loaded, when the visitor observes the background over 12s, then the radial gradients on the body background shift slowly (animation `bgShift`, 12s ease-in-out infinite alternate).

### AC-11: Motion accessibility
- Given the system has `prefers-reduced-motion: reduce` enabled, when the page is loaded, then no CSS animation or transition runs (all durations set to effectively 0.01ms, single iteration).
- Given the system has `prefers-reduced-motion: reduce` enabled, when the visitor views the page, then the heading, tagline, CTA, and footer are all fully visible and readable.
- Given the system has `prefers-reduced-motion: reduce` enabled, when the visitor clicks "Get Started", then the overlay appears instantly (no fade) and all content is functional.

### AC-12: Footer
- Given the page is loaded, when the visitor views the bottom of the viewport, then the footer is visible with text "© 2024 Hello World. All rights reserved." at `rgba(255, 255, 255, 0.2)`, font-size ~0.8rem.
- Given the page is freshly loaded, when the footer entrance is observed, then it appears after the heading, tagline, and CTA via staggered animation.

### AC-13: Responsive layout
- Given the page is loaded at 320px viewport width, when the visitor views the page, then all content is visible, centered, and no horizontal scrollbar exists.
- Given the page is loaded at 768px viewport width, when the visitor views the page, then all content is visible, centered, and no horizontal scrollbar exists.
- Given the page is loaded at 1920px viewport width, when the visitor views the page, then all content is visible, centered, and no horizontal scrollbar exists.
- Given the page is resized from 320px to 1920px, when the visitor continuously observes the layout, then content stays centered in a single column and font sizes adjust fluidly.

### AC-14: Graceful degradation
- Given a browser that does not support `background-clip: text`, when the page is loaded, then the heading falls back to a solid color (plain text is visible, no blank area).
- Given JavaScript is disabled in the browser, when the page is loaded, then all static content renders fully (heading, tagline, CTA, footer, decorative elements), but the CTA click has no effect (overlay requires JS).

---

## Dependencies

- **None.** The page is fully self-contained. No backend, no database, no external API, no third-party services. All CSS is inline, no external fonts or CDN resources.

---

## Questions

No blocking questions. All decisions are covered by the SRS, design system, and architecture overview.
