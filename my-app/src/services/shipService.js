import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/ships';

export const getAll = async () => {

  const result = await request.get(baseUrl);
  return Object.values(result)

};
export const getOne = async (shipId) => {
  const result = await request.get(`${baseUrl}/${shipId}`,);

  return result;
}
export const getLatest = async () => {
  try {
      const url = `${baseUrl}?offset=0&pageSize=2`;
      const response = await fetch(url);
      const ships = await response.json();
      const sortedShips = ships.sort((a, b) => {
        return b.yearOfBuild - a.yearOfBuild;
      });
     console.log(sortedShips);
      return sortedShips.slice(0, 2);
  } catch (error) {
      console.error('Error fetching latest ships:', error);
      throw error;
  }
};


export const create = async (shipData) => {
  const result = await request.post(baseUrl, shipData);

  return result;
};

export const edit = (shipId, data) => request.put(`${baseUrl}/${shipId}`, data);

export const remove = (shipId) => request.remove(`${baseUrl}/${shipId}`);

// export const edit = (shipId, data) => {
//   const url = `${baseUrl}/${shipId}`;

//   return fetch(url, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error('Error editing ship data:', error);
//       throw error; // Rethrow the error to handle it where the edit function is called
//     });
// };

// // export const remove = async (shipId) => {
//   const response = await fetch(`${baseUrl}/${shipId}`, {
//     method: 'DELETE'
//   });

//   const result = await response.json();

//   return result;
// };
