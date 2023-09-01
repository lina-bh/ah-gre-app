import { expect, test } from "vitest"

import * as time from "./time"

const FRIDAY_1ST_SEPTEMBER_2023_07_05_UNIX = 1693548324
const FRIDAY_1ST_SEPTEMBER_2023_07_15_UNIX = 1693548923

test("FRIDAY_1ST_SEPTEMBER_2023_07_05_UNIX to give 07:05", () => {
  const d = new Date(FRIDAY_1ST_SEPTEMBER_2023_07_05_UNIX * 1000)
  const t = time.createTime(d)
  expect(t.hour).toBe(7)
  expect(t.minute).toBe(5)
})

test("2359 to give 23:59", () => {
  const t = time.timeFromHHMM("2359")
  expect(t.hour).toBe(23)
  expect(t.minute).toBe(59)
})

test("-1-0 to throw", () => {
  expect(() => {
    time.timeFromHHMM("-1-0")
  }).toThrow()
})

test("0160 to throw", () => {
  expect(() => {
    time.timeFromHHMM("0160")
  }).toThrow()
})

test("2405 to throw", () => {
  expect(() => {
    time.timeFromHHMM("2405")
  }).toThrow()
})

test("FRIDAY_07_05 minus FRIDAY_07_15 to equal 10", () => {
  const l = time.createTime(
    new Date(FRIDAY_1ST_SEPTEMBER_2023_07_05_UNIX * 1000)
  )
  const r = time.createTime(
    new Date(FRIDAY_1ST_SEPTEMBER_2023_07_15_UNIX * 1000)
  )
  expect(time.timeToTimeInMins(l, r)).toEqual(10)
})

test("0840 formats to '08:40'", () => {
  const t = time.timeFromHHMM("0840")
  expect(time.timeDisplay(t)).toEqual("08:40")
})

test("1002 formats to '10:02'", () => {
  const t = time.timeFromHHMM("1002")
  expect(time.timeDisplay(t)).toEqual("10:02")
})
