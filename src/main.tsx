// import "bootstrap-icons/font/bootstrap-icons.min.css"
import { render } from "preact"
// import serviceWorker from "./service-worker.ts?url"

import App from "./components/App.tsx"
import "./index.css"

render(<App />, document.getElementById("root")!)

/*
if ("serviceWorker" in navigator)
  navigator.serviceWorker.register(serviceWorker)
*/
