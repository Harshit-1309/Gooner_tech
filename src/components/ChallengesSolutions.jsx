import { useState, useCallback } from 'react';

const PAIRS_DATA = [
  {
    id: 0,
    challenge: {
      tag: 'Planning',
      title: 'Budgeting Takes Too Long',
      description: 'Annual planning cycles stretch into weeks due to disconnected spreadsheets and manual data consolidation.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    solution: {
      tag: 'NetSuite',
      title: 'Financial Planning & Budgeting',
      description: 'Create faster, dynamic budgets and driver-based rolling forecasts using unified connected planning models.',
      outcome: 'Reduce planning cycles',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      ),
    },
  },
  {
    id: 1,
    challenge: {
      tag: 'Forecasting',
      title: 'Forecasts Become Outdated Fast',
      description: 'Static quarterly models fail to keep pace with rapid market shifts and live business performance changes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
    solution: {
      tag: 'Analytics',
      title: 'Analytics & Executive Dashboards',
      description: 'Deliver real-time C-suite insights with automated variance tracking, trend alerts, and interactive KPI drill-downs.',
      outcome: 'Enable real-time reporting',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M6 10l3-3 3 3 5-5" />
        </svg>
      ),
    },
  },
  {
    id: 2,
    challenge: {
      tag: 'Manual Process',
      title: 'Manual Invoice & AP Processing',
      description: 'Slow approval routing and repetitive manual entry delay vendor payments and inflate administrative costs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    solution: {
      tag: 'Automation',
      title: 'Procure-to-Pay Automation',
      description: 'Automate invoice ingestion, 3-way PO matching, smart approval workflows, and direct ERP posting.',
      outcome: 'Reduce manual effort',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
  },
  {
    id: 3,
    challenge: {
      tag: 'Data Silos',
      title: 'Disconnected Financial Systems',
      description: 'Critical numbers are fragmented across multiple ERPs, spreadsheets, and banking portals without sync.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
    solution: {
      tag: 'AI Powered',
      title: 'AI-Powered Finance Automation',
      description: 'Deploy autonomous agents to synchronize ledgers, detect spend anomalies, and continuously reconcile accounts.',
      outcome: 'Improve forecast visibility',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
  },
  {
    id: 4,
    challenge: {
      tag: 'Reporting',
      title: 'Slow Financial Reporting Cycles',
      description: 'Finance teams spend excessive hours compiling statements instead of delivering strategic executive analysis.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    solution: {
      tag: 'Integrated',
      title: 'Automated Account Reconciliation',
      description: 'Ensure audit-ready financial accuracy with rule-based auto-matching and automated balance sheet verification.',
      outcome: 'Strengthen compliance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  },
  {
    id: 5,
    challenge: {
      tag: 'Compliance',
      title: 'Complex Month-End Close',
      description: 'Manual journal entries, intercompany eliminations, and currency conversions delay month-end signoffs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="m9 16 2 2 4-4" />
        </svg>
      ),
    },
    solution: {
      tag: 'Oracle EPM',
      title: 'Financial Close & Consolidation',
      description: 'Unify multi-entity legal structures, automate intercompany eliminations, and speed up audited close.',
      outcome: 'Accelerate financial close',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
    },
  },
];

export default function ChallengesSolutions() {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section
      id="challenges"
      className="challenges-solutions-section"
      aria-label="Business Challenges and How We Solve Them"
    >
      {/* Background ambient lighting */}
      <div className="cs-ambient-glow cs-ambient-glow--left" aria-hidden="true" />
      <div className="cs-ambient-glow cs-ambient-glow--right" aria-hidden="true" />

      <div className="cs-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <div className="why-divider__center-node">
          <span>CHALLENGES AND SOLUTIONS</span>
        </div>
      </div>

      <div className="cs-container cs-container--grid">
        {/* Left Side: Section Paragraph */}
        <div className="cs-header-wrapper">
          <div className="cs-header is-visible">
            <h2 className="why-block-title" style={{ marginBottom: '20px' }}>
              Business Challenges We Solve
            </h2>
            <p className="why-block-subtitle" style={{ marginTop: 0, textAlign: 'left' }}>
              Modern finance leaders should spend less time managing spreadsheets and manual processes, and more time
              driving strategic growth. We eliminate operational bottlenecks through intelligent finance transformation.
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="cs-accordion-list is-visible" style={{ width: '100%', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          {PAIRS_DATA.map((pair) => {
            const isActive = activeId === pair.id;

            return (
              <div
                key={pair.id}
                className={`cs-accordion-item ${isActive ? 'is-active' : ''}`}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
                  transition: 'background-color 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleAccordion(pair.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '24px 20px',
                    background: 'none',
                    border: 'none',
                    color: isActive ? '#d4af37' : 'rgba(255, 255, 255, 0.9)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                    transition: 'color 0.3s ease'
                  }}
                  aria-expanded={isActive}
                >
                  <span style={{ marginRight: '16px', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                    {isActive ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </span>
                  <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{pair.challenge.title}</span>
                </button>
                
                {/* Expandable Content */}
                <div
                  style={{
                    maxHeight: isActive ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, opacity 0.4s ease',
                    opacity: isActive ? 1 : 0
                  }}
                >
                  <div style={{ padding: '0 20px 24px 56px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    <p style={{ marginBottom: '16px' }}>{pair.challenge.description}</p>
                    <div style={{ padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
                      <h4 style={{ color: '#d4af37', marginBottom: '8px', fontSize: '1rem', fontWeight: '600' }}>Solution: {pair.solution.title}</h4>
                      <p style={{ margin: 0 }}>{pair.solution.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

