import { Time, timeDisplay } from "../models/time"

interface ServiceRowProps {
  time: Time
  arrives: Time
}

export default function ServiceRow(props: ServiceRowProps) {
  return (
    <div className="flex justify-between tabular-nums">
      <p className="my-auto text-4xl">{timeDisplay(props.time)}</p>
      <div className="mb-auto text-right">
        <p>Arrives</p>
        <p>{timeDisplay(props.arrives)}</p>
      </div>
    </div>
  )
}
