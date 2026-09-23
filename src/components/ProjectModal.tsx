import { X, ExternalLink, Github, BookOpen, Lightbulb, Layers, CheckCircle, GraduationCap } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal">
        {/* Image */}
        <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--bg-surface)' }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(99,102,241,0.08) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '0.75rem',
          }}>
            <div style={{ fontSize: '3rem' }}>{project.id === 1 ? '🔐' : '📁'}</div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>
              {project.liveUrl.replace('https://', '')}
            </span>
          </div>
        </div>

        <div className="modal-body">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.7rem', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: 'var(--accent-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Project {project.number}
              </div>
              <h2 id="modal-title" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>
                {project.name}
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{project.tagline}</p>
            </div>
            <button className="modal-close" onClick={onClose} aria-label="Close modal">
              <X size={16} />
            </button>
          </div>

          {/* Overview */}
          <div className="modal-section">
            <div className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <BookOpen size={12} />
              Overview
            </div>
            <p className="modal-text">{project.overview}</p>
          </div>

          {/* Problem */}
          <div className="modal-section">
            <div className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <Lightbulb size={12} />
              Problem
            </div>
            <p className="modal-text">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="modal-section">
            <div className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <CheckCircle size={12} />
              Solution
            </div>
            <p className="modal-text">{project.solution}</p>
          </div>

          {/* Features */}
          <div className="modal-section">
            <div className="modal-section-title">Features</div>
            <ul className="modal-features">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <div className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <Layers size={12} />
              Tech Stack
            </div>
            <div className="tech-tags" style={{ marginTop: '0.5rem' }}>
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* What I Learned */}
          <div className="modal-section">
            <div className="modal-section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <GraduationCap size={12} />
              What I Learned
            </div>
            <p className="modal-text">{project.learned}</p>
          </div>

          {/* Links */}
          <div className="modal-links">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
            >
              <Github size={14} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
