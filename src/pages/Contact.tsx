import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, AlertCircle, User, Home, FileText } from "lucide-react";
import { useState, useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: "" });
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  const serviceOptions = [
    "Mobile Home Leveling",
    "Ground Anchors Installation",
    "Tie-Down Systems",
    "Foundation Support",
    "Skirting Installation",
    "Crawl Space Stabilization",
    "Emergency Services",
    "Other"
  ];

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleFieldFocus = (field) => setFocusedField(field);
  const handleFieldBlur = () => setFocusedField(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: true, message: "Thank you! We'll contact you within 24 hours." });
    setTimeout(() => setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" }), 1500);
    setTimeout(() => setFormStatus({ submitted: false, success: false, message: "" }), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-400/30 to-teal-400/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-r from-pink-400/20 to-teal-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <h1 className="relative text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
        <p className="relative text-lg max-w-2xl mx-auto text-gray-600">Get a free estimate on mobile home leveling, anchoring, and repair services.</p>
      </section>

      {/* Contact Section */}
      <section className="section-container py-16 grid lg:grid-cols-2 gap-12">
        {/* Form Card */}
        <Card className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-lg p-8 transition-transform hover:-translate-y-2 hover:shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
              <FileText className="h-5 w-5 text-gray-900" /> Request a Free Estimate
            </CardTitle>
          </CardHeader>
          <CardContent>
            {formStatus.submitted ? (
              <div className={`p-6 rounded-xl ${formStatus.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <div className="flex items-center gap-3">
                  {formStatus.success ? <CheckCircle className="h-8 w-8 text-green-600" /> : <AlertCircle className="h-8 w-8 text-red-600" />}
                  <div>
                    <h3 className={`font-bold ${formStatus.success ? 'text-green-800' : 'text-red-800'}`}>{formStatus.success ? 'Success!' : 'Error'}</h3>
                    <p className={formStatus.success ? 'text-green-700' : 'text-red-700'}>{formStatus.message}</p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {['firstName','lastName'].map(field => (
                    <div key={field}>
                      <label className="text-sm font-medium text-gray-900 mb-1 block flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-900" /> {field === 'firstName' ? 'First Name' : 'Last Name'}
                      </label>
                      <Input
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        onFocus={() => handleFieldFocus(field)}
                        onBlur={handleFieldBlur}
                        placeholder={field === 'firstName' ? 'John' : 'Doe'}
                        required
                        className="bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:ring-teal-400"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900 mb-1 block flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-900" /> Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus('email')}
                    onBlur={handleFieldBlur}
                    placeholder="john@example.com"
                    required
                    className="bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:ring-teal-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900 mb-1 block flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-900" /> Phone
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus('phone')}
                    onBlur={handleFieldBlur}
                    placeholder="(386) 453-9277"
                    required
                    className="bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:ring-teal-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900 mb-1 block flex items-center gap-2">
                    <Home className="h-4 w-4 text-gray-900" /> Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-teal-400"
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-900 mb-1 block">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your mobile home service needs..."
                    rows={5}
                    className="bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:ring-teal-400"
                  />
                </div>

                <Button type="submit" className="w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" /> Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Contact Info Cards */}
        <div className="space-y-6">
          {[ 
            { title: 'Phone', icon: Phone, content: '+1 (689) 340-5795', sub: 'Call for assistance', href: 'tel:+13864539277' },
            { title: 'Text Us', icon: MessageSquare, content: '+1 (689) 340-5795', sub: 'Fast quote via text', href: 'sms:+13864539277' },
            { title: 'Address', icon: MapPin, content: '1757 S Village Dr, Deltona, FL 32725', sub: 'Serving Central Florida' },
            { title: 'Business Hours', icon: Clock, content: 'Mon-Sat: 7am-7pm, Sun: By Appointment', sub: 'Emergency services available' },
          ].map((card, idx) => (
            <Card key={idx} className="bg-white/90 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-transform">
              <CardContent className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100">
                  <card.icon className="h-6 w-6 text-teal-600" />
                </div>
                <div className="text-gray-900">
                  <h3 className="font-bold mb-1">{card.title}</h3>
                  {card.href ? <a href={card.href} className="text-teal-600 hover:underline">{card.content}</a> : <p>{card.content}</p>}
                  <p className="text-sm mt-1 text-gray-600">{card.sub}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
