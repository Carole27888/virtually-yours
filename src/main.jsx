import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./index.css";

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Pages are pre-rendered at build time (scripts/postbuild.mjs), so
// React attaches to the existing HTML instead of drawing it again.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
