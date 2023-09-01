import "bootstrap-icons/font/bootstrap-icons.min.css"
import { render } from "preact"

import App from "./components/App.tsx"
import "./index.css"

// if (import.meta.env.MODE === "development") {
//   await import("./debug-tools.ts")
// }

render(<App />, document.getElementById("root")!)
