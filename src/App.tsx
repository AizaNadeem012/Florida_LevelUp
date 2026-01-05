import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Schema from "./components/Schema";

// Core Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Counties from "./pages/Counties";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";

// Location Pages (HIDDEN – URL ONLY) - Legacy routes
import Sanford from "./pages/sanford";
import Orlando from "./pages/orlando";
import Deltona from "./pages/deltona";
import Apopka from "./pages/apopka";

// Import locations data
import { locations } from "./data/locations";

// Helper to get component name from location name
const getComponentName = (name: string): string => {
  return name.replace(/[^a-zA-Z0-9]/g, '');
};

// Use Vite's import.meta.glob for dynamic imports
const locationModules = import.meta.glob<{ default: React.ComponentType }>('./pages/locations/*.tsx');

// Create lazy-loaded location components map
const locationComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {};

locations.forEach((loc) => {
  const compName = getComponentName(loc.name);
  const modulePath = `./pages/locations/${compName}.tsx`;
  
  if (locationModules[modulePath]) {
    locationComponents[loc.slug] = React.lazy(() => locationModules[modulePath]());
  }
});


// HUD Inspection
import HudCertifiedInspection from "./pages/hud-certified-mobile-home-inspections";

// Service Pages
import Leveling from "./pages/services/Leveling";
import GroundAnchors from "./pages/services/GroundAnchors";
import TieDown from "./pages/services/TieDown";
import Foundation from "./pages/services/Foundation";
import Skirting from "./pages/services/Skirting";
import CrawlSpace from "./pages/services/CrawlSpace";
import FloorLeveling from "./pages/services/FloorLeveling";
import HurricaneProtection from "./pages/services/HurricaneProtection";

// County Pages
import PolkCounty from "./pages/counties/PolkCounty";
import LakeCounty from "./pages/counties/LakeCounty";
import VolusiaCounty from "./pages/counties/VolusiaCounty";
import SumterCounty from "./pages/counties/SumterCounty";
import OrangeCounty from "./pages/counties/OrangeCounty";
import HillsboroughCounty from "./pages/counties/HillsboroughCounty";
import OsceolaCounty from "./pages/counties/OsceolaCounty";
import ManateeCounty from "./pages/counties/ManateeCounty";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Schema />

        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-1">
              <Routes>
                {/* Core Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/counties" element={<Counties />} />
                <Route path="/Faq" element={<FAQ />} />

                {/* 🔒 Hidden Location Routes (SEO Pages) - Legacy */}
                <Route path="/sanford" element={<Sanford />} />
                <Route path="/orlando" element={<Orlando />} />
                <Route path="/deltona" element={<Deltona />} />
                <Route path="/apopka" element={<Apopka />} />

                {/* Location Routes - Lazy Loaded */}
                {locations.map((loc) => {
                  const Component = locationComponents[loc.slug];
                  if (!Component) {
                    return null; // Skip if component not found
                  }
                  return (
                    <Route
                      key={loc.slug}
                      path={`/${loc.slug}`}
                      element={
                        <Suspense
                          fallback={
                            <div className="flex items-center justify-center min-h-screen">
                              <div className="text-lg font-medium">Loading...</div>
                            </div>
                          }
                        >
                          <Component />
                        </Suspense>
                      }
                    />
                  );
                })}
                

                {/* HUD Inspection */}
                <Route
                  path="/hud-inspection"
                  element={<HudCertifiedInspection />}
                />

                {/* Service Routes */}
                <Route path="/services/leveling" element={<Leveling />} />
                <Route
                  path="/services/ground-anchors"
                  element={<GroundAnchors />}
                />
                <Route path="/services/tie-down" element={<TieDown />} />
                <Route path="/services/foundation" element={<Foundation />} />
                <Route path="/services/skirting" element={<Skirting />} />
                <Route path="/services/crawl-space" element={<CrawlSpace />} />
                <Route
                  path="/services/floor-leveling"
                  element={<FloorLeveling />}
                />
                <Route
                  path="/services/hurricane-protection"
                  element={<HurricaneProtection />}
                />

                {/* County Routes */}
                <Route path="/counties/polk" element={<PolkCounty />} />
                <Route path="/counties/lake" element={<LakeCounty />} />
                <Route path="/counties/volusia" element={<VolusiaCounty />} />
                <Route path="/counties/sumter" element={<SumterCounty />} />
                <Route path="/counties/orange" element={<OrangeCounty />} />
                <Route
                  path="/counties/hillsborough"
                  element={<HillsboroughCounty />}
                />
                <Route path="/counties/osceola" element={<OsceolaCounty />} />
                <Route path="/counties/manatee" element={<ManateeCounty />} />

                {/* Catch-All */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
