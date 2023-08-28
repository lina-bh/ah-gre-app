import DirectionTabs from "./DirectionTabs"
import TimetableView from "./TimetableView"

const App = () => {
  // const [direction, setDirection] = useState(NORTHBOUND)
  return (
    <main>
      <h1 className="text-3xl pl-[0.4em] pt-[0.2em]">Avery Bus</h1>
      <DirectionTabs />
      <TimetableView />
    </main>
  )
}

export default App
