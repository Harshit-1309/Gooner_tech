import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import ConsultingServices from './pages/ConsultingServices';
import ManagedServices from './pages/ManagedServices';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services/consulting" element={<ConsultingServices />} />
        <Route path="/services/managed" element={<ManagedServices />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}
