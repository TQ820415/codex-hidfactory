import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageParts";

export const metadata: Metadata = { title: "Vehicle Applications", description: "Current Hidriving supercharger kit platforms by vehicle and engine family." };

const platforms = [
  ["Toyota 2TR 2.7L", "Prado / Hilux and related platform references"],
  ["Toyota / Lexus 2AR 2.5L", "Alphard / Vellfire / Lexus LM platform references"],
  ["Toyota / Lexus 1GR 4.0L", "Prado / Land Cruiser / FJ platform references"],
  ["Nissan VQ40 4.0L", "Patrol platform reference"],
  ["Jeep Pentastar", "Wrangler / Gladiator / Grand Cherokee platform references"],
  ["Toyota 2GR & 7GR 3.5L", "Tacoma / Prado platform references"],
];

export default function ApplicationsPage() {
  return <><PageHero eyebrow="Applications" title="Vehicle and engine platform overview" text="Use these groups as an inquiry starting point. Vehicle years, detailed variants and final fitment are not claimed on this page." /><section className="section"><div className="container"><div className="grid-3">{platforms.map(([title, text]) => <div className="info-card" key={title}><p className="eyebrow">Platform reference</p><h2 style={{ fontSize: "1.65rem" }}>{title}</h2><p>{text}</p><Link className="text-link" href="/products">Review current products →</Link></div>)}</div><div className="notice" style={{ marginTop: 40 }}><strong>Application boundary</strong><p>Engine-bay and installation images illustrate product use only. They are not presented as customer cases, verified performance results or evidence of sales in a particular country.</p></div></div></section><CtaBand /></>;
}
