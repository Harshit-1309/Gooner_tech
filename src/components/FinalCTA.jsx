export default function FinalCTA() {
  return (
    <section className="final-cta-section" aria-label="Call to Action">
      <div className="final-cta-ambient-glow" aria-hidden="true" />
      
      <div className="final-cta-container">
        <div className="final-cta-content">
          <h2 className="final-cta-headline">Ready to Transform Your Finance Function?</h2>
          <p className="final-cta-text">
            From planning and forecasting to AI-powered automation, let's build a smarter, more connected finance operation.
          </p>
          
          <div className="final-cta-actions">
            <a href="#contact-us" className="final-cta-btn final-cta-btn--primary">
              <span>Schedule a Consultation</span>
              <span className="final-cta-arrow" aria-hidden="true">→</span>
            </a>
            <a href="#solutions" className="final-cta-btn final-cta-btn--secondary">
              <span>Explore Solutions</span>
              <span className="final-cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
