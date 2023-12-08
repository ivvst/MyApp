import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/ships';
const newestShipUrl = 'http://localhost:3030/data/newestship';

export const getAll = async () => {

  const result = await request.get(baseUrl);
  return Object.values(result)

};
export const getOne = async (shipId) => {
  const result = await request.get(`${baseUrl}/${shipId}`,);
  console.log(result);

  return result;
}


export const create = async (shipData) => {
  const { yearOfBuild } = shipData;

  if (yearOfBuild == 2024) {
    // Make a request to the newest ship endpoint
    const result = await request.post(newestShipUrl, shipData);
    return result;
  } else {
    // Make a request to the regular ships endpoint
    const result = await request.post(baseUrl, shipData);
    return result;
  }
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
