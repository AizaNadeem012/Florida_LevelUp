import React, { useState } from "react";
import {
  Phone,
  CheckCircle,
  ChevronDown,
  ShieldCheck,
  FileText,
  Zap,
  Star,
  ArrowRight,
  Clock,
  Award,
  Shield,
  Construction,
  Home,
  HardHat,
  AlertTriangle,
  ClipboardList,
  Search
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const HudCertifiedInspection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const areas = [
    "Orlando", "Tampa", "Kissimmee", "Lakeland", "Daytona Beach",
    "St. Petersburg", "Winter Haven", "Deltona", "Palm Coast",
    "Cocoa", "Sebring", "Sanford", "Port Orange", "Clearwater",
    "Ocala", "Melbourne"
  ];

  const services = [
    {
      title: "Pre-Purchase Audit",
      desc: "Complete structural and system check before you finalize your investment.",
      icon: FileText,
    },
    {
      title: "Storm Damage",
      desc: "Specialized post-hurricane assessments for anchors, roof, and siding.",
      icon: Zap,
    },
    {
      title: "Foundation & Level",
      desc: "Precision checks for piers, blocks, and critical tie-down anchors.",
      icon: ShieldCheck,
    }
  ];

  const faqs = [
    {
      q: "How often should I have my mobile home inspected?",
      a: "We recommend an annual inspection, or immediately after severe storms or hurricanes to avoid hidden structural damage."
    },
    {
      q: "What should I expect from a mobile home inspection?",
      a: "You’ll receive a complete inspection covering structure, foundation, plumbing, electrical systems, HVAC, and appliances, along with a photo-based report."
    },
    {
      q: "How much does a mobile home inspection cost?",
      a: "Most inspections range from $200–$500 depending on home size and inspection scope. We provide free upfront quotes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mobile Home Inspection Services | Central Florida Experts</title>
        <meta name="description" content="Certified mobile home inspections in Central Florida. HUD compliant and detailed reports." />
      </Helmet>

      <div className="font-sans text-slate-900 bg-white leading-normal tracking-tight">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent opacity-60" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-teal-400 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
                <Shield size={12} />
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase">HUD Certified Florida Specialists</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
                Precision <span className="text-teal-400">Inspections</span> <br className="hidden md:block" /> 
                For Manufactured Homes
              </h1>

              <p className="text-base md:text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed font-light">
                Expert 150-point audits designed for Florida's unique conditions. 
                <span className="text-slate-200"> Reports delivered within 24 hours.</span>
              </p>

              <div className="flex flex-wrap gap-4 justify-center items-center">
                <a 
                  href="tel:+16893405795" 
                  className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all active:scale-95 text-sm"
                >
                  <Phone size={16} />
                  SCHEDULE NOW
                </a>
                
                <div className="flex items-center gap-3 px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                   <div className="flex -space-x-1">
                     {[1,2,3,4,5].map(i => (
                       <Star key={i} size={12} fill="#2dd4bf" className="text-teal-400" />
                     ))}
                   </div>
                   <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest border-l border-white/10 pl-3">
                     Top Rated
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- STATS --- */}
        <section className="relative z-20 -mt-8 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Inspections Done", val: "2,500+", icon: CheckCircle },
              { label: "Report Turnaround", val: "24 Hours", icon: Clock },
              { label: "Certification", val: "HUD Licensed", icon: Award }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-white shadow-xl shadow-slate-200/40 rounded-xl border border-slate-100">
                <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center shrink-0">
                  <stat.icon size={20} />
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900 leading-none mb-1">{stat.val}</p>
                  <p className="text-slate-500 font-semibold text-[10px] uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- EXPERTISE SECTION --- */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 tracking-tight">Expertise that <span className="text-teal-600">goes deeper.</span></h2>
                <p className="text-slate-600 text-base mb-8 leading-relaxed max-w-lg">
                  Mobile homes require specialized knowledge. Our HUD-certified experts focus on critical areas that general inspectors often miss, like the specialized chassis and anchoring systems.
                </p>
                <div className="space-y-3">
                  {["Vapor Barrier Integrity", "Tie-down Safety", "HUD Compliance"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 w-fit pr-6">
                      <CheckCircle className="text-teal-500" size={16} />
                      <span className="font-semibold text-slate-700 text-xs tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative p-10 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800">
                    <ShieldCheck size={80} className="text-teal-500/20 mb-4" />
                    <p className="text-xl font-medium text-white mb-4 leading-snug">"The most detailed report I've ever seen for a manufactured home. They caught issues the previous inspector missed entirely."</p>
                    <div className="h-px w-12 bg-teal-500 mb-4" />
                    <p className="text-slate-400 text-xs uppercase tracking-widest">— Local Homeowner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW: DETAILED CHECKLIST SECTION --- */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our 150-Point Checklist</h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-light">We leave no stone unturned. Our HUD-certified process covers the entire anatomy of your manufactured home.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Structural Integrity", items: ["Chassis & Frame", "Piers & Anchors", "Subflooring"], icon: Home },
                { title: "Exterior & Roof", items: ["Roof Sealing", "Siding Quality", "Vapor Barriers"], icon: Construction },
                { title: "Systems & Safety", items: ["Electrical Panel", "HVAC Ducting", "Plumbing Leaks"], icon: Zap },
                { title: "Safety Hazards", items: ["Egress Windows", "Smoke Detectors", "Gas Lines"], icon: ShieldCheck }
              ].map((box, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow">
                  <box.icon className="text-teal-500 mb-4" size={24} />
                  <h3 className="font-bold text-slate-900 mb-4">{box.title}</h3>
                  <ul className="space-y-3">
                    {box.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        

        {/* --- GRID SERVICES --- */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
                <div key={i} className="group p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-teal-500/5 transition-all">
                    <div className="w-12 h-12 bg-slate-950 text-white rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-teal-500">
                        <service.icon size={22} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">{service.desc}</p>
                    <div className="flex items-center font-bold text-[10px] tracking-[0.15em] uppercase text-teal-600">
                        LEARN MORE <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            ))}
          </div>
        </section>

        {/* --- NEW: THE PROCESS SECTION --- */}
        <section className="py-24 bg-slate-950 text-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">How it works. <br /><span className="text-teal-400">Simple & Fast.</span></h2>
                <div className="space-y-10">
                  {[
                    { step: "01", t: "Book Your Inspection", d: "Call or text us. We schedule most inspections within 48 hours based on your availability." },
                    { step: "02", t: "On-Site Evaluation", d: "Our HUD specialist performs a rigorous 2-hour physical audit, examining from the roof to the vapor barrier." },
                    { step: "03", t: "Digital Report", d: "Receive a high-res PDF report with categorized photos and a clear repair priority list." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <span className="text-4xl font-black text-teal-500/30 font-sans leading-none">{item.step}</span>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.t}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed font-light">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                 <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <HardHat size={40} className="text-teal-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Florida Post-Storm Specialist</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed text-sm font-light">Central Florida weather is harsh on manufactured homes. We specialize in identifying micro-cracks in roofing and loosened tie-downs after high-wind events.</p>
                    <div className="flex items-center gap-4 text-teal-400 font-bold text-[10px] tracking-widest uppercase">
                      <AlertTriangle size={16} /> Hurricane Readiness Included
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW: COMPARISON TABLE --- */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold tracking-tight text-slate-900">Why a HUD Specialist Matters</h2>
            </div>
            <div className="max-w-4xl mx-auto border border-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-6 text-slate-900 font-bold border-b border-slate-200">Feature</th>
                    <th className="p-6 text-teal-600 font-bold border-b border-slate-200">Our Inspection</th>
                    <th className="p-6 text-slate-400 font-bold border-b border-slate-200">Standard Inspector</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { f: "HUD Compliance Audit", us: true, them: false },
                    { f: "Chassis & Anchor Stress Test", us: true, them: false },
                    { f: "Vapor Barrier & Underbelly", us: true, them: "Limited" },
                    { f: "24-Hour Digital Delivery", us: true, them: "3-5 Days" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 last:border-0">
                      <td className="p-6 font-semibold text-slate-700">{row.f}</td>
                      <td className="p-6 text-teal-500">
                        {row.us ? <CheckCircle size={18} /> : "—"}
                      </td>
                      <td className="p-6 text-slate-300">
                        {row.them === true ? <CheckCircle size={18} /> : row.them === false ? "—" : row.them}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- CITIES (COMPACT) --- */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-10 tracking-tight">Serving Central Florida</h2>
                <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                  {areas.map((city, i) => (
                    <span key={i} className="py-2 px-4 bg-white border border-slate-200 rounded-lg text-slate-600 text-[10px] font-bold uppercase tracking-wider hover:border-teal-400 transition-colors cursor-default shadow-sm">
                      {city}
                    </span>
                  ))}
                </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-24 bg-white">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">Common Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className={`w-full p-5 flex justify-between items-center text-left transition-all ${activeFaq === i ? 'text-teal-600' : 'text-slate-800'}`}
                  >
                    <span className="text-sm font-bold pr-4">{faq.q}</span>
                    <ChevronDown size={16} className={`shrink-0 transition-transform ${activeFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {activeFaq === i && (
                    <div className="px-5 pb-5 text-slate-500 text-xs leading-relaxed font-light border-t border-slate-50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-slate-950 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">Secure your home today.</h2>
                <p className="text-slate-400 text-sm mb-10 max-w-md mx-auto font-light">Don't wait for a small leak to become a major structural failure. Get your certified report tomorrow.</p>
                <a
                  href="tel:+16893405795"
                  className="inline-flex items-center gap-3 bg-white text-slate-950 px-10 py-4 rounded-xl font-bold text-base hover:bg-teal-400 transition-all active:scale-95 shadow-xl shadow-white/5"
                >
                  <Phone size={20} /> (689) 340-5795
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-slate-100 text-center bg-white">
          <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Mobile Home Experts Florida
          </p>
        </footer>
      </div>
    </>
  );
};

export default HudCertifiedInspection;
