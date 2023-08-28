import { useDispatch } from "react-redux"

import { useSelector } from "../store"
import {
  NORTHBOUND,
  SOUTHBOUND,
  Direction,
  changeOfDirection,
  changeOfStop,
} from "../reducers/direction"

const options = [
  { thisDirection: NORTHBOUND, name: "Greenwich" },
  { thisDirection: SOUTHBOUND, name: "Avery Hill" },
]

const DirectionTabs = () => {
  const direction = useSelector((state) => state.direction.southbound)
  const dispatch = useDispatch()

  const onChangeStop = (direction: Direction) => {
    dispatch(changeOfDirection(direction))
    dispatch(changeOfStop(0))
  }

  return (
    <div className="flex">
      {options.map(({ thisDirection, name }, i) => (
        <div className="w-full" key={i}>
          <input
            id={`${name}Tab`}
            name={`${name}Tab`}
            type="radio"
            checked={direction === thisDirection}
            onChange={() => onChangeStop(thisDirection)}
            className="hidden peer"
          />
          <label
            htmlFor={`${name}Tab`}
            className="block w-full py-2 text-center text-white transition-colors duration-300 bg-gray-400 cursor-pointer peer-checked:bg-gre-blue"
          >
            towards <strong>{name}</strong>
          </label>
        </div>
      ))}
    </div>
  )
}

export default DirectionTabs
