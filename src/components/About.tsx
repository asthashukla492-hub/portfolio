import { useReveal } from '../hooks/useReveal';

const infoChips = [
  { icon: '🎓', label: 'BCA Student' },
  { icon: '📍', label: 'Prayagraj, India' },
  { icon: '💻', label: 'Web Development' },
  { icon: '🔐', label: 'Cybersecurity' },
  { icon: '🚀', label: 'Project Building' },
];

export default function About() {
  const sectionRef = useReveal();
  const visualRef = useReveal();

  return (
    <section id="about" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="about-grid">
          {/* Left */}
          <div>
            <div className="reveal" ref={sectionRef as React.RefObject<HTMLDivElement>}>
              <p className="section-label">About Me</p>
              <h2 className="section-heading">A little about me</h2>
            </div>

            <p className="about-text reveal reveal-delay-1" style={{ marginTop: '1rem' }}>
              I'm a <strong>BCA student</strong> who enjoys learning technology by actually building things.
              Rather than just reading theory, I prefer creating projects that help me understand concepts
              at a deeper level.
            </p>

            <p className="about-text reveal reveal-delay-2" style={{ marginTop: '1rem' }}>
              I'm interested in <strong>web development</strong>, <strong>cybersecurity</strong>, and
              creating practical projects that solve real problems. Right now, I'm focused on improving my
              skills and building a strong foundation in technology.
            </p>

            <div className="info-chips reveal reveal-delay-3">
              {infoChips.map((chip) => (
                <div key={chip.label} className="info-chip">
                  <span className="info-chip-icon" aria-hidden="true">{chip.icon}</span>
                  <span>{chip.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div
            className="about-right reveal reveal-delay-2"
            ref={visualRef as React.RefObject<HTMLDivElement>}
          >
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '2rem',
              }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-light)', marginBottom: '0.75rem', fontFamily: "'JetBrains Mono', monospace" }}>
                  // quick facts
                </div>
                {[
                  { label: 'Degree', value: 'Bachelor of Computer Applications' },
                  { label: 'Location', value: 'Prayagraj, Uttar Pradesh' },
                  { label: 'Email', value: 'asthashukla492@gmail.com' },
                  { label: 'Status', value: 'Actively learning & building' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      padding: '0.625rem 0',
                      borderBottom: '1px solid var(--border)',
                      gap: '1rem',
                    }}
                  >
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500, flexShrink: 0 }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'right', wordBreak: 'break-all' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: '0.5rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-light)', fontFamily: "'JetBrains Mono', monospace" }}>
                // tech i use
              </div>
              <div className="tech-tags">
                {['C', 'Java', 'Python', 'React', 'HTML', 'CSS'].map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
