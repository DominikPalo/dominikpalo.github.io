import type { PageCopy } from "../content/copy";
import type { Language } from "../types";

type WorkSectionProps = {
  t: PageCopy;
  language: Language;
};

export function WorkSection({ t, language }: WorkSectionProps) {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-heading horizontal-heading">
          <div>
            <p className="section-kicker">{t.workKicker}</p>
            <h2 id="work-title">{t.workTitle}</h2>
          </div>
          <p>{t.workIntro}</p>
        </div>

        <div className="projects-grid">
          {t.projects.map((project) => (
            <article
              className={
                "project-card" +
                ("featured" in project && project.featured ? " featured" : "")
              }
              key={project.index}
            >
              <a
                className="project-image"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={project.title + " — " + t.projectVisit}
              >
                <img src={project.image} alt="" />
                <span className="project-scan" aria-hidden="true" />
                <span className="project-open" aria-hidden="true">↗</span>
              </a>
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.index}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div
                  className="tags"
                  aria-label={language === "sk" ? "Technológie" : "Technologies"}
                >
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  className="text-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.projectVisit} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
