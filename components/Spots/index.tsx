import Map from 'components/Map';
import MarkerCoffee from 'components/Map/markers/MarkerCoffee';
import SpotDetail from 'components/Map/overlays/SpotDetail';
import SpotDetailPanel from 'components/SpotDetailPanel';
import { doGetSpots } from 'services/spot';
import { getVisibleSpots } from 'utils/map';
import { spotsContainerStyle } from './styles';
import { useEffect, useState } from 'react';

interface Params {
  accessToken?: string;
}

const Spots = ({ accessToken }: Params) => {
  const [spots, setSpots] = useState([]);
  const [visibleSpots, setVisibleSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [userLocation, setUserLocation] = useState();

  const isLoggedIn = accessToken !== undefined;

  useEffect(() => {
    if (spots.length === 0) {
      doGetSpots(accessToken).then((spots) => setSpots(spots));
    }
  });

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      });
    }
  };

  const handleSelectSpot = ({ spot }) => {
    if (!spot) return;

    if (selectedSpot?.id === spot.id) {
      setSelectedSpot(undefined);
    } else {
      setSelectedSpot(spot);
    }
  };

  const handleOnMapChange = (mapData) => {
    const center = mapData?.center;
    const mapZoom = mapData?.zoom;
    const visibleSpots = getVisibleSpots(center, mapZoom, spots);
    setVisibleSpots(visibleSpots);
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
        onMapChange={handleOnMapChange}
      >
        {visibleSpots.map((spot) => (
          <MarkerCoffee
            onClick={() => handleSelectSpot(spot)}
            key={spot.id}
            lat={spot.coordinates.lat}
            lng={spot.coordinates.lng}
            spot={spot}
          />
        ))}

        {selectedSpot && (
          <SpotDetail
            onClick={() => setSelectedSpot(null)}
            spot={selectedSpot}
            lat={selectedSpot.coordinates.lat}
            lng={selectedSpot.coordinates.lng}
            isLoggedIn={isLoggedIn}
          />
        )}
      </Map>

      {selectedSpot && (
        <SpotDetailPanel {...selectedSpot} isLoggedIn={isLoggedIn} userLocation={userLocation} />
      )}
    </div>
  );
};

export default Spots;
