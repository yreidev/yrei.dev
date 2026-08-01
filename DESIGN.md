# Yrei Design System

## Concept

**Signal and Spirit** combines an editorial personal profile with the precision of a developer tool.
The page should feel authored, technically literate, and quietly unusual. It is not a product landing
page and should never read like a generic SaaS template.

This system was synthesized after reviewing the 75 public DESIGN.md analyses in the getdesign.md
catalog. It deliberately combines principles rather than copying a single brand:

- immersive identity-first heroes;
- editorial typography for personal narrative;
- hairline grids and monospace metadata for technical precision;
- flat color chapters for long-page rhythm;
- authentic imagery and product assets;
- sparse, purposeful motion with reduced-motion support;
- explicit mobile reflow rather than simple desktop scaling.

## Content Hierarchy

1. `Yrei` is the first-viewport signal.
2. The origin of the name is the primary story.
3. Practice areas explain the kind of work Yrei cares about.
4. AcePocket appears once as a compact proof of work, not as the page's subject.
5. Principles provide depth without turning the page into a resume.
6. GitHub is the single public contact action.

## Color System

| Token | Value | Role |
| --- | --- | --- |
| Ink | `#101311` | Hero, header, contact, primary text |
| Paper | `#f6f7f3` | Editorial name chapter |
| Acid | `#c8ff4d` | Identity signal, ticker, interactive emphasis |
| Coral | `#ff6b53` | Focus and directional emphasis |
| Blue | `#8eb8ff` | Supporting accent |
| Lilac | `#cabfff` | Personal quote block |
| Forest | `#103a2c` | Practice chapter |
| Forest light | `#c5ead9` | Practice hover state |
| Principle blue | `#dce8fa` | Reflective chapter |

Colors are used as full chapter surfaces or precise signals. Do not add gradients, glow effects,
blurred color blobs, or additional accent families.

## Typography

- **Manrope**: interface, display, navigation, headings.
- **Newsreader**: personal narrative, statements, reflective prose.
- **IBM Plex Mono**: coordinates, labels, timestamps, technology metadata.
- Chinese text falls back to the system CJK sans while preserving the same hierarchy.

Display sizes change at explicit breakpoints. Do not use viewport-width font scaling. Letter spacing
remains `0` throughout the system.

## Layout

- Maximum content width: `1440px`.
- Desktop gutter: `56px`; tablet: `36px`; mobile: `20px`.
- Major sections use 82-120px vertical padding.
- Full-width color bands establish rhythm.
- Internal structure uses visible rules and grids instead of floating containers.
- Cards are not the default section primitive. Repeated items may use bordered cells with square
  corners.
- The first viewport must show a hint of the signal tape below the hero.

## Shape and Depth

- Default radius: `0`.
- Portrait: circular because it is identity media, not a card.
- Small controls may remain square or use at most 4px radius.
- Depth comes from surface changes, line work, overlap, and scale.
- Avoid drop shadows and decorative containers.

## Identity Assets

- The Yrei mark turns the letter `Y` into a three-direction signal. The acid field links it to the
  homepage ticker, while coral calibration ticks suggest the `Y-ray` pronunciation.
- Use the same mark in navigation, the practice map, favicons, home-screen icons, and social media.
- The 1200x630 social image uses an AI-generated, text-free editorial signal field with deterministic
  typography layered locally. This preserves exact spelling for `鬼鬼Sama`, `Yūrei`, `Yrei`, and
  `Y-ray`.
- Social image generation prompt: "Create a sophisticated abstract editorial signal field for an
  independent developer's social sharing image. Swiss editorial design blended with precise
  developer-tool instrumentation, matte printed paper texture; wide landscape, dark visual field,
  crisp hairline grid, one hard-edged acid green signal plane, sparse coral calibration ticks, and
  generous negative space on the left for later typography. Near-black, paper white, acid green and
  coral only; strictly flat colors; no text, letters, logos, icons, people, products, gradients,
  glow, bokeh, rounded blobs, or watermark."

## Motion

- Scroll progress communicates position.
- The signal tape moves continuously at a slow, constant rate.
- Content reveals once with a short vertical transition.
- Navigation reflects the active chapter.
- Availability uses a quiet pulse.
- All motion must collapse under `prefers-reduced-motion`.

## Responsive Rules

- Below 1160px, navigation hides and two-column sections begin collapsing.
- Below 860px, hero media becomes a background layer and story grids become single-column.
- Below 620px, portrait remains visible and clear but smaller; metadata that does not aid navigation
  is removed.
- The practice map becomes a vertical sequence.
- Text must never force horizontal scrolling.

## Do

- Keep the page centered on Yrei's identity.
- Use real avatar and project assets.
- Let sections change visual temperature while preserving one typographic system.
- Keep labels compact and descriptive.
- Make every link and control keyboard accessible.

## Do Not

- Do not turn the page into an AcePocket product site.
- Do not add a generic skills-card grid, GitHub stats wall, or resume timeline.
- Do not use gradients, glass cards, glowing blobs, or nested cards.
- Do not expose a precise physical location, private service address, or unverified email.
- Do not add projects that are forks as authored work.
