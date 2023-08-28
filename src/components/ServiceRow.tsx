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
    <div className="flex justify-between">
      <p className="text-3xl">{formatTime(props.time)}</p>
      <div className="mt-auto text-right">
        {props.distance && "in " + formatDistanceToNow(props.time)}
        <p>Arrives {formatTime(props.arrives)}</p>
      </div>
    </div>
  )
}
