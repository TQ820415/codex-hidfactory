import Link from "next/link";
import { CookiePreferencesLink } from "@/components/CookiePreferencesLink";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">Hidriving</p>
          <p>Supercharger kits and OEM/ODM engineering support.</p>
          <p>{site.location}</p>
        </div>
        <div>
          <h3>Products & Services</h3>
          <Link href="/products">All Products</Link>
          <Link href="/oem-odm">OEM & ODM</Link>
          <Link href="/applications">Applications</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About Us</Link>
          <Link href="/patents-qualifications">Patents & Qualifications</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/warranty">Limited Warranty</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone}`}>{site.phone}</a>
          <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          <Link className="text-link" href="/contact">Start an inquiry →</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Hidriving. All rights reserved.</span>
        <span className="footer-legal-links"><span>{site.legalName}</span><CookiePreferencesLink /></span>
      </div>
    </footer>
  );
}
