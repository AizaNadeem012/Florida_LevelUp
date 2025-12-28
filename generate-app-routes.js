import fs from 'fs';
import { locations } from './src/data/locations.ts';

// Helper to get component name from location name
const getComponentName = (name) => {
  return name.replace(/[^a-zA-Z0-9]/g, '');
};

// Generate lazy import statements
const lazyImports = locations.map(loc => {
  const compName = getComponentName(loc.name);
  return `const ${compName} = React.lazy(() => import('./pages/locations/${compName}'));`;
}).join('\n');

// Generate route mapping
const routeMap = locations.map(loc => {
  const compName = getComponentName(loc.name);
  return `  '${loc.slug}': ${compName},`;
}).join('\n');

// Generate route elements
const routes = locations.map(loc => {
  const compName = getComponentName(loc.name);
  return `                <Route path="/fl/${loc.slug}" element={<Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-lg font-medium">Loading...</div></div>}><${compName} /></Suspense>} />`;
}).join('\n');

const output = `// Auto-generated lazy imports for location pages
${lazyImports}

// Location components map
const locationComponents = {
${routeMap}
};

// Routes to add in Routes component:
${routes}
`;

fs.writeFileSync('location-routes-generated.txt', output, 'utf8');
console.log(`✅ Generated ${locations.length} lazy imports and routes!`);
console.log('Check location-routes-generated.txt for the code');

