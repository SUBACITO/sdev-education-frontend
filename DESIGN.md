# SDEV Spectrum — UI design rules

This file is the visual contract for future SDEV Team pages and components. Use the homepage (`app/page.tsx`) and its Tailwind classes as the visual reference. `app/globals.css` holds Tailwind, shadcn theme variables, and shared base rules. The project uses Next.js, Tailwind CSS, shadcn primitives, and Lucide icons. “Spectrum” names SDEV's colorful visual direction; there is no Adobe React Spectrum package installed.

## Product character

- Audience: developers learning frontend, backend, and fullstack development.
- Feel: ambitious, polished, technical, welcoming. Prefer a clean reading hierarchy over decorative density.
- Copy: Vietnamese, direct and encouraging. Short English code or developer phrases may be used as accents.
- Visual motifs: editor windows, monospace labels, fine orbit lines, soft violet glow, tiny status indicators. Decoration should support the content.

## Color system

The homepage and other routes use Tailwind utilities backed by the theme variables in `app/globals.css`. They switch with the `.dark` class from `next-themes`.

| Token | Dark | Light | Use |
| --- | --- | --- | --- |
| `--sdev-bg` | `#080914` | `#f6f4fb` | Page background |
| `--sdev-surface` | `#111223` | `#fff` | Inputs, panels |
| `--sdev-surface-raised` | `#1b1a32` | `#f4f0fb` | Cards, elevated areas |
| `--sdev-text` | `#f7f7fc` | `#1e1a32` | Primary text |
| `--sdev-text-muted` | `#a9aabc` | `#655f77` | Body and supporting text |
| `--sdev-border` | translucent violet | `#d7c9ef` | Panel borders |
| `--sdev-accent` | `#a98cff` | `#764abf` | Links, emphasis, small labels |
| `--sdev-accent-strong` | `#724fee` | `#6544ab` | Strong actions |
| `--sdev-cyan` | `#78d6e9` | `#21899f` | Secondary subject accent |
| `--sdev-pink` | `#ed9bda` | `#a64993` | Third subject accent |
| `--sdev-gold` | `#f4c766` | `#a86d16` | Coin icon |
| `--sdev-focus` | `#ae8fff` | `#8159ce` | Keyboard focus |

The primary button uses `--sdev-action-start` and `--sdev-action-end` for its violet gradient, with white text in both themes. Keep violet as the main action color. Use cyan and pink to distinguish content categories, not as competing primary buttons.

For a new color, define a semantic token in **both** themes first. Verify contrast on its actual surface. Do not copy a dark surface color into the light theme.

## Typography

- Body: `--font-sans` (currently Arial/Helvetica fallback stack). Code, indices, technology names, and section kickers: `--font-mono`.
- Hero headline: 54–86 px on desktop, approximately 45–61 px on small screens; tight line height around 1.04 and letter spacing around `-.075em`.
- Section headlines: 40–62 px, line height around 1.08, letter spacing around `-.065em`.
- Card titles: around 22 px. Body copy: 12–16 px depending on context, with 1.6–1.8 line height.
- Eyebrows and status labels: 9–10 px monospace, bold, uppercase, and spaced letters. Use them sparingly.
- Prefer a two-level headline: strong neutral text plus one violet gradient or accent phrase.

## Layout and spacing

- Use `PageShell` from `components/layout/page-shell.tsx` for page widths and horizontal gutters. `size="wide"` is up to 1400 px; the default content size is up to 1280 px. `as="main"` also sets the standard page spacing. Keep section-specific layout classes on content inside the shell.
- The learning workspace is an immersive three-pane screen and spans the full viewport width. Its panes own their padding.
- On tablet, use 22 px side gutters; on small phones, 18 px.
- Section spacing: around 100–125 px vertically on desktop, around 70–85 px on mobile.
- Standard gaps: 8, 12, 20, 28, 40, 60 px. Keep related controls close and sections clearly separated.
- Cards use 16–24 px radius, around 20–25 px internal padding, a thin border, and a soft shadow. Controls use 7–10 px radius.
- At 820 px and below, stack multi-column sections. At 520 px and below, reduce headline and illustration scale.

## Components and states

| Need | Reuse or match | Behavior |
| --- | --- | --- |
| Primary CTA | Homepage link pattern | 50 px minimum height, violet gradient, 9 px radius, lift on hover |
| Header action | Homepage outline link | Outline violet, 9 px radius, subtle fill on hover |
| Secondary action | Text link | Text and icon, no competing filled background |
| Icon action | `ThemeToggle` | 44 × 44 px, accessible name, visible focus |
| Google login | `LoginForm` | Full-width button, 52 px minimum height, centered provider icon and label, clear hover and status feedback |
| Content card | Homepage course article | Subject accent and elevation on hover |
| Section label | Homepage kicker utility string | Small uppercase monospace, bracketed wording |

These patterns describe the homepage. For other routes, use shadcn components and Tailwind classes with the shared theme tokens. For reusable actions, prefer a component over copying large utility strings. All buttons need hover, focus-visible, disabled, and loading states when applicable. A link that navigates should be an anchor; a button that changes state should be a button. Do not make decorative UI look actionable.

## Motion

- Entrance: subtle fade and 20 px rise, around 0.8 seconds.
- Hover: 0.2–0.3 seconds; lift controls by 2–3 px and cards by up to 8 px.
- Ambient floating and ticker may run continuously, but must not interrupt reading or interaction.
- Animate opacity and transforms when possible. Avoid layout shifts and heavy blur animation.
- Honor the existing `prefers-reduced-motion` rule. Keep keyboard focus visible regardless of motion preference.

## Theme and implementation

- The theme provider is `components/theme-provider.tsx`; the visible toggle is `components/theme-toggle.tsx`. Keep dark and light visual quality equal.
- Default theme follows the operating system, and users can switch with the header button or `d` hotkey when not typing.
- Keep most page content in Server Components. Isolate interactive pieces as Client Components, as with `components/login-form.tsx`.
- Use `lucide-react` icons at a consistent stroke width (usually 1.6–2). Check that an icon export exists in the installed version.
- The current Google login card is a UI prototype. Do not imply authentication succeeds until an auth API is connected.
- Keep the login card compact: brand, headline, brief explanation, one Google action, then a quiet link to courses. Avoid extra status labels and decorative separators.
- The login card uses the supplied transparent character illustration at `app/(public)/banner/character.png` as a small accent in its upper-right corner. Keep text and actions unobstructed in both themes and on narrow screens.
- Before shipping a new screen: inspect it at desktop and mobile widths in both themes, then run `npm run typecheck` and `npm run lint`.
