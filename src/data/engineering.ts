export type EngineeringMedia =
  | {
      type: "image";
      src: string;
      title: string;
      alt: string;
      fit?: "cover" | "contain";
    }
  | {
      type: "video";
      src: string;
      title: string;
      poster?: string;
    };

export type EngineeringCategory = {
  id: string;
  index: string;
  title: string;
  summary: string;
  media: EngineeringMedia[];
};

const vehicleImage = (file: string, title: string): EngineeringMedia => ({
  type: "image",
  src: `/images/engineering/categories/vehicle-specific-development/${file}`,
  title,
  alt: `${title} vehicle-specific supercharger development system`,
});

const engineeringImage = (
  category: string,
  file: string,
  title: string,
  alt: string,
  fit: "cover" | "contain" = "cover",
): EngineeringMedia => ({
  type: "image",
  src: `/images/engineering/categories/${category}/${file}`,
  title,
  alt,
  fit,
});

const engineeringVideo = (
  category: string,
  file: string,
  title: string,
  poster?: string,
): EngineeringMedia => ({
  type: "video",
  src: `/videos/engineering/categories/${category}/${file}`,
  title,
  poster,
});

export const engineeringCategories: EngineeringCategory[] = [
  {
    id: "vehicle-specific-development",
    index: "01",
    title: "Vehicle-Specific Development",
    summary:
      "Vehicle-specific supercharger kit development based on the target vehicle and engine platform.",
    media: [
      vehicleImage("260910/16308-suzuki-jimny-1-5l-k15b-supercharger-system.png", "16308 Suzuki Jimny 1.5L K15B Supercharger System"),
      vehicleImage("260910/24101-toyota-alphard-vellfire-2-5l-30-series-2ar-fe-supercharger-system.png", "24101 Toyota Alphard & Vellfire 2.5L 30 Series 2AR-FE Supercharger System"),
      vehicleImage("260910/24102-toyota-alphard-vellfire-2-5l-30-series-2ar-fxe-supercharger-system.png", "24102 Toyota Alphard & Vellfire 2.5L 30 Series 2AR-FXE Supercharger System"),
      vehicleImage("260910/24103-toyota-land-cruiser-4-0l-1gr-dvvt-supercharger-system-v2.jpg", "24103 Toyota Land Cruiser 4.0L 1GR DVVT Supercharger System"),
      vehicleImage("260910/24104-jeep-gladiator-3-6l-pentastar-supercharger-system.png", "24104 Jeep Gladiator 3.6L Pentastar Supercharger System"),
      vehicleImage("260910/24105-nissan-patrol-4-0l-vq40-supercharger-system.jpg", "24105 Nissan Patrol 4.0L VQ40 Supercharger System"),
      vehicleImage("260910/24107-jeep-wrangler-3-0l-pentastar-supercharger-system.png", "24107 Jeep Wrangler 3.0L Pentastar Supercharger System"),
      vehicleImage("260910/24108-jeep-wrangler-3-6l-pentastar-supercharger-system.png", "24108 Jeep Wrangler 3.6L Pentastar Supercharger System"),
      vehicleImage("260910/24109-toyota-prado-2-7l-2tr-supercharger-system.png", "24109 Toyota Prado 2.7L 2TR Supercharger System"),
      vehicleImage("260910/24110-toyota-prado-fj-4-0l-1gr-vvt-supercharger-system-v2.jpg", "24110 Toyota Prado & FJ 4.0L 1GR VVT Supercharger System"),
      vehicleImage("260910/24111-toyota-lc-70-series-4-0l-1gr-vvt-supercharger-system.jpg", "24111 Toyota LC 70 Series 4.0L 1GR VVT Supercharger System"),
      vehicleImage("260910/24112-toyota-tacoma-prado-3-5l-2gr-7gr-supercharger-system.jpg", "24112 Toyota Tacoma & Prado 3.5L 2GR & 7GR Supercharger System"),
      vehicleImage("260910/24113-toyota-prado-fj-4-0l-1gr-dvvt-supercharger-system.jpg", "24113 Toyota Prado & FJ 4.0L 1GR DVVT Supercharger System"),
      vehicleImage("260910/24116-jeep-grand-cherokee-3-6l-pentastar-supercharger-system.png", "24116 Jeep Grand Cherokee 3.6L Pentastar Supercharger System"),
      vehicleImage("260910/24117-toyota-sienna-2-5l-a25-supercharger-system.jpg", "24117 Toyota Sienna 2.5L A25 Supercharger System"),
      vehicleImage("260910/24118-toyota-alphard-vellfire-2-5l-a25-supercharger-system.jpg", "24118 Toyota Alphard & Vellfire 2.5L A25 Supercharger System"),
    ],
  },
  {
    id: "3d-design-engineering",
    index: "02",
    title: "3D Design & Engineering",
    summary:
      "3D scanning, CAD modeling and engineering analysis for brackets, pulleys, intake routing and system packaging.",
    media: [
      engineeringImage(
        "3d-design-engineering",
        "3d-scan-cad-fitment.jpg",
        "3D scan and CAD fitment",
        "3D-scanned vehicle engine bay with a supercharger system CAD model",
        "contain",
      ),
      engineeringVideo(
        "3d-design-engineering",
        "cad-3d-design.mp4",
        "CAD 3D Design",
        "/images/engineering/categories/3d-design-engineering/3d-scan-cad-fitment.jpg",
      ),
      engineeringVideo(
        "3d-design-engineering",
        "cae-strain-analysis.mp4",
        "CAE Strain Analysis",
        "/images/engineering/categories/3d-design-engineering/3d-scan-cad-fitment.jpg",
      ),
    ],
  },
  {
    id: "prototype-development",
    index: "03",
    title: "Prototype Development",
    summary:
      "Prototype production, trial fitment and structural review before further validation.",
    media: [
      engineeringImage(
        "prototype-development",
        "3d-printed-prototype-fitment.png",
        "3D-printed prototype fitment",
        "3D-printed supercharger system prototype installed for vehicle fitment review",
      ),
    ],
  },
  {
    id: "testing-validation",
    index: "04",
    title: "Testing & Validation",
    summary:
      "Bench, data-collection, vehicle and NVH-related testing materials used during validation.",
    media: [
      engineeringImage("testing-validation", "bench-test-rig.png", "Bench test rig", "Supercharger system mounted on a bench test rig"),
      engineeringVideo("testing-validation", "bench-test.mp4", "Bench Test", "/images/engineering/categories/testing-validation/bench-test-rig.png"),
      engineeringImage("testing-validation", "development-process.png", "Development and validation process", "Engineering development and validation process overview", "contain"),
      engineeringVideo("testing-validation", "data-collection.mp4", "Data Collection", "/images/engineering/categories/testing-validation/development-process.png"),
      engineeringImage("testing-validation", "horsepower-testing-vehicle.jpg", "Vehicle horsepower testing", "Vehicle prepared for horsepower testing"),
      engineeringVideo("testing-validation", "horsepower-testing-vehicle.mp4", "Vehicle Horsepower Test", "/images/engineering/categories/testing-validation/horsepower-testing-vehicle.jpg"),
      engineeringImage("testing-validation", "horsepower-testing-control.jpg", "Horsepower test monitoring", "Test equipment display used during horsepower testing"),
      engineeringVideo("testing-validation", "horsepower-testing-run.mp4", "Horsepower Testing Run", "/images/engineering/categories/testing-validation/horsepower-testing-control.jpg"),
      engineeringImage("testing-validation", "nvh-testing.png", "NVH testing", "NVH measurement and analysis screens", "contain"),
      engineeringImage("testing-validation", "vehicle-performance-debugging.jpg", "Vehicle performance debugging", "Engineering laptop used for vehicle performance debugging"),
    ],
  },
  {
    id: "oem-odm-development",
    index: "05",
    title: "OEM / ODM Development",
    summary:
      "Machining, inspection, assembly and product preparation materials supporting project-based OEM/ODM development.",
    media: [
      engineeringImage("oem-odm-development", "on-site-technical-discussion.jpg", "On-site technical discussion", "Technical discussion in the production facility"),
      engineeringImage("oem-odm-development", "cnc-workshop.png", "CNC workshop", "CNC machining equipment in the production workshop"),
      engineeringImage("oem-odm-development", "cnc-machine-1.jpg", "CNC machining equipment", "CNC machining equipment used for component production"),
      engineeringImage("oem-odm-development", "cnc-machine-2.jpg", "CNC production process", "CNC equipment used during component production"),
      engineeringVideo("oem-odm-development", "5-axis-machining.mp4", "5 Axis Machining", "/images/engineering/categories/oem-odm-development/cnc-workshop.png"),
      engineeringImage("oem-odm-development", "cmm-inspection.jpg", "CMM inspection", "Coordinate measuring equipment used for dimensional inspection"),
      engineeringImage("oem-odm-development", "balancing-machine.jpg", "Balancing machine", "Balancing equipment used during component inspection"),
      engineeringImage("oem-odm-development", "semi-automatic-assembly.png", "Semi-automatic assembly", "Semi-automatic equipment used during assembly"),
      engineeringImage("oem-odm-development", "rotor-display.jpg", "Rotor display", "Supercharger rotor components on display"),
      engineeringImage("oem-odm-development", "product-display.jpg", "Product display", "Supercharger products prepared for display"),
      engineeringImage("oem-odm-development", "oem-products.jpg", "OEM Products", "OEM supercharger products prepared for project review"),
    ],
  },
];
