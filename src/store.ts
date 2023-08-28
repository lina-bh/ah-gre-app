import { configureStore } from "@reduxjs/toolkit"
import { useSelector as useSelector_ } from "react-redux"

import directionReducer from "./reducers/direction.ts"

export const store = configureStore({
  reducer: {
    direction: directionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

type SelectorFn<Selected> = (state: RootState) => Selected
type EqualityFn = (a: unknown, b: unknown) => boolean
type CheckFrequency = "never" | "once" | "always"

interface UseSelectorOptions {
  equalityFn?: EqualityFn
  stabilityCheck?: CheckFrequency
  noopCheck?: CheckFrequency
}

export const useSelector = useSelector_ as <Selected>(
  selector: SelectorFn<Selected>,
  options?: EqualityFn | UseSelectorOptions
) => Selected
