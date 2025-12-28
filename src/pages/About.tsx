import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Shield, 
  Award, 
  Users, 
  Wrench, 
  Phone, 
  MapPin, 
  Clock,
  Star,
  TrendingUp,
  Quote,
  Play,
  ArrowRight,
  Calendar,
  FileCheck,
  Home,
  Zap,
  AwardIcon,
  Building,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Marquee component for announcements
const Marquee = () => {
  return (
    <div className="bg-primary text-white py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-4">🏆 75+ Years Combined Experience</span>
        <span className="mx-4">🔒 License #IH/1143937</span>
        <span className="mx-4">⭐ 5-Star Rated</span>
        <span className="mx-4">🏠 500+ Happy Customers</span>
        <span className="mx-4">🔧 Expert Technicians</span>
        <span className="mx-4">📞 Free Estimates</span>
        <span className="mx-4">🏆 75+ Years Combined Experience</span>
        <span className="mx-4">🔒 License #IH/1143937</span>
        <span className="mx-4">⭐ 5-Star Rated</span>
        <span className="mx-4">🏠 500+ Happy Customers</span>
        <span className="mx-4">🔧 Expert Technicians</span>
        <span className="mx-4">📞 Free Estimates</span>
      </div>
    </div>
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [counters, setCounters] = useState({
    years: 0,
    customers: 0,
    projects: 0,
    counties: 0
  });

  // Animate counters on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        years: Math.min(prev.years + 1, 75),
        customers: Math.min(prev.customers + 10, 500),
        projects: Math.min(prev.projects + 20, 800),
        counties: Math.min(prev.counties + 1, 8)
      }));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Robert Johnson",
      location: "Winter Haven, FL",
      quote: "Central Florida Level Up completely transformed our mobile home. Their leveling service was professional, fast, and affordable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
    },
    {
      name: "Maria Rodriguez",
      location: "Orlando, FL",
      quote: "After hurricane damage, they repaired our foundation and installed proper tie-downs. Excellent workmanship and service!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?q=80&w=400"
    },
    {
      name: "David Chen",
      location: "Lakeland, FL",
      quote: "Professional team that knows mobile homes inside and out. They saved us thousands with their skirting solution.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dc994a43e4?q=80&w=400"
    }
  ];

  const teamMembers = [
    {
      name: "Carlos Rivera",
      role: "Founder & Lead Technician",
      bio: "20+ years in manufactured home services with expertise in structural repairs and hurricane protection.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
    },
    {
      name: "Samantha Lee",
      role: "Operations Manager",
      bio: "Focused on quality control and customer satisfaction, ensuring every project meets our high standards.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?q=80&w=400"
    },
    {
      name: "Michael Thompson",
      role: "Senior Technician",
      bio: "Specializing in foundation repair and leveling systems with precision engineering solutions.",
      image: "https://images.unsplash.com/photo-1500648767791-00dc994a43e4?q=80&w=400"
    },
    {
      name: "Lisa Patel",
      role: "Customer Relations",
      bio: "Dedicated to ensuring every customer has a positive experience from estimate to completion.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400"
    }
  ];

  const timeline = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Central Florida Level Up was established with a mission to provide quality mobile home services."
    },
    {
      year: "2012",
      title: "Expanded Services",
      description: "Added hurricane protection and foundation repair to our service offerings."
    },
    {
      year: "2018",
      title: "Certification Milestone",
      description: "Achieved full Florida licensing and insurance requirements for all services."
    },
    {
      year: "2023",
      title: "Service Expansion",
      description: "Now serving 8 counties with a team of expert technicians."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Marquee */}
      <Marquee />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="my2.jpeg" 
            alt="Mobile Home Services" 
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
              <Home className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Florida's Mobile Home Experts</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              About Florida Truly Level Mobile Home Service
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
              Florida's trusted experts in mobile and manufactured home leveling, anchoring, and repair services. 
              With over 75 years of combined experience, we've helped hundreds of homeowners protect their investments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+1 (689) 340-5795">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 shadow-lg">
                  <Phone className="h-5 w-5" />
                  +1 (689) 340-5795
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg">
                  Get Free Estimate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-container py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Credentials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Licensed, bonded, and insured to provide professional mobile home services in Florida
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 border-0 shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">75+</h3>
              <div className="text-muted-foreground">Years Combined Experience</div>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">License #IH/1143937</h3>
              <div className="text-muted-foreground">Florida Certified Contractor</div>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Bonded & Insured</h3>
              <div className="text-muted-foreground">Fully Protected</div>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">DeBary, FL</h3>
              <div className="text-muted-foreground">Florida Truly Level Mobile Home Service Based</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Years of experience helping Florida homeowners protect their mobile homes
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Card className="text-center p-6 border-0 shadow-md hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-primary mb-2">{counters.years}+</div>
            <div className="text-muted-foreground">Years Combined Experience</div>
          </Card>
          <Card className="text-center p-6 border-0 shadow-md hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-primary mb-2">{counters.customers}+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </Card>
          <Card className="text-center p-6 border-0 shadow-md hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-primary mb-2">{counters.projects}+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </Card>
          <Card className="text-center p-6 border-0 shadow-md hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-primary mb-2">{counters.counties}</div>
            <div className="text-muted-foreground">Counties Served</div>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Your Mobile Home Service Experts</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Florida Truly Level Mobile Home Service specializes in comprehensive mobile and manufactured home services across Central Florida. With years of experience and a commitment to excellence, we provide professional leveling, anchoring, foundation repair, and more.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our team of licensed and insured contractors understands the unique needs of mobile homes. From ground anchor installation to complete releveling services, we ensure your home is safe, stable, and compliant with Florida building codes.
            </p>
            <p className="text-lg text-muted-foreground">
              Serving Polk, Lake, Volusia, Sumter, Orange, Hillsborough, Osceola, and Manatee counties, we're your local mobile home service experts.
            </p>
          </div>
          <div className="relative">
            <img
              src="my3.jpeg"
              alt="Professional Team"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" />
                <span className="font-medium">Watch Our Story</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description: "We prioritize the safety of your home and family in every project we undertake."
              },
              {
                icon: Award,
                title: "Quality Work",
                description: "Using the best materials and techniques to ensure lasting results."
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "Your satisfaction is our top priority from estimate to completion."
              },
              {
                icon: Wrench,
                title: "Expert Service",
                description: "Specialized knowledge of mobile homes that general contractors lack."
              }
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
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Florida Truly Level Mobile Home Service</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete solutions for all your mobile home needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Mobile Home Leveling",
              description: "Precision leveling to restore your home to proper position and prevent structural issues.",
              icon: Home
            },
            {
              title: "Ground Anchors",
              description: "Secure your home against high winds with professionally installed anchors.",
              icon: Shield
            },
            {
              title: "Tie-Down Systems",
              description: "Complete tie-down systems that meet Florida's strict wind zone requirements.",
              icon: Zap
            },
            {
              title: "Foundation Repair",
              description: "Foundation support and repair to address settling and structural issues.",
              icon: Wrench
            },
            {
              title: "Skirting Installation",
              description: "Protective and attractive skirting options for insulation and appearance.",
              icon: Home
            },
            {
              title: "Crawl Space Solutions",
              description: "Moisture control and stabilization for your home's foundation.",
              icon: Shield
            }
          ].map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <Link to="/services" className="inline-flex items-center text-primary font-medium group-hover:text-primary/80">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we grew to become Central Florida's trusted mobile home experts
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-20 bg-primary"></div>
                  )}
                </div>
                <Card className="flex-1 p-6">
                  <h3 className="text-xl font-bold mb-2">{item.year}</h3>
                  <h4 className="text-lg text-primary mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </div>
            ))}
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

      {/* Service Areas */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide mobile home services across Central Florida
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Polk County", "Lake County", "Volusia County", "Sumter County",
              "Orange County", "Hillsborough County", "Osceola County", "Manatee County"
            ].map((county, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">{county}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Licensed, insured, and certified to provide mobile home services in Florida
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Florida Licensed Contractor",
                description: "Fully licensed by the state of Florida for mobile and manufactured home services",
                icon: FileCheck
              },
              {
                title: "Fully Insured",
                description: "Comprehensive liability insurance for all projects and team members",
                icon: Shield
              },
              {
                title: "Manufacturer Certified",
                description: "Certified by major mobile home manufacturers for warranty-compliant repairs",
                icon: AwardIcon
              }
            ].map((cert, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-primary text-white py-20">
        <div className="section-container text-center">
          <h2 className="mb-4 text-white text-3xl font-bold">Ready to Protect Your Mobile Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today for a free estimate on your mobile home service needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">75+</div>
              <div className="text-sm text-white/80">Years Experience</div>
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

export default About;
