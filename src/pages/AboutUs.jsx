import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importing assets
import lobbyImg from '../assets/media__1786688741159-DC4jKMT6.png';
import heroBg from '../assets/consulting_hero.png';

import { TEAM_MEMBERS, JOURNEY_STEPS } from '../data/aboutData';

const DecorativeRing = () => (
  <svg className="about-people-card__decorative-ring" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="90" stroke="#fecdd3" strokeWidth="1.5" fill="none" />
    <polygon points="175,40 185,55 165,55" stroke="#fecdd3" strokeWidth="1.5" fill="none" />
    <circle cx="25" cy="150" r="5" stroke="#fecdd3" strokeWidth="1.5" fill="none" />
    <polyline points="150,165 158,155 166,165 174,155" stroke="#fecdd3" strokeWidth="1.5" fill="none" />
    <circle cx="35" cy="50" r="2.5" fill="#fecdd3" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % JOURNEY_STEPS.length);
    }, 3000); // Shift active step every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="app-container app-container--about">
      {/* Transparent Global Navbar Header */}
      <Navbar />

      {/* About Page Hero Section */}
      <section className="about-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="about-hero__container">
          <div className="about-hero__left">
            <div className="about-hero__eyebrow-wrap">
              <span className="about-hero__eyebrow">WHO WE ARE</span>
              <div className="about-hero__eyebrow-line" />
            </div>
            <h1 className="about-hero__title">
              Finance Transformation.<br />
              <span className="about-hero__title-blue">Powered by Technology.</span>
            </h1>
            <p className="about-hero__desc">
              We are the expert architects guiding complex enterprises through digital evolution, bringing clarity to finance data and strategic foresight to every decision.
            </p>
          </div>
          <div className="about-hero__spacer" />
        </div>
      </section>

      {/* Split Text & Image Section */}
      <section className="about-intro-section">
        <div className="about-intro__container">
          <div className="about-intro__grid">
            <div className="about-intro__image-wrap">
              <img src={lobbyImg} alt="Modern Corporate Office Lobby" className="about-intro__img" />
            </div>
            <div className="about-intro__content">
              <h2 className="about-intro__title">
                From Finance Technology Expertise to a Finance Transformation Partner
              </h2>
              <p className="about-intro__text">
                We stand at the intersection of finance functions and technology systems. Finance operations are fragmented, data often siloed. We define the strategic paths of an enterprise, creating solutions designed to streamline workflows.
              </p>
              <blockquote className="about-intro__quote">
                “Finance technology should make finance teams more effective—not more complicated.”
              </blockquote>
              <p className="about-intro__subtext">
                Our journey has been dedicated to untangling this complexity. We don't just implement software; we architecture the finance ecosystem to ensure accuracy, reliability, and business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Side-by-Side Cards */}
      <section className="about-mission-section">
        <div className="about-mission__container">
          <div className="about-mission__grid">
            {/* Mission Card */}
            <div className="about-mission-card">
              <div className="about-mission-card__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="about-mission-card__eyebrow">OUR MISSION</span>
              <h3 className="about-mission-card__title">
                Make Every Finance Function More Intelligent
              </h3>
              <ul className="about-mission-card__bullets">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="bullet-arrow">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  From Manual to Automated
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="bullet-arrow">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  From Disconnected to Connected
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="bullet-arrow">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  From Reactive to Predictive
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="about-mission-card">
              <div className="about-mission-card__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>
              <span className="about-mission-card__eyebrow">OUR VISION</span>
              <h3 className="about-mission-card__title">
                Help 1,000 Companies Transform Finance Through Technology.
              </h3>
              <p className="about-mission-card__text">
                We exist to bridge the gap between complex finance operations and cutting-edge technology. By partnering with visionary finance leaders, we engineer robust, scalable solutions that elevate the entire enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="about-values-section">
        <div className="about-values__container">
          <div className="about-values__header">
            <h2 className="about-values__main-title">What We Believe</h2>
            <p className="about-values__main-subtitle">
              Core tenets that drive our approach to every transformation engagement.
            </p>
          </div>

          <div className="about-values__grid">
            {/* Value 1 */}
            <div className="about-value-card">
              <div className="about-value-card__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3 className="about-value-card__title">Simplify Finance</h3>
              <p className="about-value-card__desc">
                Complexity is the enemy of execution. We design elegant systems that reduce friction and clarify outcomes.
              </p>
            </div>

            {/* Value 2 */}
            <div className="about-value-card">
              <div className="about-value-card__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="about-value-card__title">Data-Led Decisions</h3>
              <p className="about-value-card__desc">
                Intuition is good; verified data is better. We build the architecture that ensures truth.
              </p>
            </div>

            {/* Value 3 */}
            <div className="about-value-card">
              <div className="about-value-card__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="about-value-card__title">Automation</h3>
              <p className="about-value-card__desc">
                Free human capital from repetitive tasks to focus on strategic initiatives.
              </p>
            </div>

            {/* Value 4 */}
            <div className="about-value-card">
              <div className="about-value-card__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 6v12M6 12h12" />
                </svg>
              </div>
              <h3 className="about-value-card__title">AI-Driven Intelligence</h3>
              <p className="about-value-card__desc">
                Deploying advanced algorithms to predict trends, identify anomalies, and uncover hidden opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Partnership Journey Section */}
      <section className="about-journey-section">
        <div className="about-journey__container">
          <h2 className="about-journey__title">The Partnership Journey</h2>
          <p className="about-journey__subtitle">
            A proven methodology for seamless finance transformation.
          </p>

          <div className="about-journey__timeline">
            {JOURNEY_STEPS.map((step, index) => (
              <div
                key={step.title}
                className={`about-journey__item ${activeIndex === index ? 'about-journey__item--active' : ''}`}
              >
                <div className="about-journey__node-wrap">
                  <div className="about-journey__node">
                    <div className="about-journey__node-inner" />
                  </div>
                  {index < JOURNEY_STEPS.length - 1 && <div className="about-journey__line-segment" />}
                </div>
                <div className="about-journey__content">
                  <h3 className="about-journey__step-title">{step.title}</h3>
                  <p className="about-journey__step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our People Section */}
      <section className="about-people-section">
        <div className="about-people__container">
          <div className="about-people__header">
            <h2 className="about-people__title">Our People</h2>
            <p className="about-people__subtitle">
              A diverse team of finance experts, technology architects, and data scientists dedicated to your transformation.
            </p>
          </div>

          <div className="about-people__grid">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="about-people-card about-people-card--3d">
                <div className="about-people-card__avatar-container">
                  <div className="about-people-card__inner-circle"></div>
                  <DecorativeRing />
                  <img src={member.image} alt={member.name} className="about-people-card__avatar-img" style={member.imageStyle || {}} />
                </div>
                <div className="about-people-card__info">
                  <h3 className="about-people-card__name">{member.name}</h3>
                  <span className="about-people-card__role">{member.role}</span>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="about-people-card__linkedin" aria-label={`${member.name} LinkedIn`}>
                      <LinkedInIcon />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
