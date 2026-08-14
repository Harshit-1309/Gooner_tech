import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import productHeroBg from '../assets/product_hero_bg.png';
import './ContactUs.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <main className="app-container contact-page-wrapper">
      <section className="contact-hero" style={{ backgroundImage: `url(${productHeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar />
        <div className="contact-ambient-glow" aria-hidden="true" />
        <div className="contact-container">
          
          <div className="contact-header">
            <h1 className="contact-title">Let's build the future together</h1>
            <p className="contact-subtitle">
              Ready to transform your finance operations? Get in touch with our experts to discuss how Gooner Technologies can help you achieve your goals.
            </p>
          </div>

          <div className="contact-content-grid">
            
            {/* Left Column: Contact Info */}
            <div className="contact-info-panel">
              <div className="info-card" style={{ flexDirection: 'column', gap: '32px', justifyContent: 'center' }}>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h3 className="info-title">Email Us</h3>
                    <a href="mailto:contact@gooner-tech.com" className="info-link">contact@gooner-tech.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div className="info-icon" style={{ background: 'transparent', boxShadow: 'none' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#0077b5" style={{ width: '48px', height: '48px' }}>
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="info-title">Connect</h3>
                    <a href="https://www.linkedin.com/company/gooner-tech/" target="_blank" rel="noopener noreferrer" className="info-link">LinkedIn Page</a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Form */}
            <div className="contact-form-panel">
              <form onSubmit={handleSubmit} className="glass-form">
                <div className="form-row" style={{ marginBottom: '24px' }}>
                  {/* Left Column */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        placeholder="Jane Doe"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Work Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        placeholder="jane@company.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="form-group" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="message">How can we help you?</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required 
                        style={{ flexGrow: 1, resize: 'none' }}
                        placeholder="Tell us about your challenges or goals..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${isSubmitted ? 'success' : ''}`}
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <span className="btn-text">Sending...</span>
                  ) : isSubmitted ? (
                    <span className="btn-text">Message Sent ✓</span>
                  ) : (
                    <span className="btn-text">Send Message</span>
                  )}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
