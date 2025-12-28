const Marquee = () => {
  const keywords = [
    "Florida Truly Level Mobile Home Service",
    "Manufactured Home Anchoring",
    "Florida Truly Level Mobile Home Service Tie-Down Systems",
    "Florida Truly Level Mobile Home Service Foundation Repair",
    "Florida Truly Level Mobile Home Service Skirting Installation",
    "Florida Truly Level Mobile Home Service Crawl Space Stabilization",
     "Florida Truly Level Mobile Home Service Hurricane Protection",
    "Florida Truly Level Mobile Home Service Ground Anchors",
    "Florida Truly Level Mobile Home Service Floor Leveling",
    "Florida Truly Level Mobile Home Service Licensed & Insured",
  ];

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...keywords, ...keywords].map((keyword, index) => (
          <span key={index} className="mx-8 text-sm font-medium">
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
