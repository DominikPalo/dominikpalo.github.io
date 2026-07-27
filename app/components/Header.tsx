import type { PageCopy } from "../content/copy";
import type { Language } from "../types";

type HeaderProps = {
  t: PageCopy;
  language: Language;
  themeSwitchLabel: string;
  onBrandTap: () => void;
  onLanguageChange: (language: Language) => void;
  onThemeToggle: () => void;
};

export function Header({
  t,
  language,
  themeSwitchLabel,
  onBrandTap,
  onLanguageChange,
  onThemeToggle,
}: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="brand"
          href="#content"
          aria-label="Dominik Paľo"
          onClick={onBrandTap}
        >
          <span className="brand-mark" aria-hidden="true">
            DP
          </span>
          <span className="brand-text">
            <strong>Dominik Paľo</strong>
            <small>SOFTWARE × HARDWARE</small>
          </span>
        </a>

        <nav
          className="desktop-nav"
          aria-label={language === "sk" ? "Hlavná navigácia" : "Main navigation"}
        >
          <a href="#about">{t.nav.about}</a>
          <a href="#work">{t.nav.work}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#community">{t.nav.community}</a>
          <a href="#hobbies">{t.nav.hobbies}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="header-controls">
          <div className="language-switch" aria-label={t.languageLabel}>
            <button
              type="button"
              className={language === "sk" ? "active" : ""}
              onClick={() => onLanguageChange("sk")}
              aria-pressed={language === "sk"}
            >
              SK
            </button>
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => onLanguageChange("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>

          <button
            className="theme-switch"
            type="button"
            onClick={onThemeToggle}
            aria-label={themeSwitchLabel}
            title={themeSwitchLabel}
          >
            <span className="theme-icon theme-icon-light" aria-hidden="true">
              ☀
            </span>
            <span className="theme-icon theme-icon-dark" aria-hidden="true">
              ☾
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
