import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import goonerLogo from '../assets/logo.png';

export default function Navbar({ links }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultLinks = [
    { label: 'Technology', href: '/product' },
    { 
      label: 'Services', 
      href: '/services/consulting',
      dropdown: [
        { label: 'Consulting', href: '/services/consulting' },
        { label: 'Implementation', href: '/services/implementation' },
        { label: 'Managed Services', href: '/services/managed' }
      ]
    },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact Us', href: '/#contact-us', isButton: true },
  ];

  const navItems = links || defaultLinks;

  useEffect(() => {
    const handleScrollState = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScrollState, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollState);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href.includes('#')) {
      e.preventDefault();
      const [path, hash] = href.split('#');
      const targetId = `#${hash}`;

      const scrollToTarget = () => {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      const isSamePath = location.pathname === path || 
        (path === '/' && location.pathname === '') ||
        (path === '' && location.pathname === '/');

      if (!isSamePath) {
        navigate(path);
        setTimeout(scrollToTarget, 150);
      } else {
        scrollToTarget();
      }
    }
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <nav className="navbar" aria-label="Main Navigation">
          <Link to="/" className="brand" onClick={() => setMobileMenuOpen(false)}>
            <img
              src={goonerLogo}
              alt="Gooner Technology Logo"
              className="brand__logo-img"
            />
            <span className="brand__divider" aria-hidden="true" />
            <span className="brand__name">Gooner Technology</span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hero-links">
            {navItems.map((item) => (
              <li key={item.label} className={`hero-links__item ${item.dropdown ? 'nav-dropdown-parent' : ''}`}>
                {item.isButton ? (
                  <Link
                    to={item.href}
                    className="nav-btn-contact"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <span>{item.label}</span>
                    <span className="nav-btn-arrow" aria-hidden="true">→</span>
                  </Link>
                ) : item.dropdown ? (
                  <>
                    <Link
                      to={item.href}
                      className="nav-link-standard nav-dropdown-trigger"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <span>{item.label}</span>
                      <span className="dropdown-arrow-icon" aria-hidden="true">▼</span>
                    </Link>
                    <ul className="nav-dropdown-menu">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.label} className="nav-dropdown-item-wrap">
                          <Link
                            to={subItem.href}
                            className="nav-dropdown-link"
                            onClick={(e) => handleNavClick(e, subItem.href)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="nav-link-standard"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </Link>
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
          <Link to="/" className="brand" onClick={() => setMobileMenuOpen(false)}>
            <img src={goonerLogo} alt="Gooner Technology" className="brand__logo-img" />
            <span className="brand__name">Gooner Technology</span>
          </Link>
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
              {item.dropdown ? (
                <div className="mobile-drawer__dropdown-group">
                  <Link
                    to={item.href}
                    className="mobile-drawer__link"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </Link>
                  <ul className="mobile-drawer__sublist">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.label} className="mobile-drawer__subitem">
                        <Link
                          to={subItem.href}
                          className="mobile-drawer__sublink"
                          onClick={(e) => handleNavClick(e, subItem.href)}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`mobile-drawer__link ${item.isButton ? 'mobile-drawer__link--btn' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span>{item.label}</span>
                  {item.isButton && <span aria-hidden="true">→</span>}
                </Link>
              )}
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
