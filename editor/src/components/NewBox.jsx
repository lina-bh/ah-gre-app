import { useState, useRef } from "react"

const NewBox = ({ onNew, typeName }) => {
  const [errorText, setErrorText] = useState(null)
  const inputRef = useRef(null)

  const onClickNew = (ev) => {
    ev.preventDefault()
    const name = inputRef.current.value
    if (name === "") {
      return
    }
    try {
      onNew(name)
      setErrorText(null)
    } catch (e) {
      setErrorText(e.message)
      console.error(e)
      return
    }
  }

  return (
    <>
      {errorText != null ? <p className="text-red-500">{errorText}</p> : null}
      <form onSubmit={onClickNew}>
        <input type="text" ref={inputRef} className="outline outline-1" />
        <button type="submit">new {typeName}</button>
      </form>
    </>
  )
}

export default NewBox
