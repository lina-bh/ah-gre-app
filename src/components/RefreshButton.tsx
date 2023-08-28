import { ComponentPropsWithoutRef } from "react"
import { useDispatch } from "react-redux"

import { timeRefreshed } from "../reducers/time"

export default function RefreshButton(
  props: ComponentPropsWithoutRef<"button">
) {
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(timeRefreshed())
  }
  return (
    <button {...props} onClick={onClick}>
      <i className="bi bi-arrow-clockwise"></i>
    </button>
  )
}
