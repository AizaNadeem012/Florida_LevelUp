import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Phone, 
  Shield, 
  Home, 
  Droplets, 
  Wrench, 
  Star, 
  Quote, 
  ArrowRight, 
  Clock, 
  Award, 
  Users,
  Zap,
  TrendingUp,
  Play,
  MapPin,
  FileCheck,
  AlertTriangle,
  Wind
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// Marquee component for announcements
const Marquee = () => {
  return (
    <div className="bg-primary text-white py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-4">🔒 Licensed & Insured</span>
        <span className="mx-4">💧 Moisture Control Experts</span>
        <span className="mx-4">✅ 10+ Year Warranty</span>
        <span className="mx-4">📞 Free Estimates</span>
        <span className="mx-4">🏆 5-Star Rated Service</span>
        <span className="mx-4">🔒 Licensed & Insured</span>
        <span className="mx-4">💧 Moisture Control Experts</span>
        <span className="mx-4">✅ 10+ Year Warranty</span>
        <span className="mx-4">📞 Free Estimates</span>
        <span className="mx-4">🏆 5-Star Rated Service</span>
      </div>
    </div>
  );
};

const CrawlSpace = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [counters, setCounters] = useState({
    years: 0,
    customers: 0,
    projects: 0,
    satisfaction: 0
  });
  const heroRef = useRef(null);

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate counters on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        years: Math.min(prev.years + 1, 15),
        customers: Math.min(prev.customers + 10, 500),
        projects: Math.min(prev.projects + 20, 800),
        satisfaction: Math.min(prev.satisfaction + 2, 100)
      }));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Karen Johnson",
      location: "Winter Haven, FL",
      quote: "They encapsulated our crawl space completely. The difference in air quality is remarkable, and our energy bills have decreased significantly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?q=80&w=400"
    },
    {
      name: "Michael Rodriguez",
      location: "Orlando, FL",
      quote: "After years of moisture issues, their team solved our problem permanently. Professional, efficient, and worth every penny.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
    },
    {
      name: "Sarah Chen",
      location: "Tampa, FL",
      quote: "The structural repair they did stopped our floors from sagging. Their expertise with mobile homes is unmatched in the industry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400"
    }
  ];

  const benefits = [
    {
      title: "Healthier Living Environment",
      description: "Eliminate mold, mildew, and musty odors for better indoor air quality.",
      icon: Shield,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdz9Np6hDhMEnq12Q3xXc7j8AAVs3FMRQ1ng&s"
    },
    {
      title: "Energy Efficiency",
      description: "Proper insulation and sealing can reduce energy costs by up to 20%.",
      icon: Zap,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM0fXuDVBHVss7gnQt4JKRASVr06AP7TdV6w&s"
    },
    {
      title: "Structural Integrity",
      description: "Prevent wood rot, floor sagging, and foundation damage with proper support.",
      icon: Home,
      image: "https://www.langryndt.com/wp-content/uploads/2024/11/thesiliconreview-reinforcing-steel-essential-for-structural-integrity.webp"
    },
    {
      title: "Pest Prevention",
      description: "Sealed crawl spaces deter pests and protect your home from infestations.",
      icon: AlertTriangle,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHn0PBg7kvPfMwY3ZfcDjuzXD1ihpUknWBw&s"
    }
  ];

  const processSteps = [
    {
      title: "Inspection & Assessment",
      description: "We thoroughly inspect your crawl space to identify all issues and recommend the right solution.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600"
    },
    {
      title: "Custom Solution Design",
      description: "Based on our findings, we design a tailored solution to address your specific needs.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600"
    },
    {
      title: "Professional Installation",
      description: "Our certified technicians implement the solution with precision and attention to detail.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
    },
    {
      title: "Final Quality Check",
      description: "We perform a final inspection to ensure everything meets our high standards.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Marquee */}
      <Marquee />
      
      {/* Full Height Parallax Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://vanceinsulation.com/wp-content/uploads/Crawl-Space-Encapsulation-1-scaled.jpg" 
            alt="Crawl Space" 
            className="w-full h-full object-cover" 
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
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
              <span className="text-sm font-medium">Foundation Protection Experts</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Crawl Space Stabilization
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
              Comprehensive crawl space solutions to prevent settling, moisture damage, and structural issues. 
              Protect your home from the ground up with our expert services.
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
                <div className="text-2xl font-bold text-white">{counters.years}+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{counters.customers}+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{counters.projects}+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{counters.satisfaction}%</div>
                <div className="text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Images */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefits of Crawl Space Stabilization</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Protect your home's foundation and improve your living environment with our expert solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="aspect-video relative">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section with Tabs */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a full range of crawl space solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center mb-8 border-b">
              {["Moisture Control", "Structural Repair", "Insulation", "Encapsulation"].map((tab, index) => (
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
                      <Droplets className="h-6 w-6 mr-2 text-primary" />
                      Moisture Control Solutions
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      Excess moisture in your crawl space can lead to mold growth, wood rot, and structural damage. 
                      Our moisture control solutions create a dry, healthy environment beneath your home.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Vapor barrier installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>French drain systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Sump pump installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Dehumidifier systems</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk47DSKY_a2CGR37iY3KkORx18dpxXNuhjNA&s" 
                      alt="Moisture Control" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              )}
              
              {activeTab === 1 && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Home className="h-6 w-6 mr-2 text-primary" />
                      Structural Repair Services
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      Sagging floors, cracked walls, and sticking doors are signs of foundation problems. 
                      Our structural repair solutions restore stability to your home.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Support beam reinforcement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Jack post installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Foundation pier installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Crawl space jacks</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800" 
                      alt="Structural Repair" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              )}
              
              {activeTab === 2 && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Shield className="h-6 w-6 mr-2 text-primary" />
                      Insulation Solutions
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      Proper insulation in your crawl space improves energy efficiency, reduces heating and cooling costs, 
                      and prevents moisture problems.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Fiberglass insulation installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Spray foam insulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Rigid foam board installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Insulation removal and replacement</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800" 
                      alt="Insulation" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              )}
              
              {activeTab === 3 && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Wrench className="h-6 w-6 mr-2 text-primary" />
                      Crawl Space Encapsulation
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      Complete crawl space encapsulation transforms your damp, dirty crawl space into a clean, 
                      dry, energy-efficient space that protects your home.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Complete vapor barrier system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Sealing all vents and openings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Dehumidifier installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Drainage system implementation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800" 
                      alt="Encapsulation" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From inspection to completion, we make crawl space repair straightforward and stress-free
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
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
      </section>


      {/* Testimonials Section */}
      <section className="gradient-primary text-white py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">What Our Customers Say</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Real feedback from homeowners we've helped across Central Florida
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-white/20 mb-4" />
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about crawl space repair and maintenance
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: "How do I know if I have crawl space problems?",
              answer: "Common signs include musty odors, sagging floors, high humidity in your home, pest infestations, visible mold or mildew, and standing water in your crawl space."
            },
            {
              question: "How long does crawl space repair take?",
              answer: "The timeline depends on the extent of the issues and the solutions needed. Simple repairs may take 1-2 days, while complete encapsulation projects typically take 3-5 days."
            },
            {
              question: "Is crawl space encapsulation worth the cost?",
              answer: "Yes. While there's an upfront investment, encapsulation provides significant benefits including improved air quality, energy savings of 15-25%, prevention of structural damage, and increased home value."
            },
            {
              question: "Do you offer warranties on your work?",
              answer: "Absolutely. All our crawl space solutions come with comprehensive warranties that cover both materials and workmanship. Specific warranty terms vary by service."
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
          <h2 className="mb-4 text-white text-3xl font-bold">Protect Your Home Foundation Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Don't wait until small problems become major issues. Contact us for a free crawl space inspection and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1 (689) 340-5795">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 shadow-lg">
                <Phone className="h-5 w-5" />
                +1 (689) 340-5795 
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg"  className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg">
                Request Free Estimate
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8">
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

export default CrawlSpace;