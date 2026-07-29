# Architecture Overview — Hello World Landing Page

**Project:** Website that displays the text "Hello World"
**Shape:** `static` — frontend only, no backend, no database
**Last updated:** 2025-07-17

---

## 1. Tech Stack

| Layer | Technology | Version / Notes |
|---|---|---|
| Framework | Next.js (App Router) | 15.x, TypeScript |
| Styling | Tailwind CSS | v3 (configured with design-system tokens) |
| Linting | ESLint | extends `next/core-web-vitals` + `next/typescript` |
| Language | TypeScript | strict mode |
| Container | Docker | Multi-stage Dockerfile |
| CI | GitHub Actions | `.github/workflows/ci.yml` |

**No backend.** No Go server, no PostgreSQL, no API layer. The project shape is `static` — the page is a fully client-rendered Next.js app with no server-side data fetching or persistence.

---

## 2. Folder Structure

```
code/
  frontend/                  # Next.js App Router application
    app/                    # App Router pages (layout.tsx, page.tsx, globals.css)
    public/                 # Static assets
    .eslintrc.json          # ESLint config (extends next/core-web-vitals + next/typescript)
    next.config.js          # Next.js minimal config
    package.json            # Deps: Next.js 15, React, Tailwind v3, ESLint
    postcss.config.js       # Tailwind PostCSS setup
    tailwind.config.ts      # Tailwind with design-system color tokens
    tsconfig.json           # Strict TypeScript config
    Dockerfile              # Multi-stage: node:20-alpine → standalone runtime
    .env.example            # NEXT_PUBLIC_* vars only
    .gitignore
```

Root-level CI and compose files live at the repo root, not inside `code/`.

---

## 3. Design Decisions

### 3.1 No Backend

The SRS specifies a fully public static page with no data collection, no forms, no analytics, and no server interaction. The CTA triggers a client-side overlay — no API call is made. A Go backend or PostgreSQL database would add maintenance burden with zero benefit for this shape.

**Rejected alternatives:**
- `stateless` shape with a Go backend that serves a static build — the backend would do nothing but `http.ServeFile`. Extra complexity, no value.
- `api` shape with a database — the SRS explicitly lists no data persistence. Database would be provisioned and never used.

### 3.2 Next.js App Router (not Pages Router)

Next.js 15 App Router is the current default and aligns with the established stack. The App Router supports React Server Components for potential future server-side logic without restructuring.

### 3.3 Tailwind CSS v3

Tailwind is used to express all design tokens from `design/design-system.md` (color variables, spacing scale, typography ramp, border radius, shadows, durations). Tailwind's `theme.extend` block keeps custom tokens co-located with utility classes.

### 3.4 No External Fonts, Scripts, or CDNs

The SRS requires zero external resources. All CSS is inline; the font stack uses the system stack (`Segoe UI, system-ui, -apple-system, sans-serif`). This ensures the page loads and becomes interactive within 2s on broadband.

### 3.5 Client-Side Overlay (No API)

The CTA "Get Started" button opens a success overlay entirely via React state (`useState`). No network request is made. This is the correct implementation for a static shape — adding a backend endpoint just to return `"ok"` would be unnecessary.

---

## 4. Naming Conventions

- **CSS custom properties** — match design tokens exactly: `--color-bg`, `--color-primary-start`, etc. (defined in `globals.css`).
- **Component files** — `PascalCase.tsx`, one default-exported function per file.
- **Tailwind config** — `tailwind.config.ts` extends `theme.colors` with semantic design tokens.
- **CSS animations** — `camelCase` keyframe names matching design system animation table: `fadeInUp`, `gradientShift`, `float`, `bgShift`, `orbFloat`, `particleDrift`, `bounceIn`, `fadeIn`.

---

## 5. Environment Variables

Only `NEXT_PUBLIC_*` vars apply to a static Next.js build. The frontend does not read any server-side secrets.

| Key | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Not used — static build serves no API. Included for future-proofing. | `http://localhost:8080` |

No secrets, API keys, database URLs, or session tokens exist in this project.

---

## 6. How to Run

### Local development

```bash
# From repo root
cd code/frontend
npm install
npm run dev
# Open http://localhost:3000
```

### Docker Compose (full stack — not applicable)

There is no backend or database in this project. `docker compose up` is not used for local development; use `npm run dev` directly.

### Production build

```bash
cd code/frontend
npm run build
# Output: .next/standalone/ — run with: node server.js
```

---

## 7. CI Pipeline

`.github/workflows/ci.yml` runs on every PR and push to `main`. Jobs:

| Job | What it does |
|---|---|
| `frontend` | `npm ci && npm run lint && npm run build` |
| `compose-validate` | `docker compose config -q` (validates docker-compose.yml syntax) |

Both jobs must pass before a PR can be merged.

---

## 8. Accessibility Commitments

- All interactive elements are keyboard-reachable with visible `:focus-visible` outlines (`#a78bfa`, 2px solid, 4px offset).
- CTA button has `aria-label="Get started"`.
- Success overlay is `role="dialog"`, `aria-modal="true"`, `aria-label="Welcome"`.
- All animations are suppressed when `prefers-reduced-motion: reduce` is set.
- Heading and body text meet ≥ 4.5:1 contrast (large text ≥ 3:1). Known deviations from design-system.md are accepted as documented (CTA button contrast 4.24:1, footer text 1.85:1).

---

## 9. Future Considerations

- **Analytics:** Add a privacy-friendly analytics script (e.g., Plausible) if traffic data is needed — the static structure makes this easy to inject.
- **Form submission:** If a contact or signup form is added later, use a third-party form service (e.g., Formspree) that requires no backend. The `static` shape can remain unchanged.
- **Backend addition:** If the product grows to need server-side logic, migrate to the `stateless` shape by adding a Go backend alongside the existing frontend — no rewrite needed.
