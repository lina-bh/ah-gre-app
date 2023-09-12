import { timeAddMins, timeFromHHMM, timeToHHMM, Time } from "../src/models/time"

export interface Timetable {
  stops: string[]
  times: Time[][]
}

const createTimetable = (initialValue: {
  stops: string[]
  times: string[][]
}): Timetable => ({
  stops: initialValue.stops.slice(),
  times: initialValue.times.map((service) =>
    service.map((time) => timeFromHHMM(time))
  ),
})

enum Stop {
  AH = "Avery Hill",
  FCN = "Falconwood Station",
  GRE = "Queen Anne Court",
  ELW = "Eltham Station",
  ELT = "Eltham High Street (stop L)",
}

export const reducedNorth: Timetable = createTimetable({
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
})

export const reducedSouth: Timetable = createTimetable({
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
})

const regularNorthboundService = (ts: string) => {
  const departure = timeFromHHMM(ts)
  const fcn = timeAddMins(departure, 3)
  const terminus = timeAddMins(departure, 25)
  return [ts, timeToHHMM(fcn), timeToHHMM(terminus)]
}

export const northbound = createTimetable({
  stops: [Stop.AH, Stop.FCN, Stop.GRE],
  times: [
    ["0745", "0748", "0820"],
    ["0800", "0803", "0840"],
    ["0830", "0833", "0910"],
    ...[
      "0930",
      "1000",
      "1030",
      "1100",
      "1130",
      "1200",
      "1230",
      "1300",
      "1330",
      "1400",
      "1430",
      "1500",
      "1530",
      "1600",
      "1630",
    ].map(regularNorthboundService),
    ["1715", "1718", "1745"],
    ...["1730", "1815", "1915", "2015", "2115", "2215"].map(
      regularNorthboundService
    ),
  ],
})

export const timetableToJSON = (timetable: Timetable) =>
  JSON.stringify({
    stops: timetable.stops,
    times: timetable.times.map((service) => service.map(timeToHHMM)),
  })

const regularSouthboundService = (timeString: string) => {
  const departure = timeFromHHMM(timeString)
  const elw = timeAddMins(departure, 20)
  const elt = timeAddMins(departure, 22)
  const terminus = timeAddMins(departure, 25)
  return [timeString, timeToHHMM(elw), timeToHHMM(elt), timeToHHMM(terminus)]
}

export const southbound = createTimetable({
  stops: [Stop.GRE, Stop.ELW, Stop.ELT, Stop.AH],
  times: [
    ...[
      "0815",
      "0830",
      "0900",
      "0930",
      "1000",
      "1030",
      "1100",
      "1130",
      "1200",
      "1230",
      "1300",
      "1330",
      "1400",
      "1430",
      "1500",
      "1530",
      "1600",
      "1630",
      "1700",
      "1715",
      "1730",
      "1800",
      "1830",
      "1915",
      "2015",
      "2115",
      "2145",
      "2245",
    ].map(regularSouthboundService),
  ],
})
