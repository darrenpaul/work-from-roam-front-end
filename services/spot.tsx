import {
  approveSpot,
  createSpot,
  getPendingSpots,
  getSpot,
  getSpots
  } from '../apiClient/spot';

export const doCreateSpot = (accessToken: String, spotData) => {
  createSpot(accessToken, spotData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const doGetSpot = async (accessToken: String, id: String) => {
  const spotData = await getSpot(accessToken, id);
  return spotData;
};

export const doGetSpots = (accessToken: String) => {
  getSpots(accessToken)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const doGetPendingSpots = (accessToken: String) => {
  getPendingSpots(accessToken)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const doSpotApprove = async (accessToken: String, id: String) => {
  const response = await approveSpot(accessToken, id);
  return response;
};
