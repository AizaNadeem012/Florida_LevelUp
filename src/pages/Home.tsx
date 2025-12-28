import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Phone,
  MapPin,
  Shield,
  Award,
  Clock,
  Star,
  ChevronRight,
  Users,
  BookOpen,
  Mail,
  MessageSquare,
  Calendar,
  ArrowRight,
  Zap,
  Wind,
  Home as HomeIcon,
  Wrench,
  FileCheck,
  TrendingUp,
  Quote,
  Play,
  DollarSign,
  AlertCircle,
  ThumbsUp,
  FileText, // Replaced Certificate
  Map,
  CreditCard,
  Settings, // Replaced Tool
  Camera,
  Video,
  HeadphonesIcon,
  Building,
  Truck,
  Handshake,
  Timer,
  Check,
} from "lucide-react";
import Marquee from "@/components/Marquee";

const DEFAULT_PHONE = "+1 (689) 340-5795";
const TEL_LINK = "tel:+1 (689) 340-5795";

const servicesList = [
  {
    title: "Mobile Home Leveling & Re-leveling",
    description:
      "Ensure perfect balance and long-term stability with precision leveling and re-leveling solutions.",
    path: "/services/leveling",
    icon: HomeIcon,
    color: "bg-blue-500",
  },
  {
    title: "Ground Anchors Installation",
    description:
      "Engineered anchoring systems to keep your home safe during high wind events and storms.",
    path: "/services/ground-anchors",
    icon: Wind,
    color: "bg-green-500",
  },
  {
    title: "Tie-Down Systems",
    description:
      "High-performance storm-rated tie-down installations fully compliant with Florida codes.",
    path: "/services/tie-down",
    icon: Shield,
    color: "bg-purple-500",
  },
  {
    title: "Foundation Support",
    description:
      "Durable pier-and-block foundation systems for long-lasting structural integrity.",
    path: "/services/foundation",
    icon: Wrench,
    color: "bg-orange-500",
  },
  {
    title: "Skirting Installation",
    description:
      "Attractive, durable skirting options that protect and insulate your mobile home.",
    path: "/services/skirting",
    icon: HomeIcon,
    color: "bg-pink-500",
  },
  {
    title: "Crawl Space Stabilization",
    description:
      "Advanced crawl space solutions that prevent settling and moisture damage.",
    path: "/services/crawl-space",
    icon: Zap,
    color: "bg-indigo-500",
  },
];

const countiesList = [
  "Polk County",
  "Lake County",
  "Volusia County",
  "Sumter County",
  "Orange County",
  "Hillsborough County",
  "Osceola County",
  "Manatee County",
];

const featuresList = [
  { icon: Shield, title: "Licensed & Insured", description: "Fully certified contractors" },
  { icon: Award, title: "Expert Technicians", description: "Decades of combined experience" },
  { icon: Clock, title: "Fast Response", description: "Quick scheduling available" },
  { icon: Star, title: "Quality Guaranteed", description: "100% satisfaction promise" },
];

const testimonials = [
  {
    name: "Karen M.",
    location: "Winter Haven, FL",
    quote:
      "They leveled our home precisely and explained every step. Professional from call to finish.",
    rating: 5,
  },
  {
    name: "Miguel R.",
    location: "Orlando, FL",
    quote:
      "Great communication, fast scheduling, and the team left the site cleaner than they found it.",
    rating: 5,
  },
  {
    name: "Tina L.",
    location: "Polk County, FL",
    quote:
      "Excellent workmanship — we felt safe during windy season after anchors were installed.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Are you licensed to work in Florida on manufactured homes?",
    a: "Yes — we are fully licensed, insured, and familiar with Florida building codes for manufactured and mobile homes.",
  },
  {
    q: "How quickly can I get a free estimate?",
    a: "Most estimates are scheduled within 48 hours depending on availability; emergency requests can be handled faster.",
  },
  {
    q: "Do you offer financing options?",
    a: "We partner with local providers for flexible financing; ask our team for details during your estimate.",
  },
];

const team = [
  { name: "Carlos Rivera", role: "Lead Technician", bio: "20+ years in manufactured home services." },
  { name: "Samantha Lee", role: "Project Manager", bio: "Focused on quality, safety, and client care." },
  { name: "Omar Patel", role: "Site Supervisor", bio: "Ensures timely delivery and code compliance." },
];

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "10+", label: "Years Experience" },
  { value: "8", label: "Counties Served" },
  { value: "100%", label: "Satisfaction" },
];

const certifications = [
  { name: "Florida Certified Manufactured Home Contractor", icon: FileText }, // Fixed: replaced Certificate with FileText
  { name: "HUD Compliant Installation Specialist", icon: Shield },
  { name: "Wind Mitigation Certified", icon: Wind },
  { name: "Foundation Repair Specialist", icon: Building },
];

const emergencyServices = [
  { title: "Storm Damage Assessment", description: "Rapid evaluation after severe weather events", icon: AlertCircle },
  { title: "Emergency Stabilization", description: "Immediate support for structural concerns", icon: Shield },
  { title: "24/7 Emergency Hotline", description: "Round-the-clock assistance for urgent issues", icon: Phone },
];

const financingOptions = [
  { title: "0% Interest for 12 Months", description: "No interest financing on approved credit", icon: CreditCard },
  { title: "Flexible Payment Plans", description: "Customized payment schedules to fit your budget", icon: DollarSign },
  { title: "Insurance Claim Assistance", description: "Help navigating insurance processes for covered repairs", icon: FileCheck },
];

const maintenanceTips = [
  { title: "Seasonal Inspection Checklist", description: "Key areas to check before and after hurricane season", icon: Calendar },
  { title: "DIY Maintenance Guide", description: "Simple tasks homeowners can do between professional visits", icon: Settings }, // Fixed: replaced Tool with Settings
  { title: "Warning Signs to Watch For", description: "Early indicators that may require professional attention", icon: AlertCircle },
];

const realtorBenefits = [
  { icon: Timer, title: "48-Hour Inspection Reports", description: "Perfect for closings" },
  { icon: Calendar, title: "Priority Scheduling", description: "Same-week availability" },
  { icon: FileCheck, title: "Lender & Insurance-Ready Documentation", description: "Complete paperwork" },
  { icon: DollarSign, title: "10% Referral Commission", description: "Earn for every referral" },
  { icon: MessageSquare, title: "Fast Communication & Updates", description: "Direct line to our team" },
  { icon: Users, title: "We Already Work With Local Realtors", description: "Join our growing network" },
];

/* -------------------------------------------------------------------------- */
/* ---------------------------- Small Subcomponents ------------------------- */
/* -------------------------------------------------------------------------- */

const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center gap-2 bg-white/10 text-white/95 px-3 py-1 rounded-full text-sm font-medium ${className}`}>
    {children}
  </span>
);

const SectionHeader = ({ title, subtitle, center = true }: { title: string; subtitle?: string; center?: boolean }) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    <h2 className="text-3xl md:text-4xl font-extrabold">{title}</h2>
    {subtitle && <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const IconBox = ({ Icon, title, description, color = "primary" }: { Icon: any; title: string; description: string; color?: string }) => (
  <Card className="rounded-2xl p-0 border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
    <CardContent className="pt-6 pb-8 text-center relative">
      <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center bg-${color}/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`h-8 w-8 text-${color}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-primary mb-2">{value}</div>
    <div className="text-muted-foreground">{label}</div>
  </div>
);

const TestimonialCard = ({ name, location, quote, rating, isActive }: any) => (
  <Card className={`rounded-2xl p-6 border-0 shadow-lg transition-all duration-500 ${isActive ? "scale-105 shadow-xl" : "opacity-70 scale-95"}`}>
    <CardContent className="p-0">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <Quote className="h-8 w-8 text-primary/20 mb-4" />
      <p className="text-muted-foreground mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
    </CardContent>
  </Card>
);

const CertificationCard = ({ name, Icon }: { name: string; Icon: any }) => (
  <Card className="rounded-xl p-6 text-center hover:shadow-lg transition-all">
    <CardContent className="pt-0">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="font-semibold text-sm">{name}</h3>
    </CardContent>
  </Card>
);

const VideoTestimonial = ({ name, location, thumbnail, videoUrl }: any) => (
  <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all group">
    <div className="relative aspect-video">
      <img src={thumbnail} alt={name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <a href={videoUrl} className="bg-white rounded-full p-3 hover:bg-white/90 transition-colors">
          <Play className="h-6 w-6 text-primary" fill="currentColor" />
        </a>
      </div>
    </div>
    <CardContent className="p-4">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-muted-foreground">{location}</p>
    </CardContent>
  </Card>
);

/* -------------------------------------------------------------------------- */
/* --------------------------------- Page ---------------------------------- */
/* -------------------------------------------------------------------------- */

const Home = () => {
  const [email, setEmail] = useState("");
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    brokerage: ""
  });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => {
      setSelectedTestimonial((s) => (s + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % servicesList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      brokerage: ""
    });
    // Show success message or redirect
  };

  return (
    <div className="min-h-screen antialiased text-slate-900 bg-gradient-to-b from-white to-gray-50">
      {/* Marquee */}
      <div className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}>
        <Marquee />
      </div>

      {/* HERO */}
      <header ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <img
            src="/heroImg1.jpg"
            alt="Mobile Home Services"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          
          {/* Animated Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="section-container relative z-10 py-28">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center gap-3 mb-5">
                <Badge>
                  <Shield className="h-4 w-4" /> Licensed • Insured
                </Badge>
                <Badge>
                  <Award className="h-4 w-4" /> 10+ Years Experience
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              Florida Truly Level Mobile Home Service
              </h1>

              <p className="max-w-2xl text-lg md:text-xl opacity-95 mb-8">
                Licensed, insured, and delivering fast, reliable mobile home leveling, hurricane anchoring, and foundation repair across all of Central Florida.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href={TEL_LINK} className="w-full sm:w-auto">
                  <Button className="bg-white text-primary hover:bg-white/95 px-8 py-4 rounded-2xl shadow-xl gap-3 flex items-center transition-all hover:scale-105">
                    <Phone className="h-5 w-5" /> Call Now: {DEFAULT_PHONE}
                  </Button>
                </a>

                <Link to="/contact" className="w-full sm:w-auto">
                  <Button className="w-full border border-white/40 text-white hover:bg-white/10 rounded-xl px-4 py-3 transition-all hover:scale-105">
                    Get Free Estimate
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                {countiesList.map((c) => (
                  <span key={c} className="px-3 py-1 bg-white/10 text-white rounded-full text-sm hover:bg-white/20 transition-colors">
                    {c}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                  <StatCard key={idx} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>

            {/* Right card: Quick form + stats */}
            <aside className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl text-white">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Request Your Free On-site Estimate</h3>
                <p className="text-white/80 mb-6">No-obligation, transparent pricing and fast scheduling.</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                  <div className="rounded-full bg-white/10 p-2">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Central Florida Coverage</div>
                    <div className="text-xs text-white/80">8 counties served • Fast response</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                  <div className="rounded-full bg-white/10 p-2">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Quick Scheduling</div>
                    <div className="text-xs text-white/80">Most estimates within 48 hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                  <div className="rounded-full bg-white/10 p-2">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Quality Guaranteed</div>
                    <div className="text-xs text-white/80">Pride in workmanship — satisfaction promise</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href={TEL_LINK}>
                  <Button className="w-full bg-white text-primary px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 transition-all">
                    <Phone className="h-4 w-4" /> Call Now
                  </Button>
                </a>

                <Link to="/contact">
                  <Button className="w-full border border-white/40 text-white hover:bg-white/10 rounded-xl px-4 py-3 transition-all">
                    Request Estimate
                  </Button>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-sm text-white/70">
                  <FileCheck className="h-4 w-4" />
                  <span>Free, no-obligation estimates</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </header>

      

      {/* EMERGENCY SERVICES BANNER */}
      <section className="bg-red-50 border-y border-red-100 py-6">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-900">Emergency Services Available</h3>
                <p className="text-red-700">Storm damage, structural concerns, and urgent repairs</p>
              </div>
            </div>
            <a href={TEL_LINK}>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all">
                <Phone className="h-4 w-4" /> 24/7 Emergency Line
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="section-container py-20">
        <SectionHeader
          title="Why Choose Our Services"
          subtitle="Built around safety, speed, and lasting results — everything homeowners need."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((f, i) => (
            <IconBox key={i} Icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </section>

         {/* REALTOR PARTNERSHIP SECTION */}
<section className="py-24 bg-gray-50 relative overflow-hidden">
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[800px] h-[800px] bg-gradient-to-r from-primary/30 to-purple-200 rounded-full blur-3xl pointer-events-none"></div>

  <div className="max-w-6xl mx-auto relative z-10 px-4">
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-gradient-to-r from-primary to-purple-500 text-white px-5 py-2 shadow-lg flex items-center justify-center mx-auto gap-2">
        <Handshake className="h-5 w-5" /> For Real Estate Professionals
      </Badge>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
        Realtor Partnership Program – Close Mobile Home Sales Faster
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Mobile homes can't close without leveling & anchoring inspections. We help realtors close deals quickly with fast scheduling, 48-hour reports, and lender-ready documents.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Benefits */}
      <div>
        <h3 className="text-3xl font-bold mb-8 text-gray-800">Benefits for Realtors</h3>
        <div className="space-y-6">
          {realtorBenefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-4 group hover:bg-white transition-all p-4 rounded-xl shadow-sm hover:shadow-lg">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-primary">
                <benefit.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Card */}
      <Card className="rounded-3xl shadow-2xl p-10 bg-white border border-gray-100 hover:scale-[1.02] transition-transform">
        <h3 className="text-3xl font-bold mb-3 text-gray-900">Get Your Free Partnership Packet</h3>
        <p className="text-gray-600 mb-8">
          Join our growing network of real estate professionals who trust us to help them close mobile home sales faster.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {["name", "phone", "email", "brokerage"].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium mb-1 text-gray-700 capitalize">{field}</label>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm transition"
                required={field !== "brokerage"}
              />
            </div>
          ))}

          <Button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform">
            Download Realtor Info Packet
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Questions? Call us at <a href={TEL_LINK} className="text-primary font-medium">{DEFAULT_PHONE}</a>
          </p>
        </div>
      </Card>
    </div>
  </div>
</section>

      {/* ABOUT US SECTION */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">About Florida Truly Level Mobile Home Service</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  For over 10 years, we've been Central Florida's trusted partner for manufactured and mobile home services. 
                  Our family-owned business combines technical expertise with genuine care for each homeowner's unique situation.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We specialize in leveling, anchoring, and foundation work that protects your investment and ensures your safety 
                  during Florida's challenging weather conditions. Every project is handled with precision, transparency, and respect 
                  for your property.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Family-Owned</div>
                      <div className="text-sm text-muted-foreground">Local business serving Central Florida</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Award-Winning</div>
                      <div className="text-sm text-muted-foreground">Recognized for excellence</div>
                    </div>
                  </div>
                </div>
                <Link to="/about">
                  <Button className="px-6 py-3 rounded-xl">
                    Learn More About Us <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img 
                  src="my1.jpeg" 
                  alt="Our team" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Licensed & Insured</div>
                      <div className="text-sm text-muted-foreground">Fully certified contractors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES DETAILED */}
      <section className="section-container py-20">
        <SectionHeader title="Comprehensive Mobile Home Services" subtitle="Full-service solutions for every manufactured home need." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {servicesList.map((s, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-white shadow-lg border cursor-pointer transition-all duration-300 ${
                  activeService === i ? "scale-105 shadow-xl border-primary" : "hover:shadow-md"
                }`}
                onClick={() => setActiveService(i)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full ${s.color} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                    <s.icon className={`h-6 w-6 ${s.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground mb-3">{s.description}</p>
                    <Link to={s.path}>
                      <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                        Learn More <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="sticky top-24">
              <Card className="rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-video relative">
  <video
    src="/video.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

  <div className="absolute bottom-4 left-4 text-white">
    <h3 className="text-2xl font-bold mb-2">
      {servicesList[activeService].title}
    </h3>
    <p className="text-white/90 mb-4">
      {servicesList[activeService].description}
    </p>

    <Link to={servicesList[activeService].path}>
      <Button className="bg-white text-primary hover:bg-white/90">
        Get Quote
      </Button>
    </Link>
  </div>
</div>

              </Card>

              <div className="mt-6 p-6 bg-white rounded-2xl shadow-lg">
                <h4 className="text-lg font-semibold mb-4">Service Benefits</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Licensed and insured technicians</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Compliance with Florida building codes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Warranty on all workmanship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Free, no-obligation estimates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS MAP */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="section-container">
          <SectionHeader 
            title="Service Areas" 
            subtitle="Proudly serving homeowners across Central Florida with fast, reliable service." 
          />
          <div className="max-w-5xl mx-auto">
            <Card className="rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Central Florida Coverage</h3>
                  <p className="text-muted-foreground mb-6">
                    We provide comprehensive mobile and manufactured home services throughout Central Florida. 
                    Our team is familiar with local requirements and can respond quickly to your needs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {countiesList.map((county, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{county}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Truck className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Fast Response Time</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Most service calls scheduled within 48 hours, emergency services available 24/7
                    </p>
                  </div>
                </div>
                <div className="relative min-h-[400px]">
                  <img 
                    src="/map.png" 
                    alt="Central Florida Map" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

  


      {/* PROCESS */}
      <section className="section-container py-20">
        <SectionHeader
          title="Our Simple Process"
          subtitle="From inspection to completion, we make the process straightforward and stress-free."
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Free Inspection</h3>
                <p className="text-muted-foreground text-center">
                  We assess your mobile home issues and identify the root cause with a thorough on-site evaluation.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Custom Solution</h3>
                <p className="text-muted-foreground text-center">
                  We design a tailored solution to address your specific needs and provide a transparent quote.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Professional Installation</h3>
                <p className="text-muted-foreground text-center">
                  Our certified technicians implement the solution with precision and attention to detail.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button className="px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all">
                Schedule Your Free Inspection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <SectionHeader 
            title="Certifications & Credentials" 
            subtitle="Our commitment to excellence is backed by industry certifications and ongoing training." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <CertificationCard key={idx} name={cert.name} Icon={cert.icon} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
              Our team maintains current certifications in all aspects of manufactured home construction and repair. 
              We stay updated on the latest Florida building codes and industry best practices to ensure your home 
              receives the highest standard of service.
            </p>
            <Link to="/about">
              <Button className="px-6 py-3 rounded-xl">
                View All Credentials <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* EMERGENCY SERVICES */}
      <section className="bg-red-50 py-20">
        <div className="section-container">
          <SectionHeader 
            title="Emergency Services" 
            subtitle="When you need immediate assistance, our emergency response team is ready to help." 
          />
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {emergencyServices.map((service, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                <p className="text-lg mb-4">For immediate assistance with storm damage, structural concerns, or other urgent issues:</p>
                <a href={TEL_LINK}>
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl flex items-center gap-2 mx-auto transition-all">
                    <Phone className="h-5 w-5" /> Call Emergency Line: {DEFAULT_PHONE}
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">After Storm Checklist</h3>
                  <p className="text-yellow-700 mb-3">
                    If your area has been affected by severe weather, check for these issues before calling:
                  </p>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• Visible gaps between home sections</li>
                    <li>• Doors or windows that no longer close properly</li>
                    <li>• Unusual noises or creaking sounds</li>
                    <li>• Visible damage to anchoring systems</li>
                    <li>• Water intrusion under the home</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="gradient-primary text-white py-20">
        <div className="section-container">
          <SectionHeader title="What Our Customers Say" subtitle="Real feedback from homeowners we've helped across Central Florida." />

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {testimonials.map((testimonial, idx) => (
                <TestimonialCard
                  key={idx}
                  {...testimonial}
                  isActive={selectedTestimonial === idx}
                  onClick={() => setSelectedTestimonial(idx)}
                />
              ))}
            </div>

            <div className="flex items-center justify-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === selectedTestimonial ? "bg-white w-8" : "bg-white/30"
                  }`}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="section-container py-20">
        <SectionHeader title="See Our Work" subtitle="Before and after examples of our mobile home services." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              before: "/before.png",
              after: "/after.png",
              title: "Complete Home Leveling",
            },
            {
              before: "/before1.png",
              after: "/after1.png",
              title: "Skirting Installation",
            },
            {
              before: "before2.png",
              after: "after2.png",
              title: "Anchoring System",
            },
          ].map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={item.before} alt="Before" className="w-full h-40 object-cover" />
                    <div className="absolute bottom-0 left-0 bg-red-600 text-white px-2 py-1 text-sm font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt="After" className="w-full h-40 object-cover" />
                    <div className="absolute bottom-0 right-0 bg-green-600 text-white px-2 py-1 text-sm font-medium">
                      After
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <Link to="/gallery" className="inline-flex items-center text-primary mt-2">
                  View More Projects <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FINANCING OPTIONS */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="section-container">
          <SectionHeader 
            title="Flexible Financing Options" 
            subtitle="We offer payment solutions to make essential home services accessible for every budget." 
          />
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {financingOptions.map((option, idx) => (
                <Card key={idx} className="rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground">{option.description}</p>
                </Card>
              ))}
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Simple Application Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { step: 1, title: "Request Information", description: "Ask about financing during your estimate" },
                  { step: 2, title: "Quick Application", description: "Complete our simple online form" },
                  { step: 3, title: "Fast Approval", description: "Receive decision within 24 hours" },
                  { step: 4, title: "Schedule Service", description: "Book your installation with confidence" }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      {item.step}
                    </div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link to="/contact">
                  <Button className="px-8 py-4 rounded-xl">
                    Learn About Financing Options
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAINTENANCE TIPS */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <SectionHeader 
            title="Maintenance Tips & Resources" 
            subtitle="Expert advice to help you maintain your manufactured home between professional services." 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {maintenanceTips.map((tip, idx) => (
              <Card key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <tip.icon className="h-16 w-16 text-primary/50 group-hover:text-primary transition-colors" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground mb-4">{tip.description}</p>
                  <Link to="/resources" className="inline-flex items-center text-primary font-medium">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/resources">
              <Button className="px-8 py-3 rounded-xl">
                View All Resources <BookOpen className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ & CONTACT */}
      <section className="section-container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader title="Frequently Asked Questions" subtitle="Short answers to common homeowner concerns." />
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all">
                  <summary className="flex items-center justify-between cursor-pointer font-medium">
                    {f.q}
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="mt-3 text-muted-foreground">{f.a}</div>
                </details>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl p-8 bg-white shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Get In Touch</h3>
            <p className="text-muted-foreground mb-6">Have questions? Ready to schedule your free estimate? Contact us today.</p>

            <div className="space-y-4 mb-6">
              <a href={TEL_LINK} className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Call Us</div>
                  <div className="text-sm text-muted-foreground">{DEFAULT_PHONE}</div>
                </div>
              </a>

              <Link to="/contact" className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email Us</div>
                  <div className="text-sm text-muted-foreground">info@example.com</div>
                </div>
              </Link>

              <Link to="/contact" className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Schedule Online</div>
                  <div className="text-sm text-muted-foreground">Book your free estimate</div>
                </div>
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">Business Hours</span>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                <div>Saturday: 9:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* BLOG CTA */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <SectionHeader title="Resources & Tips" subtitle="Expert advice to keep your manufactured home safe and efficient." />

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="aspect-video relative">
                <img
                  src="/blog1.png"
                  alt="Blog post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="inline-block px-3 py-1 bg-primary/80 rounded-full text-xs font-medium mb-2">Safety</span>
                  <h3 className="text-xl font-semibold">How to Prepare for Hurricane Season</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">Essential steps to protect your manufactured home during severe weather events in Florida.</p>
                <Link to="/blog/hurricane-prep" className="inline-flex items-center text-primary font-medium">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="aspect-video relative">
                <img
                  src="/blog2.png"
                  alt="Blog post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="inline-block px-3 py-1 bg-primary/80 rounded-full text-xs font-medium mb-2">Maintenance</span>
                  <h3 className="text-xl font-semibold">Skirting Options Compared</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">Materials, insulation values, and costs explained to help you make the right choice.</p>
                <Link to="/blog/skirting-options" className="inline-flex items-center text-primary font-medium">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="aspect-video relative">
                <img
                  src="/blog3.png"
                  alt="Blog post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="inline-block px-3 py-1 bg-primary/80 rounded-full text-xs font-medium mb-2">Inspection</span>
                  <h3 className="text-xl font-semibold">When to Re-level Your Home</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">Signs of settling and the optimal timing for re-leveling your manufactured home.</p>
                <Link to="/blog/re-leveling-guide" className="inline-flex items-center text-primary font-medium">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link to="/blog">
              <Button className="px-8 py-3 rounded-xl">
                View All Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SPECIAL OFFERS */}
      <section className="gradient-primary text-white py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Current Special Offers</h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Take advantage of these limited-time deals on our most popular services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold">Summer Special</h4>
                      <p className="text-white/80 text-sm">Save 15% on complete leveling services</p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-4 text-sm">
                    Book before the end of the month and receive 15% off our comprehensive home leveling package.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-white text-primary hover:bg-white/90">
                      Claim Offer
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold">Safety Bundle</h4>
                      <p className="text-white/80 text-sm">Complete anchoring system special</p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-4 text-sm">
                    Get a free wind mitigation report with any complete anchoring system installation.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-white text-primary hover:bg-white/90">
                      Claim Offer
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <p className="text-sm text-white/70">
              *Offers cannot be combined with other discounts. Some restrictions may apply.
            </p>
          </div>
        </div>
      </section>

      <Marquee/>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16">
       
      </footer>
    </div>
  );
};

export default Home;
