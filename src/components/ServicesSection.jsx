import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    step: '01',
    title: 'Financial Systems Architecture & Advisory',
    subtitle: 'Strategic roadmap, ERP data mapping & requirement analysis',
    description: 'We audit your existing spreadsheet workflows, general ledgers, and reporting bottlenecks to architect an EPM and BI blueprint tailored to your growth trajectory.',
    tags: ['Architecture Review', 'COA Harmonization', 'Integration Blueprints'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Rapid EPM & NSPB Implementation',
    subtitle: 'Agile 3-5 week deployments with zero business interruption',
    description: 'Our certified finance architects deliver complete NetSuite Planning and Budgeting (NSPB) and Oracle EPM configurations with live GL sync, customized calculation scripts, and tailored user roles.',
    tags: ['NSPB Setup', 'Driver Models', 'UAT & Training'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Custom ERP, CRM & BI Integrations',
    subtitle: 'Seamless two-way data pipelines across enterprise stacks',
    description: 'Connect NetSuite, Salesforce, Workday, SAP, Snowflake, PowerBI, and Tableau into a single consolidated source of financial truth with automated error handling and validation.',
    tags: ['API Pipelines', 'ETL & Data Warehousing', 'BI Connector Setup'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    step: '04',
    title: '24/7 Global Managed Services & Optimization',
    subtitle: 'Proactive support, model tuning & continuous innovation',
    description: 'Keep your finance systems running at peak velocity. Dedicated systems engineers provide round-the-clock incident resolution, model enhancements, and quarterly upgrade validations.',
    tags: ['24/7 Support Desk', 'Performance Tuning', 'Quarterly Enhancements'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="services-section"
      aria-label="Enterprise Services"
    >
      <div className="services__ambient-glow" aria-hidden="true" />

      <div className="services__container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-eyebrow">
            <span className="section-eyebrow__dot" />
            END-TO-END DELIVERY
          </div>
          <h2 className="section-title">Comprehensive Finance Transformation Services</h2>
          <p className="section-subtitle">
            We partner with CFOs and finance leaders to plan, implement, and maintain mission-critical enterprise systems that scale effortlessly.
          </p>
        </div>

        {/* Consulting Services Subsection */}
        <div id="consulting-services" className="services__group" style={{ scrollMarginTop: '120px', marginBottom: '80px' }}>
          <h3 className="services__group-title">Consulting Services</h3>
          <div className={`services-grid consulting-services-grid ${isVisible ? 'is-visible' : ''}`}>
            {SERVICES.slice(0, 3).map((srv, idx) => (
              <Link
                to="/services/consulting"
                key={srv.step}
                className="service-card"
                style={{ animationDelay: `${idx * 100}ms`, textDecoration: 'none' }}
              >
                <div className="service-card__glow" aria-hidden="true" />

                <div className="service-card__top">
                  <div className="service-card__icon-wrap">{srv.icon}</div>
                  <span className="service-card__step">{srv.step}</span>
                </div>

                <div className="service-card__body">
                  <h3 className="service-card__title">{srv.title}</h3>
                  <p className="service-card__subtitle">{srv.subtitle}</p>
                  <p className="service-card__desc">{srv.description}</p>
                </div>

                <div className="service-card__tags">
                  {srv.tags.map((tag) => (
                    <span key={tag} className="service-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Managed Services Subsection */}
        <div id="managed-services" className="services__group" style={{ scrollMarginTop: '120px' }}>
          <h3 className="services__group-title">Managed Services</h3>
          <div className={`services-grid managed-services-grid ${isVisible ? 'is-visible' : ''}`}>
            {SERVICES.slice(3, 4).map((srv, idx) => (
              <Link
                to="/services/managed"
                key={srv.step}
                className="service-card"
                style={{ animationDelay: `${(idx + 3) * 100}ms`, textDecoration: 'none' }}
              >
                <div className="service-card__glow" aria-hidden="true" />

                <div className="service-card__top">
                  <div className="service-card__icon-wrap">{srv.icon}</div>
                  <span className="service-card__step">{srv.step}</span>
                </div>

                <div className="service-card__body">
                  <h3 className="service-card__title">{srv.title}</h3>
                  <p className="service-card__subtitle">{srv.subtitle}</p>
                  <p className="service-card__desc">{srv.description}</p>
                </div>

                <div className="service-card__tags">
                  {srv.tags.map((tag) => (
                    <span key={tag} className="service-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
