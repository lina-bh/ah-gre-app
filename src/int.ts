export default (s: string): number => {
  const res = parseInt(s, 10)
  if (isNaN(res)) {
    throw new Error(`cannot parse ${s} as int`)
  }
  return res
}
