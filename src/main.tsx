import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { loadLocale } from "./i18n.ts";
import { BrowserRouter } from "react-router-dom";

async function start() {
  await loadLocale("en");
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
}

start();
