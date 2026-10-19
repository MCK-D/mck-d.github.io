# React + TypeScript + Vite + shadcn/ui

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

This is a template for a new Vite project with React, TypeScript, and shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `src/components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button"
```
