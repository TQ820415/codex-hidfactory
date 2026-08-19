import type { Metadata } from "next";
import { PageHero, ProductCard, CtaBand } from "@/components/PageParts";
import { products } from "@/data/products";

export const metadata: Metadata = { title: "Supercharger Kits", description: "Browse Hidriving supercharger kits by vehicle and engine platform." };

export default function ProductsPage() {
  const brands = [...new Set(products.map((product) => product.brand))];
  return <><PageHero eyebrow="Products" title="Supercharger kits" text="Browse current models by vehicle and engine platform. Specifications are based on the confirmed product parameter table; vehicle years and final fitment are not stated." />{brands.map((brand) => <section className="section" key={brand}><div className="container"><div className="section-title"><p className="eyebrow">{brand}</p><h2>{brand} platforms</h2></div><div className="grid-3">{products.filter((p) => p.brand === brand).map((product) => <ProductCard key={product.slug} product={product} />)}</div></div></section>)}<CtaBand /></>;
}
