import useSWRImmutable from "swr/immutable"

import { useStore } from "../../zustand-store"
import { Timetable } from "."
import { createTimetable } from "./interface"
import reducedNorth from "../../assets/reducedNorth.json?url"
import reducedSouth from "../../assets/reducedSouth.json?url"
import northbound from "../../assets/northbound.json?url"
import southbound from "../../assets/southbound.json?url"

const urls = {
  northbound,
  southbound,
  reducedNorth,
  reducedSouth,
}

// const memory = {
//   northbound: null,
//   southbound: null,
//   reducedNorth: null,
//   reducedSouth: null,
// }

export const fetchTimetable = async (name: string): Promise<Timetable> => {
  // if (memory[name]) {
  //   return memory[name]
  // }
  const res = await fetch(urls[name])
  const json = await res.json()
  const timetable = createTimetable(json)
  // memory[name] = timetable
  return timetable
}

export const useCurrentTimetable = () => {
  const southbound = useStore((state) => state.southbound)
  const name = southbound ? "southbound" : "northbound"
  const tuple = useSWRImmutable(name, fetchTimetable)
  return tuple.data
}
