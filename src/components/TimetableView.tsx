import { useState, useEffect } from "react"
import { formatDistanceToNow } from "date-fns/esm"

import {
  currentTimetable,
  findNextService,
  END_OF_SERVICE,
} from "../timetable-type"
import { useSelector } from "../store"
import StopMenu from "./StopMenu"
import ServiceRow from "./ServiceRow"

const arrivesTime = (service: Date[]) => {
  return service[service.length - 1]
}

export default function TimetableView() {
  const direction = useSelector((state) => state.direction.value)
  const timetable = currentTimetable(direction)
  const { stops, times } = timetable

  const [selectedStop, setSelectedStop] = useState(0)
  const [currentTime, setCurrentTime] = useState(() => new Date())

  const nextServiceIndex = findNextService(timetable, selectedStop, currentTime)
  const nextService = times[nextServiceIndex]

  const refreshTime = () => {
    setCurrentTime(new Date())
  }

  useEffect(() => {
    setSelectedStop(0)
  }, [direction])

  useEffect(() => {
    const timer = setInterval(() => refreshTime())
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="px-1">
      <StopMenu
        stops={stops.slice(0, -1)}
        {...{ selectedStop, setSelectedStop }}
      />

      {nextServiceIndex !== END_OF_SERVICE ? (
        <div>
          <h2 className="text-2xl">
            Next uni bus in {formatDistanceToNow(nextService[selectedStop])}{" "}
            <button onClick={refreshTime} className="inline">
              <i className="bi bi-arrow-clockwise"></i>
            </button>
          </h2>
          <ServiceRow
            time={nextService[selectedStop]}
            arrives={arrivesTime(nextService)}
          />
          <h2 className="text-xl">Following buses:</h2>
          {times.slice(nextServiceIndex + 1).map((service, i) => (
            <div key={i} className="pt-[0.5em]">
              <ServiceRow
                time={service[selectedStop]}
                arrives={arrivesTime(service)}
              />
            </div>
          ))}
        </div>
      ) : (
        "End of service."
      )}
    </div>
  )
}