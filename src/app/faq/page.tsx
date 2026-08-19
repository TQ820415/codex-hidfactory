import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageParts";

export const metadata: Metadata = { title: "FAQ", description: "Frequently asked questions about Hidriving supercharger kits and OEM/ODM projects." };

const faqs = [
  ["How do I confirm the correct kit?", "Send the vehicle, engine model, current hardware configuration and intended use. Vehicle years and detailed compatibility are not claimed without review."],
  ["Do you support OEM and ODM projects?", "Yes. Confirmed scope can include engineering, structural design, prototype manufacturing, vehicle testing, pilot production, batch production, private label and packaging."],
  ["Can you support ECU calibration?", "Support may be provided or coordinated according to the vehicle, engine condition, hardware, fuel and target market. Scope is evaluated separately."],
  ["What information is needed for a project inquiry?", "Provide the target vehicle, engine, current power and torque where available, target requirements, fuel, left- or right-hand drive configuration, expected quantity and target market."],
  ["What does the limited warranty cover?", "Eligible defects in materials and workmanship are covered subject to installation, operating and regional terms. Review the warranty overview and written order terms."],
  ["Do you publish prices, stock or fixed lead times online?", "No. Price, quantity, scope and schedule depend on the selected product or project and are confirmed through an inquiry."],
];

export default function FaqPage() { return <><PageHero eyebrow="FAQ" title="Questions buyers ask before an inquiry" text="These answers use confirmed source information and keep product fitment, project scope and warranty conditions explicit." /><section className="section"><div className="container narrow">{faqs.map(([q,a]) => <details className="info-card" style={{ marginBottom: 14 }} key={q}><summary style={{ cursor:"pointer", fontWeight:800, fontSize:"1.1rem" }}>{q}</summary><p style={{ marginTop:14 }}>{a}</p></details>)}</div></section><CtaBand /></>; }
