import { parse, isBefore, sub as subDate } from "date-fns/esm"

import { NORTHBOUND } from "./reducers/direction"

interface Timetable {
  stops: string[]
  times: Date[][]
}

const createTimetable = (data: {
  stops: string[]
  times: string[][]
}): Timetable => {
  const refDate = new Date()
  return {
    stops: data.stops.slice(),
    times: data.times.map((service: string[]) =>
      service.map((timeString: string) => parse(timeString, "HHmm", refDate))
    ),
  }
}

export const reducedNorth = createTimetable({
  stops: ["Avery Hill", "Falconwood Station", "Greenwich Campus"],
  times: [
    ["0800", "0803", "0840"],
    ["0930", "0933", "0955"],
    ["1030", "1033", "1055"],
    ["1130", "1133", "1155"],
    ["1230", "1233", "1255"],
    ["1330", "1333", "1355"],
    ["1430", "1433", "1455"],
    ["1530", "1533", "1555"],
    ["1630", "1633", "1655"],
    ["1715", "1718", "1745"],
  ],
})
export const reducedSouth = createTimetable({
  stops: [
    "Queen Anne Court",
    "Eltham Station",
    "Eltham High Street (stop L)",
    "Avery Hill",
  ],
  times: [
    ["0815", "0835", "0837", "0840"],
    ["0930", "0950", "0952", "0955"],
    ["1030", "1050", "1052", "1055"],
    ["1130", "1150", "1152", "1155"],
    ["1230", "1250", "1252", "1255"],
    ["1330", "1350", "1352", "1355"],
    ["1430", "1450", "1452", "1455"],
    ["1530", "1550", "1552", "1555"],
    ["1630", "1650", "1652", "1655"],
    ["1715", "1735", "1737", "1740"],
    ["1800", "1820", "1822", "1825"],
  ],
})

export const currentTimetable = (direction: boolean): Timetable => {
  return direction === NORTHBOUND ? reducedNorth : reducedSouth
}

export const END_OF_SERVICE = -1

export function findNextService(
  timetable: Timetable,
  stop: number,
  time?: Date
): number {
  time ??= new Date()
  const times = timetable.times.map((service) =>
    subDate(service[stop], { minutes: 10 })
  )
  for (let i = 0; i < times.length; i++) {
    if (isBefore(time, times[i])) {
      return i
    }
  }
  return END_OF_SERVICE
}

export { type Timetable }
