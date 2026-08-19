import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const pages = ["", "/products", "/engineering-rd", "/oem-odm", "/applications", "/about", "/patents-qualifications", "/resources", "/faq", "/contact"];
  return [...pages.map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : .7 })), ...products.map((product) => ({ url: `${base}/products/${product.slug}`, changeFrequency: "monthly" as const, priority: .8 }))];
}
