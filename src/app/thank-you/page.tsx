import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your Hidriving inquiry has been received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <>
    <PageHero eyebrow="Inquiry received" title="Thank you for your inquiry" text="Your inquiry was accepted for delivery to the Hidriving team. We will review the information you provided and reply using your submitted contact details." />
    <section className="section">
      <div className="container narrow">
        <div className="info-card">
          <h2>What happens next</h2>
          <p>To help the technical review, please keep your vehicle, engine and project information available for any follow-up questions.</p>
          <div className="button-row">
            <Link className="button" href="/products">Explore Products</Link>
            <Link className="button button-secondary-dark" href="/contact">Return to Contact</Link>
          </div>
        </div>
      </div>
    </section>
  </>;
}
