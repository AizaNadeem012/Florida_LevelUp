import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Phone, 
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
  TrendingUp,
  Quote,
  Play,
  Wind,
  Gauge,
  BarChart3,
  Activity,
  DollarSign,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Marquee component for announcements
const Marquee = () => {
  return (
    <div className="bg-primary text-white py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-4">🏆 15+ Years Experience</span>
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

const TieDown = () => {
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
      location: "Miami, FL",
      quote: "After Hurricane Andrew, we knew we needed better protection. The team installed a complete system that gave us peace of mind during Irma.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?q=80&w=400"
    },
    {
      name: "Miguel Rodriguez",
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

  const tieDownTypes = [
    {
      title: "Over-the-Top Tie-Downs",
      description: "Straps that go over the roof structure and secure to ground anchors",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
      features: [
        "Required for all mobile homes in Florida",
        "Protects against wind uplift forces",
        "Regular inspections recommended every 3 years"
      ]
    },
    {
      title: "Frame Anchors",
      description: "Direct connection between home frame and ground anchors",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
      features: [
        "Required for homes in Wind Zone II and III",
        "Prevents horizontal movement",
        "Used in combination with over-the-top systems"
      ]
    },
    {
      title: "Diagonal Bracing",
      description: "Triangular supports that resist lateral forces",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
      features: [
        "Reinforces structural integrity",
        "Distributes wind forces more evenly",
        "Often required for older mobile homes"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Free Inspection",
      description: "We assess your mobile home's current protection and recommend the right system for your needs.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600"
    },
    {
      title: "Custom Solution",
      description: "We design a tailored solution to address your specific needs and wind zone requirements.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600"
    },
    {
      title: "Professional Installation",
      description: "Our certified technicians implement the solution with precision and attention to detail.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
    },
    {
      title: "Final Inspection",
      description: "We conduct a thorough inspection and provide all documentation for insurance compliance.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
    }
  ];

  const benefits = [
    {
      title: "Wind Zone III Certified",
      description: "Systems designed to withstand the highest wind requirements in Florida",
      icon: Wind,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
    },
    {
      title: "Insurance Approved",
      description: "All installations come with proper documentation for insurance requirements",
      icon: FileCheck,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
    },
    {
      title: "Professional Installation",
      description: "Licensed contractors with hurricane protection expertise",
      icon: Users,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
    },
    {
      title: "Long-Term Warranty",
      description: "Backed by our comprehensive workmanship guarantee",
      icon: Award,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
    }
  ];

  const beforeAfter = [
    {
      before: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
      after: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600",
      title: "Complete Over-the-Top System"
    },
    {
      before: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=600",
      after: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600",
      title: "Frame Anchor Installation"
    },
    {
      before: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600",
      after: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600",
      title: "Diagonal Bracing System"
    }
  ];

  const faqs = [
    {
      question: "What wind zone is my home in?",
      answer: "Florida is divided into three wind zones based on expected wind speeds. Zone I (110 mph), Zone II (120 mph), and Zone III (140 mph). We can help determine your zone and install appropriate tie-downs."
    },
    {
      question: "How often should tie-downs be inspected?",
      answer: "We recommend inspections every 2-3 years, or immediately after any major storm that may have affected your home's stability."
    },
    {
      question: "Will my homeowners insurance premium decrease with proper tie-downs?",
      answer: "Many insurance companies offer premium discounts for homes with certified hurricane protection systems. We provide all necessary documentation for your insurance provider."
    },
    {
      question: "Do you offer emergency installation services?",
      answer: "Yes, we offer emergency installation services when possible, though availability may be limited during peak hurricane season. Contact us as soon as possible."
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRBnPpEdvX30uvk7A20-y96wnH0eFICTkMw&s" 
            alt="Tie-Down Systems" 
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
              <span className="text-sm font-medium">Florida Certified Protection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hurricane & Wind Load Tie-Downs
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
              Professional mobile home tie-down installation providing maximum hurricane and storm protection for Central Florida homes. 
              Secure your investment with certified, code-compliant systems.
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

      {/* Why Proper Tie-Downs Section */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Proper Tie-Downs Are Essential</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tie-down systems are critical safety features that secure your mobile home to the ground during high winds
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { 
              title: "Hurricane Protection", 
              description: "Prevents home displacement during storms",
              icon: Shield
            },
            { 
              title: "Code Compliance", 
              description: "Required by Florida building codes",
              icon: FileCheck
            },
            { 
              title: "Insurance Requirements", 
              description: "Often mandatory for coverage",
              icon: Award
            },
            { 
              title: "Home Stability", 
              description: "Reduces shifting and settling",
              icon: Home
            },
            { 
              title: "Property Value", 
              description: "Increases resale value",
              icon: TrendingUp
            }
          ].map((item, index) => (
            <Card key={index} className="hover:shadow-primary transition-base">
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

      {/* Tie-Down Types Section */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Tie-Down Systems</h2>
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
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Required for all mobile homes in Florida</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Protects against wind uplift forces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Regular inspections recommended every 3 years</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" 
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
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Required for homes in Wind Zone II and III</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Prevents horizontal movement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Used in combination with over-the-top systems</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" 
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
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Reinforces structural integrity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Distributes wind forces more evenly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Often required for older mobile homes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" 
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

      {/* Benefits Section */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefits of Professional Installation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional installation ensures your mobile home is protected according to Florida's strict building codes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video relative">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-sm text-white/90">{benefit.description}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Installation Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to final inspection, we make protecting your home a seamless experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Before & After Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the dramatic difference our tie-down systems can make for your mobile home
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfter.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={item.before} alt="Before" className="w-full h-40 object-cover" />
                    <div className="absolute bottom-0 left-0 bg-red-600 text-white px-2 py-1 text-sm font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt="After" className="w-full h-40 object-cover" />
                    <div className="absolute bottom-0 right-0 bg-green-600 text-white px-2 py-1 text-sm font-medium">
                      After
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <Link to="/gallery" className="inline-flex items-center text-primary mt-2">
                  View More Projects <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
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
              Real feedback from homeowners who've protected their mobile homes with our systems
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
            Get answers to common questions about tie-down systems for mobile homes
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                  <ChevronRight className="h-4 w-4" />
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-primary text-white py-20">
        <div className="section-container text-center">
          <h2 className="mb-4 text-white text-3xl font-bold">Protect Your Home Before Hurricane Season</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Don't wait until it's too late - get professional tie-down installation now and enjoy peace of mind
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
        </div>
      </section>
    </div>
  );
};

export default TieDown;