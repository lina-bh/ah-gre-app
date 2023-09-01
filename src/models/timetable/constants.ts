import { createTimetable, type Timetable } from "./interface"

export enum Stop {
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
