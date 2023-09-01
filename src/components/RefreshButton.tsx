import { ComponentPropsWithoutRef } from "react"

import { useStore } from "../zustand-store"

export default function RefreshButton(
  props: ComponentPropsWithoutRef<"button">
) {
  const timeRefreshed = useStore((state) => state.timeRefreshed)

  const onClick = () => {
    timeRefreshed()
  }

  return (
    <button {...props} onClick={onClick}>
      <i className="bi bi-arrow-clockwise"></i>
    </button>
  )
}
