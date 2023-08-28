import { useState, MouseEvent, ReactNode } from "react"

interface InformationModal {
  className: string
  children: ReactNode
}

export default function InformationModal(props: InformationModal) {
  const [modalVisible, setModalVisible] = useState(false)

  const onOpen = (ev: MouseEvent) => {
    ev.preventDefault()
    setModalVisible(true)
  }

  return (
    <>
      <div
        onClick={() => setModalVisible(false)}
        className={`fixed top-0 left-0 z-10 w-full h-full bg-white dark:bg-black transition-opacity duration-300 ${
          !modalVisible ? "pointer-events-none opacity-0" : "opacity-60"
        }`}
      />
      <div
        className={`flex flex-col justify-center absolute top-0 left-0 z-20 h-full w-full p-6 transition-all duration-500 pointer-events-none ${
          !modalVisible ? "-translate-y-full opacity-0" : ""
        }`}
      >
        <div className="relative p-3 mx-auto bg-white border shadow-lg pointer-events-auto dark:border-gray-800 dark:bg-black rounded-xl dark:shadow-none">
          <button
            type="button"
            onClick={() => setModalVisible(false)}
            className="float-right"
          >
            <i className="bi-x-lg" />
          </button>
          <p>
            This app was developed by Lina Bhaile (BSc Hons Computer Science)
          </p>
          <p>
            Contact{" "}
            <a href="mailto:lb2894y@gre.ac.uk" className="text-blue-500">
              lb2894y@gre.ac.uk
            </a>
          </p>
          <p>
            This app was not developed by and is not associated with the
            University of Greenwich, Centaur Travel, Transport for London,
            London Buses, Docklands Light Railway, SE Trains/Southeastern or
            National Rail Enquiries.
          </p>
          <p>
            <a
              href="https://github.com/lina-bh/ah-gre-app"
              className="text-blue-500"
            >
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
            updated August 2023
          </p>
        </div>
      </div>
      <button onClick={onOpen} className={props.className}>
        {props.children}
      </button>
    </>
  )
}
