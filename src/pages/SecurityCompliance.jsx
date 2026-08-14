import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';

export default function SecurityCompliance() {
  return (
    <main className="app-container">
      <Navbar />
      <div className="legal-page-wrapper">
        <article className="legal-page">
        <header className="legal-page__header">
          <h1 className="legal-page__title">Security & Compliance</h1>
          <span className="legal-page__last-updated">Last Updated: 15th Aug 2026</span>
        </header>
        
        <div className="legal-page__content">
          <p>
            At Gooner Technology, security and compliance are at the core of our enterprise FP&A solutions. We understand that financial data is highly sensitive, and we employ rigorous standards to ensure your data remains protected at all times.
          </p>

          <h2>1. Data Encryption & Storage</h2>
          <p>
            All data processed by Gooner Technology is encrypted both in transit and at rest.
          </p>
          <ul>
            <li><strong>In Transit:</strong> We use TLS 1.3 to encrypt all network communications between our clients and our infrastructure.</li>
            <li><strong>At Rest:</strong> Data is encrypted using AES-256 standard encryption on all our databases and storage volumes.</li>
          </ul>

          <h2>2. Certifications & Compliance</h2>
          <p>
            Our systems and processes are audited continuously to maintain enterprise-grade compliance.
          </p>
          <ul>
            <li><strong>SOC 2 Type II:</strong> We maintain strict adherence to SOC 2 principles of Security, Availability, and Confidentiality.</li>
            <li><strong>GDPR & CCPA:</strong> We are fully compliant with global data privacy regulations, ensuring individuals retain control over their personal data.</li>
            <li><strong>ISO 27001:</strong> Our information security management systems adhere to international standards.</li>
          </ul>

          <h2>3. Access Control & Authentication</h2>
          <p>
            We implement least-privilege access models and robust authentication mechanisms.
          </p>
          <ul>
            <li>Mandatory Multi-Factor Authentication (MFA) for all administrative and user access.</li>
            <li>Role-Based Access Control (RBAC) to ensure users only access the data required for their specific function.</li>
            <li>Comprehensive audit logging and real-time monitoring of all system access.</li>
          </ul>

          <h2>4. Vulnerability Management</h2>
          <p>
            We run continuous automated vulnerability scans on our infrastructure and conduct regular manual penetration tests by certified independent third parties to identify and resolve potential security risks proactively.
          </p>

          <h2>5. Contact Our Security Team</h2>
          <p>
            If you have specific compliance requirements or wish to request our latest SOC 2 report, please reach out to our security team at: <a href="mailto:security@goonertech.com">security@goonertech.com</a>.
          </p>
        </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}
