import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import ConsultingServices from './pages/ConsultingServices';
import ManagedServices from './pages/ManagedServices';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SecurityCompliance from './pages/SecurityCompliance';
import ImplementationServices from './pages/ImplementationServices';
import ContactUs from './pages/ContactUs';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services/consulting" element={<ConsultingServices />} />
        <Route path="/services/implementation" element={<ImplementationServices />} />
        <Route path="/services/managed" element={<ManagedServices />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/security-compliance" element={<SecurityCompliance />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
