import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export const NORTHBOUND = true
export const SOUTHBOUND = false
export type Direction = boolean

interface DirectionState {
  value: Direction
}

const directionSlice = createSlice({
  name: "direction",
  initialState: {
    value: NORTHBOUND,
  } as DirectionState,
  reducers: {
    setDirection: (state, action: PayloadAction<Direction>) => {
      state.value = action.payload
    },
  },
})

export const { setDirection } = directionSlice.actions

export default directionSlice.reducer
