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
  // const matches = /(\d{2,2})(\d{2,2})/.exec(timeString)
  // if (!matches) {
  //   throw new Error("invalid time string: " + timeString)
  // }
  // const time = { hour: int(matches[1]), minute: int(matches[2]) }
  timeString = timeString.padStart(4, "0")
  const time = {
    hour: int(timeString.slice(0, 2)),
    minute: int(timeString.slice(2)),
  }
  if (time.minute >= 60) {
    throw new Error("minutes more than 59: " + timeString)
  }
  if (time.hour > 23) {
    throw new Error("hours more than 23: " + timeString)
  }
  return time
}

export const timeToHHMM = (time: Time) =>
  `${time.hour.toString(10).padStart(2, "0")}\
${time.minute.toString(10).padStart(2, "0")}`

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

export const timeAddMins = (time: Time, mins: number): Time => {
  let newMins = time.minute + mins
  if (newMins < 60) {
    return { ...time, minute: newMins }
  }
  let newHour = time.hour + 1
  if (newHour >= 24) {
    newHour = 0
  }
  newMins = newMins % 60
  return { hour: newHour, minute: newMins }
}
