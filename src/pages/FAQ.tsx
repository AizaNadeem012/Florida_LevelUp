import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What Mobile Home Services Do You Offer in Central Florida?",
    a: `At Florida Truly Level Mobile Home Service, we specialize in complete mobile home care solutions designed for Florida’s unique climate.

Our professional services include:

• Mobile Home Leveling & Re-Leveling  
• Pier & Foundation Repair  
• Skirting Installation & Replacement  
• Structural Inspections (HUD Certified)  
• Waterproofing & Moisture Control  
• Home Renovations & Remodeling  
• Pest Barrier Installation  

We proudly serve Orlando, Tampa, Kissimmee, Lakeland, and all surrounding Central Florida communities.`,
  },
  {
    q: "How Can I Tell If My Mobile Home Needs Leveling or Foundation Repair?",
    a: `Mobile homes naturally settle over time, especially in Florida’s sandy soil. Common warning signs include:

• Floors that feel uneven or slanted  
• Doors and windows that stick or do not close properly  
• Visible cracks in walls, ceilings, or flooring  
• Gaps between walls, floors, or baseboards  
• Plumbing issues caused by shifting structure  

If you notice any of these issues, we recommend a professional inspection to prevent further damage.`,
  },
  {
    q: "How Much Does Mobile Home Leveling Cost in Central Florida?",
    a: `The cost of mobile home leveling varies based on several important factors, including:

• Size and length of the home  
• Type of foundation or support system  
• Severity of the settling or damage  
• Ground and soil conditions  

On average, leveling services range from $500 to $3,000. We provide transparent pricing and free on-site estimates with no obligation.`,
  },
  {
    q: "Is It Safe to Re-Level a Mobile Home Myself?",
    a: `While some homeowners attempt DIY leveling, it is not recommended due to safety and structural risks.

Improper leveling can cause:
• Permanent frame damage  
• Plumbing and electrical issues  
• Floor warping and wall cracking  

Professional leveling ensures long-term stability, safety, and compliance with industry standards.`,
  },
  {
    q: "What Are the Most Common Signs of Foundation Problems?",
    a: `Foundation issues can worsen quickly if ignored. Key warning signs include:

• Cracks forming in walls or flooring  
• Uneven or sagging floors  
• Doors and windows going out of alignment  
• Moisture buildup or standing water beneath the home  

Early detection helps reduce repair costs and protects your investment.`,
  },
  {
    q: "Why Is Mobile Home Skirting Important in Florida?",
    a: `Skirting is essential for protecting mobile homes in Florida’s climate. It provides:

• Protection from heavy rain and moisture  
• Improved insulation and energy efficiency  
• Prevention of pests and rodents  
• Enhanced curb appeal and property value  

We install durable vinyl, rock, and custom skirting options to match your home.`,
  },
  {
    q: "How Long Does a Mobile Home Leveling Project Take?",
    a: `Most mobile home leveling projects are completed within one to two days.

The exact timeline depends on the home’s size, foundation type, and the extent of the repairs required. Our team works efficiently while maintaining high-quality standards.`,
  },
  {
    q: "Why Should I Choose Florida Truly Level Mobile Home Service?",
    a: `Homeowners across Central Florida trust us because we offer:

• Over 20 years of industry experience  
• Licensed, insured, and HUD-certified professionals  
• Honest pricing with no hidden fees  
• High-quality workmanship  
• Friendly, reliable, and local service  

Your safety, comfort, and satisfaction are our top priorities.`,
  },
];

export default function MobileHomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f8fafc] py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We’ve answered the most common questions homeowners ask about mobile
            home leveling, foundation repair, skirting, and structural services
            throughout Central Florida.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm transition hover:shadow-md"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-start justify-between gap-6 p-8 text-left"
                >
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                    {item.q}
                  </h3>
                  <ChevronDown
                    className={`h-6 w-6 mt-1 text-teal-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8 text-gray-600 whitespace-pre-line leading-relaxed text-[15px]">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft CTA */}
        <div className="mt-24 text-center">
          <p className="text-lg text-gray-700">
            Still have questions or need professional advice?
          </p>
          <p className="mt-2 font-semibold text-teal-700 text-xl">
            Call us at{" "}
            <a href="tel:+16893405795" className="underline">
              +1 (689) 340-5795
            </a>{" "}
            for a free consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
