import { writeFile } from "node:fs/promises"
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const dir = dirname(fileURLToPath(import.meta.url))

const res = await fetch("https://gov.uk/bank-holidays.json")
const full = await res.json()
const stripped = {
  "england-and-wales": {
    events: full["england-and-wales"].events.map((event) => ({
      date: event.date,
    })),
  },
}
const outJSON = JSON.stringify(stripped)
await writeFile(dir + "/../src/assets/bank-holidays.json", outJSON)
