import { useState } from "react"

import NewBox from "./NewBox"
import TimetableTabs from "./TimetableTabs"
import TimetableView from "./TimetableView"
import { createTimetable } from "../data/timetable"
import { useStore } from "../store"

const App = () => {
  // const [timetables, setTimetables] = useState(() => [])
  const s = useStore()

  const onUpdateTimetable = (newTt) => {
    // setTimetables(
    //   timetables.map((oldTt, idx) => (idx === selected ? newTt : oldTt))
    // )
    s.updateTimetable(newTt, s.selectedTimetable)
  }

  const onNew = (name) => {
    s.newTimetable(name)
    // s.selectTimetable(s.timetables.length - 1)
  }

  return (
    <>
      <TimetableTabs
        selected={s.selectedTimetable}
        timetables={s.timetables}
        onChange={s.selectTimetable}
        onNew={onNew}
      ></TimetableTabs>
      {s.selectedTimetable != null ? (
        <TimetableView
          timetable={s.timetables[s.selectedTimetable]}
          onUpdate={onUpdateTimetable}
        />
      ) : null}
    </>
  )
}

export default App
