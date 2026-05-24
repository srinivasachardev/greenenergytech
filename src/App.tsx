import { useState, useEffect, useRef } from 'react';
import {
  Sun, Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronRight,
  Shield, Zap, Star, CheckCircle, ArrowRight, Home, Building2,
  Building, Wrench, TrendingDown, Leaf, Award, Clock, Users,
  Facebook, Instagram, Youtube, Linkedin,
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

const BILL_OPTIONS = [
  { label: 'Less than ₹1500', value: 'lt1500' },
  { label: '₹1500 – ₹2500', value: '1500-2500' },
  { label: '₹2500 – ₹4000', value: '2500-4000' },
  { label: '₹4000 – ₹8000', value: '4000-8000' },
  { label: 'More than ₹8000', value: 'gt8000' },
];

const SOLUTIONS = [
  {
    icon: Home,
    title: 'Residential Installations',
    desc: 'Save up to 90% on your home electricity bills with our customised rooftop solar systems.',
    img: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Building2,
    title: 'Housing Societies',
    desc: 'Reduce common-area power costs and add long-term value to your housing complex.',
    img: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Building,
    title: 'Commercial Projects',
    desc: 'Power your business with green energy and dramatically cut operational electricity costs.',
    img: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Wrench,
    title: 'Maintenance Services',
    desc: 'Regular proactive maintenance visits to ensure your system performs at peak efficiency year-round.',
    img: 'https://images.pexels.com/photos/8853511/pexels-photo-8853511.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const WHY_US = [
  {
    icon: Shield,
    title: 'Guaranteed Savings',
    desc: "Bangalore's only solar company that offers a Savings Guarantee with a money-back promise.",
  },
  {
    icon: CheckCircle,
    title: 'Hassle-free Process',
    desc: 'Installation, subsidy and service — all handled directly by us. Zero middlemen.',
  },
  {
    icon: Zap,
    title: 'Storm-proof Structure',
    desc: "Tested for 170 kmph storms — built for India's toughest weather conditions.",
  },
  {
    icon: Star,
    title: 'Reliable After-sales',
    desc: '5-year free annual maintenance contract included with every installation.',
  },
  {
    icon: Award,
    title: '10+ Years Experience',
    desc: 'Trusted solar partner in Bangalore since 2014 with hundreds of successful installs.',
  },
  {
    icon: Users,
    title: '5-Star Service',
    desc: 'Rated 4.8 on Google with 500+ reviews. Our customers love the results.',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Free Home Visit & Rooftop Survey',
    desc: 'Our solar consultant visits your home, evaluates your space and power needs at no cost.',
  },
  {
    step: '02',
    title: 'Free 3D Solar Design',
    desc: 'We present a personalised 3D rooftop solar design within 30 minutes of the inspection.',
  },
  {
    step: '03',
    title: 'Installation & Subsidy Support',
    desc: 'We manage the entire installation and all government subsidy paperwork for you.',
  },
  {
    step: '04',
    title: 'Solar On. You Save. We Maintain.',
    desc: 'Your system goes live and we handle all ongoing maintenance for the next 5 years.',
  },
];

const STATS = [
  { value: '500+', label: 'Homes Solarized' },
  { value: '2 MW+', label: 'Power Installed' },
  { value: '₹2Cr+', label: 'Subsidy Delivered' },
  { value: '10+', label: 'Years Experience' },
];

const TESTIMONIALS = [
  {
    name: 'Rahul Sharma',
    location: 'Indiranagar, Bangalore',
    bill: '₹4,200 → ₹320',
    rating: 5,
    text: 'Green Energy Technologies made going solar incredibly easy. My electricity bill dropped from ₹4,200 to just ₹320 in the very first month!',
    img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Priya Menon',
    location: 'Koramangala, Bangalore',
    bill: '₹6,500 → ₹400',
    rating: 5,
    text: 'The 3D design helped me visualise exactly what the system would look like. Installation was done in a single day and the results have been outstanding.',
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Vikram Nair',
    location: 'Whitefield, Bangalore',
    bill: '₹8,000 → ₹0',
    rating: 5,
    text: 'They handled the subsidy paperwork and my bill is now zero. Best investment I\'ve ever made for my home.',
    img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
];

const FAQS = [
  {
    q: 'How much can I save on my electricity bill with solar?',
    a: 'Most homeowners cut their electricity bills by 80–90% from Day 1. With rising tariffs, your savings only keep growing every year. Homes with bills starting at ₹1,500 per month benefit the most.',
  },
  {
    q: 'What government subsidies are available for residential solar?',
    a: 'The central government offers subsidies of ₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 for above 3kW systems. We manage the entire subsidy application process for you.',
  },
  {
    q: 'How long does the installation take?',
    a: 'Once you approve the 3D rooftop design, installation is completed in just 1 day. The entire process from consultation to commissioning typically takes 2–3 weeks.',
  },
  {
    q: 'Do I need to pay a large amount upfront?',
    a: 'No. We offer flexible EMI options. The government subsidy can cover your down payment, and the monthly bill savings often cover the EMI.',
  },
  {
    q: 'What is the lifespan of a rooftop solar system?',
    a: 'A high-quality rooftop solar system lasts 25 years or more. With our 5-year free maintenance, your system stays in top shape throughout its life.',
  },
  {
    q: 'Do solar panels work during cloudy or rainy weather?',
    a: 'Yes, solar panels produce electricity in cloudy or rainy weather, with reduced efficiency. This is factored into the energy generation estimates we provide.',
  },
];

interface FormData {
  name: string;
  phone: string;
  pincode: string;
  bill: string;
  agreed: boolean;
}

function ConsultationForm() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', pincode: '', bill: '', agreed: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreed || !form.bill) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Consultation Booked!</h3>
        <p className="text-slate-500 text-sm">Our solar expert will call you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Full Name"
        required
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
      />
      <input
        type="tel"
        placeholder="WhatsApp Number"
        required
        value={form.phone}
        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
      />
      <input
        type="text"
        placeholder="PIN Code"
        required
        value={form.pincode}
        onChange={e => setForm(f => ({ ...f, pincode: e.target.value }))}
        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
      />
      <div>
        <p className="text-sm font-medium text-slate-700 mb-2">Monthly Electricity Bill</p>
        <div className="flex flex-wrap gap-2">
          {BILL_OPTIONS.map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setForm(f => ({ ...f, bill: opt.value }))}
              className={`px-3 py-2 rounded-xl text-xs font-semibold border transition ${
                form.bill === opt.value
                  ? 'bg-gradient-to-r from-green-600 to-emerald-700 text-white border-green-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <label className="flex items-start gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={form.agreed}
          onChange={e => setForm(f => ({ ...f, agreed: e.target.checked }))}
          className="mt-0.5 w-4 h-4 accent-green-500 rounded"
        />
        <span className="text-xs text-slate-500">
          I agree to Green Energy Tech{' '}
          <span className="text-green-600 underline cursor-pointer">Terms of use</span>{' '}
          and{' '}
          <span className="text-green-600 underline cursor-pointer">Privacy Policy</span>.
        </span>
      </label>
      <div className="relative">
        <span className="absolute -top-2 right-3 bg-green-400 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-full italic z-10">
          Limited slots only!
        </span>
        <button
          type="submit"
          disabled={loading || !form.agreed || !form.bill}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold text-sm tracking-wide hover:from-green-700 hover:to-emerald-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Booking...' : 'Book a FREE Consultation'}
        </button>
      </div>
    </form>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition"
      >
        <span className="font-semibold text-slate-800 text-sm pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <p className="px-6 pb-4 text-slate-500 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [_statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <div>
                <span
                  className={`font-extrabold text-base leading-tight block transition-colors ${
                    scrolled ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  Green Energy
                </span>
                <span
                  className={`text-[10px] font-medium leading-none transition-colors ${
                    scrolled ? 'text-amber-600' : 'text-amber-300'
                  }`}
                >
                  TECHNOLOGIES
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                    scrolled ? 'text-slate-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:9972200502"
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                  scrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                9972200502
              </a>
              <a
                href="#consultation"
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm font-bold rounded-lg transition"
              >
                Get Free Quote
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(o => !o)}
              className={`lg:hidden ${scrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 shadow-lg">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-slate-700 font-medium border-b border-slate-100 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#consultation"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-center rounded-lg"
            >
              Get Free Quote
            </a>
          </div>
        )}
      </header>

      {/* Hero + Consultation */}
      <section id="home" className="relative min-h-screen bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Solar panels"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/80 to-amber-900/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-1.5 mb-6">
                <Star className="w-3.5 h-3.5 text-green-300 fill-green-300" />
                <span className="text-green-200 text-xs font-semibold">
                  5-Star Rated Solar Company in Bangalore
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                Power Your Home<br />
                <span className="text-green-300">ZERO Monthly Bill!</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                Bangalore's trusted solar partner since 2014. Save up to 90% on electricity with government subsidies up to ₹78,000.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                {[
                  'Installation in 1 Day',
                  '5-Year Free Maintenance',
                  'Zero-Cost Subsidy Help',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl transition text-sm"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:9972200502"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call 9972200502
                </a>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50',
                    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50',
                    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50',
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-8 h-8 rounded-full border-2 border-slate-800 object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-400 text-xs">500+ happy customers in Bangalore</p>
                </div>
              </div>
            </div>

            {/* Right – Consultation Form */}
            <div id="consultation" className="bg-slate-50 rounded-2xl p-6 shadow-2xl">
              <div className="mb-5">
                <h2 className="text-2xl font-extrabold text-slate-800">
                  Book a FREE Solar Consultation
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  And save up to{' '}
                  <span className="text-amber-600 font-bold">₹78,000</span>{' '}
                  with govt. subsidy
                </p>
              </div>
              <ConsultationForm />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="bg-gradient-to-r from-green-500 to-emerald-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-green-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-green-600 text-sm font-bold uppercase tracking-widest mb-3">
                About Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Leading the Solar Revolution in Bangalore
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Green Energy Technologies is your trusted partner in solar energy solutions, offering cutting-edge solar power plant installation, commissioning, and maintenance services. Based in Indiranagar, Bangalore, we have been empowering homes and businesses with clean, renewable energy since 2014.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We believe that every home deserves access to affordable, clean energy. Our tailored solar solutions help homeowners and businesses achieve energy independence while contributing to a greener planet.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Leaf, label: 'Eco-Friendly', sub: 'Reduce your carbon footprint' },
                  { icon: TrendingDown, label: 'Lower Bills', sub: 'Save 80–90% on electricity' },
                  { icon: Clock, label: 'Fast Install', sub: 'System up in 1 day' },
                  { icon: Award, label: 'Certified', sub: 'Industry-approved equipment' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{item.label}</p>
                      <p className="text-slate-500 text-xs">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Solar installation"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-800 text-lg">10+ Years</p>
                    <p className="text-slate-500 text-xs">Trusted in Bangalore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-green-600 text-sm font-bold uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Our Range of Solar Solutions
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Tailored solar energy solutions for every need — residential, commercial, or maintenance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS.map((sol, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={sol.img}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <sol.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 mb-2">{sol.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{sol.desc}</p>
                  <a
                    href="#consultation"
                    className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-green-600 text-sm font-bold uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Why Families Trust Green Energy Tech
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We don't just install solar — we partner with you for a lifetime of clean energy savings.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-100 group-hover:bg-green-500 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end pr-10 opacity-5 pointer-events-none">
          <Sun className="w-96 h-96 text-amber-400" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Switch to Solar at{' '}
            <span className="text-green-300">₹0 Investment</span>
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Govt. subsidy covers your down payment. Bill savings cover your EMIs. Go solar today with no upfront cost.
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-bold rounded-xl transition text-sm"
          >
            Start Your Solar Journey <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              We Handle Everything. You Just Save.
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From the first consultation to ongoing maintenance — we manage the entire process for you.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-amber-200" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="relative text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-2xl mx-auto mb-5 shadow-lg shadow-amber-200">
                    <span className="text-white font-extrabold text-lg">{step.step}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2 text-sm">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              90% of Our Customers Recommend Us
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-slate-600 font-semibold">4.8</span>
              <span className="text-slate-400 text-sm">Rated on Google with 500+ reviews</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-amber-200 transition"
              >
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                    {t.bill}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">
              Everything you need to know about going solar with Green Energy Technologies.
            </p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-3">
                Contact Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">
                Let's Power Up with Solar Energy
              </h2>
              <p className="text-slate-500 mb-8">
                Ready to start your solar journey? Reach out to us for a free consultation and site survey.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: 'Call Us', value: '9972200502', href: 'tel:9972200502' },
                  { icon: Mail, label: 'Email Us', value: 'info@greenenergytech.in', href: 'mailto:info@greenenergytech.in' },
                  { icon: MapPin, label: 'Visit Us', value: '47 CMH Road, Indiranagar, Bangalore', href: '#' },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-amber-50 transition group"
                  >
                    <div className="w-10 h-10 bg-amber-100 group-hover:bg-amber-500 rounded-xl flex items-center justify-center transition-colors">
                      <item.icon className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                      <p className="font-bold text-slate-800">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-extrabold text-slate-800 text-xl mb-5">Send Us a Message</h3>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                />
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-extrabold text-white text-base leading-tight block">
                    Green Energy
                  </span>
                  <span className="text-amber-400 text-[10px] font-medium leading-none">
                    TECHNOLOGIES
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5">
                Bangalore's trusted solar energy partner since 2014. Empowering homes and businesses with clean, renewable energy.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Residential Solar',
                  'Housing Societies',
                  'Commercial Projects',
                  'Maintenance Services',
                  'Solar Financing',
                ].map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-amber-400 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                {['About Us', 'Why Choose Us', 'How It Works', 'Testimonials', 'Blog', 'Careers'].map(
                  item => (
                    <li key={item}>
                      <a href="#" className="hover:text-amber-400 transition">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>9972200502</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>info@greenenergytech.in</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>47 CMH Road, Indiranagar, Bangalore – 560038</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
            <p>© 2026 Green Energy Technologies. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA (mobile) */}
      <a
        href="#consultation"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-5 py-3 rounded-full shadow-lg shadow-amber-500/40 transition text-sm lg:hidden"
      >
        <Phone className="w-4 h-4" />
        Free Quote
      </a>
    </div>
  );
}
