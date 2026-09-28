import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { projects } from '../data';
import ProjectModal from './ProjectModal';
import type { Project } from '../types';

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const projectIcons = ['🔐', '📁'];
  const icon = projectIcons[project.id - 1] || '💻';

  return (
    <article className="project-card" onClick={() => onOpen(project)}>
      {/* Project image / placeholder */}
      <div className="project-image-wrap">
        <div style={{
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, 
            rgba(124,58,237,${project.id === 1 ? '0.18' : '0.10'}) 0%, 
            rgba(99,102,241,${project.id === 1 ? '0.08' : '0.15'}) 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '0.5rem',
        }}>
          <span style={{ fontSize: '2.5rem' }}>{icon}</span>
          <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>
            {project.liveUrl.replace('https://', '')}
          </span>
        </div>
        <div className="project-image-overlay">
          <button className="project-view-btn" aria-label={`View ${project.name} details`}>
            View Details
          </button>
        </div>
      </div>

      <div className="project-content">
        <div className="project-number">Project {project.number}</div>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="tech-tags">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        <div className="project-links" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link primary"
            aria-label={`Live demo of ${project.name}`}
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`GitHub repository for ${project.name}`}
          >
            <Github size={12} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const headingRef = useReveal();

  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="reveal" ref={headingRef as React.RefObject<HTMLDivElement>}>
            <p className="section-label">Projects</p>
            <h2 className="section-heading">Things I've built</h2>
            <p className="section-sub">
              Real projects I've built while learning. Click any card to see the full story.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`reveal reveal-delay-${i + 1}`}
              >
                <ProjectCard project={project} onOpen={setSelectedProject} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
