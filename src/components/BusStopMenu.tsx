import { useDispatch } from "react-redux"
import { ChangeEvent } from "react"

import { useSelector } from "../store"
import { changeOfStop, selectCurrentTimetable } from "../reducers/direction"

export default function BusStopMenu() {
  const currentStop = useSelector((state) => state.direction.currentStop)
  const timetable = useSelector(selectCurrentTimetable)
  const dispatch = useDispatch()

  const onChangeStop = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeOfStop(parseInt(event.target.value, 10)))
  }

  const stops = timetable.stops.slice(0, -1)

  return (
    <select
      value={currentStop}
      onChange={onChangeStop}
      className="w-full py-1.5 border dark:text-black rounded-none"
    >
      {stops.map((stop, i) => (
        <option value={i} key={i}>
          {stop}
        </option>
      ))}
    </select>
  )
}
