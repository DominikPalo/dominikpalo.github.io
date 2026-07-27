import type { PageCopy } from "../content/copy";

type AboutSectionProps = {
  t: PageCopy;
};

export function AboutSection({ t }: AboutSectionProps) {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">{t.aboutKicker}</p>
          <h2 id="about-title">{t.aboutTitle}</h2>
          <p>{t.aboutIntro}</p>
        </div>

        <div className="about-grid">
          <article className="identity-panel software-panel">
            <div className="panel-label">
              <span>SYS_A</span>
              <span>01</span>
            </div>
            <div className="identity-icon code-icon" aria-hidden="true">
              <span>&lt;</span>
              <span>/</span>
              <span>&gt;</span>
            </div>
            <h3>{t.softwareTitle}</h3>
            <p>{t.softwareBody}</p>
          </article>

          <article className="identity-panel maker-panel">
            <div className="panel-label">
              <span>SYS_B</span>
              <span>02</span>
            </div>
            <div className="identity-icon chip-icon" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <b>µC</b>
            </div>
            <h3>{t.makerTitle}</h3>
            <p>{t.makerBody}</p>
          </article>
        </div>

        <div className="toolchain">
          <div className="toolchain-header">
            <span>{t.stackLabel}</span>
          </div>
          <div className="tool-list">
            {t.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
