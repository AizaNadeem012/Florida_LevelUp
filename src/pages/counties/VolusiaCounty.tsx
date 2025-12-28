import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, CheckCircle, Shield, Clock, Users, Award, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const VolusiaCounty = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Helper function to handle image errors with proper TypeScript typing
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    const imgElement = e.currentTarget;
    imgElement.onerror = null;
    imgElement.src = fallbackSrc;
  };
  
  const cities = ["Daytona Beach", "Deltona", "DeLand", "Ormond Beach", "Port Orange", "New Smyrna Beach", "Edgewater", "Holly Hill", "South Daytona"];
  
  const services = [
    {
      title: "Coastal Hurricane Protection",
      description: "Specialized protection systems for coastal areas",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <Shield className="h-6 w-6 text-primary" />
      </div>
    },
    {
      title: "Wind Mitigation",
      description: "Advanced wind mitigation systems for storm protection",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[16px] border-b-primary border-r-[8px] border-r-transparent"></div>
      </div>
    },
    {
      title: "Foundation Repair",
      description: "Expert repair of pier and beam foundations",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-primary rounded"></div>
      </div>
    },
    {
      title: "Mobile Home Leveling",
      description: "Precise leveling to prevent structural issues",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-6 h-1 bg-primary rounded"></div>
      </div>
    },
    {
      title: "Coastal Foundation Support",
      description: "Specialized foundation solutions for coastal areas",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-6 h-6 bg-primary rounded-full"></div>
      </div>
    },
    {
      title: "Emergency Repairs",
      description: "24/7 response for storm damage and urgent issues",
      icon: <Clock className="h-6 w-6 text-primary" />
    }
  ];

  const testimonials = [
    {
      name: "James Wilson",
      city: "Daytona Beach",
      text: "Their hurricane protection system gave us peace of mind during storm season. Worth every penny!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      city: "Deltona",
      text: "I needed emergency foundation repair after the storm, and they responded the same day. The quality of work exceeded my expectations.",
      rating: 5
    },
    {
      name: "Michael Davis",
      city: "Ormond Beach",
      text: "The team did an excellent job leveling our mobile home. Professional, efficient, and reasonably priced.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Do you offer emergency services in Volusia County?",
      answer: "Yes, we provide 24/7 emergency mobile home repair services throughout Volusia County. Our response time varies by location but is typically within 24 hours."
    },
    {
      question: "Are your services licensed and insured in Florida?",
      answer: "Absolutely. We are fully licensed, bonded, and insured in Volusia County and throughout Florida. Our technicians are certified and undergo regular training."
    },
    {
      question: "Do you provide free estimates for Volusia County residents?",
      answer: "Yes, we offer free, no-obligation estimates for all our mobile home services in Volusia County."
    },
    {
      question: "How do you protect mobile homes in coastal areas?",
      answer: "We specialize in coastal protection systems including corrosion-resistant materials, elevated foundations, and enhanced anchoring systems designed specifically for the challenges of coastal environments."
    }
  ];

  const stats = [
    { value: "1,400+", label: "Projects Completed" },
    { value: "2006", label: "Year Established" },
    { value: "17+", label: "Years Experience" },
    { value: "5", label: "Star Rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/images/volusia-county-hero.jpg" 
            alt="Volusia County" 
            className="w-full h-full object-cover"
            onError={(e) => handleImageError(e, "https://d2syaugtnopsqd.cloudfront.net/wp-content/uploads/sites/32/2025/02/19165124/volusia-county-480x550.jpg")}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MapPin className="h-16 w-16 mx-auto mb-6" />
              <h1 className="mb-6 text-5xl md:text-6xl font-bold">Mobile Home Services in Volusia County</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Professional mobile home leveling, anchoring, and foundation services throughout Volusia County
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+1 (689) 340-5795">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg gap-2">
                    <Phone className="h-5 w-5" />
                    Call Us Now
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg"  className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg">
                    Get Free Estimate
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Volusia County Section */}
      <section className="section-container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold">About Volusia County</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Located on the east coast of Central Florida, Volusia County is home to over 550,000 residents and includes popular coastal destinations like Daytona Beach, Ormond Beach, and New Smyrna Beach. The county's unique geography, with its mix of coastal areas and inland communities, presents specific challenges for mobile homeowners.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Since 2006, our team has been providing specialized mobile home services throughout Volusia County. We understand the unique challenges of coastal environments, including salt air corrosion, high wind exposure, and sandy soil conditions.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img 
              src="/images/volusia-county-landscape.jpg" 
              alt="Volusia County Landscape" 
              className="w-full h-full object-cover"
              onError={(e) => handleImageError(e, "https://picsum.photos/seed/volusialandscape/600/400.jpg")}
            />
          </div>
        </div>
      </section>

      {/* Cities We Serve Section */}
      <section className="section-container py-20 bg-slate-50 rounded-lg my-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">Cities We Serve in Volusia County</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide mobile home services throughout Volusia County, including these major cities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold">{city}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Don't see your city listed? We still serve you!</p>
          <Link to="/contact">
            <Button >Contact Us to Confirm Service Area</Button>
          </Link>
        </div>
      </section>

      {/* Interactive Map Section with Google Maps */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">Volusia County Service Map</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our service area throughout Volusia County
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524650.378015946!2d-81.0226!3d29.0280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7738a8b5c7c7f%3A0x4b8c5e5b5c5c5c5c!2sVolusia%20County%2C%20FL!5e0!3m2!1sen!2sus!4v1629234567890!5m2!1sen!2sus"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Volusia County Service Map"
            className="w-full"
          ></iframe>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Service Area</h3>
              <p className="text-sm text-muted-foreground">Complete coverage of Volusia County</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">Typically within 24 hours</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Free Estimates</h3>
              <p className="text-sm text-muted-foreground">Call for a no-obligation quote</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section with Tabs */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">Our Services in Volusia County</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized mobile home services designed for Volusia County's unique coastal conditions
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["overview", "coastal", "foundation", "emergency"].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                onClick={() => setActiveTab(tab)}
                className="capitalize"
              >
                {tab}
              </Button>
            ))}
          </div>
          
          {activeTab === "overview" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
          
          {activeTab === "coastal" && (
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Coastal Hurricane Protection</h3>
                <p className="text-muted-foreground mb-6">
                  Volusia County's coastal location makes it particularly vulnerable to hurricanes and tropical storms. Our specialized coastal protection systems are designed to withstand the unique challenges of the coastal environment, including salt air corrosion and high wind exposure.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Coastal Protection Services:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Corrosion-resistant materials</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Enhanced anchoring systems</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Elevated foundation solutions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Wind mitigation systems</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Benefits of Coastal Protection:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Enhanced storm resistance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Insurance compliance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Peace of mind during storms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Increased home value</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {activeTab === "foundation" && (
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Foundation Repair & Support</h3>
                <p className="text-muted-foreground mb-6">
                  Volusia County's sandy soil and coastal conditions can create challenges for mobile home foundations. Our team specializes in foundation repair and reinforcement to ensure your home remains stable and secure in this unique environment.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Foundation Services:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Pier and beam adjustment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Concrete pad repair</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Anchor system installation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Foundation leveling</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Signs You Need Foundation Repair:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Doors and windows that stick</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Visible cracks in walls or ceiling</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Sloping or uneven floors</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Gaps around windows and doors</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {activeTab === "emergency" && (
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Emergency Repair Services</h3>
                <p className="text-muted-foreground mb-6">
                  When disaster strikes in Volusia County, you need fast, reliable service. Our emergency repair team is available 24/7 to address urgent mobile home issues caused by storms, accidents, or sudden structural problems.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Emergency Services:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Storm damage assessment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Temporary stabilization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Water extraction and drying</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Emergency repairs</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">What to Expect:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>24/7 availability</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Rapid response times</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Priority scheduling</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Insurance claim assistance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container py-20 bg-slate-50 rounded-lg my-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from homeowners across Volusia County
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <div className="flex-grow mb-4">
                    <Quote className="h-8 w-8 text-primary/20 mb-2" />
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about our mobile home services in Volusia County
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="mb-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary text-white py-20">
        <div className="section-container text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate for your mobile home service needs in Volusia County.
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
            Serving all of Volusia County with certified technicians and quality workmanship
          </p>
        </div>
      </section>
    </div>
  );
};

export default VolusiaCounty;