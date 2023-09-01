import { Time, timeFromHHMM } from "../time"

export interface Timetable {
  stops: string[]
  times: Time[][]
}

export const createTimetable = (initialValue: {
  stops: string[]
  times: string[][]
}): Timetable => ({
  stops: initialValue.stops.slice(),
  times: initialValue.times.map((service) =>
    service.map((time) => timeFromHHMM(time))
  ),
})
