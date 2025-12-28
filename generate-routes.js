import fs from 'fs';
import { locations } from './src/data/locations.ts';

// Generate component name from location name
const getComponentName = (name) => {
  return name.replace(/[^a-zA-Z0-9]/g, '');
};

// Generate lazy import statements
const lazyImports = locations.map(loc => {
  const compName = getComponentName(loc.name);
  return `const ${compName} = React.lazy(() => import('./pages/locations/${compName}'));`;
}).join('\n');

// Generate route elements
const routes = locations.map(loc => {
  const compName = getComponentName(loc.name);
  return `                <Route path="/fl/${loc.slug}" element={<Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-lg">Loading...</div></div>}><${compName} /></Suspense>} />`;
}).join('\n');

const output = `// Lazy-loaded location routes
${lazyImports}

// In Routes component:
${routes}
`;

fs.writeFileSync('generated-routes.txt', output, 'utf8');
console.log('✅ Generated routes file! Check generated-routes.txt');

