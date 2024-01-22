import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme appearance="inherit" accentColor="purple" radius="large">
      <App />
    </Theme>
  </React.StrictMode>
);
