import React, { useState } from "react";
import {
  ShieldCheck, Clock, MapPin, Phone, Mail, ArrowRight, Search, BadgeCheck, Zap,
  Building2, ChevronDown, CheckCircle2, Star, Award, HardHat, FileCheck, 
  Briefcase, CheckCircle, Smartphone, Scale, History, Microscope, Send, 
  Quote, HelpCircle, FileText, ArrowUpRight, Home, Wrench, Thunderbolt, Zap as ZapIcon
} from "lucide-react";

const MobileHomeInspection = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const serviceAreas = [
    "Orlando", "Tampa", "Kissimmee", "Lakeland", "Daytona Beach", 
    "St. Petersburg", "Winter Haven", "Deltona", "Palm Coast", "Cocoa",
    "Sebring", "Sanford", "Port Orange", "Clearwater", "Ocala", "Melbourne"
  ];

  const faqs = [
    { 
      q: "How often should I have my mobile home inspected?", 
      a: "For most homes, we recommend an annual inspection, or more often if you've experienced severe weather. Regular inspections help catch problems early before they escalate." 
    },
    { 
      q: "What should I expect from a mobile home inspection?", 
      a: "Expect a detailed inspection covering all essential areas of your mobile home's condition. You'll receive a comprehensive report with photos and recommendations for repairs or maintenance." 
    },
    { 
      q: "How much does a mobile home inspection cost?", 
      a: "A typical inspection costs between $200 to $500, depending on the size of the home and the inspection requirements. We offer affordable pricing and free quotes." 
    },
    { 
      q: "Do you cover all of Central Florida?", 
      a: "Yes. We proudly serve Orlando, Tampa, Lakeland, Kissimmee, Daytona Beach, St. Petersburg, and all surrounding cities in Central Florida." 
    }
  ];

  return (
    <div className="bg-[#FCFDFF] text-slate-800 font-sans selection:bg-teal-50">
      {/* 1. NAVIGATION - Placeholder for navigation */}

      {/* 2. HERO SECTION */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 px-4 py-2 rounded-full text-amber-700 font-bold text-[10px] uppercase tracking-widest mb-8 shadow-sm">
              <Star size={12} className="fill-amber-500 text-amber-500" /> <span>Central Florida's Trusted Inspection Service</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
              Mobile Home <span className="text-teal-600">Inspections</span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
              Welcome to Florida Truly Level Mobile Home Service, the trusted provider of mobile home inspections throughout Central Florida. We specialize in ensuring your mobile home is safe, structurally sound, and up to code.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-teal-200 transition-all hover:-translate-y-1">
                Schedule Inspection <ArrowRight size={20} />
              </button>
              <button className="bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                Call Us Now
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="https://www.mobilehomelevelingandanchoringservice.com/wp-content/uploads/2022/08/mobile-home-inspection-1.jpg" 
              alt="Mobile Home Inspection" 
              className="relative rounded-[2.8rem] shadow-2xl object-cover h-[600px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg"><Phone size={28}/></div>
                    <div>
                        <div className="font-black text-slate-900 text-2xl">+1 (689) 340-5795</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Call Today</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE AREAS MARQUEE */}
      <div className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...serviceAreas, ...serviceAreas].map((area, i) => (
            <div key={i} className="flex items-center mx-12">
              <MapPin className="text-teal-500 mr-3" size={20} />
              <span className="text-2xl font-black text-slate-300 hover:text-teal-600 transition-colors cursor-default tracking-tighter uppercase">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. WHY CHOOSE FLORIDA TRULY LEVEL */}
      <section id="why-choose" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Why Choose Florida Truly Level Mobile Home Service</h2>
            <p className="text-slate-500 font-medium">Your trusted partner for mobile home inspections in Central Florida.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Certified & Experienced Inspectors", desc: "Our team consists of certified inspectors who specialize in mobile homes, ensuring a thorough and accurate inspection every time.", icon: <BadgeCheck className="text-teal-600" /> },
              { title: "Affordable & Transparent Pricing", desc: "We offer competitive pricing with no hidden fees. You'll know exactly what to expect before we start.", icon: <Scale className="text-teal-600" /> },
              { title: "Serving All of Central Florida", desc: "We proudly serve Orlando, Tampa, Lakeland, Kissimmee, Daytona Beach, St. Petersburg, and all surrounding cities.", icon: <MapPin className="text-teal-600" /> },
              { title: "Comprehensive, Detailed Reports", desc: "Receive a clear, easy-to-understand report with photos and actionable recommendations.", icon: <FileText className="text-teal-600" /> },
              { title: "Licensed & Insured", desc: "Fully licensed and insured, we offer peace of mind with every inspection.", icon: <ShieldCheck className="text-teal-600" /> },
              { title: "Fast Response Time", desc: "We understand the urgency of inspections and provide prompt service to meet your timeline.", icon: <ZapIcon className="text-teal-600" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR COMPREHENSIVE SERVICES */}
      <section id="services" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Our Comprehensive Mobile Home Inspection Services</h2>
            <p className="text-slate-500 font-medium">Thorough inspections for all your mobile home needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Pre-Purchase Mobile Home Inspections", 
                desc: "When purchasing a mobile home in Central Florida, you need an expert to ensure the property is in great condition. Our pre-purchase mobile home inspections cover structural integrity, plumbing, electrical systems, and more.",
                icon: <Home className="text-teal-600" />
              },
              { 
                title: "Annual Mobile Home Inspections", 
                desc: "Routine inspections are essential to maintain your mobile home. We offer annual mobile home inspections to ensure your home is in top shape, from the roof to the foundation.",
                icon: <History className="text-teal-600" />
              },
              { 
                title: "Post-Storm Mobile Home Inspections", 
                desc: "Central Florida is prone to storms and hurricanes. After severe weather, our post-storm inspections ensure that your home is safe and secure. We'll check for storm damage and potential hazards.",
                icon: <Thunderbolt className="text-teal-600" />
              },
              { 
                title: "Mobile Home Foundation Inspections", 
                desc: "The foundation of your mobile home is critical to its structural integrity. Our foundation inspections will identify any issues like settling or cracks that could cause problems down the road.",
                icon: <Building2 className="text-teal-600" />
              },
              { 
                title: "Electrical & Plumbing Inspections", 
                desc: "We conduct thorough electrical and plumbing inspections to ensure everything is safe and functioning as it should, meeting local Central Florida codes.",
                icon: <Wrench className="text-teal-600" />
              },
              { 
                title: "HUD/FHA Inspection Services", 
                desc: "We provide specialized HUD/FHA inspection services for manufactured homes, ensuring compliance with all necessary regulations for financing requirements.",
                icon: <FileCheck className="text-teal-600" />
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">{service.icon}</div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AREAS WE SERVE */}
      <section id="areas" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Areas We Serve in Central Florida</h2>
            <p className="text-slate-500 font-medium">We serve all cities and towns across Central Florida.</p>
          </div>
          <div className="bg-slate-50 rounded-[3rem] p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {serviceAreas.map((area, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="text-teal-500" size={16} />
                  <span className="font-bold text-slate-700">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-500 font-medium">And more! If you're in Central Florida, we've got you covered!</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHAT TO EXPECT */}
      <section id="expect" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl font-black text-slate-900 mb-8 leading-tight">What to Expect <span className="text-teal-600">During Your Inspection</span></h2>
            <p className="text-lg text-slate-500 mb-10">Our inspections are comprehensive, covering all essential areas of your mobile home.</p>
            <div className="space-y-6">
              {[
                "Exterior Structure: Roof, siding, windows, doors, and foundation",
                "Interior Condition: Walls, floors, ceilings, and structural integrity",
                "Plumbing: Pipes, water fixtures, and drainage systems",
                "Electrical Systems: Wiring, outlets, and circuit breakers",
                "HVAC Systems: Heating, ventilation, and air conditioning",
                "Appliances: Built-in appliances like stoves, refrigerators, etc."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={20} />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://www.mobilehomelevelingandanchoringservice.com/wp-content/uploads/2022/08/mobile-home-inspection-2.jpg" 
              alt="Mobile Home Inspection Process" 
              className="rounded-3xl shadow-2xl object-cover w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg"><FileText size={28}/></div>
                    <div>
                        <div className="font-black text-slate-900 text-2xl">Detailed Reports</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">With Photos & Recommendations</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY INSPECTIONS ARE ESSENTIAL */}
      <section id="essential" className="py-24 bg-slate-900 text-white rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-16">Why Mobile Home Inspections Are Essential in Central Florida</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto">
              Given Central Florida's humid climate, frequent storms, and high winds, regular inspections can save you from serious issues such as moisture damage, foundation shifting, or electrical hazards. Be proactive and keep your mobile home in the best condition possible.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Moisture Damage Prevention", desc: "Florida's humidity can cause mold, mildew, and structural damage if not caught early." },
                { title: "Storm Damage Assessment", desc: "Regular inspections identify storm-related issues before they become major problems." },
                { title: "Foundation Stability", desc: "Shifting soils and weather can affect your home's foundation over time." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-800 p-8 rounded-3xl">
                  <h4 className="text-xl font-bold mb-4 text-teal-400">{item.title}</h4>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-black mb-6 leading-tight">Trusted by Central Florida Homeowners.</h2>
            <p className="text-slate-500 mb-8">Fast, reliable, and thorough inspections for peace of mind.</p>
            <div className="flex gap-4">
               <div className="p-6 bg-white rounded-3xl border border-slate-200 text-center flex-1 shadow-sm">
                  <div className="text-3xl font-black text-teal-600">5.0</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Google Star Rating</div>
               </div>
               <div className="p-6 bg-white rounded-3xl border border-slate-200 text-center flex-1 shadow-sm">
                  <div className="text-3xl font-black text-slate-900">500+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Inspections Completed</div>
               </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative">
              <Quote className="text-teal-100 absolute top-8 right-8" size={60} />
              <div className="flex text-amber-400 mb-4"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
              <p className="text-slate-600 italic mb-8 relative z-10">"Florida Truly Level found issues with our foundation that we never would have noticed. Their detailed report helped us get the repairs done before any major damage occurred."</p>
              <div className="font-bold text-slate-900">— Sarah Johnson, Orlando</div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative">
              <Quote className="text-teal-100 absolute top-8 right-8" size={60} />
              <div className="flex text-amber-400 mb-4"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
              <p className="text-slate-600 italic mb-8 relative z-10">"After the hurricane, I was worried about my mobile home. Their post-storm inspection was thorough and gave me peace of mind that everything was safe."</p>
              <div className="font-bold text-slate-900">— Michael Rodriguez, Tampa</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="mx-auto text-teal-600 mb-4" size={48} />
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Frequently Asked Questions</h2>
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

      {/* 11. CONTACT & LEAD CAPTURE */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-teal-50 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <h2 className="text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Get Your Mobile Home <br/>Inspected Today</h2>
                    <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">Ensure the safety and longevity of your mobile home with a thorough inspection from Florida Truly Level Mobile Home Service. Serving all of Central Florida, we offer affordable rates and reliable service.</p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm"><Phone size={20}/></div>
                            <span className="font-bold text-xl text-slate-700 underline decoration-teal-200">+1 (689) 340-5795</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm"><Mail size={20}/></div>
                            <span className="font-bold text-xl text-slate-700 underline decoration-teal-200">info@floridatrulylevel.com</span>
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
                        <select className="w-full p-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-teal-500 transition-all outline-none text-slate-500">
                            <option value="">Select Inspection Type</option>
                            <option value="pre-purchase">Pre-Purchase Inspection</option>
                            <option value="annual">Annual Inspection</option>
                            <option value="post-storm">Post-Storm Inspection</option>
                            <option value="foundation">Foundation Inspection</option>
                            <option value="electrical-plumbing">Electrical & Plumbing Inspection</option>
                            <option value="hud-fha">HUD/FHA Inspection</option>
                        </select>
                        <textarea placeholder="Tell us about your inspection needs" rows={3} className="w-full p-5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-teal-500 transition-all outline-none"></textarea>
                        <button className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xl hover:bg-teal-600 transition-all shadow-lg flex items-center justify-center gap-3 uppercase tracking-widest">
                            Schedule Inspection <Send size={20} />
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
            <Home size={400} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10 tracking-tighter">Ensure Your Mobile Home <br/><span className="text-teal-400 underline decoration-slate-700">Is Safe & Sound</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button className="bg-teal-500 hover:bg-teal-400 text-white px-12 py-6 rounded-2xl font-black text-xl shadow-2xl transition-all hover:scale-105">Schedule Now</button>
            <button className="bg-transparent border-2 border-slate-700 hover:border-slate-500 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all">Call Us</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-8 text-center bg-white border-t border-slate-100">
        <div className="flex justify-center items-center gap-2 mb-8">
            <Home className="text-teal-600 w-8 h-8" />
            <span className="text-slate-900 font-black text-2xl tracking-tighter uppercase">Florida Truly Level</span>
        </div>
        <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] mb-4">
            Licensed & Insured Mobile Home Inspection Service
        </div>
        <p className="text-slate-400 text-xs max-w-md mx-auto leading-loose mb-10">
            Dedicated mobile home inspection services for the Central Florida area. Specializing in pre-purchase, annual, post-storm, foundation, and HUD/FHA inspections.
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

export default MobileHomeInspection;
