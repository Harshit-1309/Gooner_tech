import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './FAQs.css';
import faqsBg from '../assets/ai_abstract_hero_bg.png';

const FAQ_DATA = [
  {
    question: "What does Gooner Technologies specialize in?",
    answer: "Gooner Technologies specializes in intelligent finance systems, focusing on Enterprise Performance Management (EPM), Business Intelligence (BI), and Artificial Intelligence (AI). We help organizations modernize their financial planning, reporting, and consolidation processes to improve efficiency and decision-making."
  },
  {
    question: "How do AI and Automation impact the financial close process?",
    answer: "AI and automation streamline the financial close by handling repetitive tasks like intercompany eliminations, currency translations, and journal entries. This reduces human error, drastically shortens the close cycle, and frees up your finance team to focus on strategic analysis rather than manual reconciliation."
  },
  {
    question: "Which Enterprise Performance Management (EPM) platforms do you support?",
    answer: "We support and implement leading enterprise platforms including Oracle Cloud EPM (PBCS, EPBCS, FCCS, ARCS, PCMCS, EDMCS), as well as integrating modern AI tools, automation scripts, and BI dashboards (like Tableau or PowerBI) to create a cohesive finance ecosystem tailored to your needs."
  },
  {
    question: "Do you offer managed services after implementation?",
    answer: "Yes, our Managed Services provide ongoing support, system optimization, and technical administration. We ensure your EPM and BI environments run smoothly, handle regular updates and patches, and continuously fine-tune the system as your business requirements evolve."
  },
  {
    question: "How long does a typical finance transformation project take?",
    answer: "Project timelines vary based on the scope and complexity of your existing systems. A standard EPM implementation typically takes between 12 to 24 weeks. We use agile methodologies to ensure rapid deployment of core capabilities, followed by iterative enhancements to deliver value quickly."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="app-container faqs-page">
      <Navbar />
      
      <div className="faqs-split-layout">
        {/* Left Side: Image */}
        <div className="faqs-image-col">
          <img 
            src={faqsBg} 
            alt="Abstract AI background" 
            className="faqs-side-image"
          />
          <div className="faqs-image-overlay"></div>
        </div>

        {/* Right Side: Content & FAQs */}
        <div className="faqs-content-col">
          <section className="faqs-hero">
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about our finance transformation solutions, technologies, and services.</p>
          </section>

          <section className="faqs-container">
            {FAQ_DATA.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'is-open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(index)} aria-expanded={openIndex === index}>
                  {faq.question}
                  <svg 
                    className="faq-icon" 
                    width="24" height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
