# Little Love Letter

A small, mobile-first interactive love letter built with Vite, vanilla TypeScript, HTML, and CSS.

## Local development

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The deployable static files are written to `dist/`.

## GitHub Pages setup

The repository is named `Love_Letter`, and `vite.config.ts` therefore uses:

```ts
base: '/Love_Letter/'
```

If the repository name changes, update that value to `/<new-repository-name>/`. For a custom domain or a user/organization Pages site, use `base: '/'`.

1. Push the project to the `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Keep the `.github/workflows/deploy.yml` workflow enabled.
5. Push a commit to `main`; the workflow will build and publish the site.

The published HTTPS URL is normally:

`https://<github-owner>.github.io/Love_Letter/`

Instagram's in-app browser can open this shareable HTTPS URL directly. No installation or backend is required.
