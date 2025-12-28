import React, { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  MapPin, 
  Award, 
  Phone, 
  ArrowRight, 
  CheckCircle2,
  Clock,
  ClipboardCheck,
  Zap,
  Check,
  Star
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Deltona = () => {
  const [counts, setCounts] = useState({ years: 0, anchors: 0, satisfaction: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCounts(prev => ({
        years: Math.min(prev.years + 1, 15),
        anchors: Math.min(prev.anchors + 50, 2500),
        satisfaction: Math.min(prev.satisfaction + 2, 100)
      }));
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const location = "Deltona";
  const county = "Volusia County";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 md:pt-32 px-6 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 bg-white border border-slate-200 rounded-full mb-8 shadow-sm animate-bounce-slow">
            <Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400 mr-2" />
            <span className="text-[11px] font-black tracking-[0.2em] text-slate-600 uppercase">Top Rated in {county}</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10 text-slate-900">
            SECURE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">FOUNDATION</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-500 leading-relaxed mb-12 font-medium">
            {location}'s premier <strong className="text-slate-900">HUD-certified mobile home anchoring</strong> and structural stabilization services. Precision engineering meets Florida-tough durability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button className="w-full sm:w-auto bg-slate-900 hover:bg-teal-600 text-white font-bold px-12 h-16 rounded-2xl transition-all uppercase text-sm tracking-[0.15em] shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1">
              Request Free Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a href="tel:+16893405795" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full bg-white border-2 border-slate-200 text-slate-900 font-bold px-12 h-16 rounded-2xl hover:border-slate-900 transition-all flex items-center justify-center uppercase text-sm tracking-[0.15em]">
                <Phone className="w-4 h-4 mr-3" /> (689) 340-5795
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ================= KEY STATS ================= */}
      <section className="py-20 px-6 bg-teal-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 tracking-tight">Trusted by {location} Homeowners</h2>
          <p className="text-lg text-slate-700 mb-16 font-medium">Proven mobile home anchoring and stabilization with local expertise.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[ 
              { label: "Years Experience", value: `${counts.years}+` },
              { label: "Anchors Installed", value: `${counts.anchors}+` },
              { label: "Safety Rating", value: `${counts.satisfaction}%` }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <p className="text-4xl font-black text-teal-600 mb-2">{stat.value}</p>
                <p className="uppercase font-bold text-sm text-slate-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="py-6 bg-teal-600 overflow-hidden whitespace-nowrap border-y-4 border-slate-900">
        <div className="flex animate-marquee items-center">
          {[1,2,3,4].map((i)=>(
            <div key={i} className="flex items-center gap-12 mx-6">
              <span className="text-white text-2xl font-black uppercase tracking-tighter flex items-center gap-4">
                <Star className="fill-white w-6 h-6" /> {location}'s Best Anchoring
              </span>
              <span className="text-teal-200 text-2xl font-black uppercase tracking-tighter flex items-center gap-4">
                <Check className="w-6 h-6" /> HUD Certified 
              </span>
              <span className="text-white text-2xl font-black uppercase tracking-tighter flex items-center gap-4">
                <MapPin className="fill-white w-6 h-6" /> Serving {county}
              </span>
              <span className="text-teal-200 text-2xl font-black uppercase tracking-tighter flex items-center gap-4">
                <Star className="fill-white w-6 h-6" /> 100% Satisfaction
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {0% { transform: translateX(0); } 100% { transform: translateX(-50%); }}
        .animate-marquee { display: flex; width: fit-content; animation: marquee 25s linear infinite; }
        .animate-bounce-slow { animation: bounce 3s infinite; }
      `}</style>

     {/* ================= NEW SECTION: PROCESS / HOW IT WORKS ================= */}
      <section className="py-24 px-6 bg-teal-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 tracking-tight">Our Process for Sanford Mobile Home Anchoring</h2>
          <p className="text-lg text-slate-700 mb-12 font-medium">Step-by-step approach to secure and stabilize your home.</p>
          <div className="grid md:grid-cols-4 gap-12">
            {["Consultation","Site Inspection","Anchor Installation","Final Certification"].map((step,i)=>(
              <div key={i} className="space-y-3">
                <div className="w-16 h-16 mx-auto bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-black">{i+1}</div>
                <p className="font-bold text-slate-800 uppercase">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEW SECTION: TESTIMONIALS ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 tracking-tight">Customer Reviews</h2>
          <p className="text-lg text-slate-600 mb-12 font-medium">What Sanford homeowners say about our services.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "John D.", review: "Highly professional and fast installation. My home feels much safer." },
              { name: "Maria L.", review: "Certified installers and great customer service!" },
              { name: "Alex K.", review: "Best mobile home anchoring company in Sanford!" },
            ].map((item,i)=>(
              <Card key={i} className="p-6 hover:shadow-lg transition-all">
                <CardContent className="space-y-4 text-center">
                  <p className="text-slate-700 font-medium">{item.review}</p>
                  <p className="font-bold text-teal-600">- {item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: WHY CHOOSE US ================= */}
      <section className="py-24 px-6 bg-slate-900 text-white relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-teal-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none relative">Why Sanford <br /><span className="text-teal-400">Trusts Us</span></h2>
            <div className="space-y-8 relative">
              {[
                { t: "Licensed & Bonded", d: "Peace of mind with full state-authorized credentials." },
                { t: "Fast Documentation", d: "Engineering reports and certificates delivered in 48 hours." },
                { t: "Lifetime Integrity", d: "We don't just fix; we build for the next generation." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.4)]">
                    <Check className="w-5 h-5 text-slate-900 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-lg tracking-wide mb-1">{item.t}</h4>
                    <p className="text-slate-400 text-sm font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-12 border border-slate-700 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <ShieldCheck className="w-20 h-20 text-teal-400 mb-8" />
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Weather-Proof <br />Stabilization</h3>
            <p className="text-slate-400 leading-relaxed mb-8 text-lg">Our proprietary anchoring method exceeds standard code, ensuring your mobile home remains level and secure even during Sanford's storm season.</p>
            <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-teal-400 text-teal-400" />)}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: CONTACT ================= */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 text-slate-900 shadow-2xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-[80px] -mr-32 -mt-32" />
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Ready to <br /><span className="text-teal-600">Start?</span></h2>
              <p className="text-slate-500 text-lg mb-10 font-bold">Fast-response foundation experts ready to protect your home.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg"><Phone className="w-5 h-5 text-teal-400" /></div>
                  <span className="font-black text-lg tracking-tight">(689) 340-5795</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg"><Clock className="w-5 h-5 text-teal-400" /></div>
                  <span className="font-bold text-slate-600">Mon-Sat: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-5 text-sm outline-none focus:border-teal-500 transition-all font-bold placeholder:text-slate-400" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-5 text-sm outline-none focus:border-teal-500 transition-all font-bold placeholder:text-slate-400" />
              <textarea placeholder="Describe your project (e.g. Re-leveling, New Anchors)" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-5 text-sm h-32 outline-none focus:border-teal-500 transition-all font-bold placeholder:text-slate-400 resize-none" />
              <Button className="w-full bg-teal-600 hover:bg-slate-900 text-white font-black h-16 rounded-2xl transition-all uppercase text-sm tracking-[0.2em] shadow-xl flex items-center justify-center gap-3">
                Send Request <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deltona;
