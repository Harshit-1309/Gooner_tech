import { Link } from 'react-router-dom';
import './TechnologiesOverview.css';

const techExpertise = [
  {
    title: 'Planning & Budgeting',
    color: '#0c4cb0',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
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
        <path d="M3 21h18M3 10h18M5 10v11M19 10v11M12 10v11M4 6l8-4 8 4M9 10v11M15 10v11" />
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
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    list: [
      'Balance Sheet Reconciliations',
      'Transaction Matching',
      'Variance Analysis',
      'Compliance Automation',
      'Workflow Management',
      'Audit Traceability'
    ],
    software: 'ARCS'
  },
  {
    title: 'AI & Autonomous Finance',
    color: '#0c4cb0',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
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

export default function TechnologiesOverview() {
  return (
    <section className="tech-overview">
      <div className="tech-overview__container">
        <div className="why-divider" aria-hidden="true" style={{ marginTop: '0', marginBottom: '40px' }}>
          <div className="why-divider__center-node">
            <span className="why-divider__label">CORE CAPABILITIES</span>
          </div>
        </div>

        <div className="why-block-header why-block-header--centered" style={{ marginBottom: '64px' }}>
          <h2 className="why-block-title">Technologies</h2>
          <p className="why-block-subtitle">
            We help organizations leverage leading finance technologies to plan better, close faster, improve control and drive smarter decisions.
          </p>
        </div>

        <div className="tech-overview__grid">
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

        <div className="tech-overview__footer">
          <Link to="/product" className="tech-overview__btn">
            Explore more &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
