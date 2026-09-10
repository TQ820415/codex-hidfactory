import type { Metadata } from "next";
import { CtaBand, PageHero, SectionTitle } from "@/components/PageParts";

export const metadata: Metadata = { title: "OEM & ODM Supercharger Services", description: "Supercharger kit engineering, prototype, testing and batch production support." };

const services = [
  ["Vehicle & engine assessment", "Target platform, engine condition, installation space, fuel and market requirements are assessed by project."],
  ["Supercharger system design", "Support can cover supercharger selection, mounting, belt drive, intake routing and intercooling configuration."],
  ["Prototype & vehicle testing", "Prototype manufacturing, installation verification and agreed performance or durability tests are defined for each project."],
  ["ECU & powertrain coordination", "Calibration support is evaluated separately according to hardware, fuel, engine condition and target market."],
  ["Pilot & batch production", "BOM, machining, assembly, inspection, traceability, packaging and export delivery scope are agreed by order."],
  ["Private label & packaging", "Logo, nameplate, appearance, packaging, labels and manuals can be developed with documented authorization."],
];

export default function OemPage() {
  return <><div className="oem-page-hero"><PageHero eyebrow="OEM & ODM" title="From vehicle concept to production-ready supercharger kits" text="Engineering and manufacturing support for automotive brands, tuning brands, distributors, vehicle manufacturers and project partners." /></div><section className="section"><div className="container"><SectionTitle eyebrow="Capabilities" title="A project scope built around the target platform" text="Every program is evaluated individually. No fixed performance result, lead time, MOQ, capacity or exclusivity is promised before written project confirmation." /><div className="grid-3">{services.map(([title, text]) => <div className="info-card" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></div></section><section className="section section-soft"><div className="container"><SectionTitle eyebrow="Cooperation process" title="A clear path from requirements to batch delivery" /><div className="grid-3">{["Submit vehicle, engine and project requirements","Evaluate installation space and technical feasibility","Confirm scope, responsibilities and acceptance criteria","Complete engineering design and prototype","Run agreed vehicle and performance verification","Confirm pilot build and batch production"].map((item, i) => <div className="info-card" key={item}><p className="eyebrow">Step {i + 1}</p><h3>{item}</h3></div>)}</div></div></section><CtaBand /></>;
}
