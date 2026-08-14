export default function FinalCTA() {
  return (
    <section className="final-cta-section" aria-label="Call to Action">
      <div className="final-cta-ambient-glow" aria-hidden="true" />
      
      <div className="final-cta-container">
        <div className="final-cta-content">
          <h2 className="final-cta-headline">Ready to transform your planning and reporting?</h2>
          
          <div className="final-cta-actions" style={{ marginTop: '2rem', justifyContent: 'center' }}>
            <a href="#contact-us" className="final-cta-btn final-cta-btn--primary">
              <span>Talk to our experts</span>
              <span className="final-cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
