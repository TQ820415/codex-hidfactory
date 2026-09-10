export type Product = {
  model: string;
  slug: string;
  vehicle: string;
  engine: string;
  pressure: string;
  pulley: string;
  brand: "Toyota / Lexus" | "Nissan" | "Jeep" | "Suzuki";
  image: string;
  galleryImages?: string[];
};

export const products: Product[] = [
  { model: "16308", slug: "suzuki-k15b-16308", vehicle: "Suzuki Jimny", engine: "K15B", pressure: "0.6 Bar", pulley: "95 mm", brand: "Suzuki", image: "/images/products/suzuki-k15b.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/16308-suzuki-jimny-1-5l-k15b-supercharger-system.png"] },
  { model: "24101", slug: "toyota-2ar-fe-24101", vehicle: "Toyota Alphard / Vellfire / Lexus LM 30 Series", engine: "2AR-FE", pressure: "0.45 Bar", pulley: "64 mm", brand: "Toyota / Lexus", image: "/images/products/toyota-2ar-fe-30.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24101-toyota-alphard-vellfire-2-5l-30-series-2ar-fe-supercharger-system.png"] },
  { model: "24102", slug: "toyota-2ar-fxe-24102", vehicle: "Toyota Alphard / Vellfire / Lexus LM", engine: "2AR-FXE", pressure: "0.45 Bar", pulley: "64 mm", brand: "Toyota / Lexus", image: "/images/products/toyota-2ar-fxe.png", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24102-toyota-alphard-vellfire-2-5l-30-series-2ar-fxe-supercharger-system.png"] },
  { model: "24103", slug: "toyota-1gr-dvvt-24103", vehicle: "Toyota Land Cruiser", engine: "1GR-DVVT", pressure: "0.5 Bar", pulley: "60 mm", brand: "Toyota / Lexus", image: "/images/products/toyota-land-cruiser-1gr.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24103-toyota-land-cruiser-4-0l-1gr-dvvt-supercharger-system-v2.jpg"] },
  { model: "24104", slug: "jeep-pentastar-24104", vehicle: "Jeep Gladiator", engine: "Pentastar 3.6L", pressure: "0.52 Bar", pulley: "71 mm", brand: "Jeep", image: "/images/products/jeep-gladiator-36.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24104-jeep-gladiator-3-6l-pentastar-supercharger-system.png"] },
  { model: "24105", slug: "nissan-vq40-24105", vehicle: "Nissan Patrol", engine: "VQ40", pressure: "0.45 Bar", pulley: "64.5 mm", brand: "Nissan", image: "/images/products/nissan-vq40.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24105-nissan-patrol-4-0l-vq40-supercharger-system.jpg"] },
  { model: "24107", slug: "jeep-pentastar-30-24107", vehicle: "Jeep Wrangler", engine: "Pentastar 3.0L", pressure: "0.5 Bar", pulley: "84 mm", brand: "Jeep", image: "/images/products/jeep-wrangler-30.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24107-jeep-wrangler-3-0l-pentastar-supercharger-system.png"] },
  { model: "24108", slug: "jeep-pentastar-36-24108", vehicle: "Jeep Wrangler", engine: "Pentastar 3.6L", pressure: "0.5 Bar", pulley: "71 mm", brand: "Jeep", image: "/images/products/jeep-wrangler-36.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24108-jeep-wrangler-3-6l-pentastar-supercharger-system.png"] },
  { model: "24109", slug: "toyota-2tr-fe-24109", vehicle: "Toyota Prado / Hilux", engine: "2TR-FE", pressure: "0.5 Bar", pulley: "52.5 mm", brand: "Toyota / Lexus", image: "/images/products/toyota-2tr-fe.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24109-toyota-prado-2-7l-2tr-supercharger-system.png"] },
  { model: "24110", slug: "toyota-1gr-vvt-24110", vehicle: "Toyota Prado / FJ Cruiser", engine: "1GR-VVT", pressure: "0.5 Bar", pulley: "59.5 mm", brand: "Toyota / Lexus", image: "/images/products/toyota-prado-fj-1gr.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24110-toyota-prado-fj-4-0l-1gr-vvt-supercharger-system-v2.jpg"] },
  { model: "24111", slug: "toyota-lc70-1gr-24111", vehicle: "Toyota LC71 / LC76 / LC78 / LC79", engine: "1GR-VVT", pressure: "0.5 Bar", pulley: "59.5 mm", brand: "Toyota / Lexus", image: "/images/products/toyota-lc70-1gr.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24111-toyota-lc-70-series-4-0l-1gr-vvt-supercharger-system.jpg"] },
  { model: "24112", slug: "toyota-2gr-7gr-24112", vehicle: "Toyota Tacoma / Prado", engine: "2GR & 7GR", pressure: "0.5 Bar", pulley: "63.5 mm", brand: "Toyota / Lexus", image: "/images/products/toyota-2gr-7gr.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24112-toyota-tacoma-prado-3-5l-2gr-7gr-supercharger-system.jpg"] },
  { model: "24113", slug: "toyota-1gr-dvvt-24113", vehicle: "Toyota Prado", engine: "1GR-DVVT", pressure: "0.5 Bar", pulley: "59.5 mm", brand: "Toyota / Lexus", image: "/images/products/toyota-prado-1gr-dvvt.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24113-toyota-prado-fj-4-0l-1gr-dvvt-supercharger-system.jpg"] },
  { model: "24115", slug: "toyota-2ar-fe-24115", vehicle: "Toyota Alphard / Vellfire 40 Series", engine: "2AR-FE", pressure: "0.45 Bar", pulley: "59.5 mm", brand: "Toyota / Lexus", image: "/images/products/toyota-2ar-fe-40.jpg" },
  { model: "24116", slug: "jeep-grand-cherokee-24116", vehicle: "Jeep Grand Cherokee", engine: "Pentastar 3.6L", pressure: "0.45 Bar", pulley: "71 mm", brand: "Jeep", image: "/images/products/jeep-grand-cherokee-36.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24116-jeep-grand-cherokee-3-6l-pentastar-supercharger-system.png"] },
  { model: "24117", slug: "toyota-sienna-a25-24117", vehicle: "Toyota Sienna", engine: "A25 2.5L naturally aspirated", pressure: "0.5 Bar", pulley: "64 mm", brand: "Toyota / Lexus", image: "/images/products/toyota-sienna-a25.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24117-toyota-sienna-2-5l-a25-supercharger-system.jpg"] },
  { model: "24118", slug: "toyota-a25-24118", vehicle: "Toyota Alphard / Vellfire", engine: "A25 2.5L naturally aspirated", pressure: "0.5 Bar", pulley: "64 mm", brand: "Toyota / Lexus", image: "/images/products/toyota-a25.jpg", galleryImages: ["/images/engineering/categories/vehicle-specific-development/260910/24118-toyota-alphard-vellfire-2-5l-a25-supercharger-system.jpg"] },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
