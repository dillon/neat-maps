export const arrayHasDuplicates = (array) => {
  const set = Array.from(new Set(array))
  return !(set.length === array.length)
}
export const reformatData = ({ data, columns }) => {
  const { ADDRESS, CITY, STATE, ZIPCODE, CATEGORY } = columns;
  const newData = data.map(row => ({
    address: row[ADDRESS - 1],
    city: row[CITY - 1],
    state: row[STATE - 1],
    zipcode: row[ZIPCODE - 1],
    category: row[CATEGORY - 1]
  }))
  return newData
}