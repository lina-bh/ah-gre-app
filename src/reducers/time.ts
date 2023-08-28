import {
  createSlice,
  type PayloadAction,
  createSelector,
} from "@reduxjs/toolkit"
import { parseJSON } from "date-fns"

const timeSlice = createSlice({
  name: "time",
  initialState: () => ({
    current: JSON.stringify(new Date()),
  }),
  reducers: {
    timeRefreshed: (state) => {
      state.current = JSON.stringify(new Date())
    },
    debugChangeTheDate: (state, action: PayloadAction<string>) => {
      state.current = action.payload
    },
  },
})

export const { timeRefreshed, debugChangeTheDate } = timeSlice.actions

export default timeSlice.reducer

export const selectCurrentTime = createSelector(
  [(state) => state.time.current],
  (current) => {
    return parseJSON(current)
  }
)
