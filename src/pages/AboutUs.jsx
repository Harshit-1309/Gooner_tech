import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

export default function AboutUs() {
  return (
    <main className="app-container">
      <div style={{ background: '#0a0a0a', position: 'relative', zIndex: 10 }}>
        <Navbar />
      </div>
      <div style={{ paddingTop: '100px' }}>
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
