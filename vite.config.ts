import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import react from "@vitejs/plugin-react";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { defineConfig, type Plugin } from "vite";
import Home from "./app/page";
import { languageFromPath, languagePaths, renderHead } from "./app/content/meta";
import type { Language } from "./app/types";

const HEAD_PLACEHOLDER = "<!--app-head-->";
const ROOT = '<div id="root"></div>';

const renderPage = (template: string, language: Language, prerender: boolean) => {
  let html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${language}">`)
    .replace(HEAD_PLACEHOLDER, renderHead(language));

  if (prerender) {
    const body = renderToString(createElement(Home, { initialLanguage: language }));
    html = html.replace(ROOT, `<div id="root">${body}</div>`);
  }

  return html;
};

/**
 * Renders one static page per language from index.html:
 * `/` (Slovak) and `/en/` (English), each with its own <head> and prerendered body.
 */
const localizedPages = (): Plugin => {
  let template: string | null = null;
  let isBuild = false;

  return {
    name: "localized-pages",
    configResolved(config) {
      isBuild = config.command === "build";
    },
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (isBuild) {
          template = html;
          return renderPage(html, "sk", true);
        }

        return renderPage(html, languageFromPath(ctx.originalUrl ?? ctx.path), false);
      },
    },
    writeBundle(options) {
      if (!template || !options.dir) {
        return;
      }

      const dir = join(options.dir, languagePaths.en);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, "index.html"), renderPage(template, "en", true));
    },
  };
};

export default defineConfig({
  plugins: [react(), localizedPages()],
  base: "/",
  build: {
    outDir: "dist",
  },
});
