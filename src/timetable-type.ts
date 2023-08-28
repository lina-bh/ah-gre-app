import { parse, isBefore } from "date-fns"

export interface Timetable {
  stops: string[]
  times: string[][]
}

export enum Stop {
  AH = "Avery Hill",
  FCN = "Falconwood Station",
  GRE = "Queen Anne Court",
  ELW = "Eltham Station",
  ELT = "Eltham High Street (stop L)",
}

export const reducedNorth: Timetable = {
  stops: [Stop.AH, Stop.FCN, Stop.GRE],
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
}
export const reducedSouth: Timetable = {
  stops: [Stop.GRE, Stop.ELW, Stop.ELT, Stop.AH],
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
}

export const END_OF_SERVICE = null

function parseTime(time: string, refDate: Date): Date {
  return parse(time, "HHmm", refDate)
}

export function getBusService(
  timetable: Timetable,
  index: number,
  currentTime: Date
): Date[] {
  return timetable.times[index].map((time) => parseTime(time, currentTime))
}

export function getBusServicesAfter(
  timetable: Timetable,
  startIndex: number,
  currentTime: Date
): Date[][] {
  return timetable.times
    .slice(startIndex)
    .map((times) => times.map((time) => parseTime(time, currentTime)))
}

export function findNextService(
  timetable: Timetable,
  stop: number,
  time: Date
): number | null {
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
