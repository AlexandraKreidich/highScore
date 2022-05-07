export function addAvgPerClickColumn(data) {
  return data.map(elem => {
    return {
      name: elem.name,
      totalPoints: elem.totalPoints,
      clicks: elem.clicks,
      avgPerClick: elem.clicks === 0 ? 0 : Math.floor(elem.totalPoints / elem.clicks)
    }
  });
}