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

  const technologies = [
    {
      title: 'Planning & Budgeting',
      platforms: 'PBCS | EPBCS | NSPB',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    },
    {
      title: 'Financial Consolidation & Close',
      platforms: 'FCCS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M3 10h18M5 10v11M19 10v11M12 10v11M4 6l8-4 8 4M9 10v11M15 10v11"/>
        </svg>
      )
    },
    {
      title: 'Account Reconciliation',
      platforms: 'ARCS | NSAR',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      )
    },
    {
      title: 'Profitability & Cost Management',
      platforms: 'PCMCS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"/>
        </svg>
      )
    },
    {
      title: 'BI & Analytics',
      platforms: 'OAC | NSAW | Power BI',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    },
    {
      title: 'AI & Automation',
      platforms: 'AI Agents | Finance Automation | Intelligent Workflows | API & MCP',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <path d="M9 1v2M15 1v2M9 21v2M15 21v2M21 9h2M21 15h2M1 9h2M1 15h2"/>
        </svg>
      )
    }
  ];

  return (
    <main className="app-container">
      <div style={{ background: '#ffffff', position: 'relative', zIndex: 10 }}>
        <Navbar />
      </div>

      {/* Picture-perfect Hero Section */}
      <section className="impl-hero" style={{ backgroundImage: `url(${implementationHeroBg})` }}>
        <div className="impl-hero__container">
          <div className="impl-hero__left">
            <div className="impl-hero__eyebrow-wrap">
              <span className="impl-hero__eyebrow">02 IMPLEMENTATION SERVICES</span>
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

          {/* Right Block: Technologies */}
          <div className="impl-card impl-card--tech">
            <div className="impl-card__header">
              TECHNOLOGIES WE IMPLEMENT
            </div>
            <div className="impl-card__body">
              <div className="impl-tech__grid">
                {technologies.map((tech) => (
                  <div key={tech.title} className="impl-tech-card">
                    <div className="impl-tech-card__header">
                      <div className="impl-tech-card__icon-wrap">
                        {tech.icon}
                      </div>
                      <h4 className="impl-tech-card__title">{tech.title}</h4>
                    </div>
                    <p className="impl-tech-card__platforms">{tech.platforms}</p>
                  </div>
                ))}
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
