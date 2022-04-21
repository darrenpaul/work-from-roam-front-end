import batchJsonData from 'data/batchData.json';
import { doGetSpots, doUpdateSpot } from 'services/spot';

const data = batchJsonData;

export const doMigration = async (accessToken) => {
  const spots = await doGetSpots(accessToken);
  for (const spot of spots) {
    const rawData = await matchData(spot);
    if (rawData) {
      const addressPieces = rawData.formatted_address.split(',');
      let address = addressPieces[0];
      let suburb = addressPieces[addressPieces.length - 4].trim();
      let city = addressPieces[addressPieces.length - 3].trim();
      let zipCode = addressPieces[addressPieces.length - 2].trim();
      let country = addressPieces[addressPieces.length - 1].trim();

      if (addressPieces.length === 5) {
        address = addressPieces.slice(0, 1);
      }
      if (addressPieces.length === 6) {
        address = addressPieces.slice(0, 2);
      }
      if (addressPieces.length === 7) {
        address = addressPieces.slice(0, 3);
      }
      if (addressPieces.length === 8) {
        address = addressPieces.slice(0, 4);
      }

      spot.address = formatAddress(address);

      spot.suburb = suburb;
      spot.city = city;
      spot.zipCode = zipCode;
      spot.country = country;
    }
  }

  for (const spot of spots) {
    const id = spot.id;
    // await doUpdateSpot(accessToken, id, spot);
    console.log(id);
  }
};

const formatAddress = (addressArray) => {
  const addressClean = [];
  for (const item of addressArray) {
    addressClean.push(item.trim());
  }
  return addressClean.join(', ');
};

const matchData = (spot) => {
  for (const item of batchJsonData) {
    if (item.place_id === spot.placeId) {
      return item;
    }
  }
};
