import { formatDistance } from "date-fns"

import { useCurrentTimetable, useCurrentTime, useStore } from "../zustand-store"
import {
  getBusService,
  getBusServicesAfter,
  findNextService,
} from "../models/timetable"
import RefreshButton from "./RefreshButton"
import ServiceRow from "./ServiceRow"

const arrivesTime = (service: Date[]) => {
  return service[service.length - 1]
}

const Departures = () => {
  const timetable = useCurrentTimetable()
  const selectedStop = useStore((state) => state.stop)
  const currentTime = useCurrentTime()

  const nextServiceIndex = findNextService(
    timetable,
    selectedStop,
    currentTime
  )!
  const nextService = getBusService(timetable, nextServiceIndex, currentTime)
  const servicesAfter = getBusServicesAfter(
    timetable,
    nextServiceIndex + 1,
    currentTime
  )

  return (
    <div className="border-b dark:border-gray-800">
      <h2 className="text-2xl">
        Next uni bus in {formatDistance(nextService[selectedStop], currentTime)}{" "}
        <RefreshButton />
      </h2>
      <ServiceRow
        time={nextService[selectedStop]}
        arrives={arrivesTime(nextService)}
      />
      {servicesAfter.length < 1 ? (
        <p className="pt-1">Last bus of the day</p>
      ) : (
        <>
          <h2 className="pt-2 text-xl">Following buses:</h2>
          {servicesAfter.map((service, i) => (
            <div key={i} className="py-1 border-b dark:border-gray-800">
              <ServiceRow
                time={service[selectedStop]}
                arrives={arrivesTime(service)}
              />
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default Departures
