import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone, Shield, Wind, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GroundAnchors = () => {
  const benefits = [
    "Meets Florida building code requirements",
    "Protects against high winds and hurricanes",
    "Prevents home shifting and movement",
    "Reduces insurance premiums",
    "Increases home stability and safety",
    "Long-lasting corrosion-resistant materials",
    "Professional installation by licensed contractors",
    "Compliance certification included",
  ];

  const types = [
    { title: "Screw Anchors", description: "Deep penetration anchors ideal for sandy Florida soil" },
    { title: "Auger Anchors", description: "Heavy-duty anchors for maximum holding power" },
    { title: "Concrete Anchors", description: "Permanent anchoring solutions for stable foundations" },
    { title: "Frame Anchors", description: "Direct attachment to mobile home chassis" },
  ];

  const faqs = [
    {
      question: "Are ground anchors required in Florida?",
      answer: "Yes, Florida building codes require proper anchoring systems for all mobile and manufactured homes to protect against hurricane-force winds. Compliance is mandatory for insurance and safety.",
    },
    {
      question: "How many ground anchors does my mobile home need?",
      answer: "The number depends on your home's size and local wind zone requirements. Typically, mobile homes need anchors every 10-12 feet along the length and at all corners. We provide a free assessment.",
    },
    {
      question: "How deep do ground anchors go?",
      answer: "Ground anchors typically extend 4-6 feet deep into the soil, depending on soil conditions and anchor type. Deeper anchors provide better holding power in Florida's sandy soil.",
    },
    {
      question: "Can ground anchors be installed after the home is set up?",
      answer: "Yes, ground anchors can be installed at any time. If your mobile home wasn't properly anchored during installation, we can retrofit a complete anchoring system.",
    },
    {
      question: "How long do ground anchors last?",
      answer: "Quality galvanized steel anchors can last 20-30 years or more with proper installation. We use corrosion-resistant materials designed for Florida's humid climate.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200"
            alt="Ground Anchors Installation"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="section-container relative z-10 text-center text-white py-20">
          <h1 className="mb-6">Ground Anchors Installation Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Professional mobile home ground anchor installation across Central Florida. Protect your home with code-compliant anchoring systems designed for hurricane protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1 (689) 340-5795">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
                <Phone className="h-5 w-5" />
                Call +1 (689) 340-5795
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg"  className="border-2 border-white text-white hover:bg-white hover:text-primary">
                Get Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-center">What Are Ground Anchors?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Ground anchors are essential components of a mobile home's foundation system, securing your home to the ground and preventing movement during high winds and storms. In Florida, proper ground anchoring is required by law and critical for hurricane protection.
          </p>
          <p className="text-lg text-muted-foreground">
            Our professional installation includes deep-penetration anchors connected to your home's frame with heavy-duty straps, meeting or exceeding all Florida building codes and wind zone requirements.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="section-container">
          <h2 className="text-center mb-12">Types of Ground Anchors We Install</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((type, index) => (
              <Card key={index} className="hover:shadow-primary transition-base">
                <CardContent className="pt-6 text-center">
                  <Anchor className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Benefits of Professional Ground Anchor Installation</h2>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <Card className="gradient-primary text-white">
              <CardContent className="pt-6">
                <Wind className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Hurricane Protection</h3>
                <p className="text-white/90">
                  Florida-certified anchoring systems designed to withstand hurricane-force winds up to 150+ mph.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Code Compliant</h3>
                <p className="text-muted-foreground">
                  All installations meet Florida building codes and include certification documentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="gradient-primary text-white py-16">
        <div className="section-container text-center">
          <h2 className="mb-4 text-white">Protect Your Mobile Home Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get professional ground anchor installation from Florida's licensed mobile home contractors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1 (689) 340-5795‬">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
                <Phone className="h-5 w-5" />
                +1 (689) 340-5795‬
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg"className="border-2 border-white text-white hover:bg-white hover:text-primary">
                Request Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GroundAnchors;
