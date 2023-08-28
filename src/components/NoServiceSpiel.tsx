import { NORTHBOUND } from "../constants"

export default function NoServiceSpiel(props: { direction: boolean }) {
  return (
    <div>
      <div class="max-w-lg">
        <div class="text-center text-6xl text-gray-400">
          <i class="bi-exclamation-triangle-fill" />
        </div>
        <h2 class="text-center text-lg font-medium">
          No service on university buses today
        </h2>
        <p>Please use:</p>
        <ul class="list-disc">
          {props.direction == NORTHBOUND ? (
            <>
              <li>
                London Buses route 286 from bus stop AC "University of Greenwich
                / Southwood Site"
              </li>
              <li>
                Southeastern from Falconwood, Eltham or New Eltham to Lewisham
                and DLR to Cutty Sark
              </li>
              <li>
                Southeastern from Falconwood, Eltham or New Eltham to
                Lewisham/Blackheath/London Bridge, then to Greenwich
              </li>
            </>
          ) : (
            <>
              <li>London Buses route 286</li>
              <li>
                DLR to Lewisham, then Southeastern to Falconwood, Eltham or New
                Eltham
              </li>
              <li>
                Southeastern from Greenwich to Lewisham/Blackheath/London
                Bridge, then to Falconwood, Eltham or New Eltham
              </li>
              <li>
                <strong>Night route:</strong> London Buses route 188 to
                Millenium Leisure Park, then 132 to Riefield Road
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}
