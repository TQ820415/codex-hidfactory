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
- Contact provides a validated inquiry form. It calls the server-side `/api/inquiries` route and only redirects to Thank You after the configured delivery provider confirms acceptance. Direct Email and WhatsApp remain available as alternatives.
- Privacy Policy, Cookie preferences and Thank You pages are included. No analytics or advertising cookies are enabled in the current source.
- Vercel URLs are detected automatically. Set `NEXT_PUBLIC_SITE_URL` when the confirmed custom production domain is available; local development falls back to `http://localhost:3000`.

## Source-of-truth rules

- Product parameters come from `产品参数20803(DEC).docx` as recorded in `04-整站扩展可选.md`.
- Do not add certifications, customers, projects, export records, lead times, production capacity, prices or performance claims without verified source material.
- Final English warranty and regional legal terms require qualified legal review before publication.

## Configure live inquiry delivery

The form uses Resend's email API from the server only. In Vercel, add the following production environment variables before accepting real inquiries:

- `RESEND_API_KEY`: a Resend API key.
- `RESEND_FROM_EMAIL`: a sender address on a domain verified in Resend, such as `Hidriving Website <inquiries@your-domain.com>`.
- `INQUIRY_TO_EMAIL` (optional): the recipient mailbox; defaults to the confirmed Hidriving inbox.

Never prefix these values with `NEXT_PUBLIC_`, and do not add real values to `.env` files committed to Git. Until both Resend variables are configured, the form shows a truthful delivery-configuration error and does not display a false success message.
