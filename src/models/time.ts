import int from "../int"

export interface Time {
  hour: number
  minute: number
}

export const createTime = (now?: Date): Time => {
  now ??= new Date()
  return { hour: now.getHours(), minute: now.getMinutes() }
}

export const timeFromHHMM = (timeString: string): Time => {
  const matches = /(\d{2,2})(\d{2,2})/.exec(timeString)
  if (!matches) {
    throw new Error("invalid time string: " + timeString)
  }
  const time = { hour: int(matches[1]), minute: int(matches[2]) }
  if (time.minute >= 60) {
    throw new Error("minutes more than 59: " + timeString)
  }
  if (time.hour > 23) {
    throw new Error("hours more than 23: " + timeString)
  }
  return time
}

export const timeDisplay = (time: Time): string => {
  const hour = time.hour.toString().padStart(2, "0")
  const minute = time.minute.toString().padStart(2, "0")
  return `${hour}:${minute}`
}

const timeMinuteOfDay = (time: Time) => time.hour * 60 + time.minute

export const timeToTimeInMins = (present: Time, future: Time): number => {
  const past = timeMinuteOfDay(present)
  const toCome = timeMinuteOfDay(future)
  const dist = toCome - past
  return dist
}

export const timeIsBefore = (there: Time, then: Time): boolean =>
  timeToTimeInMins(there, then) > 0
