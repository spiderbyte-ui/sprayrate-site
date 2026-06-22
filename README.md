# SprayRate Site

Marketing site for SprayRate, built with:

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- static export compatibility
- Vercel compatibility

## Pages

- Home
- Features
- Pricing
- About
- Contact
- Privacy Policy
- Terms of Service
- Beta Program

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

This project uses `output: "export"` in `next.config.ts`, so `npm run build` produces a static export in `out/`.

## Deploy to Vercel

1. Create a new Vercel project and import this repository.
2. Keep the framework preset as `Next.js`.
3. Build command: `npm run build`
4. Output directory: `out`
5. Deploy

## Deploy to any static host

1. Run `npm run build`
2. Upload the contents of `out/`
3. Point your domain at the deployed site

## Recommended domain mapping

- `getsprayrate.com` -> this marketing site
- `sprayrateapp.com` -> redirect to `getsprayrate.com`
- `spiderbytelabs.com` -> company site or redirect target until a separate company site exists
