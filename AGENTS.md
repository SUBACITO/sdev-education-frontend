<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## SDEV UI rules

Before creating or changing a page or component, read [DESIGN.md](./DESIGN.md). Inspect shared theme tokens in `app/globals.css`. The homepage at `app/page.tsx` is the visual reference.

- Keep `app/globals.css` for Tailwind, shadcn theme tokens, and shared base rules. Style the homepage and its components with Tailwind utilities.
- Build other routes with shadcn components in `components/ui/` and Tailwind classes. Add shared components under `components/` when behavior or structure is reused.
- Put route headers and footers in `components/layout/`. Use `PageShell` there and in pages for consistent container widths and horizontal gutters.
- Keep the learning workspace full width so its lesson, article, and playground panes have room on desktop.

- Keep the SDEV Spectrum visual language consistent across routes: deep navy and violet as the base, cyan and pink as accents, soft glow, subtle borders, rounded panels, and code-inspired details.
- Use the semantic `--sdev-*` and shadcn theme tokens in `app/globals.css`. Add or adjust both dark and light values when introducing a token. Do not scatter new one-off hex colors through components.
- Reuse the homepage Tailwind patterns within the homepage. Other routes should use shadcn components and Tailwind classes. Shared behavior belongs in a component under `components/`.
- Every new page must support both `.dark` and `.light` themes through `next-themes`, including readable text, borders, inputs, hover, and focus states.
- Match the homepage typography, spacing, radii, and motion guidance in `DESIGN.md`. Keep animation smooth and restrained, and respect `prefers-reduced-motion`.
- Use Vietnamese for user-facing copy. Use semantic HTML, visible keyboard focus, accessible labels, and responsive layouts.
- After UI changes, run `npm run typecheck` and `npm run lint`. Check a production build when the environment permits it.
