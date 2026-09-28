import { Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">
              ASTHA<span>.</span>
            </div>
            <p className="footer-tagline">Learning. Building. Improving.</p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/asthashukla"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub profile"
            >
              <ExternalLink size={18} />
            </a>
            <a
              href="https://linkedin.com/in/astha-shukla"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn profile"
            >
              <ExternalLink size={18} />
            </a>
            <a
              href="mailto:asthashukla492@gmail.com"
              className="footer-link"
              aria-label="Email Astha"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <p className="footer-copy">
          © {year} Astha Shukla · Made with care in Prayagraj, India
        </p>
      </div>
    </footer>
  );
}
