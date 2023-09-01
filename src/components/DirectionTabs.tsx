import { useStore } from "../zustand-store"

const NORTHBOUND = false
const SOUTHBOUND = true

const options = [
  { thisDirection: NORTHBOUND, name: "Greenwich" },
  { thisDirection: SOUTHBOUND, name: "Avery Hill" },
]

const DirectionTabs = () => {
  const direction = useStore((state) => state.southbound)
  const directionChanged = useStore((state) => state.directionChanged)
  const stopChanged = useStore((state) => state.stopChanged)

  const onChangeDirection = (direction: boolean) => {
    directionChanged(direction)
    stopChanged(0)
  }

  return (
    <div className="flex">
      {options.map(({ thisDirection, name }) => (
        <div className="w-full" key={name}>
          <input
            id={`${name}Tab`}
            name={`${name}Tab`}
            type="radio"
            checked={direction === thisDirection}
            onChange={() => onChangeDirection(thisDirection)}
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
