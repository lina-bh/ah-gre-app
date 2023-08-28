import { isSameDay, isWeekend, parse } from "date-fns"

import bankHolidaysJson from "./assets/bank-holidays.json"

const bankHolidays = (() => {
  const now = new Date()
  return bankHolidaysJson["england-and-wales"].events.map((event) =>
    parse(event.date, "yyyy-MM-dd", now)
  )
})()

const noService = (now: Date) => {
  if (isWeekend(now)) {
    return true
  }
  if (bankHolidays.some((holiday) => isSameDay(now, holiday))) {
    return true
  }
}

export { noService }
