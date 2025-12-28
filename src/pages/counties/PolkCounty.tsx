import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, CheckCircle, Shield, Clock, Users, Award, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
// Commented out framer-motion import to fix build error
// import { motion } from "framer-motion";

const PolkCounty = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Helper function to handle image errors with proper TypeScript typing
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    const imgElement = e.currentTarget;
    imgElement.onerror = null;
    imgElement.src = fallbackSrc;
  };
  
  const cities = [
    "Lakeland",
    "Winter Haven",
    "Bartow",
    "Haines City",
    "Auburndale",
    "Lake Wales",
    "Davenport",
    "Eagle Lake",
    "Fort Meade",
    "Frostproof",
  ];
  
  const services = [
    {
      title: "Mobile Home Leveling",
      description: "Precise leveling to prevent structural issues and improve comfort",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-6 h-1 bg-primary rounded"></div>
      </div>
    },
    {
      title: "Ground Anchors Installation",
      description: "Secure your home with professional ground anchor systems",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[16px] border-b-primary border-r-[8px] border-r-transparent"></div>
      </div>
    },
    {
      title: "Tie-Down Systems",
      description: "Storm protection with advanced tie-down systems",
      icon: <Shield className="h-6 w-6 text-primary" />
    },
    {
      title: "Foundation Support",
      description: "Expert repair of pier and beam foundations",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-primary rounded"></div>
      </div>
    },
    {
      title: "Skirting Installation",
      description: "Quality skirting for energy efficiency and pest control",
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
      name: "Robert Johnson",
      city: "Lakeland",
      text: "The team did an excellent job leveling our mobile home after the hurricane. Professional, efficient, and reasonably priced.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      city: "Winter Haven",
      text: "I needed emergency foundation repair, and they responded the same day. The quality of work exceeded my expectations.",
      rating: 5
    },
    {
      name: "James Wilson",
      city: "Bartow",
      text: "Their hurricane protection system gave us peace of mind during storm season. Worth every penny!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Do you offer emergency services in Polk County?",
      answer: "Yes, we provide 24/7 emergency mobile home repair services throughout Polk County. Our response time varies by location but is typically within 24 hours."
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

  const stats = [
    { value: "1,200+", label: "Projects Completed" },
    { value: "2005", label: "Year Established" },
    { value: "18+", label: "Years Experience" },
    { value: "5", label: "Star Rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/images/polk-county-hero.jpg" 
            alt="Polk County" 
            className="w-full h-full object-cover"
            onError={(e) => handleImageError(e, "https://images.foxtv.com/static.fox13news.com/www.fox13news.com/content/uploads/2023/06/1280/720/vlcsnap-2023-06-13-22h04m52s165.png?ve=1&tl=1")}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-4 max-w-4xl">
            {/* Replaced motion.div with regular div */}
            <div>
              <MapPin className="h-16 w-16 mx-auto mb-6" />
              <h1 className="mb-6 text-5xl md:text-6xl font-bold">Mobile Home Services in Polk County</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Expert mobile and manufactured home leveling, anchoring, and repair services throughout Polk County, Florida
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
            </div>
          </div>
        </div>
      </section>

      {/* About Polk County Section */}
      <section className="section-container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold">About Polk County</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Located in Central Florida, Polk County is home to over 725,000 residents and includes cities like Lakeland, Winter Haven, and Bartow. The county's unique geography, with its mix of urban areas and natural landscapes, presents specific challenges for mobile homeowners.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Since 2005, our team has been providing specialized mobile home services throughout Polk County. We understand the local building codes, weather patterns, and soil conditions that affect mobile homes in this region.
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
              src="/images/polk-county-landscape.jpg" 
              alt="Polk County Landscape" 
              className="w-full h-full object-cover"
              onError={(e) => handleImageError(e, "https://media.istockphoto.com/id/2195561471/photo/lakeland-florida-skyline-aerial.jpg?s=612x612&w=0&k=20&c=Cu6wVBZgz1dUf-mBehiPVgIYURrnblEYX8_vTRVxlks=")}
            />
          </div>
        </div>
      </section>

      {/* Cities We Serve Section */}
      <section className="section-container py-20 bg-slate-50 rounded-lg my-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">Cities We Serve in Polk County</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide mobile home services throughout Polk County, including these major cities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {cities.map((city, index) => (
            // Replaced motion.div with regular div
            <div
              key={index}
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold">{city}</h3>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Don't see your city listed? We still serve you!</p>
          <Link to="/contact">
            <Button>Contact Us to Confirm Service Area</Button>
          </Link>
        </div>
      </section>

      {/* Interactive Map Section with Google Maps */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">Polk County Service Map</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our service area throughout Polk County
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524650.378015946!2d-81.7295!3d28.0394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7738a8b5c7c7f%3A0x4b8c5e5b5c5c5c5c!2sPolk%20County%2C%20FL!5e0!3m2!1sen!2sus!4v1629234567890!5m2!1sen!2sus"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Polk County Service Map"
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
              <p className="text-sm text-muted-foreground">Complete coverage of Polk County</p>
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
          <h2 className="mb-4 text-3xl font-bold">Our Services in Polk County</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized mobile home services designed for Polk County's unique conditions
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["overview", "leveling", "anchoring", "emergency"].map((tab) => (
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
                // Replaced motion.div with regular div
                <div
                  key={index}
                  className="transition-all duration-300 hover:-translate-y-1"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === "leveling" && (
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Mobile Home Leveling & Re-leveling</h3>
                <p className="text-muted-foreground mb-6">
                  Over time, mobile homes can become unlevel due to soil settling, moisture issues, or structural changes. Our professional leveling services restore your home to proper alignment, preventing further damage and improving comfort.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Our Leveling Process:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Comprehensive inspection</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Precise measurement using laser levels</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Adjustment of piers and supports</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Final verification and documentation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Benefits of Proper Leveling:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Prevention of structural damage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Improved door and window operation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Better water drainage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Enhanced comfort and livability</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {activeTab === "anchoring" && (
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Ground Anchors & Tie-Down Systems</h3>
                <p className="text-muted-foreground mb-6">
                  Proper anchoring is essential for mobile homes in Polk County, especially during Florida's storm season. Our anchoring systems secure your home to the ground, providing stability and protection against high winds.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Anchoring Services:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Ground anchor installation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Tie-down system upgrades</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Wind mitigation systems</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Storm protection certification</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Benefits of Proper Anchoring:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Protection against high winds</span>
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
                        <span>Increased home stability</span>
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
                  When disaster strikes, you need fast, reliable service. Our emergency repair team is available 24/7 throughout Polk County to address urgent mobile home issues caused by storms, accidents, or sudden structural problems.
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
            Real experiences from homeowners across Polk County
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            // Replaced motion.div with regular div
            <div
              key={index}
              className="transition-all duration-300 hover:-translate-y-1"
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
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about our mobile home services in Polk County
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
            Contact us today for a free, no-obligation estimate for your mobile home service needs in Polk County.
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
            Serving all of Polk County with certified technicians and quality workmanship
          </p>
        </div>
      </section>
    </div>
  );
};

export default PolkCounty;