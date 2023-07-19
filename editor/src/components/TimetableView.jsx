import { addStop } from "../data/timetable"
import ExpandingNewBox from "./ExpandingNewBox"
import { useState, useRef } from "react"

const StopHeadItem = ({ idx, onEdit, children }) => {
  const [editState, setEditState] = useState(false)
  const [width, setWidth] = useState(null)
  const cellRef = useRef(null)
  const inputRef = useRef(null)

  const enterEditState = () => {
    if (cellRef.current) {
      setWidth(cellRef.current.offsetWidth)
    }
    setEditState(true)
  }

  const onSubmit = () => {}

  return (
    <th ref={cellRef} className="border border-black px-[1ch]">
      {!editState ? (
        <button type="button" onClick={enterEditState}>
          {children}
        </button>
      ) : (
        <form onSubmit={(ev) => ev.preventDefault()}>
          <input type="text" style={{ width: `calc(${width}px - 2ch)` }} />
          <button type="submit">
            <i className="bi-arrow-return-left"></i>
          </button>
        </form>
      )}
    </th>
  )
}

const TimeTableHeader = ({ stops, onNew }) => {
  return (
    <thead className="bg-slate-200">
      <tr>
        {stops.length != 0 ? (
          stops.map((stop, i) => (
            <StopHeadItem key={i} idx={i}>
              {stop}
            </StopHeadItem>
          ))
        ) : (
          <th className="border border-black">no stops yet</th>
        )}
        <th className="border border-black">
          <ExpandingNewBox
            onNew={onNew}
            initialText={
              <span className="text-blue-600 underline">add stop</span>
            }
          />
        </th>
      </tr>
    </thead>
  )
}

const TimetableView = ({ timetable, onUpdate }) => {
  const onClickAddStop = (name) => {
    timetable = addStop(timetable, name)
    onUpdate(timetable)
  }

  return (
    <div>
      <button type="button">export</button>
      <table>
        <TimeTableHeader stops={timetable.stops} onNew={onClickAddStop} />
        <tbody>
          <tr>
            {timetable.stops.map((_, idx) => (
              <td key={idx} className="border border-black">
                something
              </td>
            ))}
            <td className="border border-black"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TimetableView
