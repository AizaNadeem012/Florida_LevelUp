import React, { useState } from "react";
import {
  ShieldCheck, Clock, MapPin, Phone, Mail, ArrowRight, Search, BadgeCheck, Zap,
  Building2, ChevronDown, CheckCircle2, Star, Award, HardHat, FileCheck, 
  Briefcase, CheckCircle, Smartphone, Scale, History, Microscope, Send, 
  Quote, HelpCircle, FileText, ArrowUpRight
} from "lucide-react";

const HudCertifiedInspection = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const partners = [
    "FHA Approved", "VA Housing", "USDA Rural", "Freddie Mac", 
    "Fannie Mae", "Rocket Mortgage", "Wells Fargo", "Chase Home"
  ];

  const faqs = [
    { 
      q: "How long does the certification take?", 
      a: "Our field technicians typically visit the site within 48 hours. Once the data is collected, our Licensed Professional Engineer (P.E.) reviews and seals the report, delivering a digital PDF to your inbox within 24 hours of the inspection." 
    },
    { 
      q: "What is a HUD 4930.3G compliance letter?", 
      a: "It is a structural certification signed and sealed by a Licensed Professional Engineer. It confirms that the manufactured home's foundation meets the 'Permanent Foundations Guide for Manufactured Housing' standards required for FHA, VA, and USDA financing." 
    },
    { 
      q: "What happens if the foundation fails inspection?", 
      a: "If we identify issues (like missing tie-downs or non-compliant skirting), we don't just 'fail' you. We provide a detailed Engineering Remediation Plan. Once the repairs are made, we issue the final certification so you can close your loan." 
    },
    { 
      q: "Do you cover all of Florida?", 
      a: "Yes. We have a network of field technicians covering all 67 Florida counties, from the Panhandle down to the Florida Keys." 
    }
  ];

  return (
    <div className="bg-[#FCFDFF] text-slate-800 font-sans selection:bg-teal-50">
    

      {/* 2. HERO SECTION */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 px-4 py-2 rounded-full text-amber-700 font-bold text-[10px] uppercase tracking-widest mb-8 shadow-sm">
              <Star size={12} className="fill-amber-500 text-amber-500" /> <span>Florida's #1 Rated PE Firm</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
              Fast <span className="text-teal-600">HUD</span> Seals.
            </h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
              Professional Engineering Stamped reports for Manufactured Homes. Guaranteed lender acceptance for FHA, VA & USDA loans.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-teal-200 transition-all hover:-translate-y-1">
                Order Inspection <ArrowRight size={20} />
              </button>
              <button className="bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                Sample Report
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="https://goaudits.com/wp-content/uploads/2019/04/engineersS.jpg" 
              alt="Engineering Inspection Site" 
              className="relative rounded-[2.8rem] shadow-2xl object-cover h-[600px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg"><Clock size={28}/></div>
                    <div>
                        <div className="font-black text-slate-900 text-2xl">24-48 Hours</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rapid Delivery</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MARQUEE LOGOS */}
      <div className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex items-center mx-12">
              <CheckCircle2 className="text-teal-500 mr-3" size={20} />
              <span className="text-2xl font-black text-slate-300 hover:text-teal-600 transition-colors cursor-default tracking-tighter uppercase">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. THE 4-STEP PROCESS */}
      <section id="process" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-500 font-medium">Streamlined workflow designed for fast real estate closings.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
            {[
              { step: "01", title: "Online Order", desc: "Submit your request in 2 minutes via our portal.", icon: <FileCheck className="text-teal-600" /> },
              { step: "02", title: "Site Visit", desc: "Field tech documents the foundation & anchors.", icon: <HardHat className="text-teal-600" /> },
              { step: "03", title: "PE Analysis", desc: "Engineer reviews data against HUD standards.", icon: <Search className="text-teal-600" /> },
              { step: "04", title: "Sealed PDF", desc: "Receive your stamped report via email.", icon: <Zap className="text-teal-600" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">{item.icon}</div>
                <div className="text-teal-600 font-black mb-2 tracking-widest uppercase text-xs">{item.step}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COVERAGE & LOCAL EXPERTISE */}
      <section id="coverage" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div className="grid grid-cols-2 gap-6 relative">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm83hL2IMS-C--sRdEF9MbdUjt0X4DpyQZwA&s" className="rounded-3xl shadow-lg mt-12" alt="Florida Property" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLmBGkwI26Ed5U8Lh4866yY5uOj4FYnugVw&s" className="rounded-3xl shadow-lg" alt="Foundation Work" />
                <div className="absolute inset-0 bg-teal-600/5 rounded-3xl -z-10 transform rotate-3"></div>
            </div>
            <div>
                <h2 className="text-5xl font-black text-slate-900 mb-8 leading-tight">Statewide Engineering <span className="text-teal-600">Coverage.</span></h2>
                <p className="text-lg text-slate-500 mb-10">We serve all 67 counties in Florida. Our localized field technicians ensure we can get to your property faster than any national firm.</p>
                <div className="space-y-4">
                    {['Miami & Fort Lauderdale', 'Tampa Bay Area', 'Orlando & Central Florida', 'Jacksonville & The Panhandle'].map((area) => (
                        <div key={area} className="flex items-center gap-3 font-bold text-slate-700">
                            <MapPin className="text-teal-500" size={18} /> {area}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 6. TECHNICAL STANDARDS */}
      <section id="standards" className="py-24 bg-slate-900 text-white rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-16">The Gold Standard of HUD Compliance</h2>
            <div className="grid md:grid-cols-3 gap-12">
                {[
                    { title: "HUD 4930.3G", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTjwGHkgjrSXH8dDBZrbMx9IVghCLCqLTcg&s" },
                    { title: "Florida Wind Zones", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQObShOeqhJyeAkDswE79BhkZhZ5pna6uKx5w&s", desc: "Custom structural letters tailored for FHA and VA underwriter guidelines." }
                    
                ].map((item, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-3xl mb-6 aspect-video">
                            <img src={item.img} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 opacity-60" alt={item.title} />
                            <div className="absolute inset-0 bg-teal-600/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 7. COMPARISON TABLE */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Why FloridaHUD?</h2>
          <p className="text-slate-500">Not all engineering firms are created equal.</p>
        </div>
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-8 text-lg font-bold">Feature</th>
                <th className="p-8 text-lg font-bold text-teal-400 text-center">FloridaHUD</th>
                <th className="p-8 text-lg font-bold opacity-50 text-center">Others</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { f: "Standard Turnaround", us: "48 Hours", them: "2-3 Weeks" },
                { f: "Remediation Strategy", us: "Included", them: "Extra Charge" },
                { f: "Florida PE Seal", us: "Digital & Physical", them: "Physical Only" },
                { f: "Specialization", us: "HUD/FHA Only", them: "Generalist" }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-teal-50/30 transition-colors">
                  <td className="p-8 font-bold text-slate-700">{row.f}</td>
                  <td className="p-8 font-black text-teal-600 text-center">{row.us}</td>
                  <td className="p-8 text-slate-400 text-center">{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. TRUST & TESTIMONIALS */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-black mb-6 leading-tight">Preferred by Florida's Top Agents.</h2>
            <p className="text-slate-500 mb-8">Fast, reliable, and strictly compliant reports for seamless closings.</p>
            <div className="flex gap-4">
               <div className="p-6 bg-white rounded-3xl border border-slate-200 text-center flex-1 shadow-sm">
                  <div className="text-3xl font-black text-teal-600">5.0</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Google Star Rating</div>
               </div>
               <div className="p-6 bg-white rounded-3xl border border-slate-200 text-center flex-1 shadow-sm">
                  <div className="text-3xl font-black text-slate-900">10k+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Reports Signed</div>
               </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative">
              <Quote className="text-teal-100 absolute top-8 right-8" size={60} />
              <div className="flex text-amber-400 mb-4"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
              <p className="text-slate-600 italic mb-8 relative z-10">"The fastest turnaround I've experienced in 15 years of real estate. Their P.E. seal was accepted by our lender without a single question."</p>
              <div className="font-bold text-slate-900">— Robert Martinez, Keller Williams</div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative">
              <Quote className="text-teal-100 absolute top-8 right-8" size={60} />
              <div className="flex text-amber-400 mb-4"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
              <p className="text-slate-600 italic mb-8 relative z-10">"They found a few issues with the tie-downs, gave us a clear repair plan, and re-inspected the same day the fix was done. Saved the deal!"</p>
              <div className="font-bold text-slate-900">— Amanda Coen, HomeStar Financial</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="mx-auto text-teal-600 mb-4" size={48} />
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 text-left flex justify-between items-center"
                >
                  <span className="font-bold text-lg text-slate-800 pr-8">{faq.q}</span>
                  <ChevronDown className={`text-teal-600 transition-transform flex-shrink-0 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-8 pb-8 text-slate-500 leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONTACT & LEAD CAPTURE */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-teal-50 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <h2 className="text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Get Certified <br/>This Week.</h2>
                    <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">Fill out the form for a free quote. We will verify your property's eligibility and schedule a site tech immediately.</p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm"><Phone size={20}/></div>
                            <span className="font-bold text-xl text-slate-700 underline decoration-teal-200">(689) 340-5795</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm"><Mail size={20}/></div>
                            <span className="font-bold text-xl text-slate-700 underline decoration-teal-200">compliance@floridahud.com</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-white">
                    <form className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Full Name" className="w-full p-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-teal-500 transition-all outline-none" />
                            <input type="email" placeholder="Email" className="w-full p-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-teal-500 transition-all outline-none" />
                        </div>
                        <input type="text" placeholder="Property Address" className="w-full p-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-teal-500 transition-all outline-none" />
                        <textarea placeholder="Tell us about the property (e.g., FHA Loan, 1995 Doublewide)" rows={3} className="w-full p-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-teal-500 transition-all outline-none"></textarea>
                        <button className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xl hover:bg-teal-600 transition-all shadow-lg flex items-center justify-center gap-3 uppercase tracking-widest">
                            Submit Request <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <Building2 size={400} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10 tracking-tighter">Stop Waiting. <br/><span className="text-teal-400 underline decoration-slate-700">Start Your Closing Today.</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button className="bg-teal-500 hover:bg-teal-400 text-white px-12 py-6 rounded-2xl font-black text-xl shadow-2xl transition-all hover:scale-105">Book Now</button>
            <button className="bg-transparent border-2 border-slate-700 hover:border-slate-500 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all">Agent Portal</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-8 text-center bg-white border-t border-slate-100">
        <div className="flex justify-center items-center gap-2 mb-8">
            <Building2 className="text-teal-600 w-8 h-8" />
            <span className="text-slate-900 font-black text-2xl tracking-tighter uppercase">Florida HUD</span>
        </div>
        <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] mb-4">
            Licensed Professional Engineers • Florida Registry #PE-88321
        </div>
        <p className="text-slate-400 text-xs max-w-md mx-auto leading-loose mb-10">
            Dedicated structural engineering services for the Florida manufactured housing industry. Specializing in FHA/HUD/VA foundation certifications and structural retrofitting designs.
        </p>
        <div className="flex justify-center gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-teal-600">Privacy Policy</a>
            <a href="#" className="hover:text-teal-600">Terms of Service</a>
            <a href="#" className="hover:text-teal-600">Site Map</a>
        </div>
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HudCertifiedInspection;
