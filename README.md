# 6D Mind Portfolio

The 6D Mind portfolio is a static Vite single-page application located in `artifacts/portfolio`. It does not require the workspace API server for its public pages or contact experience.

## Local development

Verified toolchain:

- Node.js `24.14.1`
- pnpm `11.5.2`

From the repository root:

```bash
pnpm install
pnpm --filter @workspace/portfolio dev
```

The development server defaults to `http://localhost:5173`. `PORT` and `BASE_PATH` are optional overrides:

```bash
PORT=4175 BASE_PATH=/ pnpm --filter @workspace/portfolio dev
```

Production verification:

```bash
pnpm --filter @workspace/portfolio typecheck
pnpm --filter @workspace/portfolio build
```

The production output is written to `artifacts/portfolio/dist`.

## Vercel deployment

Use these project settings:

- Framework preset: `Vite`
- Root directory: `artifacts/portfolio`
- Install command: `pnpm install`
- Build command: `pnpm run build`
- Output directory: `dist`

The included `artifacts/portfolio/vercel.json` provides the SPA rewrite required for direct route refreshes such as `/work/mahfooz` and `/why-6d-mind`.

No environment variables are required for the production portfolio. Optional local or custom-hosting overrides are:

- `PORT`: development or preview port; defaults to `5173`
- `BASE_PATH`: Vite public base path; defaults to `/`

Do not add contact credentials or private values to client-side environment variables. Contact actions use public `mailto:` and `tel:` links.

After deployment, verify the homepage, `/work`, `/about`, `/contact`, `/why-6d-mind`, and several direct case-study URLs in a new browser session.
