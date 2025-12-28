import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const SocialIcon = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-muted-foreground hover:text-primary transition"
  >
    {children}
  </a>
);

const services = [
  { name: "HUD Structural Inspection", path: "/hud-inspection" },
  { name: "Mobile Home Leveling & Re-leveling", path: "/services/leveling" },
  { name: "Ground Anchors Installation", path: "/services/ground-anchors" },
  { name: "Tie-Down Systems", path: "/services/tie-down" },
  { name: "Pier & Block Foundation Support", path: "/services/foundation" },
  { name: "Skirting Installation & Repair", path: "/services/skirting" },
  { name: "Crawl Space Stabilization", path: "/services/crawl-space" },
  { name: "Floor Leveling", path: "/services/floor-leveling" },
  { name: "Hurricane Tie-Downs", path: "/services/hurricane-protection" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Central Florida Level Up"
              className="h-10 w-auto object-contain"
            />
            <span className="hidden md:block text-base font-semibold leading-none">
              Florida Truly Level <br/> Mobile Home Service
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-6">
            <Link
              to="/"
              className="text-[13px] font-medium tracking-wide hover:text-primary"
            >
              Home
            </Link>

            <Link
              to="/hud-inspection"
              className="text-[13px] font-semibold text-primary flex items-center gap-1"
            >
              <ShieldCheck className="h-4 w-4" />
              HUD Certification
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[13px] font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[360px] gap-2 p-3 md:w-[480px] md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.path}
                              className="block rounded-md p-2 text-[13px] font-medium hover:bg-accent"
                            >
                              {service.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/counties"
              className="text-[13px] font-medium tracking-wide hover:text-primary"
            >
              Counties Served
            </Link>

            <Link
              to="/about"
              className="text-[13px] font-medium tracking-wide hover:text-primary"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-[13px] font-medium tracking-wide hover:text-primary"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+16893405795">
              <Button size="sm" variant="outline" className="gap-2 text-[13px]">
                <Phone className="h-4 w-4" />
                (689) 340-5795
              </Button>
            </a>
            <Link to="/contact">
              <Button size="sm" className="text-[13px]">
                Free Estimate
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t bg-background">
            <nav className="flex flex-col items-center space-y-4 text-center">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>

              <Link
                to="/hud-inspection"
                className="font-semibold text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                HUD Certification
              </Link>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block text-[14px]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link to="/counties" onClick={() => setMobileMenuOpen(false)}>
                Counties Served
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>

              <a href="tel:+16893405795" className="w-full px-6 pt-4">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  (689) 340-5795
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
