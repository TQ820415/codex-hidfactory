import Image from "next/image";
import Link from "next/link";
import { CtaBand, ProductCard, SectionTitle } from "@/components/PageParts";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">Hidriving supercharger systems</p>
          <h1>Vehicle-specific engineering. From concept to batch production.</h1>
          <p className="lead">Water-intercooled supercharger kits, vehicle integration support and OEM/ODM development for selected engine platforms.</p>
          <div className="button-row"><Link className="button" href="/products">Explore Products</Link><Link className="button button-secondary" href="/oem-odm">Start an OEM/ODM Project</Link></div>
        </div>
      </section>
      <section className="metric-strip" aria-label="Company facts">
        <div className="container metrics">
          <div className="metric"><strong>2020</strong><span>Company established</span></div>
          <div className="metric"><strong>2000+ m²</strong><span>Production facility</span></div>
          <div className="metric"><strong>40+</strong><span>Team members</span></div>
          <div className="metric"><strong>20+</strong><span>Valid patents</span></div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Current product range" title="Supercharger kits by vehicle and engine platform" text="Current specifications use the confirmed Word product table. Vehicle years are intentionally not stated; final fitment must be confirmed for each inquiry." />
          <div className="grid-3">{products.slice(0, 6).map((product) => <ProductCard key={product.slug} product={product} />)}</div>
          <div style={{ marginTop: 32 }}><Link className="button" href="/products">View all 17 models</Link></div>
        </div>
      </section>
      <section id="engineering-rd" className="section engineering-rd" aria-labelledby="engineering-rd-title">
        <div className="container">
          <div className="engineering-rd-copy">
            <h2 id="engineering-rd-title">Engineering &amp; R&amp;D</h2>
            <p className="lead">From vehicle analysis and 3D engineering to prototype development, testing and mass production, we provide complete supercharger kit development solutions.</p>
          </div>
          <div className="engineering-rd-grid">
            <div className="engineering-rd-media engineering-rd-media-large">
              <video className="engineering-rd-video" autoPlay loop muted playsInline preload="metadata" poster="/images/engineering/prototype-fitment.png" aria-label="Engineering and R&amp;D design and development process video">
                <source src="/videos/engineering-rd.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="engineering-rd-stack">
              <div className="engineering-rd-media">
                <Image src="/images/engineering/test-bench.png" alt="Supercharger performance test bench" fill sizes="(max-width: 760px) 100vw, 38vw" loading="eager" unoptimized />
              </div>
              <div className="engineering-rd-media">
                <Image src="/images/engineering/prototype-fitment.png" alt="Prototype fitment in a vehicle engine bay" fill sizes="(max-width: 760px) 100vw, 38vw" />
              </div>
              <div className="engineering-rd-media engineering-rd-media-wide">
                <Image src="/images/engineering/engineering-validation.png" alt="Engineering analysis, CAD simulation and test-data overview" fill sizes="(max-width: 760px) 100vw, 38vw" />
              </div>
            </div>
          </div>
          <div className="engineering-rd-capabilities">
            <article className="engineering-rd-capability">
              <span>01</span>
              <h3><Link href="/engineering-rd#vehicle-specific-development">Vehicle-Specific Development</Link></h3>
              <p>Supercharger kits developed around the target vehicle and engine platform.</p>
            </article>
            <article className="engineering-rd-capability">
              <span>02</span>
              <h3><Link href="/engineering-rd#3d-design-engineering">3D Design &amp; Engineering</Link></h3>
              <p>3D scanning and CAD modeling for brackets, pulleys, intake systems and related components.</p>
            </article>
            <article className="engineering-rd-capability">
              <span>03</span>
              <h3><Link href="/engineering-rd#prototype-development">Prototype Development</Link></h3>
              <p>In-house prototype production, trial fitment and structural optimization.</p>
            </article>
            <article className="engineering-rd-capability">
              <span>04</span>
              <h3><Link href="/engineering-rd#testing-validation">Testing &amp; Validation</Link></h3>
              <p>Bench, in-vehicle and road testing for reliability and fitment validation.</p>
            </article>
            <article className="engineering-rd-capability">
              <span>05</span>
              <h3><Link href="/engineering-rd#oem-odm-development">OEM / ODM Development</Link></h3>
              <p>Custom development for customer brands, vehicle platforms and regional markets.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container split">
          <div className="visual"><Image src="/images/factory.png" alt="Hidriving production facility in Wuxi" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
          <div>
            <p className="eyebrow">Engineering and production</p>
            <h2>Development support built around the target vehicle.</h2>
            <p className="lead">Hidriving supports concept development, structural design, prototype manufacturing, vehicle installation and testing, pilot runs and batch production.</p>
            <div className="feature-list">
              <div className="feature"><strong>Vehicle and engine assessment</strong><span>Project requirements are evaluated by platform, engine condition, installation space and target market.</span></div>
              <div className="feature"><strong>Prototype and validation support</strong><span>Scope and acceptance criteria are defined for each project.</span></div>
              <div className="feature"><strong>OEM, ODM and private label</strong><span>Product, structure, packaging and branding options are agreed in writing for each order.</span></div>
            </div>
            <Link className="text-link" href="/oem-odm">Explore OEM & ODM services →</Link>
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <SectionTitle eyebrow="Quality approach" title="Internal controls from engineering to final inspection" text="Products are developed and produced under internal technical specifications, assembly procedures and outgoing inspection processes." />
          <div className="grid-3">
            <div className="info-card"><p className="eyebrow">01</p><h3>Engineering review</h3><p>Vehicle, engine, installation and operating conditions are evaluated before a project scope is confirmed.</p></div>
            <div className="info-card"><p className="eyebrow">02</p><h3>Production control</h3><p>Key dimensions, assembly condition, sealing, running performance and appearance are checked before release.</p></div>
            <div className="info-card"><p className="eyebrow">03</p><h3>Traceable support</h3><p>Product model and serial information support technical review and after-sales communication.</p></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div><p className="eyebrow">Company trust</p><h2>Technical development backed by documented patents and qualifications.</h2><p className="lead">Hidriving holds more than 20 valid patents. The company qualification and patent records support corporate technical capability; they are not presented as product or quality-system certifications.</p><Link className="button" href="/patents-qualifications">View Patents & Qualifications</Link></div>
          <div className="visual"><Image src="/images/qualification.jpg" alt="High and New Technology Enterprise certificate of Hanqu Wuxi Automotive Technology" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
        </div>
      </section>
      <section className="section section-soft"><div className="container"><div className="notice"><strong>3-Year Limited Product Warranty</strong><p>Covers eligible defects in materials and workmanship, subject to installation, operating and regional warranty terms.</p><Link className="text-link" href="/warranty">Read the warranty overview →</Link></div></div></section>
      <CtaBand />
    </>
  );
}
