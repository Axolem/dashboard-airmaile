import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

//theme
import "./assets/theme.css";

//icons
import "primeicons/primeicons.css";

//core
import "primereact/resources/primereact.min.css";

//css
import "primeflex/primeflex.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
