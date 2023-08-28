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
            className="block text-center w-full border-b-[6px] border-gray-400 peer-checked:border-gre-blue py-2 transition-colors duration-300"
          >
            towards <strong>{name}</strong>
          </label>
        </div>
      ))}
    </div>
  )
}

export default DirectionTabs
