import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Foundation = () => {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200" alt="Foundation Support" className="w-full h-full object-cover" />
          <div className="hero-overlay"></div>
        </div>
        <div className="section-container relative z-10 text-center text-white py-20">
          <h1 className="mb-6">Pier & Block Foundation Support</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">Expert mobile home foundation repair and pier installation for long-lasting structural integrity.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1 (689) 340-5795‬"><Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2"><Phone className="h-5 w-5" />+1 (689) 340-5795‬</Button></a>
            <Link to="/contact"><Button size="lg"  className="border-2 border-white text-white hover:bg-white hover:text-primary">Get Free Estimate</Button></Link>
          </div>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-6">Professional Foundation Support Services</h2>
            <div className="space-y-3">
              {[
                "Concrete block pier installation",
                "Steel pier foundation systems",
                "Leveling block adjustment and replacement",
                "Foundation inspection and assessment",
                "Structural support beam installation",
                "Settling and sagging repair",
                "Code-compliant pier spacing",
                "Long-lasting foundation solutions",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div><img src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=600" alt="Foundation Work" className="rounded-lg shadow-xl" /></div>
        </div>
      </section>

      <section className="gradient-primary text-white py-16">
        <div className="section-container text-center">
          <h2 className="mb-4 text-white">Strengthen Your Mobile Home Foundation</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Expert foundation repair and pier installation services</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1 (689) 340-5795"><Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2"><Phone className="h-5 w-5" />+1 (689) 340-5795</Button></a>
            <Link to="/contact"><Button size="lg"  className="border-2 border-white text-white hover:bg-white hover:text-primary">Request Free Estimate</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Foundation;
