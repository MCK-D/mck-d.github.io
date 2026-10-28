# Micka Daoud — Portfolio

A single-page React and TypeScript portfolio, with locally bundled Geist typography, responsive layouts, and CSS/Web Animations API motion.

## Development

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm lint
```

## Editing the portfolio

- `RESUME.md` is the source of truth for biographical content.
- `src/data/portfolio.ts` contains contact links, projects, experience, and skill categories.
- `src/components/portfolio/` contains the individual page sections.
- `timeline` in `src/data/portfolio.ts` defines the chronological experience events; `src/hooks/use-timeline.ts` controls navigation and the six-second idle delay; `src/styles/timeline.css` owns its presentation. Autoplay pauses during interaction and is disabled for reduced motion.
- `src/styles/base.css` defines shared tokens and foundations; `portfolio.css` owns layouts; `motion.css` owns animation and reduced-motion overrides.
- `src/components/ui/loading-curtain.tsx` slides in each outlined letter of “mck”, then fills the word from bottom to top with a moving wave on every refresh, then opens the curtain (about 4.1 seconds total). Reduced-motion users skip it; Escape dismisses it. The page remains inert until the introduction ends.

### Add project screenshots or footage

The previews intentionally use empty, plain divs. Add your files to `public/projects/` and replace the contents of `src/components/portfolio/project-preview.tsx` with an image or video using that path. Keep the outer `.project-preview` wrapper to preserve the responsive aspect ratio. Use `width: 100%; height: 100%; object-fit: cover` for media; provide meaningful alt text for images, and controls/posters for footage. Remove the wrapper’s placeholder `role` and `aria-label` when adding real media.

There are no invented project URLs. Add verified project links to the data file when you are ready to link live work. The older projects are available through the expandable archive.

## Releases and Docker

Push a version tag to deploy GitHub Pages, publish a container to GHCR, and
create a GitHub release with generated release notes:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Run a specific release locally, then open http://localhost:8080:

```bash
docker run --rm -p 127.0.0.1:8080:80 ghcr.io/mck-d/mck-d.github.io:v1.0.0
```

Or pull and run the most recently published image:

```bash
docker run --rm --pull always -p 127.0.0.1:8080:80 ghcr.io/mck-d/mck-d.github.io:latest
```

Images support Linux AMD64 and ARM64. Each image contains the built frontend
served by Nginx, with no Node.js runtime or configuration required.
`latest` tracks the most recently published image, not the highest version number;
publishing or rerunning an older tag can move it backward.
GitHub releases are created after the container is published; Pages deploys independently.

Publishing uses the workflow's built-in `GITHUB_TOKEN`; no extra secret is needed.
After the first publication, set the GHCR package visibility to **Public** in its
package settings to allow pulls without authentication. For a private package,
log in with `docker login ghcr.io` using a classic personal access token with
`read:packages` permission.

To build and run from source:

```bash
docker build -t portfolio .
docker run --rm -p 127.0.0.1:8080:80 portfolio
```
