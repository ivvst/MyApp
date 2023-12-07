import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/review';

export const getAll = async (shipId) => {
    const query = new URLSearchParams({
        where: `shipId="${shipId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (shipId, text, userRating) => {
    const newReview = await request.post(baseUrl, {
      shipId,
      text,
      rating: userRating, // Include the userRating in the request payload
    });
  
    return newReview;
  };