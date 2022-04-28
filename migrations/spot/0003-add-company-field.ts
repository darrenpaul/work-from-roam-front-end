import batchJsonData from 'data/batchData.json';
import { doGetPendingSpots, doGetSpots, doUpdateSpot } from 'services/spot';

const data = batchJsonData;

export const doMigration = async (accessToken) => {
  // const spots = await doGetSpots(accessToken);
  const pendingSpots = await doGetPendingSpots(accessToken);

  // for (const spot of spots) {
  //   const id = spot.id;
  //   spot.company = spot.name;
  //   await doUpdateSpot(accessToken, id, spot);
  //   console.log(spot.name);
  // }

  for (const spot of pendingSpots) {
    const id = spot.id;
    spot.company = spot.name;
    await doUpdateSpot(accessToken, id, spot);
    console.log(spot.name);
  }
};
