import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Phone, 
  Wind, 
  Shield, 
  AlertTriangle, 
  Award, 
  Clock, 
  Users,
  Star,
  ArrowRight,
  Zap,
  Wrench,
  FileCheck,
  MapPin,
  Home,
  Gauge,
  TrendingUp,
  Quote,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Marquee component for announcements
const Marquee = () => {
  return (
    <div className="bg-primary text-white py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-4">🔒 Licensed & Insured</span>
        <span className="mx-4">⚡ 150+ MPH Wind Protection</span>
        <span className="mx-4">✅ 10+ Year Warranty</span>
        <span className="mx-4">📞 Free Estimates</span>
        <span className="mx-4">🏆 5-Star Rated Service</span>
        <span className="mx-4">🔒 Licensed & Insured</span>
        <span className="mx-4">⚡ 150+ MPH Wind Protection</span>
        <span className="mx-4">✅ 10+ Year Warranty</span>
        <span className="mx-4">📞 Free Estimates</span>
        <span className="mx-4">🏆 5-Star Rated Service</span>
      </div>
    </div>
  );
};

const HurricaneProtection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Miami, FL",
      quote: "After Hurricane Andrew, we knew we needed better protection. The team installed a complete system that gave us peace of mind during Irma.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?q=80&w=400"
    },
    {
      name: "John Thompson",
      location: "Tampa, FL",
      quote: "Professional installation and they handled all the insurance paperwork. Our home withstood Hurricane Ian with no damage.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
    },
    {
      name: "Sarah Chen",
      location: "Orlando, FL",
      quote: "The difference in our home's stability after installation is remarkable. Worth every penny for peace of mind.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400"
    }
  ];

  const processSteps = [
    {
      title: "Free Consultation",
      description: "We assess your mobile home's current protection and recommend the right system for your needs.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600"
    },
    {
      title: "Custom Installation",
      description: "Our certified technicians install your hurricane protection system with precision and attention to detail.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600"
    },
    {
      title: "Final Inspection",
      description: "We conduct a thorough inspection and provide all documentation for insurance compliance.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Marquee */}
      <Marquee />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://colonyroofers.com/hubfs/Roof%20Hurricane%20Ties.jpg" 
            alt="Hurricane Protection" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          
          {/* Animated Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="section-container relative z-10 text-center text-white py-20">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Shield className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Florida Certified Protection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hurricane & Wind Load Tie-Downs
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
              Florida-certified hurricane protection systems for maximum mobile home safety and stability. 
              Protect your investment with professional-grade installations that meet or exceed all state requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="tel:+1 (689) 340-5795">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 shadow-lg">
                  <Phone className="h-5 w-5" />
                  +1 (689) 340-5795
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg"  className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg">
                  Get Free Estimate
                </Button>
              </Link>
            </div>
            
            <div className="flex justify-center gap-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">150+ MPH</div>
                <div className="text-sm">Wind Resistance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm">Code Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+ Years</div>
                <div className="text-sm">Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-container py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Protect Your Mobile Home from Florida's Severe Weather</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Florida's hurricane season poses a significant threat to mobile homes. Our certified tie-down systems provide the protection 
                you need to safeguard your investment and ensure your family's safety. With wind speeds exceeding 150 mph in major storms, 
                proper anchoring isn't just recommended—it's essential.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Wind className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Wind Zone III Certified</h3>
                    <p className="text-muted-foreground">Systems designed to withstand highest wind requirements in Florida</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Insurance Approved</h3>
                    <p className="text-muted-foreground">All installations come with proper documentation for insurance requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Quick Installation</h3>
                    <p className="text-muted-foreground">Professional teams complete most installations in just 1-2 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Warranty Protection</h3>
                    <p className="text-muted-foreground">10+ year warranty on all parts and labor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" 
                alt="Mobile Home Hurricane Protection" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hurricane Protection Requirements */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Wind className="h-16 w-16 text-primary mb-6" />
              <h2 className="text-3xl font-bold mb-6">Florida Hurricane Protection Requirements</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Florida building codes mandate specific hurricane tie-down requirements for mobile homes. 
                Our certified installations meet or exceed all wind zone requirements, providing protection 
                against sustained winds up to 150+ mph.
              </p>
              <div className="space-y-3">
                {[
                  "Wind Zone III certified systems",
                  "Heavy-duty steel straps and anchors",
                  "Frame-to-ground connections",
                  "Over-the-top tie-down systems",
                  "Vertical and diagonal stabilization",
                  "Professional inspection and certification",
                  "Insurance compliance documentation",
                  "Emergency reinforcement services",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="overflow-hidden shadow-lg">
                <div className="aspect-video relative">
                  <img 
                    src="https://www.sun-sentinel.com/wp-content/uploads/migration/2023/02/05/7G3FTHXLBNBJBNZLYNCGWPXV7U.jpg?w=620" 
                    alt="Hurricane Protection System" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Maximum Protection</h3>
                    <p className="text-sm text-white/90">Engineered to withstand Category 5 hurricane conditions</p>
                  </div>
                </div>
              </Card>
              
              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">System Components</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Ground anchors (screw or auger type)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      High-tensile steel straps
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Frame connectors and brackets
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Turnbuckles for tension adjustment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Weather-resistant hardware
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Protective strap covers
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Professional Installation */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Professional Installation?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional installation ensures your mobile home is protected according to Florida's strict building codes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { 
              title: "Code Compliance", 
              description: "Guaranteed to meet all Florida building codes and wind zone requirements",
              icon: FileCheck
            },
            { 
              title: "Expert Installation", 
              description: "Licensed contractors with hurricane protection expertise",
              icon: Users
            },
            { 
              title: "Quality Materials", 
              description: "Commercial-grade components designed for Florida weather",
              icon: Shield
            },
            { 
              title: "Proper Tensioning", 
              description: "Correctly adjusted straps for optimal performance",
              icon: Wrench
            },
            { 
              title: "Insurance Approved", 
              description: "Documentation required for homeowners insurance",
              icon: Award
            },
            { 
              title: "Long-Term Warranty", 
              description: "Backed by our workmanship guarantee",
              icon: Clock
            },
          ].map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Hurricane Protection Types */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Hurricane Protection Systems</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer different types of tie-down systems based on your mobile home's specific requirements
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center mb-8 border-b">
              {["Over-the-Top Tie-Downs", "Frame Anchors", "Diagonal Bracing"].map((tab, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 font-medium transition-colors ${
                    activeTab === index
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              {activeTab === 0 && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Zap className="h-6 w-6 mr-2 text-primary" />
                      Over-the-Top Tie-Downs
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      Over-the-top tie-downs are the most common type of mobile home anchoring system. 
                      They consist of steel straps that go over the roof and are secured to ground anchors.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Required for all mobile homes in Florida</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Protects against wind uplift forces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Regular inspections recommended every 3 years</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://www.mobilehomerepair.com/wp-content/uploads/2017/07/mobile3.jpg" 
                      alt="Over-the-Top Tie-Downs" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              )}
              
              {activeTab === 1 && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Shield className="h-6 w-6 mr-2 text-primary" />
                      Frame Anchors
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      Frame anchors secure the main frame of a mobile home directly to ground anchors, 
                      providing lateral stability and preventing movement during high winds.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Required for homes in Wind Zone II and III</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Prevents horizontal movement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Used in combination with over-the-top systems</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0jJ8I2MsEg3-hvRK05hzwAspC2zL1Ca3Xw&s" 
                      alt="Frame Anchors" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              )}
              
              {activeTab === 2 && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Wind className="h-6 w-6 mr-2 text-primary" />
                      Diagonal Bracing
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      Diagonal bracing provides additional structural support by creating triangular 
                      configurations that resist lateral forces during hurricanes.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Reinforces structural integrity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Distributes wind forces more evenly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Often required for older mobile homes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZibik54q4cuQJW-PHVsVKXrTKohBjq6ePg&s" 
                      alt="Diagonal Bracing" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See Our Installation Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how our professional team installs hurricane protection systems
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://i.ytimg.com/vi/ySWjK4Bll6U/maxresdefault.jpg" 
              alt="Hurricane Protection Installation" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Button size="lg" className="bg-white/90 text-primary hover:bg-white gap-2">
                <Play className="h-5 w-5" />
                Watch Installation Video
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Free Consultation",
                description: "We assess your mobile home's current protection and recommend the right system for your needs.",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600"
              },
              {
                title: "Custom Installation",
                description: "Our certified technicians install your hurricane protection system with precision and attention to detail.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600"
              },
              {
                title: "Final Inspection",
                description: "We conduct a thorough inspection and provide all documentation for insurance compliance.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT789ufasP6n642hnrjyEf6ZD-OPt4Ya8RKoA&s"
              }
            ].map((step, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video relative">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-4 left-4 bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Hurricane Preparation Tips */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Hurricane Preparation Tips</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond professional tie-downs, here are additional steps to protect your mobile home
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Inspect Regularly",
              description: "Check your tie-down system before hurricane season and after any major storm",
              icon: AlertTriangle,
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600"
            },
            {
              title: "Secure Outdoor Items",
              description: "Remove or anchor all outdoor furniture, decorations, and equipment",
              icon: Shield,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8Pi91MWO7jfmsK6jbvlcV75CIfxl5KY4aQ&s"
            },
            {
              title: "Install Shutters",
              description: "Protect windows and doors with hurricane shutters or plywood",
              icon: CheckCircle2,
              image: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-install-exterior-shutters-2022-step-1.jpg"
            },
            {
              title: "Seal Openings",
              description: "Ensure all roof vents and openings are properly sealed",
              icon: Wrench,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFMy9QE87xeZ8Si3pArNVzrVyF3aisVnmpDQ&s"
            },
            {
              title: "Trim Trees",
              description: "Remove dead or overhanging branches that could damage your home",
              icon: Wind,
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhIEa-40e1oMn19-PpA1DzfxqS9yBZKWqONw&s"
            },
            {
              title: "Create a Plan",
              description: "Have an evacuation plan and emergency kit ready",
              icon: Clock,
              image: "https://media.licdn.com/dms/image/v2/D4E12AQEbsQthDxLsIw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1695676468493?e=2147483647&v=beta&t=cM3-oxmFaq71vL66Y8KSU-42YmGq6filK7Aa33UGOsY"
            }
          ].map((tip, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video relative">
                <img 
                  src={tip.image} 
                  alt={tip.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <tip.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide hurricane protection services across Central Florida
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Polk County", "Lake County", "Volusia County", "Sumter County",
              "Orange County", "Hillsborough County", "Osceola County", "Manatee County"
            ].map((county, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">{county}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="gradient-primary text-white py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">What Our Customers Say</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Real feedback from homeowners who've protected their mobile homes with our systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm border border-white/20 text-white cursor-pointer transition-all ${
                  activeTestimonial === index ? 'scale-105' : 'opacity-70'
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 text-white/90">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-white/70">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial ? "bg-white w-8" : "bg-white/30"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about hurricane protection for mobile homes
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: "How often should I have my tie-down system inspected?",
              answer: "We recommend inspections every 2-3 years, or immediately after any major storm that may have affected your home's stability."
            },
            {
              question: "Will my homeowners insurance premium decrease with proper tie-downs?",
              answer: "Many insurance companies offer premium discounts for homes with certified hurricane protection systems. We provide all necessary documentation for your insurance provider."
            },
            {
              question: "How long does installation typically take?",
              answer: "Most standard installations can be completed in 1-2 days. Complex systems or larger homes may require additional time."
            },
            {
              question: "Do you offer emergency installation services?",
              answer: "Yes, we offer emergency installation services when possible, though availability may be limited during peak hurricane season. Contact us as soon as possible."
            }
          ].map((faq, index) => (
            <details key={index} className="group p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all">
              <summary className="flex items-center justify-between cursor-pointer font-medium">
                {faq.question}
                <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
              </summary>
              <div className="mt-3 text-muted-foreground">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-primary text-white py-20">
        <div className="section-container text-center">
          <h2 className="mb-4 text-white text-3xl font-bold">Protect Your Home Before Hurricane Season</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Don't wait until it's too late - get professional tie-down installation now and enjoy peace of mind
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+1 (386) 453-9277">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 shadow-lg">
                <Phone className="h-5 w-5" />
                +1 (386) 453-9277
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg"  className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg">
                Request Free Estimate
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-sm text-white/80">Years Warranty</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">FL</div>
              <div className="text-sm text-white/80">Licensed & Insured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5★</div>
              <div className="text-sm text-white/80">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HurricaneProtection;