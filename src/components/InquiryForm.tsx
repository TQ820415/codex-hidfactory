"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";

type InquiryFormProps = {
  initialProduct: string;
};

type FormStatus = { kind: "error"; message: string } | null;

export function InquiryForm({ initialProduct }: InquiryFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);
  const [loadedAt] = useState(() => Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, loadedAt }),
      });
      const result = await response.json().catch(() => null) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message ?? "We could not send your inquiry. Please use the direct email or WhatsApp option instead.");
      }

      router.push("/thank-you");
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "We could not send your inquiry. Please use the direct email or WhatsApp option instead." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="inquiry-form-grid">
        <label className="inquiry-field" htmlFor="inquiry-name">Name <span aria-hidden="true">*</span>
          <input id="inquiry-name" name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label className="inquiry-field" htmlFor="inquiry-email">Business email <span aria-hidden="true">*</span>
          <input id="inquiry-email" name="email" type="email" autoComplete="email" required maxLength={160} />
        </label>
        <label className="inquiry-field" htmlFor="inquiry-company">Company
          <input id="inquiry-company" name="company" autoComplete="organization" maxLength={120} />
        </label>
        <label className="inquiry-field" htmlFor="inquiry-country">Country / region <span aria-hidden="true">*</span>
          <input id="inquiry-country" name="country" autoComplete="country-name" required maxLength={100} />
        </label>
        <label className="inquiry-field" htmlFor="inquiry-phone">Phone / WhatsApp
          <input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" maxLength={60} />
        </label>
        <label className="inquiry-field" htmlFor="inquiry-product">Product model or project
          <input id="inquiry-product" name="product" defaultValue={initialProduct} maxLength={140} />
        </label>
        <label className="inquiry-field inquiry-field-full" htmlFor="inquiry-message">Vehicle, engine and requirements <span aria-hidden="true">*</span>
          <textarea id="inquiry-message" name="message" required maxLength={3000} placeholder="Tell us the vehicle, engine, intended use, quantity and any technical requirements." />
        </label>
      </div>
      <label className="inquiry-consent" htmlFor="inquiry-consent">
        <input id="inquiry-consent" name="privacyAccepted" type="checkbox" required />
        <span>I have read and agree to the handling of my inquiry information described in the <Link className="text-link" href="/privacy-policy">Privacy Policy</Link>. <span aria-hidden="true">*</span></span>
      </label>
      <label className="inquiry-honeypot" htmlFor="inquiry-website" aria-hidden="true">Website
        <input id="inquiry-website" name="website" tabIndex={-1} autoComplete="off" />
      </label>
      {status && <p className="form-status" role="alert">{status.message}</p>}
      <button className="button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending inquiry…" : "Send inquiry"}</button>
    </form>
  );
}
