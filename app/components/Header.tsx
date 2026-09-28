import { useEffect, useRef, useState } from "react";
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

const NAV_SECTIONS = ["about", "work", "experience", "community", "hobbies", "contact"] as const;
const DESKTOP_NAV_QUERY = "(min-width: 1121px)";

export function Header({
  t,
  language,
  themeSwitchLabel,
  onBrandTap,
  onThemeToggle,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const navLabel = language === "sk" ? "Hlavná navigácia" : "Main navigation";

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const desktop = window.matchMedia(DESKTOP_NAV_QUERY);
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    desktop.addEventListener("change", closeOnDesktop);
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [menuOpen]);

  return (
    <header className={"site-header" + (menuOpen ? " menu-open" : "")} ref={headerRef}>
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

        <nav className="desktop-nav" aria-label={navLabel}>
          {NAV_SECTIONS.map((section) => (
            <a key={section} href={`#${section}`}>
              {t.nav[section]}
            </a>
          ))}
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

          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t.menuClose : t.menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle-icon" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="menu-toggle-text" aria-hidden="true">
              {t.menuLabel}
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label={navLabel}
        hidden={!menuOpen}
      >
        <ol>
          {NAV_SECTIONS.map((section, index) => (
            <li key={section}>
              <a href={`#${section}`} onClick={() => setMenuOpen(false)}>
                <span aria-hidden="true">{`0${index + 1}`}</span>
                {t.nav[section]}
                <b aria-hidden="true">↓</b>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}
