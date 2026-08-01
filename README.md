# yrei.dev

Personal site for Yrei. It is a bilingual, identity-led editorial profile built as a dependency-free
static site for direct deployment to Cloudflare Pages.

The visual rules and design rationale live in [`DESIGN.md`](./DESIGN.md).

## Identity assets

- `assets/yrei-mark.svg`: primary identity mark and favicon.
- `assets/apple-touch-icon.png`: home-screen icon.
- `assets/social-card.png`: 1200x630 Open Graph and social sharing image.
- `404.html`: bilingual custom not-found page.

The page includes `Person` structured data, complete Open Graph/Twitter metadata, local font and
portrait preloads, and a Chinese identity summary for visitors without JavaScript.

## Local preview

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Cloudflare Pages

- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/`
- Root directory: `/`

The custom domain is `yrei.dev`. Security headers are defined in `_headers`.
