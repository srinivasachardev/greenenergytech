import type { LucideIcon } from 'lucide-react';
import {
  Home,
  Building2,
  Building,
  Wrench,
  Shield,
  CheckCircle,
  Zap,
  Star,
  Award,
  Users,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const BILL_OPTIONS = [
  { label: 'Less than ₹1500', value: 'lt1500' },
  { label: '₹1500 – ₹2500', value: '1500-2500' },
  { label: '₹2500 – ₹4000', value: '2500-4000' },
  { label: '₹4000 – ₹8000', value: '4000-8000' },
  { label: 'More than ₹8000', value: 'gt8000' },
] as const;

export interface SolutionItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  img: string;
}

export const SOLUTIONS: SolutionItem[] = [
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

export interface WhyUsItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const WHY_US: WhyUsItem[] = [
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

export const PROCESS_STEPS = [
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
] as const;

export const STATS = [
  { value: '500+', label: 'Homes Solarized' },
  { value: '2 MW+', label: 'Power Installed' },
  { value: '₹2Cr+', label: 'Subsidy Delivered' },
  { value: '10+', label: 'Years Experience' },
] as const;

export const TESTIMONIALS = [
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
    text: "They handled the subsidy paperwork and my bill is now zero. Best investment I've ever made for my home.",
    img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
] as const;

export const FAQS = [
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
] as const;

export const FOOTER_SOLUTIONS = [
  'Residential Solar',
  'Housing Societies',
  'Commercial Projects',
  'Maintenance Services',
  'Solar Financing',
] as const;

export const FOOTER_COMPANY_LINKS = [
  'About Us',
  'Why Choose Us',
  'How It Works',
  'Testimonials',
  'Blog',
  'Careers',
] as const;

export const HERO_HIGHLIGHTS = [
  'Installation in 1 Day',
  '5-Year Free Maintenance',
  'Zero-Cost Subsidy Help',
] as const;

export const HERO_CUSTOMER_AVATARS = [
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50',
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50',
  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
] as const;
