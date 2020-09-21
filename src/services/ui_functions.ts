export const ageAtSelectedYear = (startYear, birthYear) => {
  if (startYear > birthYear) return startYear - birthYear
  else return "-"
}

export const round = (value: number) => {
  if (value < 1000) {
  return Math.round(value/10) * 10
  }
  if (value >= 1000 && value < 10000) {
  return Math.round(value/100) * 100
  }
  if (value >= 10000 && value < 100000) {
  return Math.round(value/1000) * 1000
  }
  if (value >= 100000 && value < 1000000) {
  return Math.round(value/10000) * 10000
  }
  if (value >= 1000000 && value < 10000000) {
  return Math.round(value/100000) * 100000
  }
  if (value >= 10000000 && value < 100000000) {
  return Math.round(value/100000) * 1000000
  }
}
