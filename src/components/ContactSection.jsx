import { useState, useRef, useEffect } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    erp: 'NetSuite',
    solution: 'NSPB Assessment Demo',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      setFormError('Please fill in your name, business email, and company.');
      return;
    }

    // Basic email check
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setFormError('Please provide a valid work email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate brief asynchronous processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section
      id="contact-us"
      ref={sectionRef}
      className="contact-section"
      aria-label="Request Demo & Contact Us"
    >
      <div className="contact__ambient-glow" aria-hidden="true" />

      <div className="contact__container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-eyebrow">
            <span className="section-eyebrow__dot" />
            LET&apos;S TALK TRANSFORMATION
          </div>
          <h2 className="section-title">Request an NSPB Assessment Demo</h2>
          <p className="section-subtitle">
            Schedule a tailored walkthrough with our principal financial systems architects. We will demonstrate how your specific general ledger and forecasting workflows can be fully automated.
          </p>
        </div>

        <div className={`contact-wrapper ${isVisible ? 'is-visible' : ''}`}>
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="contact-info-panel">
            <div className="contact-info-card">
              <h3 className="contact-info__headline">Enterprise Advisory Guarantee</h3>
              <p className="contact-info__text">
                Every demo is conducted by senior finance transformation specialists — never scripted sales representatives.
              </p>

              <div className="contact-features-list">
                <div className="contact-feat">
                  <span className="contact-feat__icon">⚡</span>
                  <div>
                    <h4 className="contact-feat__title">Guaranteed 24-Hour Response</h4>
                    <p className="contact-feat__desc">Receive a personalized assessment plan within one business day.</p>
                  </div>
                </div>

                <div className="contact-feat">
                  <span className="contact-feat__icon">📊</span>
                  <div>
                    <h4 className="contact-feat__title">Complimentary ROI Model</h4>
                    <p className="contact-feat__desc">We calculate your team&apos;s exact spreadsheet labor savings upfront.</p>
                  </div>
                </div>

                <div className="contact-feat">
                  <span className="contact-feat__icon">🔒</span>
                  <div>
                    <h4 className="contact-feat__title">Strict NDA Protection</h4>
                    <p className="contact-feat__desc">All discussions and architecture analyses are 100% confidential.</p>
                  </div>
                </div>
              </div>

              <div className="contact-direct-details">
                <div className="detail-item">
                  <span className="detail-label">Direct Inquiries:</span>
                  <a href="mailto:contact@goonertech.com" className="detail-value">contact@goonertech.com</a>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Headquarters:</span>
                  <span className="detail-value">London • New York • Singapore</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success State */}
          <div className="contact-form-panel">
            {isSubmitted ? (
              <div className="contact-success-card">
                <div className="success-icon-wrap">✓</div>
                <h3 className="success-title">Assessment Request Received</h3>
                <p className="success-text">
                  Thank you, <strong>{formData.name}</strong>. A principal finance architect has received your details for <strong>{formData.company}</strong>. We will reach out within 24 business hours.
                </p>
                <button
                  type="button"
                  className="t-cta t-cta--secondary"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      erp: 'NetSuite',
                      solution: 'NSPB Assessment Demo',
                      message: '',
                    });
                  }}
                >
                  <span className="t-cta__label">Send Another Request</span>
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Work Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="s.jenkins@company.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Enterprises"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="erp" className="form-label">Primary ERP / GL</label>
                    <select
                      id="erp"
                      name="erp"
                      value={formData.erp}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="NetSuite">Oracle NetSuite</option>
                      <option value="Oracle Fusion">Oracle Cloud ERP / Fusion</option>
                      <option value="SAP">SAP S/4HANA / ECC</option>
                      <option value="Workday">Workday Financials</option>
                      <option value="Sage Intacct">Sage Intacct</option>
                      <option value="QuickBooks / Xero">QuickBooks / Xero / Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="solution" className="form-label">Solution Focus</label>
                  <select
                    id="solution"
                    name="solution"
                    value={formData.solution}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="NSPB Assessment Demo">NetSuite Planning & Budgeting (NSPB) Demo</option>
                    <option value="EPM Consolidation">Financial Consolidation & Close (EPM)</option>
                    <option value="BI Dashboards">Executive BI & Analytics Dashboards</option>
                    <option value="AI Automations">AI Finance Automations (AP / Reconciliations)</option>
                    <option value="Complete Overhaul">Comprehensive Finance Transformation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Project Details / Goals (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your current finance pain points, entities, or timeline..."
                    className="form-textarea"
                  />
                </div>

                {formError && (
                  <div className="form-error-banner" role="alert">
                    <span>⚠️ {formError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`t-cta t-cta--primary contact-submit-btn ${isSubmitting ? 'is-loading' : ''}`}
                >
                  <span className="t-cta__label">
                    {isSubmitting ? 'Scheduling Assessment...' : 'Submit Assessment Request'}
                  </span>
                  {!isSubmitting && <span className="t-cta__arrow" aria-hidden="true">→</span>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
