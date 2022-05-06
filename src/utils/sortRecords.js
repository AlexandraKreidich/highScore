export function sortRecords(records, fieldName) {
  const newArr = [...records];
  switch (fieldName) {
    case 'totalPoints':
      newArr.sort((e, next) => next.totalPoints - e.totalPoints)
      return newArr;
    case 'clicks':
      newArr.sort((e, next) => next.totalPoints / next.clicks - e.totalPoints / e.clicks)
      return newArr;
    default:
      return newArr;
  }
}