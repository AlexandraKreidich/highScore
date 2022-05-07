import { sortRecords } from '../utils/sortRecords';
import { addAvgPerClickColumn } from '../utils/addAvgPerClickColumn';

let data = [
  { name: "Jane Doe", totalPoints: 157, clicks: 5 },
  { name: "Lily Allen", totalPoints: 234, clicks: 8 },
  { name: "John Smith", totalPoints: 390, clicks: 10 },
  { name: "Alexandra", totalPoints: 200, clicks: 1 }
];

export async function fetchRecords(sortField = 'totalPoints', limit = 10) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const enhancedData = addAvgPerClickColumn(data);
        resolve(sortRecords(enhancedData, sortField).slice(0, limit));
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