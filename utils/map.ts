const BASE_URL = 'https://www.google.com/maps/dir';

export const createDirectionURL = (name, coordinates, address, city, zipCode, country) => {
  //   const formattedCoordinates = `${coordinates.lat},${coordinates.lng}`;
  const formattedName = name.replaceAll(' ', '+');
  const formattedAddress = address.replaceAll(' ', '+');
  const formattedCity = city.replaceAll(' ', '+');
  const formattedZipCode = zipCode.replaceAll(' ', '+');
  const formattedCountry = country.replaceAll(' ', '+');

  const directionURL = `${BASE_URL}/+${formattedName},+${formattedAddress},+${formattedCity},+${formattedZipCode},+${formattedCountry}`;
  return directionURL;
};
