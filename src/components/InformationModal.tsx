/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
// TODO sort this out
import { useEffect, useRef } from "preact/hooks"

interface InformationModalProps {
  visible: boolean
  onClose: () => void
}

const InformationBox = (props) => (
  <div
    onClick={(event) => event.stopPropagation()}
    className="relative p-3 mx-auto bg-white border shadow-lg pointer-events-auto dark:border-gray-800 dark:bg-black dark:text-white rounded-xl dark:shadow-none"
  >
    <button type="button" onClick={props.onClose} className="float-right">
      ╳
    </button>
    <p>This app was developed by Lina Bhaile (BSc Hons Computer Science)</p>
    <p>
      Contact{" "}
      <a href="mailto:lb2894y@gre.ac.uk" className="text-blue-500">
        lb2894y@gre.ac.uk
      </a>
    </p>
    <p>No affiliation with the University of Greenwich or Centaur Travel</p>
    <p>
      <a href="https://github.com/lina-bh/ah-gre-app" className="text-blue-500">
        Source code
      </a>
    </p>
    <p>
      <a
        href="https://docs.gre.ac.uk/rep/ef/bus-timetable-avery-hill-greenwich"
        className="text-blue-500"
      >
        Timetable
      </a>{" "}
      updated September 2023
    </p>
  </div>
)

export default function InformationModal(props: InformationModalProps) {
  const modalVisible = props.visible

  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!dialogRef.current) {
      return
    }
    if (modalVisible) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
    }
  }, [modalVisible])

  return (
    <dialog
      ref={dialogRef}
      onClose={props.onClose}
      className="open:backdrop:bg-black/10 backdrop:transition-all"
    >
      <div
        onClick={props.onClose}
        className={`flex flex-col justify-center fixed top-0 left-0 z-10 h-full w-full p-6 transition-all duration-500`}
      >
        <InformationBox onClose={props.onClose} />
      </div>
    </dialog>
  )
}
