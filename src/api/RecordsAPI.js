let data = [
  { name: "Jane Doe", totalPoints: 157, clicks: 5 },
  { name: "Lily Allen", totalPoints: 234, clicks: 8 },
  { name: "John Smith", totalPoints: 390, clicks: 10 }
];

export async function fetchRecords(sort = 'desc', sortField = 'clicks', limit = 10) {
  return new Promise((resolve, reject) => {
    try {
      //sort

      setTimeout(() => {
        resolve(data);
      }, 1000);
    }
    catch (e) {
      reject(e);
    }
  });
}

export async function createRecord(newRecord) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        let record = data.find(e => e.name === newRecord.name);
        if (record) {
          record.clicks = newRecord.clicks;
          record.totalPoints = newRecord.totalPoints;
        } else {
          data = [...data, newRecord];
        }
        resolve({
          status: 201
        });
      }, 1000);
    }
    catch (e) {
      reject(e);
    }
  });
}