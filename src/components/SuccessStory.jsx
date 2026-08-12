import { useState, useEffect, useRef, useCallback } from 'react';

export default function SuccessStory() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeTab, setActiveTab] = useState('revenue');
  const [counts, setCounts] = useState({
    speed: 0,
    accuracy: 0,
  });

  // Intersection observer for counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCounters = () => {
    const duration = 1500;
    const startTime = performance.now();
    const targets = { speed: 70, accuracy: 98 };
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const updateFrame = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setCounts({
        speed: Math.floor(easedProgress * targets.speed),
        accuracy: Math.floor(easedProgress * targets.accuracy),
      });

      if (progress < 1) {
        requestAnimationFrame(updateFrame);
      } else {
        setCounts(targets);
      }
    };

    requestAnimationFrame(updateFrame);
  };

  const handleCardMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  return (
    <section
      id="success-story"
      ref={sectionRef}
      className="success-story-section"
      aria-label="Featured Success Story"
    >
      {/* Ambient Lighting */}
      <div className="story-ambient-glow story-ambient-glow--top" aria-hidden="true" />
      <div className="story-ambient-glow story-ambient-glow--right" aria-hidden="true" />

      <div className="story-container">
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="story-header">
          <div className="story-eyebrow">
            <span>SUCCESS STORY</span>
          </div>
          <h2 className="story-title">Helping Finance Teams Transform Faster</h2>
          <p className="story-subtitle">
            See how organizations modernize planning, reporting, forecasting, and financial operations through our
            enterprise finance transformation solutions.
          </p>
        </div>

        {/* =========================================================
            FEATURED CASE STUDY: ENTERPRISE BENTO GRID
            ========================================================= */}
        <div className="story-bento-grid">
          
          {/* LEFT COLUMN: Narrative & Steps */}
          <div className="bento-col-left">
            {/* HERO METRIC CARD */}
            <div className="bento-card bento-card--hero" onMouseMove={handleCardMouseMove}>
              <div className="story-step-card__spotlight" aria-hidden="true" />
              <div className="bento-hero-content" style={{ display: 'block' }}>
                <div className="story-badge-row">
                  <span className="story-client-tag">Global Enterprise SaaS</span>
                  <span className="story-sol-tag">NetSuite Planning & Budgeting</span>
                </div>
                <h3 className="story-case-headline">
                  From Spreadsheet Gridlock to Real-Time Predictive Forecasts
                </h3>
                <p className="story-case-intro">
                  How a high-growth technology leader eliminated 3 weeks of manual planning latency and achieved continuous, multi-entity financial synchronization.
                </p>
              </div>
            </div>

            {/* 3-COLUMN NARRATIVE CARDS */}
            <div className="bento-trio-row">
              {/* Step 1: Challenge */}
              <div className="bento-card bento-card--step" onMouseMove={handleCardMouseMove}>
                <div className="story-step-card__spotlight" aria-hidden="true" />
                <div className="story-step-tag story-step-tag--challenge">01 • CHALLENGE</div>
                <h4 className="story-step-title">Spreadsheet Chaos</h4>
                <p className="story-step-desc">
                  A growing SaaS company struggled with manual budgeting, spreadsheet-based planning, and delayed executive forecasts.
                </p>
              </div>

              {/* Step 2: Solution */}
              <div className="bento-card bento-card--step" onMouseMove={handleCardMouseMove}>
                <div className="story-step-card__spotlight" aria-hidden="true" />
                <div className="story-step-tag story-step-tag--solution">02 • SOLUTION</div>
                <h4 className="story-step-title">Connected Planning</h4>
                <p className="story-step-desc">
                  Implemented NetSuite Planning & Budgeting with integrated revenue planning and automated reporting.
                </p>
              </div>

              {/* Step 3: Outcome */}
              <div className="bento-card bento-card--step" onMouseMove={handleCardMouseMove}>
                <div className="story-step-card__spotlight" aria-hidden="true" />
                <div className="story-step-tag story-step-tag--outcome">03 • OUTCOME</div>
                <h4 className="story-step-title">Real-Time Sync</h4>
                <ul className="story-outcome-bullets">
                  <li><span className="story-bullet-check">✓</span><span>Reduced planning cycle</span></li>
                  <li><span className="story-bullet-check">✓</span><span>Improved visibility</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Dashboard Mockup */}
          <div className="bento-col-right">
            <div className="bento-card bento-card--dashboard" onMouseMove={handleCardMouseMove}>
              <div className="story-step-card__spotlight" aria-hidden="true" />
              <div className="story-dashboard-container" onMouseMove={handleCardMouseMove}>
                <div className="story-dashboard-glow" aria-hidden="true" />
                <div className="story-dashboard-glass">
                  {/* Window Header */}
                  <div className="story-dashboard-header">
                    <div className="story-dashboard-dots">
                      <span className="story-dot story-dot--red" />
                      <span className="story-dot story-dot--yellow" />
                      <span className="story-dot story-dot--green" />
                    </div>
                    <div className="story-dashboard-title">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <line x1="3" y1="9" x2="21" y2="9" />
                        <line x1="9" y1="21" x2="9" y2="9" />
                      </svg>
                      <span>Executive Console</span>
                    </div>
                    <div className="story-dashboard-live">
                      <span className="story-live-pulse" />
                    </div>
                  </div>

                  {/* Tab Switcher */}
                  <div className="story-dash-tabs">
                    <button className="story-dash-tab active">Revenue</button>
                    <button className="story-dash-tab">OpEx</button>
                    <button className="story-dash-tab">Cash</button>
                  </div>

                  {/* Dashboard Metrics Bar */}
                  <div className="story-dash-kpis">
                    <div className="story-dash-kpi">
                      <span className="story-dash-kpi__lbl">ARR</span>
                      <span className="story-dash-kpi__val">$48.6M</span>
                      <span className="story-dash-kpi__change positive">+18% YoY</span>
                    </div>
                    <div className="story-dash-kpi">
                      <span className="story-dash-kpi__lbl">Accuracy</span>
                      <span className="story-dash-kpi__val">98.4%</span>
                      <span className="story-dash-kpi__change positive">+2% delta</span>
                    </div>
                  </div>

                  {/* Main Interactive Chart Area */}
                  <div className="story-dash-chart-card">
                    <div className="story-dash-chart-header">
                      <span className="story-dash-chart-title">Predictive Model</span>
                      <span className="story-dash-chart-badge">AI Calibrated</span>
                    </div>

                    {/* SVG Spline Area Chart */}
                    <div className="story-chart-wrapper">
                      <svg viewBox="0 0 350 250" className="story-chart-svg">
                        <defs>
                          <linearGradient id="chartGradBlue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#388eff" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#388eff" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="chartGradCyan" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Horizontal Grid lines */}
                        <line x1="0" y1="50" x2="350" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                        <line x1="0" y1="110" x2="350" y2="110" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                        <line x1="0" y1="170" x2="350" y2="170" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

                        {/* Area 1: Actuals */}
                        <path
                          d="M 10 190 Q 60 160 105 135 T 195 85 T 270 45 T 340 15 L 340 230 L 10 230 Z"
                          fill="url(#chartGradBlue)"
                        />

                        {/* Line 1: Actual Trend */}
                        <path
                          d="M 10 190 Q 60 160 105 135 T 195 85 T 270 45 T 340 15"
                          fill="none"
                          stroke="#388eff"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                        />

                        {/* Forecast Spline Line */}
                        <path
                          d="M 195 85 Q 240 55 285 35 T 340 5"
                          fill="none"
                          stroke="#93c5fd"
                          strokeWidth="2.4"
                          strokeDasharray="4 4"
                        />

                        {/* Live Data Points */}
                        <circle cx="105" cy="135" r="4.5" fill="#ffffff" stroke="#388eff" strokeWidth="2.5" />
                        <circle cx="195" cy="85" r="5" fill="#388eff" stroke="#ffffff" strokeWidth="2.5" />
                        <circle cx="270" cy="45" r="4.5" fill="#ffffff" stroke="#388eff" strokeWidth="2.5" />
                        <circle cx="340" cy="15" r="5.5" fill="#60a5fa" stroke="#ffffff" strokeWidth="2.5" className="story-chart-active-node" />
                      </svg>

                      {/* Chart Timeline Axis */}
                      <div className="story-chart-axis">
                        <span>Q1</span>
                        <span>Q2</span>
                        <span>Q3</span>
                        <span>Q4</span>
                        <span className="highlight">Q1+1</span>
                      </div>
                    </div>
                  </div>

                  {/* Multi-tier Automation Progress Indicator */}
                  <div className="story-dash-footer-card">
                    <div className="story-dash-progress-meta">
                      <span className="story-progress-title">GL Sync Progress</span>
                      <span className="story-progress-pct">88%</span>
                    </div>
                    <div className="story-dash-progress-track">
                      <div className="story-dash-progress-bar" style={{ width: '88%' }}>
                        <span className="story-progress-glow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            CALL TO ACTION
            ========================================================= */}
        <div className="story-cta-actions">
          <a href="#contact-us" className="story-btn story-btn--primary">
            <span>Schedule Consultation</span>
            <span className="story-btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href="#case-study" className="story-btn story-btn--secondary">
            <span>View Full Case Study</span>
            <span className="story-btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
