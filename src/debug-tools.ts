// import { useStore } from "./zustand-store"

declare global {
  interface Window {
    changeTheDate: (date: Date) => void
  }
}

window.changeTheDate = (date: Date) => {
  date
  throw new Error("unimplemented")
}

export default null
