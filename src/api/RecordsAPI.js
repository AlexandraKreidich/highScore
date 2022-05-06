export async function fetchRecords(sort = 'desc', sortField = 'clicks', limit = 10) {
  // var data = await fetch(
  //   `http://localhost:8080/api/v1/admins/companies`,
  //   {
  //     method: 'GET',
  //   })
  //   .then(response => response.json());

  return new Promise((resolve, reject) => {
    try {
      const data = [
        { name: "Jane Doe", totalPoints: 157, clicks: 5 },
        { name: "Lily Allen", totalPoints: 234, clicks: 8 },
        { name: "John Smith", totalPoints: 390, clicks: 10 }
      ];

      setTimeout(() => {
        resolve(data);
      }, 2000);
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
        resolve({
          status: 200
        });
      }, 2000);
    }
    catch (e) {
      reject(e);
    }
  });
}