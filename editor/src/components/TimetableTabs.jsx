// import { useState, useRef } from "react"

import ExpandingNewBox from "./ExpandingNewBox"

const TimetableTabs = ({ selected, onChange, timetables, onNew }) => {
  return (
    <div>
      {timetables.map((tt, idx) => (
        <span key={idx}>
          <label>
            <input
              type="radio"
              checked={idx == selected}
              onChange={() => onChange(idx)}
              // className="hidden"
            />
            <span className="px-1">{tt.name}</span>
          </label>
        </span>
      ))}
      <ExpandingNewBox onNew={onNew} />
    </div>
  )
}

export default TimetableTabs
