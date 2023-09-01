import { useStore } from "./zustand-store"

declare global {
  interface Window {
    changeTheDate: (date: Date) => void
  }
}

window.changeTheDate = (date: Date) => {
  useStore.setState({ time: JSON.stringify(date) })
}
