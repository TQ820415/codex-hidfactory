import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageParts";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Hidriving for product selection, quotation and OEM/ODM projects." };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const product = (await searchParams).product;
  const subject = product ? `Inquiry for Hidriving model ${product}` : "Hidriving product or OEM/ODM inquiry";
  return <>
    <PageHero eyebrow="Contact" title="Start a product or OEM/ODM inquiry" text="Send the vehicle, engine, project requirements and expected quantity so the team can review the scope." />
    <section className="section">
      <div className="container content-grid">
        <div>
          <p className="eyebrow">Inquiry form</p>
          <h2>Tell us about your project</h2>
          <p className="lead contact-form-intro">Required fields help our team identify the vehicle platform and reply to the right contact.</p>
          <InquiryForm initialProduct={product ?? ""} />
        </div>
        <aside>
          <div className="info-card">
            <p className="eyebrow">Direct contact</p>
            <h3>Email</h3>
            <a className="text-link" href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}`}>{site.email}</a>
            <h3 style={{ marginTop: 24 }}>Phone / WhatsApp</h3>
            <a className="text-link" href={site.whatsapp} target="_blank" rel="noreferrer">{site.phone}</a>
            <h3 style={{ marginTop: 24 }}>Location</h3>
            <p>{site.location}</p>
            <div className="button-row" style={{ marginTop: 24 }}>
              <a className="button button-secondary-dark" href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}`}>Send Email</a>
              <a className="button button-dark" href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
          <p className="contact-privacy-note">By submitting the form, you confirm that you have read the <a className="text-link" href="/privacy-policy">Privacy Policy</a>.</p>
        </aside>
      </div>
    </section>
  </>;
}
