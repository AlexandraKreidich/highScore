export function sortRecords(records, fieldName) {
  const newArr = [...records];
  return newArr.sort((e, next) => next[fieldName] - e[fieldName]);
}