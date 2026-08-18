import { useState } from 'react';
import { Link } from 'react-router-dom';
import goonerLogo from '../assets/logo.png';

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsEmail && newsEmail.includes('@')) {
      setIsSubscribing(true);
      setTimeout(() => {
        setIsSubscribing(false);
        setSubscribed(true);
        setNewsEmail('');
      }, 1000);
    }
  };

  const handleScrollTo = (e, href) => {
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer__glow" aria-hidden="true" />

      <div className="footer__container">
        <div className="footer__main-grid">
          {/* Col 1: Brand */}
          <div className="footer__brand-col">
            <a href="#" className="brand footer-brand" onClick={(e) => handleScrollTo(e, '#hero')}>
              <img src={goonerLogo} alt="Gooner Technologies" className="brand__logo-img" />
              <span className="brand__divider" aria-hidden="true" />
              <span className="brand__name">
                <span className="brand__name--gooner">Gooner</span>{" "}
                <span className="brand__name--technologies">Technologies</span>
              </span>
            </a>
            <p className="footer__mission">
              Empowering global organizations with intelligent financial planning, multi-entity consolidation, and autonomous AI-driven automation.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer__nav-col">
            <h4 className="footer__nav-title">Quick Links</h4>
            <ul className="footer__nav-list">
              <li><a href="#why-us" onClick={(e) => handleScrollTo(e, '#why-us')}>Why Choose Us</a></li>
              <li><a href="#proven-impact" onClick={(e) => handleScrollTo(e, '#proven-impact')}>Business Impact</a></li>
              <li><a href="#case-studies" onClick={(e) => handleScrollTo(e, '#case-studies')}>Client Case Studies</a></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>

          {/* Col 3: Technologies & Services */}
          <div className="footer__nav-col">
            <h4 className="footer__nav-title">Technologies &amp; Services</h4>
            <ul className="footer__nav-list">
              <li><Link to="/product">Technologies</Link></li>
              <li><Link to="/services/consulting">Consulting</Link></li>
              <li><Link to="/services/implementation">Implementation</Link></li>
              <li><Link to="/services/managed">Managed Services</Link></li>
            </ul>
          </div>

          {/* Col 4: Global Presence */}
          <div className="footer__nav-col">
            <h4 className="footer__nav-title">Global Presence</h4>
            <p className="footer__presence-text">North Carolina, USA</p>
            <p className="footer__presence-text">London, UK</p>
            <p className="footer__presence-text">Mumbai, India</p>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Gooner Technologies. All rights reserved.
          </p>
          <div className="footer__legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="legal-dot">•</span>
            <Link to="/terms-of-service">Terms of Service</Link>
            <span className="legal-dot">•</span>
            <Link to="/security-compliance">Security &amp; Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
