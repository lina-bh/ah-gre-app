import "bootstrap-icons/font/bootstrap-icons.min.css"
import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

import App from "./components/App.tsx"
import "./index.css"

if (import.meta.env.MODE === "development") {
  await import("./debug-tools.ts")
}

const root = createRoot(document.getElementById("root")!)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
