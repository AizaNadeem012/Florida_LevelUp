import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to generate clean slug (no hyphens, no underscores, lowercase only)
const generateCleanSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/'/g, '') // Remove apostrophes
    .replace(/[^a-z0-9]+/g, '') // Remove all non-alphanumeric characters
    .trim();
};

// Read the locations file
const filePath = path.join(__dirname, 'src', 'data', 'locations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Parse locations from the file content
const locationsMatch = content.match(/export const locations: Location\[\] = \[([\s\S]*?)\];/);
if (!locationsMatch) {
  console.error('Could not find locations array');
  process.exit(1);
}

const locationsArray = locationsMatch[1];
const locationEntries = locationsArray.match(/\{ name: "([^"]+)", slug: "([^"]+)", county: "([^"]+)", phone: "([^"]+)" \}/g) || [];

const locations = locationEntries.map(entry => {
  const match = entry.match(/name: "([^"]+)", slug: "([^"]+)", county: "([^"]+)", phone: "([^"]+)"/);
  return {
    name: match[1],
    slug: match[2],
    county: match[3],
    phone: match[4]
  };
});

// Update each location's slug
locations.forEach(loc => {
  const oldSlug = loc.slug;
  const newSlug = generateCleanSlug(loc.name);
  
  // Replace the slug in the file
  const oldPattern = new RegExp(`slug: "${oldSlug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
  const newPattern = `slug: "${newSlug}"`;
  content = content.replace(oldPattern, newPattern);
  
  console.log(`${loc.name}: "${oldSlug}" -> "${newSlug}"`);
});

// Write back to file
fs.writeFileSync(filePath, content, 'utf8');
console.log(`\n✅ Updated all ${locations.length} slugs in locations.ts`);

