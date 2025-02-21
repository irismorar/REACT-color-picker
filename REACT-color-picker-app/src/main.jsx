import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ColorPickerApp from "./ColorPickerApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorPickerApp />
  </StrictMode>
);
