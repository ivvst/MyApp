import * as request from "../lib/request";

const newestShipUrl = 'http://localhost:3030/data/newestship';

export const getLatestShip = async () => {
    const result = await request.get(newestShipUrl);
    console.log(result);
    return Object.values(result)
  
  };
  