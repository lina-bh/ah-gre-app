import { parse } from "date-fns"

import bankHolidaysJson from "../assets/bank-holidays.json"

const now = new Date()
const bankHolidays = bankHolidaysJson["england-and-wales"].events.map((event) =>
  parse(event.date, "yyyy-MM-dd", now)
)

export default bankHolidays
