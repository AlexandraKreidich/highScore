export function addAvgPerClickColumn(data) {
  return data.map(elem => {
    return {
      name: elem.name,
      totalPoints: elem.totalPoints,
      clicks: elem.clicks,
      avgPerClick: Math.floor(elem.totalPoints / elem.clicks)
    }
  });
}