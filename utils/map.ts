const BASE_URL = 'https://www.google.com/maps/dir';

export const DEFAULT_MAP_ZOOM = 15;

export const DEFAULT_CENTER_COORDINATES = { lat: -33.92706384916972, lng: 18.426755163696136 };

export const createDirectionURL = (name, userCoordinates, address, city, zipCode, country) => {
  const formattedCoordinates = `${userCoordinates?.lat},${userCoordinates?.lng}` || '';
  const formattedName = name.replaceAll(' ', '+');
  const formattedAddress = address.replaceAll(' ', '+');
  const formattedCity = city.replaceAll(' ', '+');
  const formattedZipCode = zipCode.replaceAll(' ', '+');
  const formattedCountry = country.replaceAll(' ', '+');

  const directionURL = `${BASE_URL}/${formattedCoordinates}/+${formattedName},+${formattedAddress},+${formattedCity},+${formattedZipCode},+${formattedCountry}`;
  return directionURL;
};

export const getVisibleSpots = (mapCenter, mapZoom, spots) => {
  const visibleSpots = spots.filter((spot) => {
    const spotCenter = spot.coordinates;

    const coordinatesDistance = distanceFromCoordinates(mapCenter, spotCenter);
    if (coordinatesDistance <= getMaxViewDistance(mapZoom)) {
      return spot;
    }
  });

  return visibleSpots;
};

export const distanceFromCoordinates = (coordinatesOne, coordinatesTwo) => {
  const latOne = coordinatesOne.lat;
  const lngOne = coordinatesOne.lng;
  const latTwo = coordinatesTwo.lat;
  const lngTwo = coordinatesTwo.lng;

  var earthRadius = 6371; // Radius of the earth in km
  var latRadius = degreeToRadius(latTwo - latOne); // degreeToRadius below
  var lngRadius = degreeToRadius(lngTwo - lngOne);

  var angle =
    Math.sin(latRadius / 2) * Math.sin(latRadius / 2) +
    Math.cos(degreeToRadius(latOne)) *
      Math.cos(degreeToRadius(latTwo)) *
      Math.sin(lngRadius / 2) *
      Math.sin(lngRadius / 2);

  var radiusCenter = 2 * Math.atan2(Math.sqrt(angle), Math.sqrt(1 - angle));
  var distance = earthRadius * radiusCenter; // Distance in km
  return distance;
};

export const getMaxViewDistance = (currentZoom) => {
  const defaultZoom = DEFAULT_MAP_ZOOM;
  const defaultDistance = 4;
  const zoom = defaultZoom - currentZoom;
  const maxViewDistance = (zoom + 1) * defaultDistance;
  if (maxViewDistance <= 0) {
    return defaultDistance;
  }
  return maxViewDistance;
};

const degreeToRadius = (degree) => {
  return degree * (Math.PI / 180);
};
