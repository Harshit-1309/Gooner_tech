import { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

const TESTIMONIALS = [
  {
    id: 't1',
    name: 'David Fang',
    role: 'Finance Director & Assistant Company Secretary',
    company: 'Immutep GmbH',
    avatarInitials: 'DF',
    avatarGradient: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    rating: 5,
    quote: 'Gooner Technologies delivered an excellent NSPB implementation experience. The team understood our requirements, provided proactive guidance and comprehensive training, and went beyond the technical implementation to optimize our processes. Their support has helped us improve efficiency and make smarter decisions.',
  },
  {
    id: 't2',
    name: 'Mark Fox',
    role: 'Finance Director',
    company: 'Quell Therapeutics Ltd',
    avatarInitials: 'MF',
    avatarGradient: 'linear-gradient(135deg, #0284c7, #0369a1)',
    rating: 5,
    quote: 'The team quickly understood our requirements and delivered a rolling forecasting and reporting solution tailored to our business. Their flexibility, responsiveness, and clear communication made the implementation a very positive experience.',
  },
  {
    id: 't3',
    name: 'Leif Hansen',
    role: 'Manager Controlling',
    company: 'ANE GmbH & Co. KG',
    avatarInitials: 'LH',
    avatarGradient: 'linear-gradient(135deg, #3b82f6, #1e40af)',
    rating: 5,
    quote: 'The team quickly understood our business and successfully implemented our complex revenue planning requirements. The team was highly responsive, solved issues quickly, and delivered a standardized planning process with strong NetSuite integration.',
  }
];

export default function TestimonialsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Scroll by 1 card width roughly, or full container width
      const scrollAmount = direction === 'left' ? -(clientWidth / 2) : (clientWidth / 2);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
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
      id="testimonials"
      className="testimonials-section"
      aria-label="Client Testimonials"
    >
      <div className="testimonials-card-wrapper">
        <div className="testi-ambient-glow testi-ambient-glow--top" aria-hidden="true" />
        <div className="testi-ambient-glow testi-ambient-glow--bottom" aria-hidden="true" />

        <div className="testi-container">
          <div className="testi-header">
            <div className="testi-eyebrow">
              <span>CLIENT TESTIMONIALS</span>
            </div>
            <h2 className="testi-title">Trusted by Finance Leaders</h2>
            <p className="testi-subtitle">
              Hear from organizations that have transformed their finance operations, planning cadence, and executive reporting with Gooner Technologies.
            </p>
          </div>

          <div className="carousel-wrapper">
            <button 
              onClick={() => scroll('left')} 
              className="carousel-btn left-btn"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="testi-grid" ref={scrollRef}>
              {TESTIMONIALS.map((item) => (
                <div
                  key={item.id}
                  className="testi-card"
                  onMouseMove={handleCardMouseMove}
                >
                  <div className="testi-card__spotlight" aria-hidden="true" />
                  <div className="testi-card__top-beam" aria-hidden="true" />

                  <div className="testi-card__header">
                    <div className="testi-stars" aria-label="5 out of 5 stars">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} className="testi-star" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="testi-quote-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  <div className="testi-card__body">
                    <p className="testi-quote-text">&ldquo;{item.quote}&rdquo;</p>
                  </div>

                  <div className="testi-card__footer">
                    <div className="testi-avatar" style={{ background: item.avatarGradient }}>
                      <span>{item.avatarInitials}</span>
                      <span className="testi-avatar-badge" title="Verified Enterprise Client">✓</span>
                    </div>
                    <div className="testi-profile-info">
                      <h4 className="testi-client-name">{item.name}</h4>
                      <p className="testi-client-role">{item.role}</p>
                      <p className="testi-client-company">{item.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scroll('right')} 
              className="carousel-btn right-btn"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '100px', paddingBottom: '40px' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: '#f8fafc', fontWeight: '800', marginBottom: '32px', letterSpacing: '-0.02em' }}>
          Ready to transform your planning and reporting?
        </h2>
        <Link to="/contact-us" className="testimonials-cta-btn" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          background: 'linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)', 
          color: '#ffffff', 
          padding: '14px 32px', 
          borderRadius: '100px', 
          fontWeight: '600', 
          textDecoration: 'none',
          fontSize: '1.1rem',
          boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
          transition: 'all 0.3s ease'
        }}>
          Talk to our experts
          <span aria-hidden="true" style={{ transition: 'transform 0.3s ease' }}>→</span>
        </Link>
      </div>
    </section>
  );
}
