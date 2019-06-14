export const arrayHasDuplicates = (array) => {
  const set = Array.from(new Set(array))
  return !(set.length === array.length)
}
export const reformatData = ({ data, columns }) => {
  const { ADDRESS, CITY, STATE, ZIPCODE, CATEGORY } = columns;
  return data;
}