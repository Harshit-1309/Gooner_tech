import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductsSection from '../components/ProductsSection';

export default function Product() {
  return (
    <main className="app-container">
      <div style={{ background: '#0a0a0a', position: 'relative', zIndex: 10 }}>
        <Navbar />
      </div>
      <div style={{ paddingTop: '100px' }}>
        <ProductsSection />
      </div>
      <Footer />
    </main>
  );
}
