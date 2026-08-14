import Navbar from '../components/Navbar';
import WaveCanvas from '../components/WaveCanvas';
import HeroContent from '../components/HeroContent';
import TrustedBy from '../components/TrustedBy';
import ChallengesSolutions from '../components/ChallengesSolutions';
import ProvenBusinessImpact from '../components/ProvenBusinessImpact';
import AboutSection from '../components/AboutSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import FinalCTA from '../components/FinalCTA';

import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="app-container">
      {/* 1. Hero Section with 3D Wave Canvas & Floating Particles */}
      <section className="hero" id="hero">
        <div className="hero__photo" aria-hidden="true" />
        <div className="hero__ai-bg" aria-hidden="true" />
        <WaveCanvas />
        <Navbar />
        <HeroContent />
      </section>

      {/* 2. Trusted By 30+ Enterprise Organizations (Double-Row Marquee) */}
      <TrustedBy />

      {/* 3. Business Challenges & Interactive Solution Mappings */}
      <ChallengesSolutions />

      {/* 3.5 Proven Business Impact */}
      <ProvenBusinessImpact />


      {/* 5. Why Choose Gooner Technology (Strategic Pillars & Credentials) */}
      <AboutSection />
      
      {/* 6. Case Studies */}
      <CaseStudiesSection />

      {/* 7. Final CTA */}
      <FinalCTA />

      {/* 8. Client Testimonials (Enterprise CFO & Finance Leader Experiences) */}
      <TestimonialsSection />


      {/* 9. Comprehensive Enterprise Footer */}
      <Footer />
    </main>
  );
}
