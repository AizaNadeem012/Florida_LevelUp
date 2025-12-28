import React from 'react';

const Schema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.mobilehomelevelingandanchoringservice.com/#business",
        "name": "Mobile Home Leveling and Anchoring Service",
        "url": "https://www.mobilehomelevelingandanchoringservice.com/",
        "telephone": "+1-689-340-5795",
        "priceRange": "$$",
        "description": "Mobile Home Leveling and Anchoring Service provides complete mobile home leveling, anchoring, setup, repair, and foundation services throughout Central Florida. Fast response time and full compliance with Florida codes.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1757 S Village Dr",
          "addressLocality": "Deltona",
          "addressRegion": "FL",
          "postalCode": "32725",
          "addressCountry": "US"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Polk County, FL" },
          { "@type": "AdministrativeArea", "name": "Lake County, FL" },
          { "@type": "AdministrativeArea", "name": "Volusia County, FL" },
          { "@type": "AdministrativeArea", "name": "Sumter County, FL" },
          { "@type": "AdministrativeArea", "name": "Orange County, FL" },
          { "@type": "AdministrativeArea", "name": "Hillsborough County, FL" },
          { "@type": "AdministrativeArea", "name": "Osceola County, FL" },
          { "@type": "AdministrativeArea", "name": "Manatee County, FL" }
        ],
        "makesOffer": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Home Leveling", "description": "Correcting uneven floors, doors, and settling using professional leveling systems." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Home Re-Leveling", "description": "Re-leveling services to restore balance after soil movement or aging." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Home Anchoring", "description": "Hurricane-compliant anchoring systems meeting Florida regulations." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hurricane Tie Down Installation", "description": "Certified tie-down installation for storm and wind protection." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Home Setup Services", "description": "Complete mobile home setup including leveling, anchoring, and stabilization." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pier Replacement & Repair", "description": "Replacement of damaged or settling piers and support blocks." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Home Foundation Repair", "description": "Foundation stabilization and structural support repairs." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Home Inspections", "description": "Professional inspections for leveling, anchoring, and code compliance." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Skirting Installation & Repair", "description": "Skirting installation for protection, insulation, and improved appearance." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vapor Barrier Installation", "description": "Moisture protection and under-home vapor barrier installation." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Home Emergency Services", "description": "Fast response emergency leveling and anchoring services." } }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.mobilehomelevelingandanchoringservice.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How often should a mobile home be leveled?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most mobile homes should be leveled every 3 to 5 years, though Florida soil and weather conditions may require more frequent service."
            }
          },
          {
            "@type": "Question",
            "name": "Is mobile home anchoring required in Florida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Florida law requires hurricane-compliant anchoring and tie-down systems for all mobile homes."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer emergency mobile home services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide fast response emergency leveling and anchoring services throughout Central Florida."
            }
          },
          {
            "@type": "Question",
            "name": "Which areas do you serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve Polk, Lake, Volusia, Sumter, Orange, Hillsborough, Osceola, and Manatee counties in Central Florida."
            }
          },
          {
            "@type": "Question",
            "name": "Do you inspect mobile home before starting work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we always perform a professional inspection to ensure proper leveling, anchoring, and code compliance."
            }
          }
        ]
      }
    ]
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default Schema;
