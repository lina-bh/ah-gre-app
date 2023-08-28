import { TwitterTimelineEmbed } from "react-twitter-embed"

import DirectionTabs from "./DirectionTabs"
import InformationModal from "./InformationModal"
import TimetableView from "./TimetableView"

const App = () => {
  // const [direction, setDirection] = useState(NORTHBOUND)
  return (
    <main className="flex flex-col h-full">
      <div className="flex justify-between px-2 py-1">
        <h1 className="text-3xl">Avery Bus</h1>
        <InformationModal className="text-2xl">
          <i className="bi bi-info-circle-fill"></i>
        </InformationModal>
      </div>
      <DirectionTabs />
      <TimetableView />
      <div className="px-2 pb-1 mt-auto">
        <p className="">
          Check{" "}
          <a
            href="https://twitter.com/UOGBuses"
            className="text-blue-500 dark:text-blue-400"
          >
            <i className="bi bi-twitter"></i>{" "}
            <span className="underline">@UOGBuses</span>
          </a>{" "}
          and{" "}
          <a
            href="https://bustracker.gre.ac.uk"
            className="text-blue-500 underline dark:text-blue-400"
          >
            official website
          </a>
        </p>
      </div>
    </main>
  )
}

export default App
