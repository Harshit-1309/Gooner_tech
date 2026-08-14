import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HeroContent({
  text = 'We build intelligent finance systems',
  subtitle = 'Using Enterprise Performance Management (EPM), Business Intelligence (BI), and Artificial Intelligence (AI), we help organizations automate budgeting, forecasting, consolidation, account reconciliations, reporting, and analytics, enabling finance teams to spend more time making business decisions and less time preparing spreadsheets.',
  primaryCtaText = 'Request a Demo',
  primaryCtaHref = '/contact-us',
  secondaryCtaText = 'Explore Solutions',
  secondaryCtaHref = '#challenges'
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (noMotion) {
      setDisplayedText(text);
      setIsDone(true);
      return;
    }

    let i = 0;
    const charDelay = 38;
    const startDelay = 180;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayedText(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setIsDone(true);
        }
      }, charDelay);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text]);

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="title-wrap">
      {/* Soft Ambient Radial Lighting behind the Headline */}
      <div className="hero-radial-lighting" aria-hidden="true" />

      {/* Main Headline with Typewriter animation & Caret */}
      <h1 className="t-line1">
        <span className="t-line1__text">{displayedText}</span>
        <span className={`t-line1__cursor ${isDone ? 'is-done' : ''}`} aria-hidden="true" />
      </h1>

      {/* Glowing Neon Divider Underline */}
      <div className="t-divider" aria-hidden="true" />

      {/* Subtitle Description */}
      <p className="t-subline">{subtitle}</p>

      {/* Centered CTA Button Group */}
      <div className="t-cta-group">
        {/* Subtle Ambient Glow behind the Buttons */}
        <div className="t-cta-ambient-glow" aria-hidden="true" />

        {/* Primary CTA Button */}
        <Link to={primaryCtaHref} className="t-cta t-cta--primary">
          <span className="t-cta__label">{primaryCtaText}</span>
          <span className="t-cta__arrow" aria-hidden="true">→</span>
        </Link>

        {/* Secondary Outline/Glass CTA Button */}
        <a
          href={secondaryCtaHref}
          className="t-cta t-cta--secondary"
          onClick={(e) => handleSmoothScroll(e, secondaryCtaHref)}
        >
          <span className="t-cta__label">{secondaryCtaText}</span>
          <span className="t-cta__secondary-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
