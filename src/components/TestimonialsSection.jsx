import { useState, useEffect, useRef, useCallback } from 'react';

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
    quote: 'The Walpole Partnership team quickly understood our requirements and delivered a rolling forecasting and reporting solution tailored to our business. Their flexibility, responsiveness, and clear communication made the implementation a very positive experience.',
  },
  {
    id: 't3',
    name: 'Leif Hansen',
    role: 'Manager Controlling',
    company: 'ANE GmbH & Co. KG',
    avatarInitials: 'LH',
    avatarGradient: 'linear-gradient(135deg, #3b82f6, #1e40af)',
    rating: 5,
    quote: 'Walpole Partnership quickly understood our business and successfully implemented our complex revenue planning requirements. The team was highly responsive, solved issues quickly, and delivered a standardized planning process with strong NetSuite integration.',
  },
  {
    id: 't4',
    name: 'Finance Leader',
    role: 'Enterprise User',
    company: 'NSPB Customer',
    avatarInitials: 'NC',
    avatarGradient: 'linear-gradient(135deg, #4f46e5, #3730a3)',
    rating: 5,
    quote: 'Gooner Technologies provided a hands-on and highly responsive NSPB implementation. Their clear communication, flexibility, and proactive guidance ensured a smooth delivery, while the training and process improvements helped us maximize the value of the solution.',
  }
];

const TRUST_STATS = [
  {
    value: '98%',
    label: 'Client Satisfaction',
    desc: 'Independently audited enterprise partner feedback',
  },
  {
    value: '60+',
    label: 'Projects Delivered',
    desc: 'Across North America, UK, EMEA & APAC',
  },
  {
    value: '100%',
    label: 'Repeat & Retained Clients',
    desc: 'Long-term advisory, optimization & managed hypercare',
  },
];

export default function TestimonialsSection() {
  const [rotateY, setRotateY] = useState(0);
  const [cubeWidth, setCubeWidth] = useState(1200);
  const containerRef = useRef(null);

  // Measure width for perfectly square 3D faces
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setCubeWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize(); // initial measure
    
    // Add small delay on mount for font rendering stability
    setTimeout(handleResize, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRotateY((prev) => prev - 90);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleCardMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  // Determine active group (0 or 1) based on current rotation
  const activeGroup = (Math.abs(rotateY / 90) % 2) === 0 ? 0 : 1;

  const handleDotClick = (groupIndex) => {
    if (activeGroup === groupIndex) return;
    setRotateY((prev) => prev - 90);
  };

  const renderCardGroup = (groupIndex) => {
    const groupData = groupIndex === 0 ? TESTIMONIALS.slice(0, 2) : TESTIMONIALS.slice(2, 4);
    return (
      <div className="testi-grid">
        {groupData.map((item) => (
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
    );
  };

  return (
    <section
      id="testimonials"
      className="testimonials-section"
      aria-label="Client Testimonials"
    >
      <div className="testimonials-card-wrapper">
        <div className="testi-ambient-glow testi-ambient-glow--top" aria-hidden="true" />
        <div className="testi-ambient-glow testi-ambient-glow--bottom" aria-hidden="true" />

        <div className="testi-container" ref={containerRef} style={{ '--cube-width': `${cubeWidth}px` }}>
          
          <div className="testi-header">
            <div className="testi-eyebrow">
              <span>CLIENT TESTIMONIALS</span>
            </div>
            <h2 className="testi-title">Trusted by Finance Leaders</h2>
            <p className="testi-subtitle">
              Hear from organizations that have transformed their finance operations, planning cadence, and executive reporting with Gooner Technology.
            </p>
          </div>

          {/* 3D Cube Carousel */}
          <div className="cube-scene">
            <div 
              className="cube-container" 
              style={{ transform: `translateZ(calc(var(--cube-width) * -0.5)) rotateY(${rotateY}deg)` }}
            >
              <div className="cube-face cube-face-front">
                {renderCardGroup(0)}
              </div>
              <div className="cube-face cube-face-right">
                {renderCardGroup(1)}
              </div>
              <div className="cube-face cube-face-back">
                {renderCardGroup(0)}
              </div>
              <div className="cube-face cube-face-left">
                {renderCardGroup(1)}
              </div>
            </div>
          </div>

          <div className="testi-pagination" role="tablist">
            <button
              role="tab"
              aria-selected={activeGroup === 0}
              aria-label="Group 1"
              className={`testi-dot ${activeGroup === 0 ? 'is-active' : ''}`}
              onClick={() => handleDotClick(0)}
            />
            <button
              role="tab"
              aria-selected={activeGroup === 1}
              aria-label="Group 2"
              className={`testi-dot ${activeGroup === 1 ? 'is-active' : ''}`}
              onClick={() => handleDotClick(1)}
            />
          </div>


        </div>
      </div>
    </section>
  );
}
