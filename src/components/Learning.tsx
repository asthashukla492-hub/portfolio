import { useReveal } from '../hooks/useReveal';
import { learningItems } from '../data';

export default function Learning() {
  const headingRef = useReveal();

  return (
    <section id="learning" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="reveal" ref={headingRef as React.RefObject<HTMLDivElement>}>
          <p className="section-label">Currently Learning</p>
          <h2 className="section-heading">What I'm exploring right now</h2>
          <p className="section-sub">
            The areas I'm actively working on and improving every day.
          </p>
        </div>

        <div className="learning-grid">
          {learningItems.map((item, i) => (
            <div
              key={item.number}
              className={`learning-card reveal reveal-delay-${i + 1}`}
            >
              <div className="learning-number">{item.number}</div>
              <div className="learning-icon" aria-hidden="true">{item.icon}</div>
              <h3 className="learning-title">{item.title}</h3>
              <p className="learning-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
