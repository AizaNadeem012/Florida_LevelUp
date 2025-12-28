import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, CheckCircle, Shield, Clock, Users, Award, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const LakeCounty = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Helper function to handle image errors with proper TypeScript typing
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    const imgElement = e.currentTarget;
    imgElement.onerror = null;
    imgElement.src = fallbackSrc;
  };
  
  const cities = ["Clermont", "Leesburg", "Eustis", "Mount Dora", "Tavares", "Groveland", "Minneola", "Umatilla", "Fruitland Park", "Lady Lake"];
  
  const services = [
    {
      title: "Crawl Space Stabilization",
      description: "Expert solutions for crawl space issues and moisture control",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-6 h-3 border-t-2 border-b-2 border-primary"></div>
      </div>
    },
    {
      title: "Tie-Down Systems",
      description: "Installation of secure tie-downs and anchoring systems",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[16px] border-b-primary border-r-[8px] border-r-transparent"></div>
      </div>
    },
    {
      title: "Wind Mitigation",
      description: "Advanced wind protection systems for Florida weather",
      icon: <Shield className="h-6 w-6 text-primary" />
    },
    {
      title: "Foundation Repair",
      description: "Expert repair of pier and beam foundations and concrete pads",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-primary rounded"></div>
      </div>
    },
    {
      title: "Mobile Home Leveling",
      description: "Precise leveling to prevent structural issues and improve comfort",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-6 h-1 bg-primary rounded"></div>
      </div>
    },
    {
      title: "Lake-Specific Solutions",
      description: "Specialized services for lakeside properties",
      icon: <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-6 h-6 bg-primary rounded-full"></div>
      </div>
    },
    {
      title: "Emergency Repairs",
      description: "24/7 response for storm damage and urgent structural issues",
      icon: <Clock className="h-6 w-6 text-primary" />
    }
  ];

  const testimonials = [
    {
      name: "Robert Johnson",
      city: "Clermont",
      text: "The team did an excellent job leveling our mobile home. Professional, efficient, and reasonably priced.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      city: "Leesburg",
      text: "I needed emergency foundation repair after the storm, and they responded the same day. The quality of work exceeded my expectations.",
      rating: 5
    },
    {
      name: "James Wilson",
      city: "Mount Dora",
      text: "Their wind mitigation system gave us peace of mind during storm season. Worth every penny!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Do you offer emergency services in Lake County?",
      answer: "Yes, we provide 24/7 emergency mobile home repair services throughout Lake County. Our response time varies by location but is typically within 24 hours."
    },
    {
      question: "Are your services licensed and insured in Florida?",
      answer: "Absolutely. We are fully licensed, bonded, and insured in Lake County and throughout Florida. Our technicians are certified and undergo regular training."
    },
    {
      question: "Do you provide free estimates for Lake County residents?",
      answer: "Yes, we offer free, no-obligation estimates for all our mobile home services in Lake County."
    },
    {
      question: "How do you address moisture issues in lakeside properties?",
      answer: "We specialize in moisture control solutions for lakeside properties, including vapor barriers, proper drainage systems, and crawl space ventilation designed specifically for Florida's humid climate."
    }
  ];

  const stats = [
    { value: "950+", label: "Projects Completed" },
    { value: "2008", label: "Year Established" },
    { value: "75+", label: "Years Experience" },
    { value: "5", label: "Star Rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/images/lake-county-hero.jpg" 
            alt="Lake County" 
            className="w-full h-full object-cover"
            onError={(e) => handleImageError(e, "https://webapp-discoverlakeumbraco.azurewebsites.net/media/gqpk0fjz/lake-harris.jpg")}
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
              <h1 className="mb-6 text-5xl md:text-6xl font-bold">Mobile Home Services in Lake County</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Expert mobile and manufactured home leveling, anchoring, and repair services throughout Lake County, Florida
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+1 (689) 340-5795">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg gap-2">
                    <Phone className="h-5 w-5" />
                    Call Us Now
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg">
                    Get Free Estimate
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Lake County Section */}
      <section className="section-container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold">About Lake County</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Located in Central Florida, Lake County is home to over 380,000 residents and includes popular destinations like Clermont, Leesburg, and Mount Dora. The county's unique geography, with its numerous lakes and natural wetlands, presents specific challenges for mobile homeowners.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Since 2008, our team has been providing specialized mobile home services throughout Lake County. We understand the unique challenges of lakeside properties, including moisture control, proper drainage, and foundation stability in this region.
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
              src="/images/lake-county-landscape.jpg" 
              alt="Lake County Landscape" 
              className="w-full h-full object-cover"
              onError={(e) => handleImageError(e, "https://ssl.cdn-redfin.com/photo/118/islphoto/220/genIslnoResize.O6360220_76_0.webp")}
            />
          </div>
        </div>
      </section>

      {/* Cities We Serve Section */}
      <section className="section-container py-20 bg-slate-50 rounded-lg my-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">Cities We Serve in Lake County</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide mobile home services throughout Lake County, including these major cities
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
          <h2 className="mb-4 text-3xl font-bold">Lake County Service Map</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our service area throughout Lake County
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524650.378015946!2d-81.7295!3d28.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7738a8b5c7c7f%3A0x4b8c5e5b5c5c5c!2sLake%20County%2C%20FL!5e0!3m2!1sen!2sus!4v1629234567890!5m2!1sen!2sus"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lake County Service Map"
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
              <p className="text-sm text-muted-foreground">Complete coverage of Lake County</p>
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
          <h2 className="mb-4 text-3xl font-bold">Our Services in Lake County</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized mobile home services designed for Lake County's unique conditions
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["overview", "crawlspace", "anchoring", "lakeside"].map((tab) => (
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
          
          {activeTab === "crawlspace" && (
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Crawl Space Stabilization</h3>
                <p className="text-muted-foreground mb-6">
                  Lake County's numerous lakes and humid climate can create significant challenges for crawl spaces under mobile homes. Our specialized crawl space stabilization services address moisture control, structural support, and ventilation to protect your home's integrity.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Crawl Space Services:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Vapor barrier installation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Crawl space ventilation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Structural reinforcement</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Moisture control systems</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Benefits of Crawl Space Services:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Prevention of mold and mildew</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Improved air quality</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Protection of structural integrity</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Increased energy efficiency</span>
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
                <h3 className="text-2xl font-bold mb-4">Tie-Down Systems & Anchoring</h3>
                <p className="text-muted-foreground mb-6">
                  Proper anchoring is essential for mobile homes in Lake County, especially during Florida's storm season. Our tie-down systems and ground anchors secure your home to prevent shifting during high winds and severe weather.
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
          
          {activeTab === "lakeside" && (
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Lake-Specific Solutions</h3>
                <p className="text-muted-foreground mb-6">
                  Mobile homes near lakes in Lake County face unique challenges including higher humidity levels, potential for water intrusion, and specific soil conditions. Our lake-specific solutions address these challenges with specialized techniques and materials.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Lake-Specific Services:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Enhanced moisture barriers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Water-resistant materials</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Improved drainage systems</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Elevated foundation solutions</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Benefits of Lake-Specific Solutions:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Protection against water damage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Extended material lifespan</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Improved property value</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Lakeside-specific expertise</span>
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
            Real experiences from homeowners across Lake County
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
            Common questions about our mobile home services in Lake County
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
            Contact us today for a free, no-obligation estimate for your mobile home service needs in Lake County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1 (689) 340-5795">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 font-semibold px-8 py-3 text-lg">
                <Phone className="h-5 w-5" />
                Call Us Now
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg">
                Request Free Estimate
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm opacity-90">
            Serving all of Lake County with certified technicians and quality workmanship
          </p>
        </div>
      </section>
    </div>
  );
};

export default LakeCounty;
