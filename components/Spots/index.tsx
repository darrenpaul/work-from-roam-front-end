import Map from 'components/Map';
import MarkerCoffee from 'components/Map/markers/MarkerCoffee';
import SpotDetail from 'components/Map/overlays/SpotDetail';
import SpotDetailPanel from 'components/SpotDetailPanel';

import { getVisibleSpots } from 'utils/map';
import { spotsContainerStyle } from './styles';
import { useEffect, useState } from 'react';
import Selector from 'elements/Selector';
import { LIST_OF_COUNTRIES } from 'constants/countries';
import { SpotType } from 'types/spot';
import { sortBy } from 'lodash';

interface Params {
  spots: SpotType[];
  isLoggedIn: boolean;
}

const Spots = ({ spots, isLoggedIn }: Params) => {
  const [visibleSpots, setVisibleSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [userLocation, setUserLocation] = useState();
  const [spotsInArea, setSpotsInArea] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [spotCoordinates, setSpotCoordinates] = useState();

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    filterSpotsForArea();
    if (spots.length > 0) return;
  }, [spots]);

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

  const handleCountrySelectChange = (id: string, value: string) => {
    filterSpotsForArea(value);
    setSelectedCountry(value);
    setSelectedSpot(undefined);
  };

  const filterSpotsForArea = (value = '') => {
    const filteredSpotsInArea = spots
      .filter((spot: SpotType) => {
        if (value) {
          return spot.country === value;
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
    setSpotsInArea(sortedSpotsInArea);
  };

  const onSpotSelectChange = (id, value) => {
    const spot = spots.find((spot) => spot.id === value);
    setSpotCoordinates(spot?.coordinates);
    setSelectedSpot(spot);
  };

  const handleOnMapChange = (mapData) => {
    const center = mapData?.center;
    const mapZoom = mapData?.zoom;
    const visibleSpots = getVisibleSpots(center, mapZoom, spots);
    setVisibleSpots(visibleSpots);
  };

  return (
    <div className={spotsContainerStyle()}>
      <div className="absolute z-40 -translate-x-1/2 left-1/2 w-96 mt-item">
        <Selector
          id="spots"
          value={{ label: selectedSpot?.company, value: selectedSpot?.id }}
          options={spotsInArea}
          onChange={onSpotSelectChange}
        />

        <Selector
          id="country"
          initialValue={selectedCountry}
          options={LIST_OF_COUNTRIES}
          onChange={handleCountrySelectChange}
        />
      </div>

      <Map
        fullHeight={true}
        onMapClick={() => setSelectedSpot(null)}
        onChildClick={handleSelectSpot}
        onMapLoaded={(mapLoaded) => {
          setMapLoaded(mapLoaded);
        }}
        onMapChange={handleOnMapChange}
        initialCenter={spotCoordinates}
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
