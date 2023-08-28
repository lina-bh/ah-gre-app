import { store } from "./store.ts"
import { debugChangeTheDate } from "./reducers/time.ts"

declare global {
  interface Window {
    changeTheDate: (date: Date) => void
  }
}

window.changeTheDate = (date: Date) => {
  store.dispatch(debugChangeTheDate(JSON.stringify(date)))
}
