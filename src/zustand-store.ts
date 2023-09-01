import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { reducedNorth, reducedSouth } from "./models/timetable"
import { Time, createTime } from "./models/time"

interface Store {
  southbound: boolean
  stop: number
  time: Time
  date: Date
}

interface Actions {
  directionChanged: (direction: boolean) => void
  stopChanged: (stop: number) => void
  timeRefreshed: () => void
}

export const useStore = create<Store & Actions>()(
  devtools((set) => {
    const date = new Date()
    return {
      southbound: false,
      stop: 0,
      date,
      time: createTime(date),
      directionChanged: (southbound) =>
        set(() => ({
          southbound,
        })),
      stopChanged: (stop) =>
        set(() => ({
          stop,
        })),
      timeRefreshed: () => {
        const date = new Date()
        set(() => ({ date, time: createTime(date) }))
      },
    }
  })
)

export const useCurrentTimetable = () => {
  const southbound = useStore((state) => state.southbound)
  return southbound ? reducedSouth : reducedNorth
}

export const useCurrentTime = () => useStore((state) => state.time)
