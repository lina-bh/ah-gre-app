import alphanumeric from "../alphanumeric.js"

type Timetable = {
  name: string
  stops: Array<string>
  times: Array<Array<string>>
}

const createTimetable = (name: string): Timetable => {
  for (const c of name) {
    if (!alphanumeric(c)) {
      throw new Error("out of alphanumeric space")
    }
  }
  return {
    name,
    stops: [],
    times: [],
  }
}

const addStop = (timetable: Timetable, stopName: string): Timetable => {
  return { ...timetable, stops: [...timetable.stops, stopName] }
}

const renameStop = (
  timetable: Timetable,
  index: number,
  newName: string
): Timetable => {
  return {
    ...timetable,
    stops: timetable.stops.map((oldName, i) =>
      i === index ? newName : oldName
    ),
  }
}

const addTimes = (timetable: Timetable): Timetable => {
  return { ...timetable, times: [...timetable.times, []] }
}

export { createTimetable, addStop, addTimes, renameStop }
