import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { Time, createTime } from "./models/time"
import { Timetable } from "./models/timetable"
import { fetchTimetable } from "./models/timetable/data"

interface Store {
  southbound: boolean
  stop: number
  time: Time
  date: Date
  timetable: Timetable | null
}

interface Actions {
  directionChanged: (direction: boolean) => void
  stopChanged: (stop: number) => void
  timeRefreshed: () => void
  timetableUpdated: () => Promise<void>
}

export const useStore = create<Store & Actions>()(
  devtools((set, get) => {
    const date = new Date()
    return {
      southbound: false,
      stop: 0,
      date,
      time: createTime(date),
      timetable: null,
      directionChanged: (southbound) =>
        set(
          () => ({
            southbound,
          }),
          false,
          "directionChanged"
        ),
      stopChanged: (stop) =>
        set(
          () => ({
            stop,
          }),
          false,
          "stopChanged"
        ),
      timeRefreshed: () => {
        const date = new Date()
        set(() => ({ date, time: createTime(date) }), false, "timeRefreshed")
      },
      timetableUpdated: async () => {
        const timetable = await fetchTimetable(
          get().southbound ? "southbound" : "northbound"
        )
        set(() => ({ timetable }), false, "timetableUpdated")
      },
    }
  })
)

export const useCurrentTime = () => useStore((state) => state.time)
