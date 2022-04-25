import { SpotType } from 'types/spot';
import {
  approveSpot,
  createSpot,
  getPendingSpots,
  getSpot,
  getSpots,
  updateSpot,
} from '../apiClient/spot';

export const doCreateSpot = (accessToken: string, spotData) => {
  createSpot(accessToken, spotData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const doUpdateSpot = async (accessToken: string, id: string, spotData) => {
  return await updateSpot(accessToken, id, spotData);
};

export const doGetSpot = async (accessToken: string, id: string) => {
  const spotData = await getSpot(accessToken, id);
  return spotData;
};

export const doGetSpots = async (accessToken?: string) => {
  return await getSpots(accessToken);
};

export const doGetPendingSpots = async (accessToken: string) => {
  return await getPendingSpots(accessToken);
};

export const doSpotApprove = async (accessToken: string, id: string) => {
  const response = await approveSpot(accessToken, id);
  return response;
};
