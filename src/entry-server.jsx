/**
 * Build-time renderer (see scripts/postbuild.mjs). Turns each route
 * into finished HTML, so search engines and AI tools that do not run
 * JavaScript still see the full page content.
 */
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App.jsx";

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
