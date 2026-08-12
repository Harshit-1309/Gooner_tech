import { useState, useRef, useEffect } from 'react';

const PRODUCTS = [
  {
    id: 'nspb',
    title: 'NetSuite Planning & Budgeting (NSPB)',
    tagline: 'Precision Driver-Based Financial Forecasting',
    category: 'EPM & Planning',
    badge: 'Flagship Solution',
    description: 'Transform budgeting cycles from months into days. Integrate direct NetSuite ERP General Ledger feeds with multi-scenario predictive modeling.',
    metrics: [
      { label: 'Cycle Time Reduction', value: '70%' },
      { label: 'Forecast Accuracy', value: '99.4%' },
      { label: 'Deployment Time', value: '3-5 Wks' },
    ],
    features: [
      'Pre-built NetSuite data connectors & automated GL sync',
      'Driver-based revenue, COGS, and headcount modeling',
      'Rolling 12-to-24 month dynamic forecasts & what-if analysis',
      'Automated board & management reporting packs',
    ],
    ctaText: 'Request NSPB Assessment',
  },
  {
    id: 'epm',
    title: 'Enterprise Performance Management',
    tagline: 'Multi-Entity Financial Consolidation & Close',
    category: 'Consolidation & Close',
    badge: 'Enterprise Core',
    description: 'Unify complex global entity structures, currencies, intercompany eliminations, and GAAP/IFRS reporting in a single audited system.',
    metrics: [
      { label: 'Close Acceleration', value: '4× Faster' },
      { label: 'Entities Supported', value: '100+' },
      { label: 'Audit Trail', value: '100%' },
    ],
    features: [
      'Automated multi-currency conversion and translation',
      'Automated intercompany matching and elimination rules',
      'Financial statement generation with full drill-back to ERP transactions',
      'Role-based security, compliance, and SOX audit trails',
    ],
    ctaText: 'Explore EPM Architecture',
  },
  {
    id: 'bi',
    title: 'Executive BI & Interactive Analytics',
    tagline: 'Real-Time Financial Intelligence Dashboards',
    category: 'Analytics & BI',
    badge: 'Executive Suite',
    description: 'Empower CFOs, board members, and department heads with interactive, instant-refresh visual dashboards and deep operational metrics.',
    metrics: [
      { label: 'Data Refresh', value: 'Real-Time' },
      { label: 'Pre-built KPIs', value: '50+' },
      { label: 'User Adoption', value: '95%' },
    ],
    features: [
      'Executive dashboards covering EBITDA, cash burn, working capital & margin',
      'Self-service ad-hoc reporting for non-finance business leaders',
      'Automated scheduled report distribution via email and Slack/Teams',
      'Mobile-optimized financial analytics on iOS and Android',
    ],
    ctaText: 'View Dashboard Samples',
  },
  {
    id: 'ai',
    title: 'AI Smart Finance Automations',
    tagline: 'Autonomous AI Agents for Finance Teams',
    category: 'Artificial Intelligence',
    badge: 'Next-Gen AI',
    description: 'Deploy specialized AI agents for autonomous AP invoice capture, PO matching, intelligent account reconciliation, and variance anomaly detection.',
    metrics: [
      { label: 'Manual Touch Reduction', value: '85%' },
      { label: 'Processing Speed', value: '< 30s' },
      { label: 'Anomaly Detection', value: '24/7' },
    ],
    features: [
      'Autonomous invoice extraction with LLM optical understanding',
      'Intelligent 2-way and 3-way PO matching with tolerance controls',
      'Real-time automated bank and subledger reconciliations',
      'Proactive anomaly detection flagging budget variances and duplications',
    ],
    ctaText: 'Deploy AI Finance Agents',
  },
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const activeProduct = PRODUCTS[activeTab];

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
    <section
      id="products"
      ref={sectionRef}
      className="products-section"
      aria-label="Gooner Technology Products & Solutions"
    >
      <div className="products__ambient-glow" aria-hidden="true" />

      <div className="products__container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-eyebrow">
            <span className="section-eyebrow__dot" />
            INTELLIGENT FINANCE SUITE
          </div>
          <h2 className="section-title">Engineered for High-Growth & Enterprise Finance</h2>
          <p className="section-subtitle">
            From automated NetSuite planning and multi-entity consolidation to autonomous AI agents, our unified solutions eliminate financial friction.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`products__tabs-nav ${isVisible ? 'is-visible' : ''}`} role="tablist">
          {PRODUCTS.map((prod, idx) => (
            <button
              key={prod.id}
              role="tab"
              aria-selected={activeTab === idx}
              className={`products__tab-btn ${activeTab === idx ? 'is-active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="products__tab-badge">{prod.category}</span>
              <span className="products__tab-title">{prod.title}</span>
            </button>
          ))}
        </div>

        {/* Active Product Showcase Glass Card */}
        <div className={`products__showcase ${isVisible ? 'is-visible' : ''}`}>
          <div className="product-card">
            <div className="product-card__glow" aria-hidden="true" />

            <div className="product-card__content">
              {/* Left Column: Details */}
              <div className="product-card__left">
                <div className="product-card__header">
                  <span className="product-card__badge">{activeProduct.badge}</span>
                  <span className="product-card__category">{activeProduct.category}</span>
                </div>

                <h3 className="product-card__title">{activeProduct.title}</h3>
                <p className="product-card__tagline">{activeProduct.tagline}</p>
                <p className="product-card__desc">{activeProduct.description}</p>

                {/* Feature Checklist */}
                <div className="product-card__features">
                  <h4 className="product-card__features-heading">Core Capabilities:</h4>
                  <ul className="product-card__feature-list">
                    {activeProduct.features.map((feat, i) => (
                      <li key={i} className="product-card__feature-item">
                        <span className="feature-check-icon">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="product-card__actions">
                  <a
                    href="#contact-us"
                    className="t-cta t-cta--primary"
                    onClick={(e) => handleSmoothScroll(e, '#contact-us')}
                  >
                    <span className="t-cta__label">{activeProduct.ctaText}</span>
                    <span className="t-cta__arrow" aria-hidden="true">→</span>
                  </a>
                  <a
                    href="#services"
                    className="t-cta t-cta--secondary"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                  >
                    <span className="t-cta__label">Implementation Services</span>
                    <span className="t-cta__secondary-arrow" aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Performance Highlights & Metrics */}
              <div className="product-card__right">
                <div className="product-metrics-panel">
                  <div className="metrics-panel__header">
                    <span className="metrics-panel__indicator" />
                    <span>Measured Impact & ROI</span>
                  </div>

                  <div className="metrics-panel__grid">
                    {activeProduct.metrics.map((m, i) => (
                      <div key={i} className="metric-box">
                        <span className="metric-box__value">{m.value}</span>
                        <span className="metric-box__label">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="metrics-panel__badge-banner">
                    <span className="badge-banner__icon">🔒</span>
                    <span className="badge-banner__text">Enterprise SOC2 Type II Certified Integration Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
