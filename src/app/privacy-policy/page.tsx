import type { Metadata } from "next";
import Link from "next/link";
import { CookiePreferencesLink } from "@/components/CookiePreferencesLink";
import { PageHero } from "@/components/PageParts";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Hidriving handles website inquiry information and browser preferences.",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return <>
    <PageHero eyebrow="Privacy" title="Privacy Policy" text="This page explains how inquiry information and browser preferences are handled on the Hidriving website." />
    <section className="section">
      <article className="container narrow legal-copy">
        <p><strong>Last updated:</strong> 26 August 2026</p>
        <h2>Who we are</h2>
        <p>This website is operated by {site.legalName}, trading as {site.name}, located in {site.location}. For privacy questions, contact <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a>.</p>
        <h2>Information collected through an inquiry</h2>
        <p>When you submit the inquiry form, we collect the information you provide: name, business email, company, country or region, phone or WhatsApp number, product or project interest, and vehicle, engine and technical requirements.</p>
        <h2>Why we use this information</h2>
        <p>We use inquiry information to review fitment or project scope, answer your request, prepare follow-up communication, and maintain business correspondence related to that inquiry. The website does not use form data to make automated decisions.</p>
        <h2>How inquiry delivery works</h2>
        <p>The website sends submitted inquiries to the Hidriving inquiry mailbox through a server-side email delivery provider. The website does not store inquiry submissions in its own database. Email providers and the recipient mailbox may retain message records under their respective settings and business-record practices; the exact retention period is not currently published.</p>
        <h2>Cookies and browser storage</h2>
        <p>The current website uses essential browser storage to remember your Cookie preference. No analytics or advertising cookies are activated in the current source. If analytics, advertising, chat, or other optional third-party scripts are added later, their cookie use should be reviewed and configured separately before activation.</p>
        <h2>Your choices</h2>
        <p>You can reopen <CookiePreferencesLink /> from the footer to change the stored choice. You may also contact us at the email above to request access to, correction of, or deletion of personal information held in your inquiry correspondence. Requests may be subject to applicable law and identity verification.</p>
        <h2>International processing</h2>
        <p>Because we serve international business inquiries, information may be processed by our team and email service providers in locations outside your country or region. Specific processing locations and contractual safeguards depend on the delivery provider and the applicable sales arrangement and require confirmation before making market-specific legal commitments.</p>
        <h2>Changes to this policy</h2>
        <p>We may update this page when the website, inquiry process or applicable requirements change. The latest revision date appears at the top of this page.</p>
        <p><Link className="text-link" href="/contact">Return to Contact →</Link></p>
      </article>
    </section>
  </>;
}
