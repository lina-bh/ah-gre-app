import { useCurrentTimetable, useCurrentTime, useStore } from "../zustand-store"
import {
  getBusService,
  getBusServicesAfter,
  findNextService,
} from "../models/timetable"
import RefreshButton from "./RefreshButton"
import ServiceRow from "./ServiceRow"
import { timeToTimeInMins } from "../models/time"

const arrivesTime = <T,>(service: T[]): T => {
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
  const nextService = getBusService(timetable, nextServiceIndex)
  const servicesAfter = getBusServicesAfter(timetable, nextServiceIndex + 1)

  const minutes = timeToTimeInMins(currentTime, nextService[selectedStop])

  return (
    <>
      <div className="border-b dark:border-gray-800">
        <h2 className="text-2xl">
          Next uni bus in {minutes >= 60 ? "an hour" : `${minutes} minutes`}{" "}
          <RefreshButton />
        </h2>
        <ServiceRow
          time={nextService[selectedStop]}
          arrives={arrivesTime(nextService)}
        />
      </div>
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
    </>
  )
}

export default Departures
