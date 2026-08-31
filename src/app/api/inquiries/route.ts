import { site } from "@/data/site";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 3000;

type InquiryPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  country?: unknown;
  phone?: unknown;
  product?: unknown;
  message?: unknown;
  privacyAccepted?: unknown;
  website?: unknown;
  loadedAt?: unknown;
};

function readText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function error(message: string, status: number) {
  return Response.json({ message }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return error("This inquiry could not be verified. Please submit it from the Hidriving website.", 403);
  }

  let payload: InquiryPayload;
  try {
    payload = await request.json() as InquiryPayload;
  } catch {
    return error("Please complete the inquiry form and try again.", 400);
  }

  const name = readText(payload.name, 100);
  const email = readText(payload.email, 160).toLowerCase();
  const company = readText(payload.company, 120);
  const country = readText(payload.country, 100);
  const phone = readText(payload.phone, 60);
  const product = readText(payload.product, 140);
  const message = readText(payload.message, MAX_MESSAGE_LENGTH);
  const honeypot = readText(payload.website, 200);
  const loadedAt = typeof payload.loadedAt === "number" ? payload.loadedAt : 0;

  if (honeypot) return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  if (!name || !email || !country || !message || payload.privacyAccepted !== "on") {
    return error("Please complete the required fields and confirm the Privacy Policy.", 400);
  }
  if (!EMAIL_PATTERN.test(email)) {
    return error("Please enter a valid business email address.", 400);
  }
  if (Date.now() - loadedAt < 1200) {
    return error("Please review the form and submit it again.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const recipient = process.env.INQUIRY_TO_EMAIL || site.email;
  if (!apiKey || !from) {
    return error("Inquiry delivery is not configured yet. Please use the direct email or WhatsApp option.", 503);
  }

  const inquiryId = crypto.randomUUID();
  const lines = [
    `Inquiry ID: ${inquiryId}`,
    `Name: ${name}`,
    `Business email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Country / region: ${country}`,
    `Phone / WhatsApp: ${phone || "Not provided"}`,
    `Product model or project: ${product || "Not provided"}`,
    "",
    "Vehicle, engine and requirements:",
    message,
  ];

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `[Hidriving inquiry] ${product || "Product or OEM/ODM project"} — ${name}`,
        text: lines.join("\n"),
      }),
    });

    if (!response.ok) {
      return error("We could not send your inquiry. Please use the direct email or WhatsApp option instead.", 502);
    }
  } catch {
    return error("We could not send your inquiry. Please use the direct email or WhatsApp option instead.", 502);
  }

  return Response.json({ ok: true, inquiryId }, { headers: { "Cache-Control": "no-store" } });
}
