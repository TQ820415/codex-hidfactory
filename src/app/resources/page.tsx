import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageParts";

export const metadata: Metadata = { title: "Resources", description: "Hidriving product, warranty and inquiry resources." };

const resources = [
  ["Product selection", "Review current product models and confirmed specifications.", "/products", "Browse products"],
  ["OEM & ODM scope", "Understand available engineering, prototype and production support.", "/oem-odm", "Explore services"],
  ["Frequently asked questions", "Review fitment, project and warranty questions.", "/faq", "Read FAQ"],
  ["Limited warranty overview", "Review the current warranty summary and regional review boundary.", "/warranty", "Warranty overview"],
];

export default function ResourcesPage() {
  return <><PageHero eyebrow="Resources" title="Information for product and project evaluation" text="Confirmed website resources are collected here. Unapproved downloads, blog posts and technical documents are intentionally not presented as public files." /><section className="section"><div className="container grid-2">{resources.map(([title,text,href,label]) => <div className="info-card" key={title}><h2 style={{ fontSize: "1.7rem" }}>{title}</h2><p>{text}</p><Link className="text-link" href={href}>{label} →</Link></div>)}</div></section><CtaBand /></>;
}
