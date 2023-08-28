import {
  createSlice,
  type PayloadAction,
  createSelector,
} from "@reduxjs/toolkit"
import { RootState } from "../store"
import { reducedNorth, reducedSouth } from "../timetable-type"

export type Direction = boolean
export const NORTHBOUND = false
export const SOUTHBOUND = true

interface DirectionState {
  southbound: boolean
  currentStop: number
}

const directionSlice = createSlice({
  name: "direction",
  initialState: {
    southbound: false,
    currentStop: 0,
  } as DirectionState,
  reducers: {
    changeOfDirection: (state, action: PayloadAction<Direction>) => {
      state.southbound = action.payload
    },
    changeOfStop: (state, action: PayloadAction<number>) => {
      state.currentStop = action.payload
    },
  },
})

export const { changeOfDirection, changeOfStop } = directionSlice.actions

export default directionSlice.reducer

const selectSouthbound = (state: RootState) => state.direction.southbound
export const selectCurrentTimetable = createSelector(
  [selectSouthbound],
  (southbound) => {
    return southbound ? reducedSouth : reducedNorth
  }
)
