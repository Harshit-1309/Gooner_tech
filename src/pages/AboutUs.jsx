import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importing assets
import lobbyImg from '../assets/media__1786625922788.jpg';
import teamImg from '../assets/media__1786628359175.jpg';
import heroBg from '../assets/consulting_hero.png';

export default function AboutUs() {
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
            {/* Timeline Item 1 */}
            <div className="about-journey__item about-journey__item--active">
              <div className="about-journey__node-wrap">
                <div className="about-journey__node">
                  <div className="about-journey__node-inner" />
                </div>
                <div className="about-journey__line-segment" />
              </div>
              <div className="about-journey__content">
                <h3 className="about-journey__step-title">Consult</h3>
                <p className="about-journey__step-desc">
                  Deep architecture review and strategic alignment.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="about-journey__item">
              <div className="about-journey__node-wrap">
                <div className="about-journey__node">
                  <div className="about-journey__node-inner" />
                </div>
                <div className="about-journey__line-segment" />
              </div>
              <div className="about-journey__content">
                <h3 className="about-journey__step-title">Implement</h3>
                <p className="about-journey__step-desc">
                  Precision deployment of core financial technologies.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="about-journey__item">
              <div className="about-journey__node-wrap">
                <div className="about-journey__node">
                  <div className="about-journey__node-inner" />
                </div>
                <div className="about-journey__line-segment" />
              </div>
              <div className="about-journey__content">
                <h3 className="about-journey__step-title">Integrate</h3>
                <p className="about-journey__step-desc">
                  Connecting disparate systems into a unified data ecosystem.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="about-journey__item">
              <div className="about-journey__node-wrap">
                <div className="about-journey__node">
                  <div className="about-journey__node-inner" />
                </div>
                <div className="about-journey__line-segment" />
              </div>
              <div className="about-journey__content">
                <h3 className="about-journey__step-title">Manage</h3>
                <p className="about-journey__step-desc">
                  Ongoing operational support and system health monitoring.
                </p>
              </div>
            </div>

            {/* Timeline Item 5 */}
            <div className="about-journey__item">
              <div className="about-journey__node-wrap">
                <div className="about-journey__node">
                  <div className="about-journey__node-inner" />
                </div>
              </div>
              <div className="about-journey__content">
                <h3 className="about-journey__step-title">Optimize</h3>
                <p className="about-journey__step-desc">
                  Continuous refinement and performance enhancement.
                </p>
              </div>
            </div>
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
          
          <div className="about-people__image-container">
            <img src={teamImg} alt="Gooner Technology Team" className="about-people__img" />
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
