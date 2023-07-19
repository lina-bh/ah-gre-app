import { useState, useRef } from "react"

const ExpandingNewBox = ({ onNew, initialText }) => {
  const [enterState, setEnterState] = useState(false)
  const inputRef = useRef(null)

  const onCancel = () => {
    if (inputRef.current) {
      inputRef.current.value = ""
    }
    setEnterState(false)
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    onNew(inputRef.current.value)
    onCancel()
  }

  return (
    <>
      {!enterState ? (
        <button type="button" onClick={() => setEnterState(true)}>
          {initialText ?? <i className="bi-plus-square-fill"></i>}
        </button>
      ) : (
        <form onSubmit={onSubmit} className="inline-block outline outline-1">
          <input type="text" ref={inputRef} />
          <button>
            <i className="bi-arrow-return-left"></i>
          </button>
          <button onClick={onCancel}>
            <i className="bi-x-square-fill"></i>
          </button>
        </form>
      )}
    </>
  )
}

export default ExpandingNewBox
