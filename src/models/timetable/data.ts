import useSWRImmutable from "swr/immutable"

import { useStore } from "../../zustand-store"
import { Timetable } from "."
import { createTimetable } from "./interface"

// const resolvePublicURL = (path: string): string => {
//   const url = new URL(path, import.meta.env.BASE_URL)
//   return url.href
// }

const urls = {
  northbound: import.meta.env.BASE_URL + "/northbound.json",
  southbound: import.meta.env.BASE_URL + "/southbound.json",
} as const

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
