import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

export default function Services() {
  return (
    <main className="app-container">
      <div style={{ background: '#0a0a0a', position: 'relative', zIndex: 10 }}>
        <Navbar />
      </div>
      <div style={{ paddingTop: '100px' }}>
        <ServicesSection />
      </div>
      <Footer />
    </main>
  );
}
