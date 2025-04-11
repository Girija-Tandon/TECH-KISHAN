import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n"; // Import the i18n configuration
import App from "./App";
import "./index.css"; // Global styles

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);

