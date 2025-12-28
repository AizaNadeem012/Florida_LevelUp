import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Phone, 
  AlertTriangle, 
  Shield, 
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
  Gauge,
  Calendar,
  ChevronRight,
  Activity,
  DollarSign,
  BarChart3
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
        <span className="mx-4">🏠 Expert Leveling Services</span>
        <span className="mx-4">⚡ Fast Response Time</span>
        <span className="mx-4">✅ 100% Satisfaction</span>
        <span className="mx-4">🔒 Licensed & Insured</span>
        <span className="mx-4">💰 Competitive Pricing</span>
        <span className="mx-4">🏆 15+ Years Experience</span>
        <span className="mx-4">📞 Free Estimates</span>
        <span className="mx-4">🏠 Expert Leveling Services</span>
        <span className="mx-4">⚡ Fast Response Time</span>
        <span className="mx-4">✅ 100% Satisfaction</span>
        <span className="mx-4">🔒 Licensed & Insured</span>
        <span className="mx-4">💰 Competitive Pricing</span>
        <span className="mx-4">🏆 15+ Years Experience</span>
        <span className="mx-4">📞 Free Estimates</span>
      </div>
    </div>
  );
};

const Leveling = () => {
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
      quote: "They leveled our home precisely and explained every step. Professional from call to finish.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?q=80&w=400"
    },
    {
      name: "Miguel Rodriguez",
      location: "Orlando, FL",
      quote: "Great communication, fast scheduling, and the team left the site cleaner than they found it.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
    },
    {
      name: "Tina Lee",
      location: "Polk County, FL",
      quote: "The difference in our home's stability after leveling is remarkable. Worth every penny.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400"
    }
  ];

  const benefits = [
    {
      title: "Prevents Structural Damage",
      description: "Stop foundation issues before they become major problems.",
      icon: Shield,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFn_fn45FyO2M7LtyFpD8xjXFeaGR3dLMNgA&s"
    },
    {
      title: "Improves Home Value",
      description: "A properly leveled home maintains or increases property value.",
      icon: TrendingUp,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZeXffkPMjmqTDIIeQD7g39XotMx2XwTmkpA&s"
    },
    {
      title: "Energy Efficiency",
      description: "Proper leveling improves insulation and reduces energy costs.",
      icon: Zap,
      image: "https://blendplants.com/wp-content/uploads/2023/10/Efficienza-energetica-settore-edilizio.jpg"
    },
    {
      title: "Safety & Comfort",
      description: "Eliminates tripping hazards and improves overall comfort.",
      icon: Users,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCkm5UENd5nG_82vb9blVmKKs3SnXMLJlmA&s"
    }
  ];

  const processSteps = [
    {
      title: "Free Inspection",
      description: "We assess your mobile home's current level and identify the root cause.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600"
    },
    {
      title: "Custom Solution",
      description: "We design a tailored solution to address your specific leveling needs.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600"
    },
    {
      title: "Professional Installation",
      description: "Our certified technicians implement the solution with precision.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
    },
    {
      title: "Final Inspection",
      description: "We ensure everything is perfect before we consider the job complete.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
    }
  ];

  const beforeAfter = [
    {
      before: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
      after: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600",
      title: "Complete Home Leveling"
    },
    {
      before: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=600",
      after: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600",
      title: "Foundation Repair"
    },
    {
      before: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600",
      after: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600",
      title: "Water Leveling"
    }
  ];

  const faqs = [
    {
      question: "How do I know if my mobile home needs leveling?",
      answer: "Common signs include doors or windows that don't close properly, visible gaps between walls and ceiling, sloping floors, cracks in walls or ceiling, separation at roof seams, bouncy or soft floors, water pooling under the home, and visible foundation settling."
    },
    {
      question: "How long does mobile home leveling take?",
      answer: "Most leveling jobs take 4-8 hours depending on home size and extent of work needed. We'll provide a time estimate after our initial inspection."
    },
    {
      question: "Is mobile home leveling expensive?",
      answer: "Costs vary based on home size and condition, but leveling is far less expensive than repairing damage caused by an unlevel home. We offer competitive pricing and free estimates."
    },
    {
      question: "Will leveling fix cracks in my walls?",
      answer: "Leveling will stop new cracks from forming and prevent existing ones from worsening. Some cosmetic repairs to walls, ceilings, or trim may be needed after leveling."
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
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600" 
            alt="Mobile Home Leveling" 
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
              <span className="text-sm font-medium">Florida Certified Leveling Experts</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Mobile Home Leveling & Re-leveling
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
              Precision leveling solutions to restore your mobile home to perfect condition. 
              Our expert technicians ensure long-term stability and peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="tel:+16892730135">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 shadow-lg">
                  <Phone className="h-5 w-5" />
                  (689) 273-0135
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

      {/* What is Mobile Home Leveling */}
      <section className="section-container py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is Mobile Home Leveling?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mobile home leveling (also called releveling) is the process of adjusting your manufactured home 
                to ensure it sits perfectly level on its foundation. Over time, mobile homes can settle unevenly due to 
                soil conditions, weather, and normal wear, leading to structural issues and discomfort.
              </p>
              <p className="text-lg text-muted-foreground">
                Professional leveling uses specialized equipment to carefully lift and adjust your home, 
                installing proper shims and supports to restore it to its original position. This critical maintenance 
                protects your investment and ensures the safety and comfort of your family.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2xSH76BR6gUbbTTQSx_88wCFk55XCP2zcg&s"
                alt="Mobile Home Leveling"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-primary" />
                  <span className="font-medium">Watch Our Process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Leveling */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Signs Your Mobile Home Needs Leveling</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't ignore these warning signs of an unlevel mobile home
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Doors and windows won't close properly",
              "Visible gaps between walls and ceiling",
              "Sloping or uneven floors",
              "Cracks in walls or ceiling",
              "Separation at roof seams",
              "Bouncy or soft floors",
              "Water pooling under the home",
              "Visible foundation settling"
            ].map((sign, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefits of Professional Mobile Home Leveling</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Protect your investment and improve your living environment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4">{benefit.description}</p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leveling Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From inspection to completion, we make leveling your home straightforward and stress-free
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
        </div>
      </section>


      {/* Pricing Section */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Competitive rates with no hidden fees
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Basic Leveling</h3>
              <div className="text-3xl font-bold text-primary mb-2">$299</div>
              <p className="text-muted-foreground">Minor adjustments to restore level</p>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Complete Leveling</h3>
              <div className="text-3xl font-bold text-primary mb-2">$599</div>
              <p className="text-muted-foreground">Comprehensive leveling for most homes</p>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Package</h3>
              <div className="text-3xl font-bold text-primary mb-2">$899</div>
              <p className="text-muted-foreground">Complete leveling with foundation support</p>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">All prices include free inspection and detailed estimate</p>
            <Link to="/contact">
              <Button size="lg" className="btn-primary">
                Get Custom Quote
              </Button>
            </Link>
          </div>
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
            Get answers to common questions about mobile home leveling
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

      {/* Service Areas */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide mobile home leveling services across Central Florida
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

      {/* Final CTA Section */}
      <section className="gradient-primary text-white py-20">
        <div className="section-container text-center">
          <h2 className="mb-4 text-white text-3xl font-bold">Level Your Mobile Home Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Don't wait until small problems become major issues. Contact us for a free leveling estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+16892730135">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 shadow-lg">
                <Phone className="h-5 w-5" />
                (689) 273-0135
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
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Happy Customers</div>
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

export default Leveling;