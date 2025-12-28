import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, CheckCircle, Shield, Clock, Users, Award, ArrowRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
// Commented out framer-motion import to fix build error
// import { motion } from "framer-motion";

const Counties = () => {
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  
  const counties = [
    {
      name: "Polk County",
      path: "/counties/polk",
      cities: ["Lakeland", "Winter Haven", "Bartow", "Haines City", "Auburndale"],
      description: "Comprehensive mobile home leveling, anchoring, and foundation services throughout Polk County.",
      specialties: ["Hurricane Protection", "Foundation Repair", "Mobile Home Leveling"],
      image: "/polk-county.jpg",
      established: "2005",
      projectsCompleted: "1,200+",
      featured: true
    },
    {
      name: "Lake County",
      path: "/counties/lake",
      cities: ["Clermont", "Leesburg", "Eustis", "Mount Dora", "Tavares"],
      description: "Expert manufactured home services including tie-downs and crawl space stabilization.",
      specialties: ["Crawl Space Stabilization", "Tie-Down Systems", "Wind Mitigation"],
      image: "https://wellville.net/wp-content/uploads/2021/10/Lake-County-CA.png",
      established: "2008",
      projectsCompleted: "950+"
    },
    {
      name: "Volusia County",
      path: "/counties/volusia",
      cities: ["Daytona Beach", "Deltona", "DeLand", "Ormond Beach", "Port Orange"],
      description: "Professional mobile home leveling and hurricane protection systems for Volusia County residents.",
      specialties: ["Coastal Hurricane Protection", "Wind Mitigation", "Foundation Repair"],
      image: "https://uscountymaps.com/wp-content/uploads/Volusia-County-Map-Florida.jpg",
      established: "2006",
      projectsCompleted: "1,400+",
      featured: true
    },
    {
      name: "Sumter County",
      path: "/counties/sumter",
      cities: ["The Villages", "Bushnell", "Wildwood", "Coleman", "Webster"],
      description: "Specialized services for mobile and manufactured homes in retirement communities.",
      specialties: ["Retirement Community Services", "Accessibility Modifications", "Foundation Repair"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Map_of_South_Carolina_highlighting_Sumter_County.svg/330px-Map_of_South_Carolina_highlighting_Sumter_County.svg.png",
      established: "2010",
      projectsCompleted: "800+"
    },
    {
      name: "Orange County",
      path: "/counties/orange",
      cities: ["Orlando", "Winter Park", "Apopka", "Ocoee", "Winter Garden"],
      description: "Complete mobile home foundation repair and leveling services in Orange County.",
      specialties: ["Urban Mobile Home Services", "Foundation Repair", "Skirting Installation"],
      image: "https://ocgoodlife.com/wp-content/uploads/2024/06/Orange-County-Map-scaled.webp",
      established: "2007",
      projectsCompleted: "1,100+",
      featured: true
    },
    {
      name: "Hillsborough County",
      path: "/counties/hillsborough",
      cities: ["Tampa", "Brandon", "Plant City", "Temple Terrace", "Riverview"],
      description: "Licensed mobile home contractors providing anchoring and leveling throughout Hillsborough.",
      specialties: ["Licensed Contractor Services", "Anchoring Systems", "Code Compliance"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hillsborough_County.jpg/500px-Hillsborough_County.jpg",
      established: "2005",
      projectsCompleted: "1,500+",
      featured: true
    },
    {
      name: "Osceola County",
      path: "/counties/osceola",
      cities: ["Kissimmee", "St. Cloud", "Celebration", "Poinciana", "Buenaventura Lakes"],
      description: "Expert mobile home services including skirting, leveling, and foundation support.",
      specialties: ["Skirting Installation", "Foundation Support", "Moisture Control"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPp84-2JjktA6_vYNBvnOitR1gKelIQzdqzg&s",
      established: "2009",
      projectsCompleted: "950+"
    },
    {
      name: "Manatee County",
      path: "/counties/manatee",
      cities: ["Bradenton", "Palmetto", "Lakewood Ranch", "Anna Maria", "Holmes Beach"],
      description: "Professional manufactured home leveling and coastal hurricane protection services.",
      specialties: ["Coastal Protection", "Moisture Control", "Hurricane Preparedness"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgI-QhU3nwQjyiEY2mCViA_BqydkCAYKWp9g&s",
      established: "2008",
      projectsCompleted: "1,200+"
    },
  ];

  const testimonials = [
    {
      name: "Robert Johnson",
      county: "Polk County",
      text: "The team did an excellent job leveling our mobile home after the hurricane. Professional, efficient, and reasonably priced.",
      rating: 5,
      image: "/images/testimonial-1.jpg"
    },
    {
      name: "Maria Rodriguez",
      county: "Orange County",
      text: "I needed emergency foundation repair, and they responded the same day. The quality of work exceeded my expectations.",
      rating: 5,
      image: "/images/testimonial-2.jpg"
    },
    {
      name: "James Wilson",
      county: "Volusia County",
      text: "Their hurricane protection system gave us peace of mind during storm season. Worth every penny!",
      rating: 5,
      image: "/images/testimonial-3.jpg"
    }
  ];

  const faqs = [
    {
      question: "Do you offer emergency services in all counties?",
      answer: "Yes, we provide 24/7 emergency mobile home repair services in all eight counties we serve. Our response time varies by location but is typically within 24 hours."
    },
    {
      question: "Are your services licensed and insured?",
      answer: "Absolutely. We are fully licensed, bonded, and insured in all counties we serve. Our technicians are certified and undergo regular training."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we offer free, no-obligation estimates for all our mobile home services in Central Florida."
    },
    {
      question: "How long does a typical mobile home leveling service take?",
      answer: "Most standard leveling jobs can be completed in 4-6 hours. More complex foundation repairs may take 1-2 days, depending on the extent of the damage."
    }
  ];

  const services = [
    {
      title: "Mobile Home Leveling",
      description: "Precise leveling to prevent structural issues and improve comfort",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-6 h-1 bg-primary rounded"></div>
      </div>,
      color: "bg-blue-100"
    },
    {
      title: "Foundation Repair",
      description: "Expert repair of pier and beam foundations and concrete pads",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[16px] border-b-primary border-r-[8px] border-r-transparent"></div>
      </div>,
      color: "bg-green-100"
    },
    {
      title: "Hurricane Protection",
      description: "Installation of tie-downs, anchors, and wind mitigation systems",
      icon: <Shield className="h-6 w-6 text-primary" />,
      color: "bg-purple-100"
    },
    {
      title: "Skirting Installation",
      description: "Quality skirting solutions for energy efficiency and pest control",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-primary rounded"></div>
      </div>,
      color: "bg-orange-100"
    },
    {
      title: "Crawl Space Services",
      description: "Moisture control, insulation, and ventilation solutions",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-6 h-3 border-t-2 border-b-2 border-primary"></div>
      </div>,
      color: "bg-red-100"
    },
    {
      title: "Emergency Repairs",
      description: "24/7 response for storm damage and urgent structural issues",
      icon: <Clock className="h-6 w-6 text-primary" />,
      color: "bg-yellow-100"
    }
  ];

  // Helper function to handle image errors with proper TypeScript typing
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    const imgElement = e.currentTarget;
    imgElement.onerror = null;
    imgElement.src = fallbackSrc;
  };

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section with Full Width Background Image */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/images/hero-counties.jpg" 
            alt="Central Florida Counties" 
            className="w-full h-full object-cover"
            onError={(e) => handleImageError(e, "https://thumbnails.genially.com/64cc00edf8f91f001aae8487/screenshots/acd04ebd-7373-4177-b61d-bea67df8104d.jpg")}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-4 max-w-4xl">
            {/* Replaced motion.div with regular div */}
            <div>
              <h1 className="mb-6 text-5xl md:text-6xl font-bold">Counties We Serve</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Professional mobile and manufactured home services across 8 Central Florida counties
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg">
                    Get Free Estimate
                  </Button>
                </Link>
                <a href="tel:+1 (689) 340-5795">
                  <Button size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg">
                    Call Us Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map Section - Full Width */}
      <section className="w-full py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">Our Service Area</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We proudly serve homeowners throughout Central Florida with professional mobile home services
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">8 Counties, 40+ Cities</h3>
                <p className="mb-6 text-lg">
                  With over 15 years of experience, we've built a reputation for quality workmanship and exceptional customer service across Central Florida. Our team of certified technicians understands the unique challenges of mobile and manufactured homes in Florida's climate.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Fully Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>15+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>5-Star Customer Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Warranty on All Work</span>
                  </div>
                </div>
                <Link to="/about">
                  <Button className="gap-2">
                    Learn About Our Company
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-slate-100 rounded-lg h-80 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/service-area-map.jpg" 
                  alt="Service Area Map" 
                  className="w-full h-full object-cover"
                  onError={(e) => handleImageError(e, "https://mapcounty.com/wp-content/uploads/2025/09/Florida-County-Map-1.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Counties Section - Full Width */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">Featured Service Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most active service counties with specialized offerings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {counties.filter(county => county.featured).map((county, index) => (
              // Replaced motion.div with regular div
              <div
                key={index}
                className="transition-all duration-300 hover:-translate-y-1"
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                  <div className="h-40 relative overflow-hidden">
                    <img 
                      src={county.image} 
                      alt={county.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => handleImageError(e, `https://picsum.photos/seed/${county.name}/400/300.jpg`)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{county.name}</h3>
                      <p className="text-sm opacity-90">Since {county.established}</p>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{county.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {county.projectsCompleted} projects
                      </span>
                      <Link to={county.path}>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Counties Grid - Full Width */}
      <section className="w-full py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">All Service Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on any county to learn more about our specialized services in that area
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {counties.map((county, index) => (
              // Replaced motion.div with regular div
              <div
                key={index}
                className="transition-all duration-300"
              >
                <Card 
                  className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    selectedCounty === index ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedCounty(index === selectedCounty ? null : index)}
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-1 h-48 md:h-auto relative overflow-hidden">
                      <img 
                        src={county.image} 
                        alt={county.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        onError={(e) => handleImageError(e, `https://picsum.photos/seed/${county.name}/400/300.jpg`)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{county.name}</h3>
                        <p className="text-sm opacity-90">Serving since {county.established}</p>
                      </div>
                    </div>
                    <div className="md:col-span-2 p-6">
                      <p className="text-muted-foreground mb-4">{county.description}</p>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">Major Cities:</p>
                        <div className="flex flex-wrap gap-2">
                          {county.cities.map((city) => (
                            <span
                              key={city}
                              className="px-3 py-1 bg-secondary rounded-full text-sm"
                            >
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">Specialties:</p>
                        <div className="flex flex-wrap gap-2">
                          {county.specialties.map((specialty) => (
                            <span
                              key={specialty}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {county.projectsCompleted} projects completed
                        </span>
                        <Link to={county.path}>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Full Width with Background Image */}
      <section className="w-full py-20 relative">
        <div className="absolute inset-0">
          <img 
            src="/images/services-bg.jpg" 
            alt="Services Background" 
            className="w-full h-full object-cover"
            onError={(e) => handleImageError(e, "https://picsum.photos/seed/servicesbg/1920/800.jpg")}
          />
          <div className="absolute inset-0 bg-white/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">Our Comprehensive Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Available in all counties we serve with the same level of quality and expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              // Replaced motion.div with regular div
              <div
                key={index}
                className={`transition-all duration-300 hover:-translate-y-1 ${hoveredService === index ? 'bg-primary/5' : ''}`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <Card className={`h-full hover:shadow-xl transition-all duration-300 ${hoveredService === index ? 'bg-primary/5' : ''}`}>
                  <CardContent className="pt-6">
                    <div className={`mb-4 p-3 rounded-full inline-block ${hoveredService === index ? service.color : ''}`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Full Width with Gradient Background */}
      <section className="w-full py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from homeowners across Central Florida
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              // Replaced motion.div with regular div
              <div
                key={index}
                className="transition-all duration-300 hover:-translate-y-1"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => handleImageError(e, `https://picsum.photos/seed/${testimonial.name}/100/100.jpg`)}
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.county}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <div className="flex-grow">
                      <Quote className="h-8 w-8 text-primary/20 mb-2" />
                      <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Full Width with Accordion Style */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about our services across Central Florida
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              // Replaced motion.div with regular div
              <div
                key={index}
                className="transition-all duration-300"
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary font-bold">
                        {index + 1}
                      </span>
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground ml-11">{faq.answer}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Full Width with Background Image */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/images/cta-counties.jpg" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
            onError={(e) => handleImageError(e, "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-643977867?_a=BAVAZGID0")}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-4 max-w-4xl">
            <h2 className="mb-6 text-4xl md:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation estimate for your mobile home service needs in any of our service areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+1 (689) 340-5795">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 font-semibold px-8 py-3 text-lg">
                  <Phone className="h-5 w-5" />
                  Call Us Now
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg"  className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg">
                  Request Free Estimate
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-sm opacity-90">
              Serving all 8 counties with certified technicians and quality workmanship
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counties;
