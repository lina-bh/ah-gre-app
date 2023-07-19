import { create } from "zustand"
// import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

import { createTimetable } from "./data/timetable"

const useStore = create(
  immer((set) => ({
    timetables: [],
    newTimetable: (name) => {
      const newTt = createTimetable(name)
      set((state) => {
        state.timetables.push(newTt)
      })
    },
    updateTimetable: (timetable, index) => {
      set((state) => {
        state.timetables[index] = timetable
      })
    },
    selectedTimetable: null,
    selectTimetable: (index) => {
      set((state) => {
        state.selectedTimetable = index
      })
    },
  }))
)

export { useStore }
