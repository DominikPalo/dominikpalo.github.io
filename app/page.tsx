"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  AboutSection,
  CommunitySection,
  ContactFooter,
  ExperienceSection,
  Header,
  HeroSection,
  HobbiesSection,
  MakerWindow,
  WorkSection,
} from "./components";
import { copy } from "./content/copy";
import type {
  Language,
  MakerWindowDrag,
  MakerWindowPosition,
  Theme,
  ThemeSource,
} from "./types";

const THEME_STORAGE_KEY = "palo-theme";
const MAKER_WINDOW_MARGIN = 8;

const constrainMakerWindow = (
  x: number,
  y: number,
  width: number,
  height: number,
): MakerWindowPosition => ({
  x: Math.min(
    Math.max(MAKER_WINDOW_MARGIN, x),
    Math.max(MAKER_WINDOW_MARGIN, window.innerWidth - width - MAKER_WINDOW_MARGIN),
  ),
  y: Math.min(
    Math.max(MAKER_WINDOW_MARGIN, y),
    Math.max(MAKER_WINDOW_MARGIN, window.innerHeight - height - MAKER_WINDOW_MARGIN),
  ),
});

export default function Home() {
  const [language, setLanguage] = useState<Language>("sk");
  const [messageSent, setMessageSent] = useState(false);
  const [makerMode, setMakerMode] = useState(false);
  const [makerPosition, setMakerPosition] = useState<MakerWindowPosition | null>(null);
  const [makerDragging, setMakerDragging] = useState(false);
  const [theme, setTheme] = useState<Theme | null>(null);
  const [themeSource, setThemeSource] = useState<ThemeSource>(null);
  const brandTapCount = useRef(0);
  const lastBrandTap = useRef(0);
  const makerWindowRef = useRef<HTMLElement | null>(null);
  const makerWindowDrag = useRef<MakerWindowDrag | null>(null);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    let source: ThemeSource = "system";

    try {
      const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
      source = storedTheme === "light" || storedTheme === "dark" ? "user" : "system";
    } catch {
      // System theme remains the source when browser storage is unavailable.
    }

    setTheme(currentTheme);
    setThemeSource(source);
  }, []);

  useEffect(() => {
    if (!theme) {
      return;
    }

    const root = document.documentElement;
    const themeColor = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );

    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    themeColor?.setAttribute("content", theme === "dark" ? "#10171c" : "#f5f7f6");

    if (themeSource === "user") {
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
      } catch {
        // The selected theme still applies for this visit when storage is unavailable.
      }
    }
  }, [theme, themeSource]);

  useEffect(() => {
    if (themeSource !== "system") {
      return;
    }

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const syncWithSystem = (event: MediaQueryListEvent | MediaQueryList) => {
      setTheme(event.matches ? "dark" : "light");
    };

    syncWithSystem(systemTheme);
    systemTheme.addEventListener("change", syncWithSystem);
    return () => systemTheme.removeEventListener("change", syncWithSystem);
  }, [themeSource]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("message") !== "sent") {
      return;
    }

    setMessageSent(true);
    query.delete("message");
    const remainingQuery = query.toString();
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${remainingQuery ? `?${remainingQuery}` : ""}${window.location.hash}`,
    );
  }, []);

  useEffect(() => {
    const secretWord = "maker";
    let typedCharacters = "";

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;

      if (target?.matches("input, textarea, select, [contenteditable='true']")) {
        return;
      }

      if (event.key === "Escape" && makerMode) {
        setMakerMode(false);
        return;
      }

      if (event.repeat) {
        return;
      }

      if (event.key.length !== 1) {
        return;
      }

      typedCharacters = `${typedCharacters}${event.key.toLowerCase()}`.slice(
        -secretWord.length,
      );

      if (typedCharacters === secretWord) {
        setMakerMode(true);
        typedCharacters = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [makerMode]);

  useEffect(() => {
    if (!makerMode) {
      makerWindowDrag.current = null;
      setMakerDragging(false);
      return;
    }

    const keepMakerWindowVisible = () => {
      const windowElement = makerWindowRef.current;

      if (!windowElement) {
        return;
      }

      const bounds = windowElement.getBoundingClientRect();
      setMakerPosition((currentPosition) =>
        currentPosition
          ? constrainMakerWindow(
              currentPosition.x,
              currentPosition.y,
              bounds.width,
              bounds.height,
            )
          : currentPosition,
      );
    };

    keepMakerWindowVisible();
    window.addEventListener("resize", keepMakerWindowVisible);
    return () => window.removeEventListener("resize", keepMakerWindowVisible);
  }, [makerMode]);

  const handleBrandTap = () => {
    const now = Date.now();

    if (now - lastBrandTap.current > 1800) {
      brandTapCount.current = 0;
    }

    lastBrandTap.current = now;
    brandTapCount.current += 1;

    if (brandTapCount.current === 3) {
      brandTapCount.current = 0;
      setMakerMode(true);
    }
  };

  const handleThemeToggle = () => {
    const currentTheme =
      theme ?? (document.documentElement.dataset.theme === "light" ? "light" : "dark");

    setThemeSource("user");
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const handleMakerDragStart = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || (event.target as HTMLElement).closest("button")) {
      return;
    }

    const windowElement = makerWindowRef.current;

    if (!windowElement) {
      return;
    }

    const bounds = windowElement.getBoundingClientRect();
    makerWindowDrag.current = {
      pointerId: event.pointerId,
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };
    setMakerPosition({ x: bounds.left, y: bounds.top });
    setMakerDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    event.preventDefault();
  };

  const handleMakerDragMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = makerWindowDrag.current;
    const windowElement = makerWindowRef.current;

    if (!drag || drag.pointerId !== event.pointerId || !windowElement) {
      return;
    }

    const bounds = windowElement.getBoundingClientRect();
    setMakerPosition(
      constrainMakerWindow(
        event.clientX - drag.x,
        event.clientY - drag.y,
        bounds.width,
        bounds.height,
      ),
    );
    event.preventDefault();
  };

  const handleMakerDragEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (makerWindowDrag.current?.pointerId !== event.pointerId) {
      return;
    }

    makerWindowDrag.current = null;
    setMakerDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const themeSwitchLabel =
    theme === "dark"
      ? t.themeSwitchToLight
      : theme === "light"
        ? t.themeSwitchToDark
        : t.themeSwitch;

  return (
    <main id="content">
      <a className="skip-link" href="#about">
        {t.skip}
      </a>

      <Header
        t={t}
        language={language}
        themeSwitchLabel={themeSwitchLabel}
        onBrandTap={handleBrandTap}
        onLanguageChange={setLanguage}
        onThemeToggle={handleThemeToggle}
      />

      <HeroSection t={t} language={language} />

      <AboutSection t={t} />

      <WorkSection t={t} language={language} />

      <ExperienceSection t={t} />

      <CommunitySection t={t} />

      <HobbiesSection t={t} />

      <ContactFooter t={t} messageSent={messageSent} />

      <MakerWindow
        t={t}
        open={makerMode}
        dragging={makerDragging}
        position={makerPosition}
        windowRef={makerWindowRef}
        onClose={() => setMakerMode(false)}
        onDragStart={handleMakerDragStart}
        onDragMove={handleMakerDragMove}
        onDragEnd={handleMakerDragEnd}
      />
    </main>
  );
}
