import { useState, useEffect, useRef, useCallback } from 'react';

const METRICS_DATA = [
  {
    id: 'm1',
    category: 'Implementations',
    numericTarget: 60,
    prefix: '',
    suffix: '+',
    label: 'Successful Implementations',
    sublabel: 'Delivered on-time & within budget across enterprises',
    isPrimary: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: 'm4',
    category: 'Velocity',
    numericTarget: 4,
    prefix: '',
    suffix: '×',
    label: 'Faster Planning Cycles',
    sublabel: 'Accelerate multi-entity forecast & budget cadence',
    isPrimary: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 'm6',
    category: 'Precision',
    numericTarget: 98,
    prefix: '',
    suffix: '%',
    label: 'Forecast Accuracy',
    sublabel: 'Driver-based variance tracking & automated audits',
    isPrimary: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: 'm3',
    category: 'Sector Depth',
    numericTarget: 16,
    prefix: '',
    suffix: '+',
    label: 'Industries Served',
    sublabel: 'SaaS, Healthcare, Financial Services, Retail & Mfg',
    isPrimary: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="6" x2="9.01" y2="6" />
        <line x1="15" y1="6" x2="15.01" y2="6" />
        <line x1="9" y1="10" x2="9.01" y2="10" />
        <line x1="15" y1="10" x2="15.01" y2="10" />
        <line x1="9" y1="14" x2="9.01" y2="14" />
        <line x1="15" y1="14" x2="15.01" y2="14" />
        <line x1="9" y1="18" x2="15" y2="18" />
      </svg>
    ),
  },
  {
    id: 'm2',
    category: 'Global Presence',
    isText: true,
    textDisplay: 'Global',
    regionTag: 'US • UK • India',
    label: 'Delivery Across US, UK & India',
    sublabel: 'Distributed round-the-clock advisory & support',
    isPrimary: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 'm5',
    category: 'Efficiency',
    numericTarget: 70,
    prefix: '',
    suffix: '%',
    label: 'Reduction in Manual Effort',
    sublabel: 'Eliminate spreadsheet overhead & manual sync',
    isPrimary: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function ProvenBusinessImpact() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    m1: 0,
    m3: 0,
    m4: 0,
    m5: 0,
    m6: 0,
  });

  // Intersection Observer for triggering smooth counter micro-animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCounters = () => {
    const duration = 1400;
    const startTime = performance.now();

    const targets = {
      m1: 60,
      m3: 16,
      m4: 4,
      m5: 70,
      m6: 98,
    };

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const updateFrame = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      setCounts({
        m1: Math.floor(easedProgress * targets.m1),
        m3: Math.floor(easedProgress * targets.m3),
        m4: Math.floor(easedProgress * targets.m4),
        m5: Math.floor(easedProgress * targets.m5),
        m6: Math.floor(easedProgress * targets.m6),
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
      id="proven-impact"
      ref={sectionRef}
      className="why-gooner-section pbi-section"
      style={{paddingTop: '0', paddingBottom: '60px'}}
      aria-label="Proven Business Impact"
    >
      <div className="why-container">
        {/* =========================================================
            TRANSITION DIVIDER
            ========================================================= */}
        <div className="why-divider" aria-hidden="true" style={{marginTop: '0'}}>
          <div className="why-divider__center-node">
            <span className="why-divider__label">PROVEN BUSINESS IMPACT</span>
          </div>
        </div>

        {/* =========================================================
            BLOCK TWO: MEASURABLE BUSINESS OUTCOMES (KPIs)
            ========================================================= */}
        <div className="why-block why-block--metrics">
          <div className="why-block-header why-block-header--centered">

            <h3 className="why-block-title">Delivering Measurable Business Outcomes</h3>
            <p className="why-block-subtitle">
              Every engagement is focused on improving operational efficiency, financial visibility, and decision-making.
            </p>
          </div>

          <div className="pbi-seamless-grid">
            {METRICS_DATA.map((metric) => {
              const displayVal = metric.isText
                ? metric.textDisplay
                : `${metric.prefix || ''}${counts[metric.id] ?? 0}${metric.suffix || ''}`;

              return (
                <div
                  key={metric.id}
                  className="pbi-seamless-card"
                >

                  {/* Header: Icon + Category Badge */}
                  <div className="why-metric-card__top">
                    <div className="why-metric-card__icon-box">
                      {metric.icon}
                    </div>
                    <div className="why-metric-card__badge-wrap">
                      <span className="why-metric-card__category">{metric.category}</span>
                      <span className="why-metric-card__indicator" />
                    </div>
                  </div>

                  {/* Value / Number */}
                  <div className="why-metric-card__value-wrap">
                    <span className="why-metric-card__value">{displayVal}</span>
                    {metric.regionTag && (
                      <span className="why-metric-card__region-pill">
                        {metric.regionTag}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="why-metric-card__content">
                    <h4 className="why-metric-card__label">{metric.label}</h4>
                    <p className="why-metric-card__sublabel">{metric.sublabel}</p>
                  </div>

                  {/* Subtle HUD Accent Line */}
                  <div className="why-metric-card__accent-bar" aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
