import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone, AlertTriangle, Wrench, Shield, Clock, Users, Award, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FloorLeveling = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Helper function to handle image errors with proper TypeScript typing
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    const imgElement = e.currentTarget;
    imgElement.onerror = null;
    imgElement.src = fallbackSrc;
  };

  const floorIssues = [
    {
      title: "Floors feel bouncy or springy when walking",
      description: "Uneven floors that create uncomfortable movement when walking"
    },
    {
      title: "Visible sagging in floor sections",
      description: "Noticeable dips or low spots in your flooring"
    },
    {
      title: "Gaps between floor and walls",
      description: "Spaces appearing where floor meets walls, indicating foundation issues"
    },
    {
      title: "Doors won't close properly",
      description: "Doors that stick, jam, or don't latch correctly"
    },
    {
      title: "Cracks in floor tiles or vinyl",
      description: "Visible damage to your flooring material"
    },
    {
      title: "Furniture appears tilted",
      description: "Tables, chairs, or furniture that seems uneven"
    },
    {
      title: "Water pooling on floors",
      description: "Areas where water collects on your floor surface"
    },
    {
      title: "Squeaking or creaking sounds",
      description: "Noises when walking across certain areas"
    }
  ];

  const benefits = [
    {
      title: "Improved Safety",
      description: "Eliminate tripping hazards and prevent falls"
    },
    {
      title: "Enhanced Comfort",
      description: "Enjoy walking on perfectly level floors"
    },
    {
      title: "Increased Home Value",
      description: "Addressing foundation issues improves property value"
    },
    {
      title: "Prevent Further Damage",
      description: "Stop small problems from becoming major repairs"
    },
    {
      title: "Better Furniture Placement",
      description: "Ensure your furniture sits level and stable"
    },
    {
      title: "Energy Efficiency",
      description: "Properly sealed floors reduce energy loss"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Inspection",
      description: "Thorough assessment of floor condition and foundation"
    },
    {
      step: "2",
      title: "Support Installation",
      description: "Add temporary supports during leveling process"
    },
    {
      step: "3",
      title: "Floor Repair",
      description: "Fix damaged subflooring and joists before leveling"
    },
    {
      step: "4",
      title: "Precision Leveling",
      description: "Adjust piers and supports to exact specifications"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Miller",
      city: "Orlando",
      text: "The team did an amazing job leveling our floors. You can't even tell where the problem areas were before they came. Now our entire home feels stable and comfortable.",
      rating: 5
    },
    {
      name: "Robert Johnson",
      city: "Tampa",
      text: "I had severe sagging in my living room that was causing doors to stick. Their team identified the underlying foundation issue and fixed both problems in one visit. Professional service from start to finish.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      city: "Kissimmee",
      text: "After hurricane damage, I thought my floors were beyond repair. The team not only leveled them perfectly but also reinforced the foundation to prevent future issues. Worth every penny!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How do I know if my floors need leveling?",
      answer: "Common signs include visible sagging, bouncy spots, gaps between floor and walls, doors that stick, and creaking sounds. Place a marble or ball on your floor - if it rolls, you likely need leveling."
    },
    {
      question: "How long does floor leveling take?",
      answer: "Most standard floor leveling jobs can be completed in 4-6 hours. Complex projects requiring foundation work may take 1-2 days, depending on the extent of the damage."
    },
    {
      question: "Is floor leveling covered by insurance?",
      answer: "Floor leveling due to foundation issues is often covered by homeowners insurance, especially when caused by covered events like storms or accidents. We can help you navigate the insurance claim process."
    },
    {
      question: "What's the difference between floor leveling and foundation repair?",
      answer: "Floor leveling addresses the symptom (uneven floors) while foundation repair addresses the cause (settling or damaged supports). Both are often needed together for a permanent solution."
    },
    {
      question: "Do you offer emergency floor leveling services?",
      answer: "Yes, we provide 24/7 emergency floor leveling services throughout Central Florida. Our response time varies by location but is typically within 24 hours for urgent issues."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200" 
            alt="Floor Leveling" 
            className="w-full h-full object-cover"
            onError={(e) => handleImageError(e, "https://picsum.photos/seed/floorleveling/1920/600.jpg")}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-4 max-w-4xl">
            <div className="mb-6">
              <Wrench className="h-16 w-16 mx-auto mb-6" />
              <h1 className="mb-6 text-5xl md:text-6xl font-bold">Floor Leveling & Sagging Correction</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Expert mobile home floor repair and leveling services to restore comfort and structural integrity
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+1 (689) 340-5795">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg">
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
            </div>
          </div>
        </div>
      </section>

      {/* About Floor Leveling Section */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-3xl font-bold">About Floor Leveling</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uneven floors in mobile homes are more than just a cosmetic issue - they often indicate underlying foundation problems that can compromise your home's structural integrity. Our expert floor leveling services address both the symptoms and the root cause.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Floor Leveling Services?</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>15+ years of specialized experience</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>State-of-the-art laser leveling technology</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>Comprehensive foundation assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>Licensed, bonded, and insured technicians</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 rounded-lg h-80 flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600" 
              alt="Floor Leveling Process" 
              className="w-full h-full object-cover"
              onError={(e) => handleImageError(e, "https://picsum.photos/seed/floorlevelingprocess/600/400.jpg")}
            />
          </div>
        </div>
      </section>

      {/* Signs You Need Floor Leveling Section */}
      <section className="section-container py-20 bg-slate-50 rounded-lg my-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">Signs You Need Floor Leveling</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't ignore these warning signs - they often indicate foundation issues that can worsen over time and lead to more expensive repairs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {floorIssues.map((issue, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-background p-4 rounded-lg">
              <AlertTriangle className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-bold mb-2">{issue.title}</h3>
              <p className="text-muted-foreground text-sm">{issue.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Don't see your issue listed? Contact us for a comprehensive floor assessment.</p>
          <Link to="/contact">
            <Button variant="outline">Schedule Floor Inspection</Button>
          </Link>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">Our Floor Leveling Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our systematic approach ensures lasting results by addressing both the symptoms and the underlying causes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {process.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">Benefits of Professional Floor Leveling</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond just fixing uneven floors, professional leveling provides numerous advantages for your mobile home.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Map Section with Google Maps */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">Our Service Area</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide expert floor leveling services throughout Central Florida
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-xl mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524650.378015946!2d-81.5!3d28.5!2m3!1f0!2f0!3f0!3m2!1s0x88e7738a8b5c7f%3A0x4b8c5e5b5c5c5c!2sCentral%20Florida%2C%20FL!5e0!3m2!1sen!2sus!4v1629234567890!5m2!1sen!2sus"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Central Florida Service Area"
            className="w-full"
          ></iframe>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 rounded-full bg-primary"></div>
              </div>
              <h3 className="font-semibold mb-2">Service Area</h3>
              <p className="text-sm text-muted-foreground">Complete coverage of Central Florida</p>
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
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Free Estimates</h3>
              <p className="text-sm text-muted-foreground">Call for a no-obligation quote</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container py-20 bg-slate-50 rounded-lg my-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from homeowners who've used our floor leveling services
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-lg shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
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
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about our floor leveling services
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
          <h2 className="mb-4 text-3xl font-bold text-white">Fix Your Sagging Floors Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let uneven floors compromise your comfort and safety. Contact us for a free, no-obligation estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1 (689) 340-5795">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg">
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
            Serving all of Central Florida with certified technicians and quality workmanship
          </p>
        </div>
      </section>
    </div>
  );
};

export default FloorLeveling;
