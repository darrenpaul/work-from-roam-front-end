import { doGetSpots, doUpdateSpot } from 'services/spot.tsx';

export const doMigration = async (accessToken) => {
  const spots = await doGetSpots(accessToken);
  for (const spot of spots) {
    const address = spot.address;
    const splitAddress = address.split(',');
    if (!spot.suburb) {
      let suburb = splitAddress[0].trim();
      if (splitAddress.length > 1) {
        suburb = splitAddress[1].trim();
        spot.address = splitAddress.slice(0, -1).join(', ');
      }
      spot.suburb = suburb;
    }
  }

  for (const spot of spots) {
    const id = spot.id;
    await doUpdateSpot(accessToken, id, spot);
  }
};
