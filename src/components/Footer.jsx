import { useState } from 'react';
import goonerLogo from '../assets/logo.png';

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsEmail && newsEmail.includes('@')) {
      setSubscribed(true);
      setNewsEmail('');
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
        {/* Top Tier: Brand and Newsletter */}
        <div className="footer__top">
          <div className="footer__brand-col">
            <a href="#" className="brand footer-brand" onClick={(e) => handleScrollTo(e, '#hero')}>
              <img src={goonerLogo} alt="Gooner Technology" className="brand__logo-img" />
              <span className="brand__divider" aria-hidden="true" />
              <span className="brand__name">Gooner Technology</span>
            </a>
            <p className="footer__mission">
              Empowering global organizations with intelligent financial planning, multi-entity consolidation, and autonomous AI-driven automation.
            </p>
            <div className="footer__badges">
              <span className="footer-badge">Oracle NetSuite Partner</span>
              <span className="footer-badge">SOC2 Certified</span>
            </div>
          </div>

          <div className="footer__newsletter-col">
            <h4 className="footer__col-heading">Executive Finance Insights</h4>
            <p className="footer__newsletter-desc">
              Subscribe to our monthly brief on enterprise FP&amp;A automation, EPM benchmarks, and AI finance agents.
            </p>

            {subscribed ? (
              <div className="newsletter-success">
                <span>✓ Thank you for subscribing!</span>
              </div>
            ) : (
              <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-submit-btn">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mid Tier: Navigation Columns */}
        <div className="footer__nav-grid">
          <div className="footer__nav-col">
            <h4 className="footer__nav-title">Products &amp; Solutions</h4>
            <ul className="footer__nav-list">
              <li><a href="#products" onClick={(e) => handleScrollTo(e, '#products')}>NetSuite Planning (NSPB)</a></li>
              <li><a href="#products" onClick={(e) => handleScrollTo(e, '#products')}>EPM Financial Consolidation</a></li>
              <li><a href="#products" onClick={(e) => handleScrollTo(e, '#products')}>Executive BI &amp; Analytics</a></li>
              <li><a href="#products" onClick={(e) => handleScrollTo(e, '#products')}>AI Finance Agents</a></li>
            </ul>
          </div>

          <div className="footer__nav-col">
            <h4 className="footer__nav-title">Services</h4>
            <ul className="footer__nav-list">
              <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')}>Architecture &amp; Advisory</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')}>NSPB Implementation</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')}>ERP &amp; BI Integrations</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')}>24/7 Managed Services</a></li>
            </ul>
          </div>

          <div className="footer__nav-col">
            <h4 className="footer__nav-title">Company</h4>
            <ul className="footer__nav-list">
              <li><a href="#why-us" onClick={(e) => handleScrollTo(e, '#why-us')}>Why Gooner Technology</a></li>
              <li><a href="#trusted-by" onClick={(e) => handleScrollTo(e, '#trusted-by')}>Client Case Studies</a></li>
              <li><a href="#challenges-solutions" onClick={(e) => handleScrollTo(e, '#challenges-solutions')}>Challenges &amp; Solutions</a></li>
              <li><a href="#contact-us" onClick={(e) => handleScrollTo(e, '#contact-us')}>Request Assessment Demo</a></li>
            </ul>
          </div>

          <div className="footer__nav-col">
            <h4 className="footer__nav-title">Global Presence</h4>
            <p className="footer__presence-text">London, United Kingdom</p>
            <p className="footer__presence-text">New York, NY, USA</p>
            <p className="footer__presence-text">Singapore, SG</p>
            <p className="footer__presence-text email-link">
              <a href="mailto:contact@goonertech.com">contact@goonertech.com</a>
            </p>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Gooner Technology. All rights reserved. Built with modern React.
          </p>
          <div className="footer__legal-links">
            <a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')}>Privacy Policy</a>
            <span className="legal-dot">•</span>
            <a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')}>Terms of Service</a>
            <span className="legal-dot">•</span>
            <a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')}>Security &amp; Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
