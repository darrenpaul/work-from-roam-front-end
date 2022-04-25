import Map from 'components/Map';
import MarkerCoffee from 'components/Map/markers/MarkerCoffee';
import SpotDetail from 'components/Map/overlays/SpotDetail';
import SpotDetailPanel from 'components/SpotDetailPanel';
import { doGetSpots } from 'services/spot';
import { spotsContainerStyle } from './styles';
import { useEffect, useState } from 'react';

interface Params {
  accessToken?: string;
}

const Spots = ({ accessToken }: Params) => {
  const [spots, setSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState();
  const [mapLoaded, setMapLoaded] = useState(false);

  const isLoggedIn = accessToken !== undefined;

  useEffect(() => {
    if (spots.length === 0) {
      doGetSpots(accessToken).then((spots) => setSpots(spots));
    }
  });

  const handleSelectSpot = ({ spot }) => {
    if (!spot) return;

    if (selectedSpot?.id === spot.id) {
      setSelectedSpot(undefined);
    } else {
      setSelectedSpot(spot);
    }
  };

  return (
    <div className={spotsContainerStyle()}>
      <Map
        fullHeight={true}
        onMapClick={() => setSelectedSpot(null)}
        onChildClick={handleSelectSpot}
        onMapLoaded={(mapLoaded) => {
          setMapLoaded(mapLoaded);
        }}
      >
        {spots.map((spot) => (
          <MarkerCoffee
            onClick={() => handleSelectSpot(spot)}
            key={spot.id}
            lat={spot.coordinates.lat}
            lng={spot.coordinates.lng}
            spot={spot}
            isLoggedIn={isLoggedIn}
          />
        ))}

        {selectedSpot && (
          <SpotDetail
            onClick={() => setSelectedSpot(null)}
            spot={selectedSpot}
            lat={selectedSpot.coordinates.lat}
            lng={selectedSpot.coordinates.lng}
          />
        )}
      </Map>

      {selectedSpot && <SpotDetailPanel {...selectedSpot} />}
    </div>
  );
};

export default Spots;
