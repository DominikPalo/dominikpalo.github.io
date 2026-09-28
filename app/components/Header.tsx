import type { PageCopy } from "../content/copy";
import { languagePaths } from "../content/meta";
import type { Language } from "../types";

type HeaderProps = {
  t: PageCopy;
  language: Language;
  themeSwitchLabel: string;
  onBrandTap: () => void;
  onThemeToggle: () => void;
};

export function Header({
  t,
  language,
  themeSwitchLabel,
  onBrandTap,
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
          <nav className="language-switch" aria-label={t.languageLabel}>
            {(["sk", "en"] as const).map((code) => (
              <a
                key={code}
                href={languagePaths[code]}
                hrefLang={code}
                lang={code}
                className={language === code ? "active" : ""}
                aria-current={language === code ? "page" : undefined}
                onClick={(event) => {
                  if (language === code) {
                    event.preventDefault();
                    return;
                  }

                  // Keep the reader's current section when switching languages.
                  event.currentTarget.href = languagePaths[code] + window.location.hash;
                }}
              >
                {code.toUpperCase()}
              </a>
            ))}
          </nav>

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
