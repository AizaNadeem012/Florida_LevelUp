import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to get component name from location name
const getComponentName = (name) => {
  return name.replace(/[^a-zA-Z0-9]/g, '');
};

// Final 6 locations
const finalLocations = [
  { name: "Anna Maria", slug: "annamaria", county: "Manatee County" },
  { name: "Belleair Beach", slug: "belleairbeach", county: "Pinellas County" },
  { name: "Cape Canaveral", slug: "capecanaveral", county: "Brevard County" },
  { name: "Crystal Lake", slug: "crystallake", county: "Florida" },
  { name: "Fort Meade", slug: "fortmeade", county: "Polk County" },
];

const pagesDir = path.join(__dirname, 'src', 'pages', 'locations');

finalLocations.forEach(loc => {
  const compName = getComponentName(loc.name);
  const fileName = `${compName}.tsx`;
  const filePath = path.join(pagesDir, fileName);
  
  const pageContent = `import React from "react";
import LocationTemplate from "./LocationTemplate";

const ${compName} = () => {
  return (
    <LocationTemplate
      location="${loc.name}"
      county="${loc.county}"
      phone="(689) 340-5795"
      slug="${loc.slug}"
    />
  );
};

export default ${compName};
`;

  fs.writeFileSync(filePath, pageContent, 'utf8');
  console.log(`Generated: ${fileName}`);
});

console.log(`\n✅ Generated ${finalLocations.length} final location page files!`);
console.log(`🎉 Total: 400 location pages now!`);

