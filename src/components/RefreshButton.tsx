import { useStore } from "../zustand-store"

export default function RefreshButton() {
  const timeRefreshed = useStore((state) => state.timeRefreshed)

  const onClick = () => {
    timeRefreshed()
  }

  return (
    <button onClick={onClick}>
      <i className="bi bi-arrow-clockwise"></i>
    </button>
  )
}
