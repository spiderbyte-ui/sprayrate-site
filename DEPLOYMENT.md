# Deployment Instructions

## Vercel

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Keep framework preset as `Next.js`.
4. Set build command to `npm run build`.
5. Set output directory to `out`.
6. Deploy.

## Domain setup

Recommended mapping:

- `getsprayrate.com` -> primary production domain
- `www.getsprayrate.com` -> redirect to `getsprayrate.com`
- `sprayrateapp.com` -> redirect to `getsprayrate.com`

## Static hosting fallback

If you do not use Vercel:

1. Run `npm install`
2. Run `npm run build`
3. Upload the contents of `out/` to your static host
4. Point DNS to the host

## Notes

- The site is configured with `output: "export"` in `next.config.ts`.
- All pages are statically generated.
- No backend is required for deployment.
