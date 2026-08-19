import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/PageParts";
import { getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return {
    title: `${product.vehicle} ${product.engine} Supercharger Kit`,
    description: `Model ${product.model} supercharger kit for ${product.vehicle} and ${product.engine}.`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  return (
    <>
      <section className="section">
        <div className="container split">
          <div className="visual">
            <Image
              src={product.image}
              alt={`${product.vehicle} ${product.engine} supercharger kit`}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">Model {product.model}</p>
            <h1 style={{ fontSize: "clamp(2.4rem,5vw,4.6rem)" }}>
              {product.vehicle}<br />{product.engine}
            </h1>
            <p className="lead">Vehicle-specific, water-intercooled supercharger kit with aluminum-alloy components and non-destructive installation configuration.</p>
            <div className="button-row">
              <Link className="button" href={`/contact?product=${product.model}`}>Request a Quote</Link>
              <Link className="button" style={{ background: "#111317", borderColor: "#111317" }} href="/oem-odm">OEM & ODM</Link>
            </div>
          </div>
        </div>
      </section>

      {product.galleryImages?.length ? (
        <section className="section product-gallery-section">
          <div className="container">
            <div className="section-title">
              <p className="eyebrow">Installed vehicle gallery</p>
              <h2>{product.vehicle} {product.engine} installation view</h2>
            </div>
            <div className="product-gallery">
              {product.galleryImages.map((image, index) => (
                <div className="product-gallery-item" key={image}>
                  <Image
                    src={image}
                    alt={`${product.vehicle} ${product.engine} supercharger system installation view ${index + 1}`}
                    fill
                    sizes="(max-width: 760px) 100vw, 80vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-soft">
        <div className="container content-grid">
          <div>
            <h2>Current product specifications</h2>
            <table className="spec-table">
              <tbody>
                <tr><th>Product model</th><td>{product.model}</td></tr>
                <tr><th>Vehicle platform</th><td>{product.vehicle}</td></tr>
                <tr><th>Engine</th><td>{product.engine}</td></tr>
                <tr><th>Boost pressure</th><td>{product.pressure}</td></tr>
                <tr><th>Pulley specification</th><td>{product.pulley}</td></tr>
                <tr><th>Intercooling</th><td>Water-intercooled</td></tr>
                <tr><th>Primary material</th><td>Aluminum alloy</td></tr>
                <tr><th>Installation</th><td>Non-destructive installation configuration</td></tr>
              </tbody>
            </table>
          </div>
          <aside>
            <div className="notice">
              <strong>Fitment confirmation required</strong>
              <p>Vehicle years, detailed variants and universal compatibility are intentionally not claimed. Send the engine and vehicle configuration for review before ordering.</p>
            </div>
            <div className="notice" style={{ marginTop: 18 }}>
              <strong>3-Year Limited Product Warranty</strong>
              <p>The warranty period begins on the effective delivery date. Eligible screw-type supercharger kits may be repaired, replaced or otherwise handled under the full policy after Hidriving confirms an eligible material, manufacturing or assembly defect under normal installation, use and maintenance conditions.</p>
            </div>
          </aside>
        </div>

        <div className="container warranty-reminders">
          <div className="info-card">
            <strong>Competition use</strong>
            <p>Unless the order or product page expressly identifies a competition-use product, failures caused by racing, track, rally, drifting or sustained extreme operation are outside the standard warranty scope.</p>
          </div>
          <div className="info-card">
            <strong>ECU calibration</strong>
            <p>Problems caused by missing required calibration, unapproved programs or parameters, third-party software changes, vehicle hardware changes or user adjustments are outside the standard warranty scope. ECU and powertrain matching are evaluated by project.</p>
          </div>
          <div className="info-card">
            <strong>Consequential engine or vehicle damage</strong>
            <p>Engines, transmissions, clutches, drivetrains, vehicle bodies, electrical systems and other parts not supplied by Hidriving are generally outside the product warranty. Any claimed consequential damage requires immediate suspension of use, retained evidence, inspection and causal assessment.</p>
          </div>
          <div className="info-card">
            <strong>Freight responsibility</strong>
            <p>Freight follows the order, sales region and after-sales policy. For mainland China, option A or option B must be discussed with the buyer and confirmed in the order, after-sales record or another written agreement; the website does not promise uniform free freight.</p>
          </div>
          <Link className="text-link" href="/warranty">View Warranty Policy Overview →</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Kit and project scope</p>
            <h2>Engineering support around the complete installation</h2>
          </div>
          <div className="grid-3">
            <div className="info-card"><h3>Kit configuration</h3><p>Supercharger, mounting structures, belt drive, intake routing and water-cooling components are configured by model and order.</p></div>
            <div className="info-card"><h3>Installation & calibration</h3><p>Installation and ECU requirements depend on the vehicle, engine condition, fuel and target market.</p></div>
            <div className="info-card"><h3>OEM & ODM options</h3><p>Vehicle adaptation, structural components, packaging and private-label requirements are assessed by project.</p></div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
