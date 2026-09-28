import { useState, useEffect } from 'react';
import { ExternalLink, FileText, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="nav-inner">
            {/* Logo */}
            <a href="#home" className="nav-logo" onClick={() => handleNavClick('#home')}>
              ASTHA<span>.</span>
            </a>

            {/* Desktop Nav Links */}
            <ul className="nav-links" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Right */}
            <div className="nav-right">
              <a
                href="https://github.com/asthashukla"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-btn"
                aria-label="GitHub"
              >
                <ExternalLink size={17} />
              </a>
              <a
                href="https://linkedin.com/in/astha-shukla"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-btn"
                aria-label="LinkedIn"
              >
                <ExternalLink size={17} />
              </a>
              <a
                href="#resume"
                className="nav-resume-btn"
                onClick={(e) => { e.preventDefault(); handleNavClick('#resume'); }}
              >
                <FileText size={13} style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'middle' }} />
                Resume
              </a>

              {/* Hamburger */}
              <button
                className={`hamburger-btn${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <button
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--text-muted)', cursor: 'pointer', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <div className="mobile-menu-bottom">
          <a href="https://github.com/asthashukla" target="_blank" rel="noopener noreferrer" className="nav-icon-btn" aria-label="GitHub">
            <ExternalLink size={20} />
          </a>
          <a href="https://linkedin.com/in/astha-shukla" target="_blank" rel="noopener noreferrer" className="nav-icon-btn" aria-label="LinkedIn">
            <ExternalLink size={20} />
          </a>
          <a href="#resume" className="nav-resume-btn" onClick={(e) => { e.preventDefault(); handleNavClick('#resume'); setMenuOpen(false); }}>
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
