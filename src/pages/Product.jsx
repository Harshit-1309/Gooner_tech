import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import productHeroBg from '../assets/product_hero_bg.png';

export default function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



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



  return (
    <main className="app-container">
      <div style={{ background: '#ffffff', position: 'relative', zIndex: 10 }}>
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="prod-hero" style={{ backgroundImage: `url(${productHeroBg})` }}>
        <div className="prod-hero__container">
          <div className="prod-hero__top-row">
            <div className="prod-hero__left">
              <h1 className="prod-hero__title">
                Technology Expertise. <br />
                Intelligent Solutions. <span className="prod-hero__title-blue">Stronger Finance.</span>
              </h1>
              <div className="prod-hero__title-line" />
              <p className="prod-hero__desc">
                We help organizations leverage leading finance technologies to plan better, close faster, improve control and drive smarter decisions.
              </p>
            </div>
            <div className="prod-hero__spacer" />
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
                <Link to="/contact-us" className="bottom-partner__btn">
                  Talk to a Finance Technology Expert &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
