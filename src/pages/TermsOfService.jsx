import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';

export default function TermsOfService() {
  return (
    <main className="app-container">
      <Navbar />
      <div className="legal-page-wrapper">
        <article className="legal-page">
        <header className="legal-page__header">
          <h1 className="legal-page__title">Terms of Service</h1>
          <span className="legal-page__last-updated">Last Updated: 15th Aug 2026</span>
        </header>
        
        <div className="legal-page__content">
          <p>
            Welcome to Gooner Technologies. By accessing our website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h2>1. Intellectual Property Rights</h2>
          <p>
            Other than the content you own, under these Terms, Gooner Technologies and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
          </p>

          <h2>2. Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul>
            <li>Publishing any Website material in any other media without prior written consent.</li>
            <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
            <li>Using this Website in any way that is or may be damaging to this Website.</li>
            <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity.</li>
          </ul>

          <h2>3. No Warranties</h2>
          <p>
            This Website is provided "as is," with all faults, and Gooner Technologies express no representations or warranties, of any kind related to this Website or the materials contained on this Website.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            In no event shall Gooner Technologies, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website.
          </p>

          <h2>5. Governing Law & Jurisdiction</h2>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of the United Kingdom, and you submit to the non-exclusive jurisdiction of the state and federal courts located in London for the resolution of any disputes.
          </p>
        </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}
