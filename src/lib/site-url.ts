const LOCAL_SITE_URL = "http://localhost:3000";

export function getSiteUrl(): string {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    LOCAL_SITE_URL;

  const absoluteUrl = /^https?:\/\//i.test(configuredUrl)
    ? configuredUrl
    : `https://${configuredUrl}`;

  return absoluteUrl.replace(/\/+$/, "");
}
