import { createAmenity, getAmenities } from '../apiClient/amenity';

export const doCreateAmenity = (accessToken, data) => {
  createAmenity(accessToken, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const doGetAmenities = async (accessToken) => {
  const amenities = await getAmenities(accessToken);
  console.log(amenities);
  return amenities;
};
