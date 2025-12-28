import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to generate clean slug (no hyphens, no underscores, lowercase only)
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/'/g, '') // Remove apostrophes
    .replace(/[^a-z0-9]+/g, '') // Remove all non-alphanumeric characters
    .trim();
};

// Helper to get component name from location name
const getComponentName = (name) => {
  return name.replace(/[^a-zA-Z0-9]/g, '');
};

// New locations with their counties (using "Florida" for uncertain ones)
const newLocations = [
  { name: "Alafaya", county: "Orange County" },
  { name: "Andover", county: "Florida" },
  { name: "Andrews", county: "Florida" },
  { name: "Azalea Park", county: "Orange County" },
  { name: "Bay Pines", county: "Pinellas County" },
  { name: "Bayshore Gardens", county: "Manatee County" },
  { name: "Bell", county: "Gilchrist County" },
  { name: "Bellair-Meadowbrook Terrace", county: "Pinellas County" },
  { name: "Beverly Hills", county: "Citrus County" },
  { name: "Biscayne Park", county: "Miami-Dade County" },
  { name: "Black Diamond", county: "Citrus County" },
  { name: "Bloomingdale", county: "Hillsborough County" },
  { name: "Brownsville", county: "Miami-Dade County" },
  { name: "Buckingham", county: "Lee County" },
  { name: "Callaway Bay", county: "Bay County" },
  { name: "Campbellton", county: "Jackson County" },
  { name: "Carrollwood", county: "Hillsborough County" },
  { name: "Century Village", county: "Palm Beach County" },
  { name: "Charleston Park", county: "Lee County" },
  { name: "Chuluota", county: "Seminole County" },
  { name: "Citrus Hills", county: "Citrus County" },
  { name: "Citrus Springs", county: "Citrus County" },
  { name: "Cocoa", county: "Brevard County" },
  { name: "Cocoa Beach", county: "Brevard County" },
  { name: "Conway", county: "Orange County" },
  { name: "Coral Terrace", county: "Miami-Dade County" },
  { name: "Country Club Hills", county: "Florida" },
  { name: "Cypress Gardens", county: "Polk County" },
  { name: "Dania Beach", county: "Broward County" },
  { name: "Deerfield Beach", county: "Broward County" },
  { name: "East Lake", county: "Pinellas County" },
  { name: "East Milton", county: "Santa Rosa County" },
  { name: "Edgewood", county: "Orange County" },
  { name: "Egypt Lake-Leto", county: "Hillsborough County" },
  { name: "Fairview Shores", county: "Orange County" },
  { name: "Fellsmere Farms", county: "Indian River County" },
  { name: "Fern Park", county: "Seminole County" },
  { name: "Fisher Island", county: "Miami-Dade County" },
  { name: "Forest City", county: "Seminole County" },
  { name: "Fruitland Park", county: "Lake County" },
  { name: "Gladeview", county: "Miami-Dade County" },
  { name: "Glenvar Heights", county: "Miami-Dade County" },
  { name: "Golden Glades", county: "Miami-Dade County" },
  { name: "Grant-Valkaria", county: "Brevard County" },
  { name: "Harbour Heights", county: "Charlotte County" },
  { name: "Highland City", county: "Polk County" },
  { name: "Hillcrest Heights", county: "Pinellas County" },
  { name: "Holly Hill", county: "Volusia County" },
  { name: "Holmes Beach", county: "Manatee County" },
  { name: "Indian Harbour Beach", county: "Brevard County" },
  { name: "Indian River Shores", county: "Indian River County" },
  { name: "Indialantic", county: "Brevard County" },
  { name: "Jupiter", county: "Palm Beach County" },
  { name: "Jupiter Farms", county: "Palm Beach County" },
  { name: "Jupiter Inlet Colony", county: "Palm Beach County" },
  { name: "Kendall West", county: "Miami-Dade County" },
  { name: "Key Biscayne", county: "Miami-Dade County" },
  { name: "Lake Buena Vista", county: "Orange County" },
  { name: "Lake Butler", county: "Union County" },
  { name: "Lake Clarke Shores", county: "Palm Beach County" },
  { name: "Lake Helen", county: "Volusia County" },
  { name: "Lake Panasoffkee", county: "Sumter County" },
  { name: "Lighthouse Point", county: "Broward County" },
  { name: "Lochmoor Waterway Estates", county: "Lee County" },
  { name: "Longboat Key", county: "Sarasota County" },
  { name: "Manalapan", county: "Palm Beach County" },
  { name: "Mangonia Park", county: "Palm Beach County" },
  { name: "Margate", county: "Broward County" },
  { name: "Medulla", county: "Polk County" },
  { name: "Melbourne", county: "Brevard County" },
  { name: "Melbourne Beach", county: "Brevard County" },
  { name: "Melbourne Village", county: "Brevard County" },
  { name: "Miami Lakes", county: "Miami-Dade County" },
  { name: "Miramar Lakes", county: "Broward County" },
  { name: "North Bay Village", county: "Miami-Dade County" },
  { name: "North Lauderdale", county: "Broward County" },
  { name: "North Palm Beach", county: "Palm Beach County" },
  { name: "Oakleaf Plantation", county: "Clay County" },
  { name: "Palm Bay", county: "Brevard County" },
  { name: "Palm Beach Gardens", county: "Palm Beach County" },
  { name: "Palm Springs", county: "Palm Beach County" },
  { name: "Palmetto", county: "Manatee County" },
  { name: "Parkland", county: "Broward County" },
  { name: "Royal Palm Beach", county: "Palm Beach County" },
  { name: "South Daytona", county: "Volusia County" },
  { name: "South Palm Beach", county: "Palm Beach County" },
  { name: "Tamiami", county: "Miami-Dade County" },
  { name: "Tequesta", county: "Palm Beach County" },
  { name: "The Acreage", county: "Palm Beach County" },
  { name: "Three Lakes", county: "Miami-Dade County" },
  { name: "Tierra Verde", county: "Pinellas County" },
  { name: "Treasure Island", county: "Pinellas County" },
  { name: "University Park", county: "Miami-Dade County" },
  { name: "Venice Gardens", county: "Sarasota County" },
  { name: "Wellington", county: "Palm Beach County" },
  { name: "West Melbourne", county: "Brevard County" },
  { name: "West Park", county: "Broward County" },
  { name: "Westwood Lakes", county: "Miami-Dade County" },
  { name: "Wilton Manors", county: "Broward County" },
  { name: "Zolfo Springs", county: "Hardee County" },
];

// Read current locations file
const locationsFilePath = path.join(__dirname, 'src', 'data', 'locations.ts');
let content = fs.readFileSync(locationsFilePath, 'utf8');

// Generate location entries
const locationEntries = newLocations.map(loc => {
  const slug = generateSlug(loc.name);
  return `  { name: "${loc.name}", slug: "${slug}", county: "${loc.county}", phone: "(689) 340-5795" },`;
}).join('\n');

// Add before the closing bracket
content = content.replace(
  /  { name: "Golden Beach", slug: "goldenbeach", county: "Miami-Dade County", phone: "\(689\) 340-5795" },?\n\];/,
  `  { name: "Golden Beach", slug: "goldenbeach", county: "Miami-Dade County", phone: "(689) 340-5795" },\n${locationEntries}\n];`
);

// Write back to file
fs.writeFileSync(locationsFilePath, content, 'utf8');
console.log(`✅ Added ${newLocations.length} new locations to locations.ts`);

// Generate page files
const pagesDir = path.join(__dirname, 'src', 'pages', 'locations');

newLocations.forEach(loc => {
  const compName = getComponentName(loc.name);
  const slug = generateSlug(loc.name);
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
      slug="${slug}"
    />
  );
};

export default ${compName};
`;

  fs.writeFileSync(filePath, pageContent, 'utf8');
  console.log(`Generated: ${fileName}`);
});

console.log(`\n✅ Generated ${newLocations.length} new location page files!`);

