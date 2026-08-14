import { useCallback, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './CaseStudiesSection.css';



const CASE_STUDIES = [
  {
    id: 'cs1',
    company: 'Immutep GmbH',
    title: 'NSPB Implementation & Process Optimization',
    subtitle: 'Building a Robust Planning & Budgeting Solution',
    industry: 'Life Sciences',
    challenge: 'The organization needed a robust planning and budgeting solution tailored to its business requirements, with improved processes and better support for decision-making.',
    solution: 'We implemented NSPB with a hands-on approach, providing proactive guidance, clear communication, and comprehensive training. Beyond the technical implementation, we worked closely with the team to optimize existing processes and ensure the solution aligned with their needs.',
    outcome: [
      'Robust planning and budgeting solution',
      'Improved process efficiency',
      'Better decision-making capabilities',
      'Comprehensive user training and knowledge transfer',
      'Strong foundation for continued business growth'
    ],
    quote: '“The team went beyond the technical implementation to optimize our processes, resulting in significant improvements in efficiency and decision-making.”',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'
  },
  {
    id: 'cs2',
    company: 'Quell Therapeutics',
    title: 'Rolling Forecasting & Reporting',
    subtitle: 'Delivering a Tailored Forecasting & Reporting Solution',
    industry: 'Life Sciences',
    challenge: 'The organization needed a forecasting and reporting solution that could accommodate its unique approach to forecasting and evolving business requirements.',
    solution: 'We quickly understood the business requirements and developed a tailored forecasting and reporting model. Throughout the implementation, the team remained flexible and responsive, adapting models and reports as requirements evolved.',
    outcome: [
      'Successful delivery within agreed project timelines',
      'Tailored rolling forecasting solution',
      'Improved reporting capabilities',
      'Flexible models aligned with business requirements',
      'Faster implementation of required changes'
    ],
    quote: '“The team quickly picked up our requirements and were able to provide a model solution to fit our needs. I was impressed by their flexibility and willingness to work through our requirements.”',
    gradient: 'linear-gradient(135deg, #075985 0%, #0ea5e9 100%)'
  },
  {
    id: 'cs3',
    company: 'ANE GmbH & Co. KG',
    title: 'NSPB & Revenue Planning Transformation',
    subtitle: 'Moving from Excel-Based Planning to a Scalable Digital Solution',
    industry: 'Renewable Energy',
    challenge: 'The organization’s Excel-based planning solution was experiencing performance issues. They needed a scalable, digital planning platform that could standardize processes, improve computing power, and connect directly with NetSuite.',
    solution: 'We implemented NSPB with NetSuite connectivity, including contract information, and developed a solution for complex revenue planning. The implementation also introduced standardized planning processes and enabled automated access to relevant data.',
    outcome: [
      'Standardized planning process',
      'Direct NetSuite connectivity',
      'Faster and more reliable calculations',
      'Actual-versus-budget analysis',
      'Monthly forecasting using the latest available data',
      'Improved support for complex revenue planning'
    ],
    quote: '“The team quickly got a good understanding of our business model and implemented our complex revenue planning. Response times were immediate and any problems were always solved quickly.”',
    gradient: 'linear-gradient(135deg, #3730a3 0%, #6366f1 100%)'
  }
];

export default function CaseStudiesSection() {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleCardMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const toggleExpand = (id) => {
    setExpandedCardId(id);
  };

  useEffect(() => {
    if (expandedCardId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expandedCardId]);

  const activeStudy = CASE_STUDIES.find(s => s.id === expandedCardId);

  return (
    <section className="casestudy-section" id="case-studies" aria-label="Case Studies">
      <div className="casestudy-ambient-glow casestudy-ambient-glow--top" aria-hidden="true" />
      <div className="casestudy-ambient-glow casestudy-ambient-glow--bottom" aria-hidden="true" />
      
      <div className="casestudy-container">
        <div className="testi-header">
          <div className="testi-eyebrow">
            <span>CASE STUDIES</span>
          </div>
          <h2 className="testi-title">Proven Success Stories</h2>
          <p className="testi-subtitle">
            See how organizations have overcome their business challenges and achieved remarkable outcomes with our tailored solutions.
          </p>
        </div>

        <div className="casestudy-grid casestudy-grid--extended">
          {CASE_STUDIES.map((study) => (
            <div 
              key={study.id} 
              className="casestudy-card casestudy-card--extended"
              onMouseMove={handleCardMouseMove}
            >
              <div className="casestudy-card__spotlight" aria-hidden="true" />
              
              <div className="casestudy-card__header">
                <span className="casestudy-industry-badge">{study.industry}</span>
                <h4 className="casestudy-title">{study.title}</h4>
                <p className="casestudy-subtitle">{study.subtitle}</p>
                <div className="casestudy-card__header-glow" aria-hidden="true" />
              </div>
              
                <div className="casestudy-card__body">
                  <div className="casestudy-block">
                    <h4 className="casestudy-block-title">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="casestudy-icon casestudy-icon-challenge"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                      The Challenge
                    </h4>
                    <p className="casestudy-block-text">{study.challenge}</p>
                  </div>
                  
                  <button 
                    className="casestudy-expand-btn"
                    onClick={() => toggleExpand(study.id)}
                  >
                    Read Full Case Study
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {activeStudy && createPortal(
        <div className="casestudy-modal-overlay" onClick={() => setExpandedCardId(null)}>
          <div className="casestudy-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="casestudy-modal-close" onClick={() => setExpandedCardId(null)} aria-label="Close modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div className="casestudy-modal-header">
              <span className="casestudy-industry-badge">{activeStudy.industry}</span>
              <h4 className="casestudy-title">{activeStudy.title}</h4>
              <p className="casestudy-subtitle">{activeStudy.subtitle}</p>
              <div className="casestudy-card__header-glow" aria-hidden="true" />
            </div>
            
            <div className="casestudy-modal-body">
              <div className="casestudy-modal-grid">
                <div className="casestudy-block">
                  <h4 className="casestudy-block-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="casestudy-icon casestudy-icon-challenge"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    The Challenge
                  </h4>
                  <p className="casestudy-block-text">{activeStudy.challenge}</p>
                </div>
                <div className="casestudy-block">
                  <h4 className="casestudy-block-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="casestudy-icon casestudy-icon-solution"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    Our Solution
                  </h4>
                  <p className="casestudy-block-text">{activeStudy.solution}</p>
                </div>
                <div className="casestudy-block">
                  <h4 className="casestudy-block-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="casestudy-icon casestudy-icon-outcome"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    The Outcome
                  </h4>
                  <ul className="casestudy-outcome-list">
                    {activeStudy.outcome.map((item, idx) => (
                      <li key={idx}><span className="casestudy-bullet">✓</span> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="casestudy-quote-block">
                <div className="casestudy-quote-icon">“</div>
                <p className="casestudy-quote-text">{activeStudy.quote}</p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
