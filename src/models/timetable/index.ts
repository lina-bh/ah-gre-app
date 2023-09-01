import { parse, isBefore, isWeekend, isSameDay } from "date-fns"

import { type Timetable } from "./interface"
import bankHolidays from "../bank-holidays"

export const END_OF_SERVICE = null

const parseTime = (time: string, refDate: Date): Date =>
  parse(time, "HHmm", refDate)

export enum ServiceStatus {
  RUNNING = 0,
  NOT_RUNNING,
  END_OF_SERVICE,
}

export const getBusService = (
  timetable: Timetable,
  index: number,
  currentTime: Date
): Date[] => timetable.times[index].map((time) => parseTime(time, currentTime))

export const getBusServicesAfter = (
  timetable: Timetable,
  startIndex: number,
  currentTime: Date
): Date[][] =>
  timetable.times
    .slice(startIndex)
    .map((times) => times.map((time) => parseTime(time, currentTime)))

export const findNextService = (
  timetable: Timetable,
  stop: number,
  time: Date
): number | null => {
  const times = timetable.times.map(
    (service) => () => parseTime(service[stop], time)
  )
  for (let i = 0; i < times.length; i++) {
    if (isBefore(time, times[i]())) {
      return i
    }
  }
  return null
}

export const hasNoService = (
  timetable: Timetable,
  stop: number,
  now: Date
): ServiceStatus => {
  if (isWeekend(now)) {
    return ServiceStatus.NOT_RUNNING
  }
  if (bankHolidays.some((holiday) => isSameDay(now, holiday))) {
    return ServiceStatus.NOT_RUNNING
  }

  const allTimes = timetable.times.map((service) => service[stop])
  const lastTime = parseTime(allTimes[allTimes.length - 1], now)
  if (isBefore(lastTime, now)) {
    return ServiceStatus.END_OF_SERVICE
  }

  return ServiceStatus.RUNNING
}

export { type Timetable } from "./interface"
export { reducedNorth, reducedSouth } from "./constants"
