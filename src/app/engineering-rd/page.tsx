import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageParts";
import { engineeringCategories } from "@/data/engineering";

export const metadata: Metadata = {
  title: "Engineering & R&D",
  description:
    "Explore Hidriving vehicle-specific development, 3D engineering, prototype development, testing and OEM/ODM manufacturing capabilities.",
};

export default function EngineeringRdPage() {
  return (
    <>
      <div className="engineering-page-hero">
        <PageHero
          eyebrow="Engineering & R&D"
          title="From vehicle analysis to production-ready supercharger systems"
          text="From vehicle analysis and 3D engineering to prototype development, testing and mass production, we provide complete supercharger kit development solutions."
        />
      </div>

      <nav className="engineering-detail-nav" aria-label="Engineering and R&D categories">
        <div className="container engineering-detail-links">
          {engineeringCategories.map((category) => (
            <Link key={category.id} href={`#${category.id}`}>
              <span>{category.index}</span>
              {category.title}
            </Link>
          ))}
        </div>
      </nav>

      <section className="section engineering-detail-intro">
        <div className="container narrow">
          <p className="eyebrow">Development evidence</p>
          <h2>Engineering activities documented by category</h2>
          <p className="lead">
            The media below documents engineering, prototype, testing and manufacturing activities. Vehicle images identify platform development work and are not presented as customer endorsements.
          </p>
        </div>
      </section>

      {engineeringCategories.map((category, categoryIndex) => (
        <section
          id={category.id}
          key={category.id}
          className={`section engineering-category${categoryIndex % 2 === 0 ? " section-soft" : ""}`}
          aria-labelledby={`${category.id}-title`}
        >
          <div className="container">
            <div className="engineering-category-heading">
              <span className="engineering-category-index">{category.index}</span>
              <div>
                <h2 id={`${category.id}-title`}>{category.title}</h2>
                <p className="lead">{category.summary}</p>
              </div>
            </div>

            <div className="engineering-media-grid">
              {category.media.map((item) => (
                <figure className="engineering-media-card" key={item.src}>
                  <div
                    className={`engineering-media-frame${item.type === "image" && item.fit === "contain" ? " engineering-media-contain" : ""}`}
                  >
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw"
                      />
                    ) : (
                      <video controls muted playsInline preload="metadata" poster={item.poster}>
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support HTML video.
                      </video>
                    )}
                  </div>
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
