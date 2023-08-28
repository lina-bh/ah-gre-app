import { format as formatDate } from "date-fns"

interface ServiceRowProps {
  time: Date
  arrives: Date
}

function formatTime(date: Date) {
  return formatDate(date, "HH:mm")
}

export default function ServiceRow(props: ServiceRowProps) {
  return (
    <div className="flex justify-between tabular-nums">
      <p className="my-auto text-4xl">{formatTime(props.time)}</p>
      <div className="mb-auto text-right">
        <p>Arrives</p>
        <p>{formatTime(props.arrives)}</p>
      </div>
    </div>
  )
}
