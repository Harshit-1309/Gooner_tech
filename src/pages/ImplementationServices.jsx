import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import implementationHeroBg from '../assets/implementation_hero_bg.png';

export default function ImplementationServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const includesItems = [
    {
      title: 'Application Design',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      )
    },
    {
      title: 'Configuration',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      title: 'Custom Development',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: 'Data Migration',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/>
        </svg>
      )
    },
    {
      title: 'Integration',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="m10 8 4 4-4 4" />
        </svg>
      )
    },
    {
      title: 'Testing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      )
    },
    {
      title: 'Deployment',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.25-2.5 3-2.5 5h20c0-2-1-3.75-2.5-5M12 2v12M8 6l4-4 4 4" />
        </svg>
      )
    },
    {
      title: 'User Training',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  const implementationApproach = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Understand your business, processes, systems and requirements.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      )
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Create solution architecture, workflows, integrations and roadmap.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Build',
      desc: 'Configure, develop custom functionality, integrate systems and migrate data.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    },
    {
      num: '04',
      title: 'Validate',
      desc: 'Perform testing, reconciliations and user acceptance testing.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      )
    },
    {
      num: '05',
      title: 'Deploy',
      desc: 'Deploy to production, complete cutover and ensure a smooth go-live.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v22M17 5l-5-5-5 5"/>
        </svg>
      )
    },
    {
      num: '06',
      title: 'Enable',
      desc: 'Train users and administrators. Transfer knowledge and documentation.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
        </svg>
      )
    },
    {
      num: '07',
      title: 'Transition',
      desc: 'Transition to support and managed services for continuous success.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3"/>
        </svg>
      )
    }
  ];



  return (
    <main className="app-container">
      <Navbar />

      {/* Picture-perfect Hero Section */}
      <section className="impl-hero" style={{ backgroundImage: `url(${implementationHeroBg})` }}>
        <div className="impl-hero__container">
          <div className="impl-hero__left">
            <div className="impl-hero__eyebrow-wrap">
              <span className="impl-hero__eyebrow">IMPLEMENTATION SERVICES</span>
              <div className="impl-hero__eyebrow-line" />
            </div>
            <h1 className="impl-hero__title">
              Turn strategy into<br />
              a <span className="impl-hero__title-blue">working solution.</span>
            </h1>
            <p className="impl-hero__desc">
              Our implementation teams configure, develop, integrate, test, migrate, and deploy finance solutions aligned with your business processes.
            </p>
          </div>
          <div className="impl-hero__spacer" />
        </div>
      </section>

      {/* Includes Grid Panel Section */}
      <section className="impl-includes-section">
        <div className="impl-includes__container">
          <div className="impl-includes-box">
            <div className="impl-includes__header">
              INCLUDES:
            </div>
            <div className="impl-includes__grid">
              {includesItems.map((item) => (
                <div key={item.title} className="impl-include-card">
                  <div className="impl-include-card__icon-wrap">
                    {item.icon}
                  </div>
                  <span className="impl-include-card__label">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach and Tech Side-by-Side Section */}
      <section className="impl-details-section">
        <div className="impl-details__container">
          
          {/* Left Block: Approach */}
          <div className="impl-card impl-card--approach">
            <div className="impl-card__header">
              OUR IMPLEMENTATION APPROACH
            </div>
            <div className="impl-card__body">
              {/* Desktop Serpentine Snake Timeline (7 steps) */}
              <div className="impl-serpentine-desktop">
                <div className="impl-serpentine__wrapper">
                  <svg className="impl-serpentine__svg" viewBox="0 0 920 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Serpentine Connecting Path (7 turns) */}
                    <path
                      d="M 40,200 L 40,100 Q 40,50 80,50 L 120,50 Q 160,50 160,100 L 160,300 Q 160,350 200,350 L 240,350 Q 280,350 280,300 L 280,100 Q 280,50 320,50 L 360,50 Q 400,50 400,100 L 400,300 Q 400,350 440,350 L 480,350 Q 520,350 520,300 L 520,100 Q 520,50 560,50 L 600,50 Q 640,50 640,100 L 640,300 Q 640,350 680,350 L 720,350 Q 760,350 760,300 L 760,100 Q 760,50 800,50 L 840,50 Q 880,50 880,100 L 880,200"
                      stroke="#3b82f6"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {/* Start dot */}
                    <circle cx="40" cy="200" r="10" fill="#3b82f6" />

                    {/* End dot */}
                    <circle cx="880" cy="200" r="10" fill="#3b82f6" />

                    {/* Down arrow 1 */}
                    <path d="M 152,190 L 160,205 L 168,190" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Up arrow 1 */}
                    <path d="M 272,210 L 280,195 L 288,210" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Down arrow 2 */}
                    <path d="M 392,190 L 400,205 L 408,190" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Up arrow 2 */}
                    <path d="M 512,210 L 520,195 L 528,210" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Down arrow 3 */}
                    <path d="M 632,190 L 640,205 L 648,190" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Up arrow 3 */}
                    <path d="M 752,210 L 760,195 L 768,210" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  {/* Serpentine Step Details Overlays */}
                  <div className="impl-serpentine__step impl-serpentine__step--discover">
                    <h4 className="impl-serpentine__title">Discover</h4>
                    <p className="impl-serpentine__desc">Understand business, processes, systems and requirements.</p>
                  </div>

                  <div className="impl-serpentine__step impl-serpentine__step--design">
                    <h4 className="impl-serpentine__title">Design</h4>
                    <p className="impl-serpentine__desc">Create solution architecture, workflows, integrations and roadmap.</p>
                  </div>

                  <div className="impl-serpentine__step impl-serpentine__step--build">
                    <h4 className="impl-serpentine__title">Build</h4>
                    <p className="impl-serpentine__desc">Configure, develop custom features, integrate systems & migrate data.</p>
                  </div>

                  <div className="impl-serpentine__step impl-serpentine__step--validate">
                    <h4 className="impl-serpentine__title">Validate</h4>
                    <p className="impl-serpentine__desc">Perform testing, reconciliations and user acceptance testing.</p>
                  </div>

                  <div className="impl-serpentine__step impl-serpentine__step--deploy">
                    <h4 className="impl-serpentine__title">Deploy</h4>
                    <p className="impl-serpentine__desc">Deploy to production, complete cutover and ensure a smooth go-live.</p>
                  </div>

                  <div className="impl-serpentine__step impl-serpentine__step--enable">
                    <h4 className="impl-serpentine__title">Enable</h4>
                    <p className="impl-serpentine__desc">Train users and administrators. Transfer knowledge & documentation.</p>
                  </div>

                  <div className="impl-serpentine__step impl-serpentine__step--transition">
                    <h4 className="impl-serpentine__title">Transition</h4>
                    <p className="impl-serpentine__desc">Transition to support and managed services for continuous success.</p>
                  </div>
                </div>
              </div>

              {/* Mobile Vertical Timeline */}
              <div className="impl-serpentine-mobile">
                <div className="impl-flow">
                  {implementationApproach.map((step) => (
                    <div key={step.title} className="impl-flow__step-wrap">
                      <div className="impl-flow__step">
                        <div className="impl-flow__icon-wrap">
                          {step.icon}
                        </div>
                        <div className="impl-flow__details">
                          <h4 className="impl-flow__title">
                            <span className="impl-flow__num">{step.num}</span> {step.title}
                          </h4>
                          <p className="impl-flow__desc">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>



        </div>
      </section>

      {/* Bottom Flowchart Banner */}
      <section className="impl-banner-section">
        <div className="impl-banner__container">
          <div className="impl-banner-box">
            
            <div className="impl-banner__top">
              <div className="impl-banner__intro">
                <div className="impl-banner__target-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
                <p className="impl-banner__text">
                  A finance solution that is <strong>designed around your business</strong>, properly integrated with your existing ecosystem, validated by <strong>your users</strong>, and ready for long-term operation.
                </p>
              </div>
              <a href="/#contact-us" className="impl-banner__cta-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px', marginRight: '8px' }}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                Discuss Your Implementation
              </a>
            </div>

            <div className="impl-banner__flow">
              <div className="impl-banner__flow-label">FROM REQUIREMENTS TO RESULTS</div>
              <div className="impl-banner__flow-steps">
                {['Discover', 'Design', 'Build', 'Integrate', 'Test', 'Deploy', 'Enable', 'Support'].map((step, idx, arr) => (
                  <span key={step} className="impl-banner__flow-step-wrap">
                    <span className="impl-banner__flow-step">{step}</span>
                    {idx < arr.length - 1 && <span className="impl-banner__flow-arrow">&rarr;</span>}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
