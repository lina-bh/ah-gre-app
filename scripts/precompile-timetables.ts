import * as fs from "node:fs/promises"
import * as path from "node:path"
import * as urlMod from "node:url"

import * as timetableMod from "../timetable"

const dir = path.dirname(urlMod.fileURLToPath(import.meta.url))

const writeTimetableToJSON = async (
  name: string,
  timetable: timetableMod.Timetable
): Promise<void> => {
  const stringified = timetableMod.timetableToJSON(timetable)
  await fs.writeFile(dir + `/../public/${name}.json`, stringified)
}

;(async () => {
  await Promise.all(
    (
      [
        ["reducedNorth", timetableMod.reducedNorth],
        ["reducedSouth", timetableMod.reducedSouth],
        ["northbound", timetableMod.northbound],
        ["southbound", timetableMod.southbound],
      ] as [string, timetableMod.Timetable][]
    ).map(([name, timetable]) => writeTimetableToJSON(name, timetable))
  )
})()
