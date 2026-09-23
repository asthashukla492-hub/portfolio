import { MapPin, Calendar } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Education() {
  const headingRef = useReveal();
  const cardRef = useReveal();

  return (
    <section id="education">
      <div className="container">
        <div className="reveal" ref={headingRef as React.RefObject<HTMLDivElement>}>
          <p className="section-label">Education</p>
          <h2 className="section-heading">Academic background</h2>
        </div>

        <div className="education-card reveal reveal-delay-1" ref={cardRef as React.RefObject<HTMLDivElement>}>
          <div className="education-icon" aria-hidden="true">🎓</div>

          <div style={{ flex: 1 }}>
            <div className="education-degree">BCA</div>
            <h3 className="education-name">Bachelor of Computer Applications</h3>
            <p className="education-school">[ADD COLLEGE NAME]</p>

            <div className="education-meta">
              <div className="education-meta-item">
                <MapPin size={13} style={{ color: 'var(--accent-light)' }} />
                Prayagraj, Uttar Pradesh, India
              </div>
              <div className="education-meta-item">
                <Calendar size={13} style={{ color: 'var(--accent-light)' }} />
                [ADD START YEAR] – [EXPECTED GRADUATION YEAR]
              </div>
            </div>

            <div
              style={{
                marginTop: '1rem',
                padding: '0.75rem 1rem',
                background: 'rgba(124,58,237,0.06)',
                border: '1px solid rgba(124,58,237,0.15)',
                borderRadius: '8px',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
              }}
            >
              Currently pursuing a Bachelor's degree in Computer Applications, building a strong foundation in programming, computer science fundamentals, and software development.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
