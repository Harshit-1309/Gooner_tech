import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';

export default function PrivacyPolicy() {
  return (
    <main className="app-container">
      <Navbar />
      <div className="legal-page-wrapper">
        <article className="legal-page">
        <header className="legal-page__header">
          <h1 className="legal-page__title">Privacy Policy</h1>
          <span className="legal-page__last-updated">Last Updated: 15th Aug 2026</span>
        </header>
        
        <div className="legal-page__content">
          <p>
            At Gooner Technology ("we", "our", or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our enterprise financial planning solutions.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, corporate email address, and company name that you voluntarily give to us when requesting an assessment or subscribing to our insights.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, and your access times.</li>
          </ul>

          <h2>2. Use of Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:</p>
          <ul>
            <li>Deliver targeted insights, enterprise FP&A benchmarks, and other information regarding our solutions.</li>
            <li>Respond to your requests for assessments and consultation.</li>
            <li>Analyze usage and trends to improve our website experience.</li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>
            We adhere to strict confidentiality agreements. We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates.
          </p>

          <h2>4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:contact@goonertech.com">contact@goonertech.com</a>.
          </p>
        </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}
