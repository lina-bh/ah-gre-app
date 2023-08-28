import { isWeekend } from "date-fns"

const noService = () => {
  const now = new Date()
  if (isWeekend(now)) {
    return true
  }
}

export { noService }
