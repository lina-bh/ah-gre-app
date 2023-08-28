import { formatDistanceToNow, format as formatDate } from "date-fns/esm"

interface ServiceRowProps {
  time: Date
  arrives: Date
  distance?: boolean
}

function formatTime(date: Date) {
  return formatDate(date, "HH:mm")
}

export default function ServiceRow(props: ServiceRowProps) {
  return (
    <div className="flex justify-between tabular-nums">
      <p className="my-auto text-4xl">{formatTime(props.time)}</p>
      <div className="mb-auto text-right">
        {props.distance && "in " + formatDistanceToNow(props.time)}
        <p>Arrives</p>
        <p>{formatTime(props.arrives)}</p>
      </div>
    </div>
  )
}
