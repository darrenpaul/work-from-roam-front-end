import { httpRequest } from './httpRequest';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const API_VERSION = 'api/v1';
const KEY = 'spot-suggestion';

export const createSpotSuggestion = (accessToken: String, spotData) => {
  const url = `${BASE_URL}/${API_VERSION}/${KEY}/create`;
  return httpRequest({
    url,
    method: 'POST',
    data: {
      ...spotData
    },
    headers: { Authorization: `Bearer ${accessToken}` }
  });
};

export const getSpotSuggestion = (accessToken: String, id: String) => {
  const url = `${BASE_URL}/${API_VERSION}/${KEY}/${id}`;
  return httpRequest({
    url,
    method: 'GET',

    headers: { Authorization: `Bearer ${accessToken}` }
  });
};

export const acceptSpotSuggestion = (accessToken: string, id: string, spotData) => {
  const url = `${BASE_URL}/${API_VERSION}/${KEY}/accept/${id}`;
  return httpRequest({
    url,
    method: 'POST',
    data: {
      ...spotData
    },
    headers: { Authorization: `Bearer ${accessToken}` }
  });
};

// export const getSpot = (accessToken: String, id: String) => {
//   const url = `${BASE_URL}/${API_VERSION}/${KEY}/${id}`;
//   return httpRequest({
//     url,
//     method: 'GET',

//     headers: { Authorization: `Bearer ${accessToken}` }
//   });
// };

export const getSpotsSuggestions = (accessToken: String) => {
  const url = `${BASE_URL}/${API_VERSION}/${KEY}/all`;
  return httpRequest({
    url,
    method: 'GET',

    headers: { Authorization: `Bearer ${accessToken}` }
  });
};
