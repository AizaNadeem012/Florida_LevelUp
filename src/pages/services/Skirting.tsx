import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone, Wrench, Shield, Clock, DollarSign, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Skirting = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200" alt="Skirting Installation" className="w-full h-full object-cover" />
          <div className="hero-overlay"></div>
        </div>
        <div className="section-container relative z-10 text-center text-white py-20">
          <h1 className="mb-6">Skirting Installation & Repair</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">Professional mobile home skirting services for improved aesthetics, insulation, and pest protection.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1 (689) 340-5795"><Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2"><Phone className="h-5 w-5" />+1 (689) 340-5795</Button></a>
            <Link to="/contact"><Button size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary">Get Free Estimate</Button></Link>
          </div>
        </div>
      </section>

      {/* Skirting Materials Section */}
      <section className="section-container py-16">
        <h2 className="text-center mb-12">Skirting Materials Available</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Vinyl Skirting", description: "Durable, low-maintenance, weather-resistant" },
            { title: "Metal Skirting", description: "Heavy-duty protection, hurricane-rated" },
            { title: "Cement Board", description: "Fire-resistant, long-lasting solution" },
            { title: "Brick/Stone", description: "Premium appearance, maximum durability" },
          ].map((item, index) => (
            <Card key={index} className="hover:shadow-primary transition-base">
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Benefits of Professional Skirting</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Protects plumbing from freezing temperatures",
                "Prevents pest and rodent intrusion",
                "Improves energy efficiency and insulation",
                "Enhances curb appeal and property value",
                "Protects undercarriage from weather damage",
                "Creates secure storage space underneath",
                "Blocks wind and moisture",
                "Meets community standards and codes",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="section-container py-16">
        <h2 className="text-center mb-12">Our Installation Process</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Consultation", description: "We assess your mobile home and discuss material options that fit your needs and budget.", icon: <Phone className="h-8 w-8" /> },
              { title: "Installation", description: "Our expert team installs your skirting with precision and attention to detail.", icon: <Wrench className="h-8 w-8" /> },
              { title: "Final Inspection", description: "We ensure everything is properly installed and meet quality standards before completion.", icon: <CheckCircle2 className="h-8 w-8" /> },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-primary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services Section */}
      <section className="bg-secondary py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Skirting Repair Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Common Issues We Fix</h3>
                <ul className="space-y-3">
                  {[
                    "Cracked or broken panels",
                    "Warped or buckled skirting",
                    "Damage from weather or pests",
                    "Improper installation issues",
                    "Ventilation problems",
                    "Color fading or discoloration"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Why Repair Now?</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Shield className="h-6 w-6" />, text: "Prevent further damage to your home's foundation" },
                    { icon: <DollarSign className="h-6 w-6" />, text: "Avoid costly replacements with timely repairs" },
                    { icon: <Clock className="h-6 w-6" />, text: "Quick repairs restore protection immediately" }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-primary">{benefit.icon}</div>
                      <p>{benefit.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information Section */}
      <section className="section-container py-16">
        <h2 className="text-center mb-12">Pricing Information</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Factors Affecting Cost</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Home size and perimeter",
                  "Material selection",
                  "Ground preparation needs",
                  "Accessibility challenges",
                  "Custom features and ventilation",
                  "Removal of old skirting"
                ].map((factor, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="text-center">
            <p className="text-lg mb-6">Get a detailed, no-obligation quote tailored to your specific needs</p>
            <Link to="/contact"><Button size="lg" className="bg-primary text-white hover:bg-primary/90">Request Free Quote</Button></Link>
          </div>
        </div>
      </section>

      {/* Maintenance Tips Section */}
      <section className="bg-secondary py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Skirting Maintenance Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Regular Cleaning", description: "Clean your skirting periodically with mild soap and water to prevent buildup of dirt and grime." },
                { title: "Inspect for Damage", description: "Check for cracks, warping, or pest intrusion at least twice a year." },
                { title: "Ensure Proper Ventilation", description: "Keep vents clear of debris to prevent moisture buildup underneath your home." },
                { title: "Address Issues Promptly", description: "Small repairs can prevent larger, more expensive problems down the line." }
              ].map((tip, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
                    <p className="text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container py-16">
        <h2 className="text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {[
              {
                question: "How long does skirting installation typically take?",
                answer: "Most standard installations can be completed within 1-3 days, depending on the size of your home and the material selected."
              },
              {
                question: "Do you offer warranties on your skirting work?",
                answer: "Yes, we stand behind our work with comprehensive warranties on both materials and labor. Specific warranty terms vary by material type."
              },
              {
                question: "Can you install skirting on uneven ground?",
                answer: "Absolutely. We have experience with various terrain challenges and can customize solutions for uneven or sloped properties."
              },
              {
                question: "Do I need to be home during the installation?",
                answer: "While we prefer someone to be available at the beginning and end of the project, you don't need to be present for the entire installation process."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary py-16">
        <div className="section-container">
          <h2 className="text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                comment: "The team did an amazing job installing our new vinyl skirting. It completely transformed the look of our mobile home!"
              },
              {
                name: "Michael Rodriguez",
                rating: 5,
                comment: "After a storm damaged our old skirting, they came out quickly and had it replaced in just two days. Professional and affordable."
              },
              {
                name: "Emily Chen",
                rating: 5,
                comment: "I'm so impressed with the quality of work and attention to detail. Our new skirting looks fantastic and has already improved our energy bills."
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <p className="font-bold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-primary text-white py-16">
        <div className="section-container text-center">
          <h2 className="mb-4 text-white">Professional Skirting Installation</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Protect and beautify your mobile home with quality skirting</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1 (689) 340-5795"><Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2"><Phone className="h-5 w-5" />+1 (689) 340-5795</Button></a>
            <Link to="/contact"><Button size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary">Request Free Estimate</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skirting; 