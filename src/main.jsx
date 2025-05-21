import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./assets/css/reset.css";
import "./assets/css/typography.css";
import "./assets/css/navigation.css";
import "./assets/css/footer.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
