import { useReveal } from '../hooks/useReveal';
import { skillCategories } from '../data';

export default function Skills() {
  const headingRef = useReveal();

  return (
    <section id="skills" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="reveal" ref={headingRef as React.RefObject<HTMLDivElement>}>
          <p className="section-label">Skills</p>
          <h2 className="section-heading">What I work with</h2>
          <p className="section-sub">
            Languages, tools, and technologies I've learned and used in projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className={`skill-category reveal reveal-delay-${i + 1}`}
            >
              <div className="skill-category-title">
                <span aria-hidden="true" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem' }}>
                  {category.icon}
                </span>
                {category.title}
              </div>
              <div className="skill-chips" role="list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-chip" role="listitem">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
