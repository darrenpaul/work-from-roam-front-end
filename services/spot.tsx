import {
  approveSpot,
  createSpot,
  getPendingSpots,
  getSpot,
  getSpots,
  updateSpot,
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

export const doUpdateSpot = async (accessToken: String, id: String, spotData) => {
  return await updateSpot(accessToken, id, spotData);
};

export const doGetSpot = async (accessToken: String, id: String) => {
  const spotData = await getSpot(accessToken, id);
  return spotData;
};

export const doGetSpots = async (accessToken: String) => {
  return await getSpots(accessToken);
};

export const doGetPendingSpots = async (accessToken: String) => {
  return await getPendingSpots(accessToken);
};

export const doSpotApprove = async (accessToken: String, id: String) => {
  const response = await approveSpot(accessToken, id);
  return response;
};
