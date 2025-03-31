import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ErrorBoundary } from "./component/error-boundary.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong! at App level</div>}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
