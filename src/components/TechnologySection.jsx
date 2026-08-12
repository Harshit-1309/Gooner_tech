import { useCallback } from 'react';

const TECH_PILLARS = [
  {
    id: 'tech-oracle',
    title: 'Oracle EPM',
    items: [
      'Planning',
      'Budgeting',
      'Forecasting',
      'Consolidation',
      'Account Reconciliation',
    ],
  },
  {
    id: 'tech-netsuite',
    title: 'NetSuite',
    items: [
      'Planning & Budgeting',
      'Financial Management',
      'Revenue Planning',
      'ERP Integration',
    ],
  },
  {
    id: 'tech-ai',
    title: 'AI & Automation',
    items: [
      'Finance Agents',
      'Intelligent Forecasting',
      'Variance Analysis',
      'AP Automation',
    ],
  },
  {
    id: 'tech-analytics',
    title: 'Analytics',
    items: [
      'Executive Dashboards',
      'Financial Reporting',
      'Real-Time Insights',
      'Decision Support',
    ],
  },
];

export default function TechnologySection() {
  const handleCardMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  return (
    <section id="technology" className="technology-section" aria-label="Technology and Expertise">
      <div className="tech-ambient-glow tech-ambient-glow--center" aria-hidden="true" />
      
      <div className="tech-container">
        {/* Header */}
        <div className="tech-header">
          <div className="tech-eyebrow">
            <span className="tech-eyebrow__dot" />
            <span>TECHNOLOGY & EXPERTISE</span>
          </div>
          <h2 className="tech-title">What Powers the Transformation?</h2>
          <p className="tech-subtitle">
            We deliver end-to-edge finance transformation through deep expertise in enterprise ecosystems, augmented by practical AI and real-time analytics.
          </p>
        </div>

        {/* Visual Architecture Diagram */}
        <div className="tech-architecture">
          <div className="tech-arch-center">
            <div className="tech-arch-core-glow" />
            <div className="tech-arch-core">
              <span>GOONER</span>
              <span className="tech-arch-core-light">TECHNOLOGY</span>
            </div>
          </div>
          
          {/* Orbiting nodes (simulated visually via CSS) */}
          <div className="tech-arch-orbit tech-arch-orbit--1">
            <div className="tech-node tech-node--top-left">Oracle EPM</div>
            <div className="tech-node tech-node--top-right">NetSuite</div>
          </div>
          <div className="tech-arch-orbit tech-arch-orbit--2">
            <div className="tech-node tech-node--bottom-left">AI & Automation</div>
            <div className="tech-node tech-node--bottom-right">Analytics</div>
            <div className="tech-node tech-node--left">Business Intelligence</div>
            <div className="tech-node tech-node--right">Integrations</div>
          </div>
          
          {/* Connection Lines */}
          <svg className="tech-arch-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="50" y1="50" x2="20" y2="20" stroke="rgba(56, 142, 255, 0.3)" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="50" y1="50" x2="80" y2="20" stroke="rgba(56, 142, 255, 0.3)" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="50" y1="50" x2="20" y2="80" stroke="rgba(56, 142, 255, 0.3)" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="50" y1="50" x2="80" y2="80" stroke="rgba(56, 142, 255, 0.3)" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="50" y1="50" x2="10" y2="50" stroke="rgba(56, 142, 255, 0.3)" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="50" y1="50" x2="90" y2="50" stroke="rgba(56, 142, 255, 0.3)" strokeWidth="0.5" strokeDasharray="1 1" />
          </svg>
        </div>

        {/* Capability Pillars */}
        <div className="tech-pillars-grid">
          {TECH_PILLARS.map((pillar) => (
            <div key={pillar.id} className="tech-pillar-card" onMouseMove={handleCardMouseMove}>
              <div className="tech-pillar-card__spotlight" aria-hidden="true" />
              <div className="tech-pillar-card__top-beam" aria-hidden="true" />
              
              <h3 className="tech-pillar-title">{pillar.title}</h3>
              <ul className="tech-pillar-list">
                {pillar.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="tech-pillar-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
