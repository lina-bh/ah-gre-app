import DirectionTabs from "./DirectionTabs"
import InformationModal from "./InformationModal"
import TimetableView from "./TimetableView"
import BusStopMenu from "./BusStopMenu"
import Footer from "./Footer"

const App = () => {
  return (
    <main className="flex flex-col h-full">
      <div className="flex justify-between px-2 py-1">
        <h1 className="text-3xl">Avery Bus</h1>
        <InformationModal className="text-2xl">
          <i className="bi bi-info-circle-fill"></i>
        </InformationModal>
      </div>
      <DirectionTabs />
      <BusStopMenu />
      <div className="px-1">
        <TimetableView />
      </div>
      <div className="px-2 pb-1 mt-auto">
        <Footer />
      </div>
    </main>
  )
}

export default App
