import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector as useSelector_ } from "react-redux"

import directionReducer from "./reducers/direction.ts"
import timeReducer from "./reducers/time.ts"

export const store = configureStore({
  reducer: {
    direction: directionReducer,
    time: timeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export const useSelector: TypedUseSelectorHook<RootState> = useSelector_
