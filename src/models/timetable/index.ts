import { type Timetable } from "./interface"
import bankHolidays from "../bank-holidays"
import { type Time, createTime, timeIsBefore } from "../time"

export const END_OF_SERVICE = null

export enum ServiceStatus {
  RUNNING = 0,
  NOT_RUNNING,
  END_OF_SERVICE,
}

export const getBusService = (timetable: Timetable, index: number): Time[] =>
  timetable.times[index]

export const getBusServicesAfter = (
  timetable: Timetable,
  startIndex: number
): Time[][] => timetable.times.slice(startIndex)

export const findNextService = (
  timetable: Timetable,
  stop: number,
  time: Time
): number | null => {
  // linear search. it's fine honestly
  const times = timetable.times.map((service) => service[stop])
  for (let i = 0; i < times.length; i++) {
    if (timeIsBefore(time, times[i])) {
      return i
    }
  }
  return null
}

const isWeekend = (date: Date): boolean => {
  const day = date.getDay()
  return day === 0 || day === 6
}

const isSameDay = (then: Date, now: Date): boolean =>
  then.getDate() === now.getDate() &&
  then.getMonth() === now.getMonth() &&
  then.getFullYear() === now.getFullYear()

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
  const lastTime = allTimes[allTimes.length - 1]
  if (timeIsBefore(lastTime, createTime(now))) {
    return ServiceStatus.END_OF_SERVICE
  }

  return ServiceStatus.RUNNING
}

// TODO fix this for christmas
// const isReduced = (day: Date): boolean => {}

export { type Timetable } from "./interface"
