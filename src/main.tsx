import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { hydrateRoot } from "react-dom/client";
import Home from "../app/page";
import "../app/globals.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element was not found.");
}

const app = (
  <StrictMode>
    <Home />
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
