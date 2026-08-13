import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import productHero from '../assets/product_hero.png';

export default function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pills = [
    {
      label: 'Planning & Budgeting',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-1.89-1.78-3.5-3.5-3.5a5.5 5.5 0 0 0-5.5 5.5c-1.39 0-3 1.11-3 3A3.5 3.5 0 0 0 7.5 19z" />
        </svg>
      )
    },
    {
      label: 'Financial Consolidation & Close',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M3 10h18M5 10v11M19 10v11M12 10v11M4 6l8-4 8 4M9 10v11M15 10v11"/>
        </svg>
      )
    },
    {
      label: 'Account Reconciliations',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      )
    },
    {
      label: 'Profitability & Cost Management',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"/>
        </svg>
      )
    },
    {
      label: 'BI & Analytics',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    },
    {
      label: 'AI & Automation',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
        </svg>
      )
    }
  ];

  const techExpertise = [
    {
      title: 'Planning & Budgeting',
      color: '#0c4cb0',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      list: [
        'Budgeting & Forecasting',
        'Workforce Planning',
        'Revenue Planning',
        'Expense Planning',
        'Driver-based Planning',
        'Scenario Analysis'
      ],
      software: 'PBCS | EPBCS | NSPB'
    },
    {
      title: 'Financial Consolidation & Close',
      color: '#0c4cb0',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M3 10h18M5 10v11M19 10v11M12 10v11M4 6l8-4 8 4M9 10v11M15 10v11"/>
        </svg>
      ),
      list: [
        'Financial Consolidation',
        'Intercompany Eliminations',
        'Currency Translation',
        'Journal Management',
        'Close Process Automation',
        'Reporting'
      ],
      software: 'FCCS'
    },
    {
      title: 'Account Reconciliations',
      color: '#0c4cb0',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
      list: [
        'Account Reconciliation',
        'Balance Sheet Reconciliation',
        'Transaction Matching',
        'Account Certification',
        'Approval Workflows',
        'Exception Management'
      ],
      software: 'ARCS | NSAR'
    },
    {
      title: 'Profitability & Cost Management',
      color: '#ea580c',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"/>
        </svg>
      ),
      list: [
        'Cost Allocation',
        'Profitability Analysis',
        'Product Profitability',
        'Customer Profitability',
        'Driver-based Allocations',
        'Margin Analysis'
      ],
      software: 'PCMCS'
    },
    {
      title: 'BI & Analytics',
      color: '#0c4cb0',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      list: [
        'Dashboards & KPIs',
        'Management Reporting',
        'Financial Analytics',
        'Data Visualization',
        'Self-service Analytics',
        'Executive Insights'
      ],
      software: 'OACS | NSAW | Power BI'
    },
    {
      title: 'AI & Automation',
      color: '#0c4cb0',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
        </svg>
      ),
      list: [
        'AI Finance Agents',
        'Intelligent Forecasting',
        'Variance Analysis',
        'Automated Reporting',
        'Process Automation',
        'Document Automation'
      ],
      software: 'AI | AUTOMATION | APIs | MCP'
    }
  ];

  const ourProducts = [
    {
      title: 'AI Finance Agent',
      color: '#3b82f6',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2"/>
          <circle cx="12" cy="5" r="2"/>
          <path d="M12 7v4M8 15h.01M16 15h.01M2 16h1M21 16h1"/>
        </svg>
      ),
      desc: 'AI-powered assistant that analyzes financial data, explains variances and delivers actionable insights.'
    },
    {
      title: 'Intelligent P2P Automation',
      color: '#0c4cb0',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <circle cx="10" cy="15" r="2"/>
          <path d="M16 15h-2"/>
        </svg>
      ),
      desc: 'Automate procure-to-pay from invoice capture to payment with intelligent matching and approvals.'
    },
    {
      title: 'FP&A Intelligence',
      color: '#6366f1',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="9" y1="17" x2="9" y2="10"/>
          <line x1="15" y1="17" x2="15" y2="7"/>
        </svg>
      ),
      desc: 'Real-time FP&A insights with variance analysis, scenario modeling and performance tracking.'
    },
    {
      title: 'Intelligent Forecasting',
      color: '#f97316',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m19 20-4-4-4 4-5-5-2 2M12 4h9v9M21 4l-10 10"/>
        </svg>
      ),
      desc: 'Driver-based forecasting that adapts to change and helps you plan with confidence.'
    },
    {
      title: 'Finance Automation Platform',
      color: '#10b981',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      desc: 'Automate finance processes and workflows across systems with intelligence.'
    }
  ];

  return (
    <main className="app-container">
      <div style={{ background: '#ffffff', position: 'relative', zIndex: 10 }}>
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="prod-hero">
        <div className="prod-hero__container">
          <div className="prod-hero__left">
            <h1 className="prod-hero__title">
              Technology Expertise. <br />
              Intelligent Solutions. <span className="prod-hero__title-blue">Stronger Finance.</span>
            </h1>
            <div className="prod-hero__title-line" />
            <p className="prod-hero__desc">
              We help organizations leverage leading finance technologies to plan better, close faster, improve control and drive smarter decisions.
            </p>

            {/* Sub-hero Pills */}
            <div className="prod-hero__pills">
              {pills.map((pill) => (
                <div key={pill.label} className="prod-hero-pill">
                  <div className="prod-hero-pill__icon">{pill.icon}</div>
                  <span className="prod-hero-pill__text">{pill.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="prod-hero__right">
            <div className="prod-hero__img-wrap">
              <img src={productHero} alt="Financial Technology Expert" className="prod-hero__img" />
            </div>
          </div>
        </div>
      </section>

      {/* Double Side-by-Side Card Blocks Section */}
      <section className="prod-compare-section">
        <div className="prod-compare__container">
          
          {/* Left Block: Technology Expertise */}
          <div className="compare-card compare-card--expertise">
            <div className="compare-card__header">
              TECHNOLOGY EXPERTISE
            </div>
            <div className="compare-card__body compare-card__body--expertise">
              {techExpertise.map((col) => (
                <div key={col.title} className="expertise-col">
                  <div className="expertise-col__icon-wrap" style={{ color: col.color }}>
                    {col.icon}
                  </div>
                  <h3 className="expertise-col__title">{col.title}</h3>
                  <ul className="expertise-col__list">
                    {col.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="expertise-col__software">
                    {col.software}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Our Products */}
          <div className="compare-card compare-card--products">
            <div className="compare-card__header">
              OUR PRODUCTS
            </div>
            <div className="compare-card__body compare-card__body--products">
              {ourProducts.map((col) => (
                <div key={col.title} className="product-col">
                  <div className="product-col__icon-wrap" style={{ color: col.color }}>
                    {col.icon}
                  </div>
                  <h3 className="product-col__title">{col.title}</h3>
                  <p className="product-col__desc">{col.desc}</p>
                  <a href="/#contact-us" className="product-col__link" style={{ color: col.color }}>
                    Learn more &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Layout Sections */}
      <section className="prod-bottom-section">
        <div className="prod-bottom__container">
          
          {/* Left: Our Services Across Every Technology */}
          <div className="bottom-services-card">
            <div className="bottom-services__header">
              <div className="bottom-services__line" />
              <span className="bottom-services__title">OUR SERVICES ACROSS EVERY TECHNOLOGY</span>
              <div className="bottom-services__line" />
            </div>

            <div className="bottom-services__grid">
              <div className="bottom-service-col">
                <div className="bottom-service-col__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="bottom-service-col__text">
                  <h4>CONSULTING</h4>
                  <p>Assess, design and define the right solution for your business.</p>
                </div>
              </div>

              <div className="bottom-service-col">
                <div className="bottom-service-col__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>
                <div className="bottom-service-col__text">
                  <h4>IMPLEMENTATION</h4>
                  <p>Build, integrate and deploy solutions aligned with your goals.</p>
                </div>
              </div>

              <div className="bottom-service-col">
                <div className="bottom-service-col__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="bottom-service-col__text">
                  <h4>MANAGED SERVICES</h4>
                  <p>Support, optimize and continuously improve your finance technology.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Partner Solid Banner */}
          <div className="bottom-partner-card">
            <div className="bottom-partner__content">
              <div className="bottom-partner__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                  <path d="M3 3v18h18"/>
                </svg>
              </div>
              <div className="bottom-partner__text-wrap">
                <h3 className="bottom-partner__title">ONE PARTNER. END-TO-END EXPERTISE.</h3>
                <p className="bottom-partner__subtitle">
                  Strategy to implementation. Implementation to optimization. We are with you at every step.
                </p>
                <a href="/#contact-us" className="bottom-partner__btn">
                  Talk to a Finance Technology Expert &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
