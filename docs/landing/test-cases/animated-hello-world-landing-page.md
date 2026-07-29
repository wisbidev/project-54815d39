# Test Cases — Animated Hello World Landing Page

**Module:** `landing`
**Function:** Animated Hello World landing page
**Risk level:** Low — static page, no data persistence, no API, single publicly available state. No authentication, no write operations, no failure modes beyond CSS feature support.
**Last updated:** 2025-07-17

---

## Test Cases

### TC-001: Heading displays "Hello World" text

| Field | Value |
|---|---|
| **Requirement** | LANDING-001, AC-1 |
| **Automation** | Automated |
| **Given** | The page is loaded in a browser |
| **When** | The visitor views the page |
| **Then** | The exact text "Hello World" is visible as an `<h1>` element |

---

### TC-002: Heading text has animated gradient fill

| Field | Value |
|---|---|
| **Requirement** | LANDING-001, AC-2 |
| **Automation** | Automated (can assert `background-clip: text` and animated gradient is applied) |
| **Given** | The page is loaded |
| **When** | The visitor observes the heading |
| **Then** | The text fill shows a moving animated gradient spanning periwinkle (`#818cf8`), violet (`#a78bfa`), pink (`#f472b6`), and orange (`#fb923c`) — the `background-size` is >100% and `background-position` animates via a CSS animation |

---

### TC-003: Glow effect behind the heading

| Field | Value |
|---|---|
| **Requirement** | LANDING-001, AC-3 |
| **Automation** | Automated (verify presence and animation of pseudo-element or glow element) |
| **Given** | The page is loaded |
| **When** | The visitor observes the heading |
| **Then** | A soft glow effect (blurred, semi-transparent gradient element) is visible behind the text, also animated in sync with the gradient shift |

---

### TC-004: Heading floats gently

| Field | Value |
|---|---|
| **Requirement** | LANDING-001, AC-4 |
| **Automation** | Manual — verifying smooth continuous float requires human observation over time |
| **Given** | The page is loaded |
| **When** | The visitor observes the heading for at least 4 seconds |
| **Then** | The heading exhibits a gentle continuous float (up-and-down motion via CSS `transform` animation) |

---

### TC-005: Heading font-size on mobile viewport (≤640px)

| Field | Value |
|---|---|
| **Requirement** | LANDING-001, AC-5 |
| **Automation** | Automated |
| **Given** | The page is loaded on a viewport ≤640px wide |
| **When** | The heading is rendered |
| **Then** | The computed font-size is within `clamp(2.8rem, 15vw, 4.5rem)` and the text fits the viewport without overflow |

---

### TC-006: Heading font-size on desktop viewport (>640px)

| Field | Value |
|---|---|
| **Requirement** | LANDING-001, AC-6 |
| **Automation** | Automated |
| **Given** | The page is loaded on a viewport >640px wide |
| **When** | The heading is rendered |
| **Then** | The computed font-size is within `clamp(3.5rem, 12vw, 8rem)` |

---

### TC-007: Tagline text is displayed

| Field | Value |
|---|---|
| **Requirement** | LANDING-002, AC-1 |
| **Automation** | Automated |
| **Given** | The page is loaded |
| **When** | The visitor views the page |
| **Then** | The text "A bold new beginning" is visible below the heading |

---

### TC-008: Tagline has correct styling

| Field | Value |
|---|---|
| **Requirement** | LANDING-002, AC-2 |
| **Automation** | Automated |
| **Given** | The page is loaded |
| **When** | The tagline is rendered |
| **Then** | The computed style shows `text-transform: uppercase`, `font-weight: 300`, and color is `rgba(255, 255, 255, 0.6)` |

---

### TC-009: Tagline staggered entrance animation

| Field | Value |
|---|---|
| **Requirement** | LANDING-002, AC-3 |
| **Automation** | Automated (can assert CSS animation property and initial state before animation completes) |
| **Given** | The page is freshly loaded |
| **When** | The visitor observes the entrance |
| **Then** | The tagline appears after the heading via a staggered fade-in-up animation (animation-delay is later than the heading's delay, initial opacity is 0 at page load) |

---

### TC-010: CTA button is visible with correct label

| Field | Value |
|---|---|
| **Requirement** | LANDING-003, AC-1 |
| **Automation** | Automated |
| **Given** | The page is loaded |
| **When** | The visitor views the CTA |
| **Then** | A button with text containing "Get Started" and a → arrow is visible below the tagline |

---

### TC-011: CTA button has correct shape and styling

| Field | Value |
|---|---|
| **Requirement** | LANDING-003, AC-2 |
| **Automation** | Automated |
| **Given** | The page is loaded |
| **When** | The visitor inspects the button |
| **Then** | The button has `border-radius: 50px`, a gradient background (`linear-gradient(135deg, #6366f1, #8b5cf6)`), and white (`#fff`) text |

---

### TC-012: CTA button hover effect

| Field | Value |
|---|---|
| **Requirement** | LANDING-003, AC-3 |
| **Automation** | Automated (can assert hover state via CSS class / pseudo-class) |
| **Given** | The button is rendered |
| **When** | The visitor hovers over it |
| **Then** | The button moves up 2px (`transform: translateY(-2px)`), a box-shadow appears (`0 12px 40px rgba(99, 102, 241, 0.35)`), and the arrow slides 4px to the right (`transform: translateX(4px)`) |

---

### TC-013: CTA button keyboard focus indicator

| Field | Value |
|---|---|
| **Requirement** | LANDING-003, AC-4 |
| **Automation** | Automated |
| **Given** | The button is rendered |
| **When** | The visitor focuses it with a keyboard (`:focus-visible`) |
| **Then** | A 2px solid `#a78bfa` outline with 4px offset is visible |

---

### TC-014: CTA button accessibility label

| Field | Value |
|---|---|
| **Requirement** | LANDING-003, AC-5 |
| **Automation** | Automated |
| **Given** | The page is loaded |
| **When** | The visitor inspects the accessibility label |
| **Then** | The button has `aria-label="Get started"` |

---

### TC-015: CTA button mobile sizing

| Field | Value |
|---|---|
| **Requirement** | LANDING-003, AC-6 |
| **Automation** | Automated |
| **Given** | The page is loaded on a viewport ≤640px |
| **When** | The button is rendered |
| **Then** | The button has padding `0.875rem 2rem` and font-size `0.95rem` |

---

### TC-016: Clicking CTA opens success overlay

| Field | Value |
|---|---|
| **Requirement** | LANDING-004, AC-1 |
| **Automation** | Automated |
| **Given** | The page is loaded with the overlay hidden |
| **When** | The visitor clicks "Get Started" |
| **Then** | The overlay becomes visible with a full-screen dark backdrop (`rgba(11, 14, 26, 0.92)`) |

---

### TC-017: Success overlay content is correct

| Field | Value |
|---|---|
| **Requirement** | LANDING-004, AC-2 |
| **Automation** | Automated |
| **Given** | The overlay is visible |
| **When** | The visitor views the content |
| **Then** | An ✦ icon inside an 80×80px circular gradient badge (`#6366f1` → `#a78bfa`), the text "Welcome aboard! 🎉", and a "Got it" close button are centered on screen |

---

### TC-018: Success overlay entrance animation

| Field | Value |
|---|---|
| **Requirement** | LANDING-004, AC-3 |
| **Automation** | Manual — verifying the visual bounce and fade-in simultaneously requires human observation |
| **Given** | The overlay opens |
| **When** | The visitor observes the entrance |
| **Then** | The overlay fades in (0.5s ease-out) and the success icon bounces in (scale animation from 0 to 1 over 0.6s) |

---

### TC-019: Overlay has correct ARIA attributes

| Field | Value |
|---|---|
| **Requirement** | LANDING-004, AC-4 |
| **Automation** | Automated |
| **Given** | The overlay opens |
| **When** | The visitor inspects the element |
| **Then** | The overlay container has `role="dialog"`, `aria-modal="true"`, and `aria-label="Welcome"` |

---

### TC-020: Focus moves to close button on overlay open

| Field | Value |
|---|---|
| **Requirement** | LANDING-004, AC-5 |
| **Automation** | Automated |
| **Given** | The overlay opens |
| **When** | Focus is checked |
| **Then** | The close button ("Got it") has keyboard focus |

---

### TC-021: Dismiss overlay by clicking "Got it"

| Field | Value |
|---|---|
| **Requirement** | LANDING-005, AC-1 |
| **Automation** | Automated |
| **Given** | The overlay is visible |
| **When** | The visitor clicks "Got it" |
| **Then** | The overlay hides and the CTA button receives focus |

---

### TC-022: Dismiss overlay by pressing Escape

| Field | Value |
|---|---|
| **Requirement** | LANDING-005, AC-2 |
| **Automation** | Automated |
| **Given** | The overlay is visible |
| **When** | The visitor presses the Escape key |
| **Then** | The overlay hides and the CTA button receives focus |

---

### TC-023: Dismiss overlay by clicking backdrop

| Field | Value |
|---|---|
| **Requirement** | LANDING-005, AC-3 |
| **Automation** | Automated |
| **Given** | The overlay is visible |
| **When** | The visitor clicks the dark backdrop (outside the content area) |
| **Then** | The overlay hides and the CTA button receives focus |

---

### TC-024: Overlay can be re-opened after dismissal

| Field | Value |
|---|---|
| **Requirement** | LANDING-005, AC-4 |
| **Automation** | Automated |
| **Given** | The overlay is dismissed |
| **When** | The visitor clicks "Get Started" again |
| **Then** | The overlay re-opens fully with all content and animations |

---

### TC-025: Close button hover effect

| Field | Value |
|---|---|
| **Requirement** | LANDING-005, AC-5 |
| **Automation** | Automated |
| **Given** | The close button is rendered |
| **When** | The visitor hovers over it |
| **Then** | The background color changes to a visibly lighter shade (`rgba(255, 255, 255, 0.18)`) |

---

### TC-026: Close button keyboard focus indicator

| Field | Value |
|---|---|
| **Requirement** | LANDING-005, AC-6 |
| **Automation** | Automated |
| **Given** | The close button is rendered |
| **When** | The visitor focuses it with a keyboard (`:focus-visible`) |
| **Then** | A 2px solid `#a78bfa` outline with 4px offset is visible |

---

### TC-027: Three floating orbs are present and animated

| Field | Value |
|---|---|
| **Requirement** | LANDING-006, AC-1 |
| **Automation** | Automated (assert DOM elements and CSS animation properties) |
| **Given** | The page is loaded |
| **When** | The visitor views the background |
| **Then** | Three blurred coloured orb elements are visible at different positions, each with a CSS animation (`orbFloat`) that makes them drift continuously |

---

### TC-028: Particles drift upward

| Field | Value |
|---|---|
| **Requirement** | LANDING-006, AC-2 |
| **Automation** | Automated (assert DOM elements with particle class, count ≥ 10) |
| **Given** | The page is loaded |
| **When** | The visitor views the page |
| **Then** | At least 10 small round particles (2–5px) are visible drifting upward at different speeds (animation-duration spanning 13–22s) |

---

### TC-029: Background radial gradients shift

| Field | Value |
|---|---|
| **Requirement** | LANDING-006, AC-3 |
| **Automation** | Automated (assert CSS animation on background) |
| **Given** | The page is loaded |
| **When** | The visitor observes the background over 12s |
| **Then** | The radial gradients on the body background shift slowly (CSS animation `bgShift` with 12s duration) |

---

### TC-030: Decorative elements are non-interactive

| Field | Value |
|---|---|
| **Requirement** | LANDING-006, AC-4 |
| **Automation** | Automated |
| **Given** | The page is rendered |
| **When** | The visitor attempts to click an orb or particle |
| **Then** | No click interaction occurs — decorative elements have `pointer-events: none` and do not intercept events |

---

### TC-031: Orb sizes reduce on mobile

| Field | Value |
|---|---|
| **Requirement** | LANDING-006, AC-5 |
| **Automation** | Automated |
| **Given** | The page is loaded on a viewport ≤640px |
| **When** | The orbs are rendered |
| **Then** | Orb sizes are visibly smaller (250×250px, 200×200px, 180×180px) than their desktop counterparts (400×400px, 300×300px, 250×250px) |

---

### TC-032: No animations play with prefers-reduced-motion

| Field | Value |
|---|---|
| **Requirement** | LANDING-007, AC-1 |
| **Automation** | Automated (assert with `matchMedia('(prefers-reduced-motion: reduce)')` or equivalent) |
| **Given** | The system has `prefers-reduced-motion: reduce` enabled |
| **When** | The page is loaded |
| **Then** | No CSS animation or transition runs — all durations are set to 0.01ms (effectively instant, single iteration) |

---

### TC-033: Content is visible with reduced motion

| Field | Value |
|---|---|
| **Requirement** | LANDING-007, AC-2 |
| **Automation** | Automated |
| **Given** | The system has `prefers-reduced-motion: reduce` enabled |
| **When** | The visitor views the page |
| **Then** | The heading, tagline, CTA, and footer are all fully visible and readable (no content is hidden or clipped) |

---

### TC-034: Overlay works with reduced motion

| Field | Value |
|---|---|
| **Requirement** | LANDING-007, AC-3 |
| **Automation** | Automated |
| **Given** | The system has `prefers-reduced-motion: reduce` enabled |
| **When** | The visitor clicks "Get Started" |
| **Then** | The overlay appears instantly (no fade animation), and all content is functional |

---

### TC-035: Footer text is displayed

| Field | Value |
|---|---|
| **Requirement** | LANDING-008, AC-1 |
| **Automation** | Automated |
| **Given** | The page is loaded |
| **When** | The visitor views the bottom of the viewport |
| **Then** | The footer is visible with text "© 2024 Hello World. All rights reserved." |

---

### TC-036: Footer has correct styling

| Field | Value |
|---|---|
| **Requirement** | LANDING-008, AC-2 |
| **Automation** | Automated |
| **Given** | The page is loaded |
| **When** | The footer is rendered |
| **Then** | The text color is `rgba(255, 255, 255, 0.2)` and font-size is `0.8rem` |

---

### TC-037: Footer staggered entrance

| Field | Value |
|---|---|
| **Requirement** | LANDING-008, AC-3 |
| **Automation** | Automated (assert animation-delay is later than CTA's delay) |
| **Given** | The page is freshly loaded |
| **When** | The footer entrance is observed |
| **Then** | The footer appears after the heading, tagline, and CTA via staggered animation (animate-delay ≥ 1.2s, last in sequence) |

---

### TC-038: Page responsive at 320px viewport

| Field | Value |
|---|---|
| **Requirement** | LANDING-009, AC-1 |
| **Automation** | Automated |
| **Given** | The page is loaded at 320px viewport width |
| **When** | The visitor views the page |
| **Then** | All content is visible, centered, and no horizontal scrollbar exists |

---

### TC-039: Page responsive at 768px viewport

| Field | Value |
|---|---|
| **Requirement** | LANDING-009, AC-2 |
| **Automation** | Automated |
| **Given** | The page is loaded at 768px viewport width |
| **When** | The visitor views the page |
| **Then** | All content is visible, centered, and no horizontal scrollbar exists |

---

### TC-040: Page responsive at 1920px viewport

| Field | Value |
|---|---|
| **Requirement** | LANDING-009, AC-3 |
| **Automation** | Automated |
| **Given** | The page is loaded at 1920px viewport width |
| **When** | The visitor views the page |
| **Then** | All content is visible, centered, and no horizontal scrollbar exists |

---

### TC-041: Content stays centered during resize

| Field | Value |
|---|---|
| **Requirement** | LANDING-009, AC-4 |
| **Automation** | Automated |
| **Given** | The page is resized from 320px to 1920px |
| **When** | The visitor continuously observes the layout |
| **Then** | Content stays centered in a single column, font sizes adjust fluidly with no layout breakage |

---

## Verification checklist

- [ ] Cases stored at `docs/landing/test-cases/animated-hello-world-landing-page.md`
- [ ] Every SRS acceptance criterion (AC-1 through AC-N) for this item has at least one case
- [ ] Every case states setup (Given), action (When), observable expected result (Then), and the requirement it traces to
- [ ] All cases are happy-path — error/edge/boundary scenarios are included only where the SRS explicitly defines them
- [ ] Every role named in the SRS (Visitor) is covered
- [ ] Automated and manual coverage are separated, with a reason for each manual case
- [ ] No ambiguity is silently resolved — assertions are concrete and specific
