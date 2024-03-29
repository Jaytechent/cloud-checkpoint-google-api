import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BackgroundVideo from "./components/Particle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BackgroundVideo />
    <App />
  </React.StrictMode>
);
