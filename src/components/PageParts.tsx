import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero"><div className="container narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{text}</p></div></section>;
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link className="product-image" href={`/products/${product.slug}`}>
        <Image src={product.image} alt={`${product.vehicle} ${product.engine} supercharger kit`} fill sizes="(max-width: 760px) 100vw, 33vw" />
      </Link>
      <div className="product-card-body">
        <p className="card-meta">Model {product.model} · {product.engine}</p>
        <h3><Link href={`/products/${product.slug}`}>{product.vehicle}</Link></h3>
        <div className="spec-row"><span>{product.pressure}</span><span>{product.pulley} pulley</span></div>
        <Link className="text-link" href={`/products/${product.slug}`}>View details →</Link>
      </div>
    </article>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band"><div className="container cta-inner"><div><p className="eyebrow">Start a technical conversation</p><h2>Tell us your vehicle, engine and project requirements.</h2></div><div className="button-row"><Link className="button" href="/contact">Request a Quote</Link><Link className="button button-secondary" href="/oem-odm">Explore OEM & ODM</Link></div></div></section>
  );
}
