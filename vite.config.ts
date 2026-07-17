import react from "@vitejs/plugin-react";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { defineConfig } from "vite";
import Home from "./app/page";

const prerenderHomePage = () => ({
  name: "prerender-home-page",
  apply: "build" as const,
  transformIndexHtml(html: string) {
    const renderedPage = renderToString(createElement(Home));
    return html.replace('<div id="root"></div>', `<div id="root">${renderedPage}</div>`);
  },
});

export default defineConfig({
  plugins: [react(), prerenderHomePage()],
  base: "/",
  build: {
    outDir: "dist",
  },
});
