import { formatDistance } from "date-fns"
import { createSelector } from "@reduxjs/toolkit"

import {
  findNextService,
  END_OF_SERVICE,
  getBusService,
  getBusServicesAfter,
} from "../timetable-type"
import ServiceRow from "./ServiceRow"
import { selectCurrentTimetable } from "../reducers/direction"
import { selectCurrentTime } from "../reducers/time"
import { useSelector } from "../store"
import { noService } from "../service"
import RefreshButton from "./RefreshButton"

const arrivesTime = (service: Date[]) => {
  return service[service.length - 1]
}

const selectNextServiceIndex = createSelector(
  [
    selectCurrentTime,
    selectCurrentTimetable,
    (state) => state.direction.currentStop,
  ],
  (currentTime, timetable, stop) => {
    return findNextService(timetable, stop, currentTime)
  }
)

export default function TimetableView() {
  const timetable = useSelector(selectCurrentTimetable)
  const selectedStop = useSelector((state) => state.direction.currentStop)
  const currentTime = useSelector(selectCurrentTime)
  const nextServiceIndex = useSelector(selectNextServiceIndex)

  // useEffect(() => {
  //   const timer = setInterval(() => refreshTime(), 90000)
  //   return () => clearInterval(timer)
  // }, [])

  if (nextServiceIndex === END_OF_SERVICE || noService(currentTime)) {
    return (
      <>
        <h2 className="text-2xl">
          No more uni buses today <RefreshButton />
        </h2>
      </>
    )
  }

  const nextService = getBusService(timetable, nextServiceIndex, currentTime)
  const servicesAfter = getBusServicesAfter(
    timetable,
    nextServiceIndex + 1,
    currentTime
  )

  const nextBusMarkup = (
    <div className="border-b dark:border-gray-800">
      <h2 className="text-2xl">
        Next uni bus in {formatDistance(nextService[selectedStop], currentTime)}{" "}
        <RefreshButton />
      </h2>
      <ServiceRow
        time={nextService[selectedStop]}
        arrives={arrivesTime(nextService)}
      />
      {servicesAfter.length === 0 ? (
        <p className="pt-1">Last bus of the day</p>
      ) : null}
    </div>
  )

  const busesAfterMarkup =
    servicesAfter.length !== 0 ? (
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
    ) : null

  return (
    <>
      {nextBusMarkup}
      {busesAfterMarkup}
    </>
  )
}
