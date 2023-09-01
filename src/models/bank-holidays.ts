import bankHolidaysJson from "../assets/bank-holidays.json"
import int from "../int"

const r = /(\d{4,4})-(\d{2,2})-(\d{2,2})/
const bankHolidays = bankHolidaysJson["england-and-wales"].events.map(
  (event) => {
    const matches = r.exec(event.date)
    if (!matches) {
      throw new Error("failed to parse date")
    }
    const date = new Date()
    date.setFullYear(int(matches[1]))
    date.setMonth(int(matches[2]) - 1)
    date.setDate(int(matches[3]))
    return date
  }
)

export default bankHolidays
