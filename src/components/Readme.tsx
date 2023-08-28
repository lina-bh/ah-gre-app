import { createSignal } from "solid-js"

const Readme = () => {
  const [modalVisible, setModalVisible] = createSignal(false)

  const onOpen = (ev: MouseEvent) => {
    ev.preventDefault()
    setModalVisible(true)
  }

  return (
    <>
      <div
        hidden={!modalVisible()}
        class="fixed top-0 left-0 opacity-70 z-10 bg-white h-full w-full"
      />
      <div
        class={`flex flex-col justify-center absolute top-0 left-0 opacity-100 z-20 h-full w-full ${
          !modalVisible() ? "hidden" : ""
        }`}
      >
        <div class="relative mx-auto max-w-lg bg-white border border-black p-3 rounded-3xl">
          <button
            type="button"
            onClick={() => setModalVisible(false)}
            class="absolute top-3 right-4"
          >
            <i class="bi-x-lg" />
          </button>
          <p>
            This app was developed by Lina Bhaile (BSc Hons Computer Science)
          </p>
          <p>
            Contact <a href="mailto:lb2894y@gre.ac.uk">lb2894y@gre.ac.uk</a>
          </p>
          <p>This app was not developed by and is not associated with:</p>
          <p>
            the University of Greenwich, Centaur Travel, Transport for London,
            London Buses, Docklands Light Railway, SE Trains/Southeastern or
            National Rail Enquiries.
          </p>
        </div>
      </div>
      <div class="fixed bottom-0 w-full">
        <a href="#" onClick={onOpen}>
          Read me...
        </a>
      </div>
    </>
  )
}

export default Readme
