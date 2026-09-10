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
          <h3>Product &amp; Technical Inquiries</h3>
          <a href="mailto:zt820415love@163.com">zt820415love@163.com</a>
          <a href="tel:+8618351995109">+8618351995109</a>
          <h3>Business Inquiries</h3>
          <a href="mailto:hidriving2020@gmail.com">hidriving2020@gmail.com</a>
          <a href="tel:+8613915290925">+8613915290925</a>
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
