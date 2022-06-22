import { sortBy, values } from 'lodash';
import { SpotType } from 'types/spot';

export const filterSpotsForArea = (spots: Array<SpotType>, key = 'country', value = '') => {
  if (spots.length === 0) return spots;

  const filteredSpotsInArea = spots
    .filter((spot: SpotType) => {
      if (value) {
        return spot[key] === value;
      }
      return spot;
    })
    .map((spot: SpotType) => {
      return { label: spot.company, value: spot.id };
    });

  const sortedSpotsInArea = sortBy(
    filteredSpotsInArea,
    (spot: { label: string; value: string }) => spot.label,
  );
  return sortedSpotsInArea;
};

export const getCountriesWithSpots = (spots: Array<SpotType>) => {
  const countries = [];

  if (spots && spots.length > 0) {
    spots.forEach((spot: SpotType) => {
      if (countries.includes(spot.country) === false) {
        countries.push(spot.country);
      }
    });
  }

  return countries;
};

export const getSuburbsInCountry = (spots: Array<SpotType>, country: String) => {
  const suburbs = [];

  if (country) {
    if (spots.length > 0) {
      spots.forEach((spot) => {
        if (!suburbs.includes(spot.suburb)) {
          if (spot.country === country) {
            suburbs.push(spot.suburb);
          }
        }
      });
    }
  }

  return suburbs;
};
