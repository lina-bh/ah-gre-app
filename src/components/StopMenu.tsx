import { Setter } from "../setter"

export default function StopMenu(props: {
  stops: string[]
  selectedStop: number
  setSelectedStop: Setter<number>
}) {
  return (
    <div className="flex gap-x-1">
      <select
        value={props.selectedStop}
        onChange={(e) => props.setSelectedStop(parseInt(e.target.value, 10))}
        className="w-full border"
      >
        {props.stops.map((stop, i) => (
          <option value={i} key={i}>
            {stop}
          </option>
        ))}
      </select>
    </div>
  )
}
