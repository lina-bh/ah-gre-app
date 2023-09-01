import { useCurrentTimetable, useStore } from "../zustand-store"

export default function BusStopMenu() {
  const currentStop = useStore((state) => state.stop)
  const stopChanged = useStore((state) => state.stopChanged)
  const timetable = useCurrentTimetable()

  const onChangeStop = (event) => {
    const stop = parseInt(event.target.value, 10)
    stopChanged(stop)
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
