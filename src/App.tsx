import {
  Header,
  Footer,
  FloatingCTA,
  HeroSection,
  StatsSection,
  AboutSection,
  SolutionsSection,
  WhyUsSection,
  CTABannerSection,
  ProcessSection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
} from './components';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <SolutionsSection />
        <WhyUsSection />
        <CTABannerSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
