import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { inject } from "@vercel/analytics";
import { BrowserRouter } from "react-router-dom";

//theme
import "./assets/theme.css";

//icons
import "primeicons/primeicons.css";

//core
import "primereact/resources/primereact.min.css";

//css
import "primeflex/primeflex.css";

//custom css
import "./assets/custom.css";

if (
  !import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ||
  !import.meta.env.VITE_BASE_URL
) {
  throw new Error("Missing Publishable Key");
}

inject();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
