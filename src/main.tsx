import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { hydrateRoot } from "react-dom/client";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/space-grotesk/wght.css";
import Home from "../app/page";
import { languageFromPath } from "../app/content/meta";
import "../app/globals.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element was not found.");
}

const app = (
  <StrictMode>
    <Home initialLanguage={languageFromPath(window.location.pathname)} />
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
