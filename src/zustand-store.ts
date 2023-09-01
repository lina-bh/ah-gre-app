import { create } from "zustand"
// import dayjs, { Dayjs } from "dayjs"
import { reducedNorth, reducedSouth } from "./models/timetable"
import { parseJSON } from "date-fns"

interface Store {
  southbound: boolean
  stop: number
  time: string
}

interface Actions {
  directionChanged: (direction: boolean) => void
  stopChanged: (stop: number) => void
  timeRefreshed: () => void
}

export const useStore = create<Store & Actions>()((set) => ({
  southbound: false,
  stop: 0,
  time: JSON.stringify(new Date()),
  directionChanged: (southbound) =>
    set(() => ({
      southbound,
    })),
  stopChanged: (stop) =>
    set(() => ({
      stop,
    })),
  timeRefreshed: () => set(() => ({ time: JSON.stringify(new Date()) })),
}))

export const useCurrentTimetable = () => {
  const southbound = useStore((state) => state.southbound)
  return southbound ? reducedSouth : reducedNorth
}

export const useCurrentTime = () => parseJSON(useStore((state) => state.time))
