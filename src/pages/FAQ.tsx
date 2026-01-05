import React, { useState } from "react";

const faqs = [
  {
    q: "What Mobile Home Services Do You Offer in Central Florida?",
    a: `We offer complete mobile home solutions including:
• Mobile Home Leveling
• Foundation Repair
• Mobile Home Skirting Installation
• Renovations & Remodeling
• Waterproofing & Insulation
• Pest Control Barriers

We proudly serve Orlando, Tampa, Kissimmee, Lakeland, and surrounding areas.`,
  },
  {
    q: "How Do I Know If My Mobile Home Needs Leveling?",
    a: `Signs your mobile home may need leveling include:
• Uneven or sloping floors
• Doors or windows sticking
• Cracks in walls or ceilings
• Gaps between walls and floors

Contact us for a free professional assessment.`,
  },
  {
    q: "How Much Does Mobile Home Leveling Cost in Central Florida?",
    a: `Mobile home leveling typically costs between $500 – $3,000 depending on:
• Size of the home
• Foundation type
• Severity of leveling required
• Soil conditions

Call us for an accurate, no-obligation quote.`,
  },
  {
    q: "Can I Re-Level My Mobile Home Myself?",
    a: `DIY leveling is possible but risky.
Improper leveling can cause structural damage.
For long-term safety and stability, professional leveling is strongly recommended.`,
  },
  {
    q: "What Are the Signs of Foundation Problems?",
    a: `Common foundation issues include:
• Cracks in floors or walls
• Uneven flooring
• Doors/windows not closing
• Moisture or water damage under the home`,
  },
  {
    q: "Is Mobile Home Skirting Necessary in Florida?",
    a: `Yes. Skirting provides:
• Weather protection
• Energy efficiency
• Pest prevention
• Improved curb appeal

We offer vinyl, rock, and custom skirting options.`,
  },
  {
    q: "How Long Does It Take to Level a Mobile Home?",
    a: `Most mobile home leveling projects are completed within 1–2 days.
Time depends on home size, foundation type, and repair needs.`,
  },
  {
    q: "Why Choose Florida Truly Level Mobile Home Service?",
    a: `• 20+ years of experience
• Licensed & insured
• Local Central Florida experts
• Honest pricing & quality workmanship`,
  },
];

export default function MobileHomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Mobile Home Services FAQ – Central Florida
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Find answers about mobile home leveling, foundation repair,
            skirting, and renovation services across Central Florida.
          </p>
          <p className="mt-4 font-semibold text-teal-600">
            Call us today: <a href="tel:+16893405795">+1 (689) 340-5795</a>
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.q}
                </h3>
                <span className="text-teal-600 text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 whitespace-pre-line">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center bg-teal-600 text-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="mt-2">
            Get a free on-site estimate for mobile home leveling,
            foundation repair, or skirting installation.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:+16893405795"
              className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="bg-teal-800 px-6 py-3 rounded-full font-semibold hover:bg-teal-900"
            >
              Request Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
