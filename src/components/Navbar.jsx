import { useState, useEffect } from 'react';
import goonerLogo from '../assets/logo.png';

export default function Navbar({ links }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Success Stories', href: '#success-story' },
    { label: 'Contact Us', href: '#contact-us', isButton: true },
  ];

  const navItems = links || defaultLinks;

  useEffect(() => {
    const handleScrollState = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScrollState, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollState);
  }, []);

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <nav className="navbar" aria-label="Main Navigation">
          {/* Brand Logo */}
          <a href="#" className="brand" onClick={(e) => handleNavClick(e, '#hero')}>
            <img
              src={goonerLogo}
              alt="Gooner Technology Logo"
              className="brand__logo-img"
            />
            <span className="brand__divider" aria-hidden="true" />
            <span className="brand__name">Gooner Technology</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hero-links">
            {navItems.map((item) => (
              <li key={item.label} className="hero-links__item">
                {item.isButton ? (
                  <a
                    href={item.href}
                    className="nav-btn-contact"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <span>{item.label}</span>
                    <span className="nav-btn-arrow" aria-hidden="true">→</span>
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="nav-link-standard"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'is-active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer__header">
          <a href="#" className="brand" onClick={(e) => handleNavClick(e, '#hero')}>
            <img src={goonerLogo} alt="Gooner Technology" className="brand__logo-img" />
            <span className="brand__name">Gooner Technology</span>
          </a>
          <button
            type="button"
            className="mobile-drawer__close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        <ul className="mobile-drawer__list">
          {navItems.map((item) => (
            <li key={item.label} className="mobile-drawer__item">
              <a
                href={item.href}
                className={`mobile-drawer__link ${item.isButton ? 'mobile-drawer__link--btn' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span>{item.label}</span>
                {item.isButton && <span aria-hidden="true">→</span>}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer__footer">
          <p className="mobile-drawer__tagline">Intelligent Finance Systems • EPM • BI • AI</p>
        </div>
      </div>
    </>
  );
}
