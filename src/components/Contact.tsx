import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Code2, ExternalLink } from "lucide-react";
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const headingRef = useReveal();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder — integrate with email service (EmailJS, Formspree, etc.)
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="reveal" ref={headingRef as React.RefObject<HTMLDivElement>}>
          <p className="section-label">Contact</p>
          <h2 className="section-heading">Let's connect.</h2>
          <p className="section-sub">
            I'm always open to learning opportunities, interesting projects, collaborations, and conversations about technology.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div className="contact-info reveal reveal-delay-1">
            <a
              href="mailto:asthashukla492@gmail.com"
              className="contact-item"
              style={{ textDecoration: 'none' }}
              aria-label="Send email to Astha"
            >
              <div className="contact-icon">
                <Mail size={18} />
              </div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">asthashukla492@gmail.com</div>
              </div>
            </a>


            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={18} />
              </div>
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-value">Prayagraj, Uttar Pradesh, India</div>
              </div>
            </div>

            {/* Social buttons */}
            <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <a
                href="mailto:asthashukla492@gmail.com"
                className="btn-primary"
                style={{ fontSize: '0.85rem', padding: '0.6rem 1.1rem', flex: 1, justifyContent: 'center' }}
                aria-label="Email Astha"
              >
                <Mail size={14} />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/astha-shukla"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.85rem', padding: '0.6rem 1.1rem', flex: 1, justifyContent: 'center' }}
                aria-label="View LinkedIn profile"
              >
                <ExternalLink size={14} />
                LinkedIn
              </a>
              <a
                href="https://github.com/asthashukla"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.85rem', padding: '0.6rem 1.1rem', flex: 1, justifyContent: 'center' }}
                aria-label="View GitHub profile"
              >
                <Code2 size={14} />
                GitHub
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <CheckCircle size={40} style={{ color: '#4ade80' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Message sent!
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>
                  Note: Connect this form to an email service (EmailJS / Formspree) for actual delivery.
                </p>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem' }}
              >
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-textarea"
                    placeholder="What's on your mind?"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <p className="form-note">
                  Connect to EmailJS or Formspree to enable real email delivery.
                </p>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '0.25rem' }}
                  disabled={loading}
                  aria-label="Send message"
                >
                  {loading ? (
                    <>Sending…</>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
