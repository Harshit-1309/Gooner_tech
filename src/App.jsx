import Navbar from './components/Navbar';
import WaveCanvas from './components/WaveCanvas';
import HeroContent from './components/HeroContent';
import TrustedBy from './components/TrustedBy';
import ChallengesSolutions from './components/ChallengesSolutions';
import ProvenBusinessImpact from './components/ProvenBusinessImpact';
import AboutSection from './components/AboutSection';

import TestimonialsSection from './components/TestimonialsSection';

import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="app-container">
      {/* 1. Hero Section with 3D Wave Canvas & Floating Particles */}
      <section className="hero" id="hero">
        <div className="hero__photo" aria-hidden="true" />
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
      {/* 8. Client Testimonials (Enterprise CFO & Finance Leader Experiences) */}
      <TestimonialsSection />

      {/* 8. Interactive Demo & Assessment Request Section */}
      <ContactSection />

      {/* 9. Comprehensive Enterprise Footer */}
      <Footer />
    </main>
  );
}
