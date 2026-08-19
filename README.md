# Hidriving website source

Next.js App Router + TypeScript source created from the eight files in `../建站资料-md` and approved assets in `../建站资料`.

## Run locally

```powershell
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Current scope

- Confirmed pages: Home, Products, 17 product detail routes, OEM & ODM, Applications overview, About, Patents & Qualifications, Resources, FAQ, Contact and a non-indexed warranty overview.
- Inquiry buttons route to real email, WhatsApp or Contact. No fake form submission is included.
- Cases, Blog, Industry Solutions, public brochure downloads, Privacy, Cookie, Thank You and regional warranty addenda are intentionally not generated because their final scope or text is not confirmed.
- Vercel URLs are detected automatically. Set `NEXT_PUBLIC_SITE_URL` when the confirmed custom production domain is available; local development falls back to `http://localhost:3000`.

## Source-of-truth rules

- Product parameters come from `产品参数20803(DEC).docx` as recorded in `04-整站扩展可选.md`.
- Do not add certifications, customers, projects, export records, lead times, production capacity, prices or performance claims without verified source material.
- Final English warranty and regional legal terms require qualified legal review before publication.
