import { ArrowDown, Download } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background gradient */}
      <div className="hero-bg" aria-hidden="true" />

      <div className="container" style={{ width: '100%' }}>
        <div className="hero-grid">
          {/* Left: Text */}
          <div>
            <div className="hero-badge animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="dot" aria-hidden="true" />
              BCA Student · Developer · Learner
            </div>

            <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Hi, I'm{' '}
              <span className="highlight">Astha.</span>
              <br />
              I learn by building.
            </h1>

            <p className="hero-desc animate-fade-up" style={{ animationDelay: '0.35s' }}>
              I'm a BCA student from Prayagraj exploring web development, cybersecurity, and modern technology through hands-on projects.
            </p>

            <div className="hero-buttons animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <button
                id="hero-view-projects"
                className="btn-primary"
                onClick={scrollToProjects}
                aria-label="View my projects"
              >
                View My Projects
                <ArrowDown size={15} />
              </button>
              <a
                id="hero-download-resume"
                href="#resume"
                className="btn-secondary"
                onClick={(e) => { e.preventDefault(); document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' }); }}
                aria-label="Download Resume"
              >
                <Download size={15} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: Terminal Visual */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: '0.6s', display: 'flex', justifyContent: 'center' }}
          >
            <div className="terminal-card" role="img" aria-label="Developer terminal showing Astha's information">
              <div className="terminal-header">
                <div className="terminal-dots" aria-hidden="true">
                  <span className="terminal-dot red" />
                  <span className="terminal-dot yellow" />
                  <span className="terminal-dot green" />
                </div>
                <span className="terminal-title">astha@portfolio ~ zsh</span>
              </div>
              <div className="terminal-body font-mono">
                <div>
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-cmd">whoami</span>
                </div>
                <div className="terminal-output">astha.shukla</div>

                <div style={{ marginTop: '0.5rem' }}>
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-cmd">cat about.txt</span>
                </div>
                <div className="terminal-output">BCA Student · Prayagraj, India</div>
                <div className="terminal-output">Loves building things from scratch</div>

                <div style={{ marginTop: '0.5rem' }}>
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-cmd">cat currently.txt</span>
                </div>
                <div className="terminal-output">learning · building · exploring</div>

                <div style={{ marginTop: '0.5rem' }}>
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-cursor" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fade-up"
          style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', animationDelay: '0.8s' }}
        >
          <button
            onClick={scrollToAbout}
            aria-label="Scroll down to learn more"
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '100px',
              padding: '0.5rem 1rem',
              color: 'var(--text-muted)',
              fontSize: '0.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.4)'; e.currentTarget.style.color = 'var(--accent-light)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            scroll to explore
            <ArrowDown size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
