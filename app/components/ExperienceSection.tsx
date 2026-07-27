import type { PageCopy } from "../content/copy";

type ExperienceSectionProps = {
  t: PageCopy;
};

export function ExperienceSection({ t }: ExperienceSectionProps) {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container experience-layout">
        <div className="section-heading sticky-heading">
          <p className="section-kicker">{t.experienceKicker}</p>
          <h2 id="experience-title">{t.experienceTitle}</h2>
          <div className="axis-graphic" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="timeline">
          {t.experience.map((item, index) => (
            <article className="timeline-item" key={item.years}>
              <div className="timeline-marker">
                <span>0{index + 1}</span>
              </div>
              <div className="timeline-content">
                <span className="timeline-years">{item.years}</span>
                <h3>{item.role}</h3>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.company} <span aria-hidden="true">↗</span>
                </a>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
