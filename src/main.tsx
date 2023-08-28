import "bootstrap-icons/font/bootstrap-icons.min.css"
import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { Provider } from "react-redux"

import App from "./components/App.tsx"
import { store } from "./store.ts"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
