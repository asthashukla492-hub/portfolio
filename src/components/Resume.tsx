import { Download, FileText } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Resume() {
  const ref = useReveal();

  return (
    <section id="resume">
      <div className="container">
        <div className="resume-cta reveal" ref={ref as React.RefObject<HTMLDivElement>}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }} aria-hidden="true">📄</div>
            <p className="section-label" style={{ justifyContent: 'center' }}>Resume</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
              Want to know more?
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '420px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
              Take a look at my resume to see my education, skills, projects, and experience.
            </p>
            <a
              id="download-resume-btn"
              href="#"
              className="btn-primary"
              style={{ display: 'inline-flex' }}
              onClick={(e) => {
                e.preventDefault();
                // Replace href with actual resume PDF URL when available
                alert('Resume PDF link coming soon. Add your resume URL in the code.');
              }}
              aria-label="Download Astha Shukla's resume"
            >
              <Download size={16} />
              Download Resume
            </a>
            <p style={{ marginTop: '0.875rem', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem' }}>
              <FileText size={12} />
              Add your resume PDF URL in src/components/Resume.tsx
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
