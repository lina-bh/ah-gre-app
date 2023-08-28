import { Setter } from "../setter"

export default function StopMenu(props: {
  stops: string[]
  selectedStop: number
  setSelectedStop: Setter<number>
}) {
  return (
    <select
      value={props.selectedStop}
      onChange={(e) => props.setSelectedStop(parseInt(e.target.value, 10))}
      className="w-full py-1.5 border dark:text-black rounded-none"
    >
      {props.stops.map((stop, i) => (
        <option value={i} key={i}>
          {stop}
        </option>
      ))}
    </select>
  )
}
