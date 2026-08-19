import type { Metadata } from "next";
import { PageHero } from "@/components/PageParts";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Hidriving for product selection, quotation and OEM/ODM projects." };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const product = (await searchParams).product;
  const subject = product ? `Inquiry for Hidriving model ${product}` : "Hidriving product or OEM/ODM inquiry";
  return <><PageHero eyebrow="Contact" title="Start a product or OEM/ODM inquiry" text="Send the vehicle, engine, project requirements and expected quantity so the team can review the scope." /><section className="section"><div className="container content-grid"><div><h2>Recommended inquiry information</h2><div className="feature-list">{["Your name, company and country","Vehicle and engine platform","Product model or OEM/ODM interest","Expected quantity and project timeline","Installation, fuel and performance requirements"].map((item) => <div className="feature" key={item}><strong>{item}</strong></div>)}</div></div><aside><div className="info-card"><p className="eyebrow">Direct contact</p><h3>Email</h3><a className="text-link" href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}`}>{site.email}</a><h3 style={{ marginTop:24 }}>Phone / WhatsApp</h3><a className="text-link" href={site.whatsapp} target="_blank" rel="noreferrer">{site.phone}</a><h3 style={{ marginTop:24 }}>Location</h3><p>{site.location}</p><div className="button-row" style={{ marginTop:24 }}><a className="button" href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}`}>Send Email</a><a className="button" style={{ background:"#111317", borderColor:"#111317" }} href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div></div><p style={{ marginTop:18, color:"#646b75" }}>A production form is intentionally not included until real email delivery and privacy handling are configured.</p></aside></div></section></>;
}
