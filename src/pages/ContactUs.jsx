import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WaveCanvas from '../components/WaveCanvas';
import './ContactUs.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
        firstName: '',
        lastName: '',
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
      <section className="contact-hero">
        <WaveCanvas />
        <Navbar />
        <div className="contact-ambient-glow" aria-hidden="true" />
        <div className="contact-container">
          
          <div className="contact-header">
            <h1 className="contact-title">Let's build the future together</h1>
            <p className="contact-subtitle">
              Ready to transform your finance operations? Get in touch with our experts to discuss how Gooner Technology can help you achieve your goals.
            </p>
          </div>

          <div className="contact-content-grid">
            
            {/* Left Column: Contact Info */}
            <div className="contact-info-panel">
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h3 className="info-title">Email Us</h3>
                  <a href="mailto:contact@goonertech.com" className="info-link">contact@goonertech.com</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h3 className="info-title">Call Us</h3>
                  <a href="tel:+18001234567" className="info-link">+1 (800) 123-4567</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h3 className="info-title">Visit Us</h3>
                  <p className="info-text">
                    123 Innovation Drive<br/>
                    Tech District, Suite 500<br/>
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="contact-form-panel">
              <form onSubmit={handleSubmit} className="glass-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required 
                      placeholder="Jane"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required 
                      placeholder="Doe"
                    />
                  </div>
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

                <div className="form-group">
                  <label htmlFor="message">How can we help you?</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    rows="4" 
                    placeholder="Tell us about your challenges or goals..."
                  ></textarea>
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
