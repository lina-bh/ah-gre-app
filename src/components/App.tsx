import { useCurrentTimetable, useStore } from "../zustand-store"
import { hasNoService } from "../models/timetable"
import DirectionTabs from "./DirectionTabs"
import BusStopMenu from "./BusStopMenu"
import Title from "./Title"
import Footer from "./Footer"
import Departures from "./Departures"
import NoService from "./NoService"

const App = () => {
  const timetable = useCurrentTimetable()
  const selectedStop = useStore((state) => state.stop)
  const currentDate = useStore((state) => state.date)

  // useEffect(() => {
  //   const timer = setInterval(() => refreshTime(), 90000)
  //   return () => clearInterval(timer)
  // }, [])

  const noService = hasNoService(timetable, selectedStop, currentDate)

  return (
    <main className="flex flex-col h-full">
      <Title />
      <DirectionTabs />
      <BusStopMenu />
      <div className="px-1">{!noService ? <Departures /> : <NoService />}</div>
      <div className="px-2 pb-1 mt-auto">
        <Footer />
      </div>
    </main>
  )
}

export default App
