import { useDispatch } from "react-redux"

import { useSelector } from "../store"
import { setDirection, NORTHBOUND, SOUTHBOUND } from "../reducers/direction"

const DirectionTabs = () => {
  const direction = useSelector((state) => state.direction.value)
  const dispatch = useDispatch()

  const options = [
    { thisDirection: NORTHBOUND, name: "Greenwich" },
    { thisDirection: SOUTHBOUND, name: "Avery Hill" },
  ]

  return (
    <div className="flex">
      {options.map(({ thisDirection, name }, i) => (
        <div className="w-full" key={i}>
          <input
            id={`${name}Tab`}
            name={`${name}Tab`}
            type="radio"
            checked={direction === thisDirection}
            onChange={() => dispatch(setDirection(thisDirection))}
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
