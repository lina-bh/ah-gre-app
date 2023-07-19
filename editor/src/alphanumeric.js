const alphanumeric = (c) => {
  if (c.charCodeAt) {
    c = c.charCodeAt(0)
  }
  if (
    !((c >= 48 && c <= 57) || (c >= 65 && c <= 90) || (c >= 97 && c <= 122))
  ) {
    return false
  }
  return true
}

export default alphanumeric
