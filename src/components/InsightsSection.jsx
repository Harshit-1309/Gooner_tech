import { useState, useCallback } from 'react';

const INSIGHTS_DATA = [
  {
    id: 'in-1',
    category: 'Whitepapers',
    badge: 'Executive Whitepaper',
    readTime: '12 min guide',
    title: 'The 2026 CFO Playbook: Modernizing FP&A with NetSuite Planning & AI',
    description:
      'A comprehensive guide for finance executives on migrating from static spreadsheets to automated, driver-based multi-currency financial models.',
    date: 'August 2026',
    graphicType: 'chart',
    accentColor: '#388eff',
  },
  {
    id: 'in-2',
    category: 'Blogs',
    badge: 'Implementation Guide',
    readTime: '6 min read',
    title: '5 Costly Pitfalls in Enterprise Oracle EPM Implementations (And How to Avoid Them)',
    description:
      'Lessons learned from 60+ enterprise deployments on data integration, chart-of-accounts mapping, and continuous stakeholder adoption.',
    date: 'July 2026',
    graphicType: 'architecture',
    accentColor: '#60a5fa',
  },
  {
    id: 'in-3',
    category: 'News',
    badge: 'AI & Automation',
    readTime: '4 min read',
    title: 'Autonomous Close: How AI-Driven Reconciliations Save 40+ Hours Every Quarter',
    description:
      'Explore how automated variance detection and smart reconciliation algorithms eliminate manual journal entry audits across subsidiaries.',
    date: 'June 2026',
    graphicType: 'ai',
    accentColor: '#0284c7',
  },
  {
    id: 'in-4',
    category: 'Videos',
    badge: 'Video Case Study',
    readTime: '15 min watch',
    title: 'Architecting Real-Time Multi-Entity Consolidation for Fast-Growing SaaS',
    description:
      'Technical briefing on global currency translation, automated intercompany eliminations, and live board dashboard synchronization.',
    date: 'May 2026',
    graphicType: 'video',
    accentColor: '#3b82f6',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Resources' },
  { id: 'Blogs', label: 'Blogs' },
  { id: 'Whitepapers', label: 'Whitepapers' },
  { id: 'Videos', label: 'Videos' },
  { id: 'News', label: 'News & AI' },
];

export default function InsightsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredInsights = selectedCategory === 'all'
    ? INSIGHTS_DATA
    : INSIGHTS_DATA.filter((item) => item.category === selectedCategory);

  const handleCardMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const renderCardGraphic = (type) => {
    switch (type) {
      case 'chart':
        return (
          <div className="insight-visual insight-visual--chart">
            <svg viewBox="0 0 280 120" className="insight-svg">
              <path d="M 10 100 Q 70 80 130 50 T 210 30 T 270 15 L 270 115 L 10 115 Z" fill="rgba(56,142,255,0.15)" />
              <path d="M 10 100 Q 70 80 130 50 T 210 30 T 270 15" fill="none" stroke="#388eff" strokeWidth="2.5" />
              <circle cx="130" cy="50" r="4" fill="#60a5fa" />
              <circle cx="210" cy="30" r="4" fill="#388eff" />
              <circle cx="270" cy="15" r="5" fill="#93c5fd" />
            </svg>
            <div className="insight-badge-over">NSPB Strategy</div>
          </div>
        );
      case 'architecture':
        return (
          <div className="insight-visual insight-visual--arch">
            <svg viewBox="0 0 280 120" className="insight-svg">
              <rect x="20" y="30" width="60" height="60" rx="8" fill="rgba(56,142,255,0.12)" stroke="rgba(56,142,255,0.3)" />
              <line x1="80" y1="60" x2="110" y2="60" stroke="#388eff" strokeWidth="2" strokeDasharray="3 3" />
              <rect x="110" y="20" width="70" height="80" rx="10" fill="rgba(56,142,255,0.22)" stroke="#388eff" strokeWidth="1.5" />
              <line x1="180" y1="60" x2="210" y2="60" stroke="#388eff" strokeWidth="2" strokeDasharray="3 3" />
              <rect x="210" y="30" width="55" height="60" rx="8" fill="rgba(56,142,255,0.12)" stroke="rgba(56,142,255,0.3)" />
            </svg>
            <div className="insight-badge-over">EPM Architecture</div>
          </div>
        );
      case 'ai':
        return (
          <div className="insight-visual insight-visual--ai">
            <svg viewBox="0 0 280 120" className="insight-svg">
              <circle cx="140" cy="60" r="34" fill="rgba(56,142,255,0.15)" stroke="#388eff" strokeWidth="1.5" />
              <circle cx="140" cy="60" r="18" fill="rgba(96,165,250,0.25)" stroke="#60a5fa" strokeWidth="1.5" />
              <path d="M 80 60 L 106 60 M 174 60 L 200 60 M 140 26 L 140 42 M 140 78 L 140 94" stroke="#60a5fa" strokeWidth="2" />
            </svg>
            <div className="insight-badge-over">AI Automation</div>
          </div>
        );
      case 'video':
      default:
        return (
          <div className="insight-visual insight-visual--video">
            <div className="insight-play-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <div className="insight-badge-over">Video Briefing</div>
          </div>
        );
    }
  };

  return (
    <section
      id="insights"
      className="insights-section"
      aria-label="Insights and Resources"
    >
      {/* Background Ambient Glows */}
      <div className="insights-ambient-glow insights-ambient-glow--top" aria-hidden="true" />
      <div className="insights-ambient-glow insights-ambient-glow--bottom" aria-hidden="true" />

      <div className="insights-container">
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="insights-header">
          <div className="insights-eyebrow">
            <span className="insights-eyebrow__dot" />
            <span>INSIGHTS & RESOURCES</span>
          </div>
          <h2 className="insights-title">Latest Insights on Finance Transformation</h2>
          <p className="insights-subtitle">
            Stay informed with expert articles, implementation guides, AI innovations, Oracle EPM updates, and finance best practices.
          </p>
        </div>

        {/* =========================================================
            FILTER TABS
            ========================================================= */}
        <div className="insights-filter-tabs" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCategory === cat.id}
              className={`insights-tab ${selectedCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* =========================================================
            FEATURED + 3-CARD INSIGHTS GRID
            ========================================================= */}
        <div className="insights-grid">
          {filteredInsights.length > 0 && (
            <article
              key={filteredInsights[0].id}
              className="insight-card insight-card--featured"
              onMouseMove={handleCardMouseMove}
            >
              <div className="insight-card__spotlight" aria-hidden="true" />
              <div className="insight-card__top-beam" aria-hidden="true" />

              <div className="insight-card__media">
                {renderCardGraphic(filteredInsights[0].graphicType)}
              </div>

              <div className="insight-card__body">
                <div className="insight-meta-row">
                  <span className="insight-badge">{filteredInsights[0].badge}</span>
                  <span className="insight-read-time">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" className="insight-clock-icon">
                      <circle cx="8" cy="8" r="6.5" />
                      <polyline points="8 4 8 8 10.5 9.5" />
                    </svg>
                    {filteredInsights[0].readTime}
                  </span>
                </div>

                <h3 className="insight-card__title">{filteredInsights[0].title}</h3>
                <p className="insight-card__desc">{filteredInsights[0].description}</p>
                
                <div className="insight-card__footer">
                  <span className="insight-date">{filteredInsights[0].date}</span>
                  <a href="#contact-us" className="insight-read-link">
                    <span>Read Article</span>
                    <svg className="insight-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="2" y1="8" x2="14" y2="8" />
                      <polyline points="9 3 14 8 9 13" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          )}

          <div className="insights-supporting-grid">
            {filteredInsights.slice(1).map((item) => (
              <article
                key={item.id}
                className="insight-card insight-card--supporting"
                onMouseMove={handleCardMouseMove}
              >
                <div className="insight-card__spotlight" aria-hidden="true" />
                <div className="insight-card__top-beam" aria-hidden="true" />

                <div className="insight-card__body">
                  <div className="insight-meta-row">
                    <span className="insight-badge">{item.badge}</span>
                    <span className="insight-read-time">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" className="insight-clock-icon">
                        <circle cx="8" cy="8" r="6.5" />
                        <polyline points="8 4 8 8 10.5 9.5" />
                      </svg>
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="insight-card__title">{item.title}</h3>
                  <p className="insight-card__desc">{item.description}</p>
                </div>

                <div className="insight-card__footer">
                  <span className="insight-date">{item.date}</span>
                  <a href="#contact-us" className="insight-read-link">
                    <span>Read Article</span>
                    <svg className="insight-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="2" y1="8" x2="14" y2="8" />
                      <polyline points="9 3 14 8 9 13" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =========================================================
            BOTTOM ACTION
            ========================================================= */}
        <div className="insights-bottom-action">
          <a href="#contact-us" className="insights-center-btn">
            <span>Explore Knowledge Center</span>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="2" y1="8" x2="14" y2="8" />
              <polyline points="9 3 14 8 9 13" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
