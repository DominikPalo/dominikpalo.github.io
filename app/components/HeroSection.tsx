import type { PageCopy } from "../content/copy";
import type { Language } from "../types";

type HeroSectionProps = {
  t: PageCopy;
  language: Language;
};

export function HeroSection({ t, language }: HeroSectionProps) {
  return (
    <section className="hero blueprint-section" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="system-status">
            {t.location}
          </div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 id="hero-title">
            <span>{t.heroTitleTop}</span>
            <span className="accent-text">{t.heroTitleBottom}</span>
          </h1>
          <p className="hero-lead">{t.heroLead}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              {t.heroPrimary}
              <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/DominikPalo"
              target="_blank"
              rel="noreferrer"
            >
              {t.heroSecondary}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="profile-system" aria-label={t.systemLabel}>
          <div className="profile-topline">
            <span>{t.systemLabel}</span>
            <span>48.1486°N / 17.1077°E</span>
          </div>
          <div className="profile-visual">
            <div className="portrait-frame">
              <img src="/dominik-palo-nerdy.png" alt={t.portraitAlt} />
            </div>
          </div>
          <div className="system-readouts">
            <div>
              <span>{t.systemSoftware}</span>
              <strong>{t.systemSoftwareValue}</strong>
            </div>
            <div>
              <span>{t.systemHardware}</span>
              <strong>{t.systemHardwareValue}</strong>
            </div>
            <div>
              <span>{t.systemCommunity}</span>
              <strong>{t.systemCommunityValue}</strong>
            </div>
          </div>
          <div className="signal-line" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div
        className="container metrics-grid"
        aria-label={language === "sk" ? "Profil v číslach" : "Profile metrics"}
      >
        {t.metrics.map((metric, index) => (
          <div className="metric" key={metric.label}>
            <span className="metric-index">0{index + 1}</span>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
