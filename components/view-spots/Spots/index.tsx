import Map from 'components/shared/Map';
import MarkerCoffee from 'components/shared/Map/markers/MarkerCoffee';
import SpotDetail from 'components/shared/Map/overlays/SpotDetail';
import SpotDetailPanel from 'components/SpotDetailPanel';
import Flex from 'containers/Flex';
import { getVisibleSpots } from 'utils/map';
import { filterButtonContainerStyle } from '../../Spots/styles';
import { useEffect, useState } from 'react';
import { SpotType } from 'types/spot';
import Button, { BUTTON_VARIANTS } from 'elements/Button';
import MagnifyingGlassIcon from 'assets/icons/MagnifyingGlass';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { splitUrlParams } from 'utils/url';
import { DEFAULT_CENTER_COORDINATES } from 'utils/map';
import SpotFilter from './SpotFilter';

interface Params {
  spots: SpotType[];
  isLoggedIn: boolean;
}

const Spots = ({ spots, isLoggedIn }: Params) => {
  const [visibleSpots, setVisibleSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState();
  const [userLocation, setUserLocation] = useState(DEFAULT_CENTER_COORDINATES);
  const [mapCenter, setMapCenter] = useState(DEFAULT_CENTER_COORDINATES);
  const [showFilter, setShowFilter] = useState(false);
  const router = useRouter();

  const hasSpotIdQuery = !!splitUrlParams(router.asPath)?.spotId;

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    const url = router.asPath;
    onSpotChange(url);
  }, [spots]);

  useEffect(() => {
    const handleHistoryChange = (url) => {
      onSpotChange(url);
    };
    router.events.on('routeChangeComplete', handleHistoryChange);
    return () => router.events.off('routeChangeComplete', handleHistoryChange);
  });

  const onSpotChange = (url: string) => {
    const urlQuery = splitUrlParams(url);
    if (urlQuery === null) {
      setSelectedSpot(undefined);
      return;
    }
    const spot = spots.find((spot) => spot.id === urlQuery.spotId);
    setSelectedSpot(spot);
    setMapCenter({ lat: spot?.coordinates.lat, lng: spot?.coordinates.lng });
  };

  const getUserLocation = () => {
    if (hasSpotIdQuery === false) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setMapCenter({ lat: latitude, lng: longitude });
        });
      }
    }
  };

  const handleSelectSpot = (spot) => {
    if (!spot) {
      handleUnselectSpot();
      return;
    }
    Router.push('/view-spots/?spotId=' + spot.id);
  };

  const handleUnselectSpot = () => {
    Router.push('/view-spots');
  };

  const handleSpotChange = (spot) => {
    if (spot) {
      setMapCenter(spot?.coordinates);
    }
    handleSelectSpot(spot);
  };

  const handleOnMapChange = (mapData) => {
    const center = mapData?.center;
    const mapZoom = mapData?.zoom;
    const visibleSpots = getVisibleSpots(center, mapZoom, spots);
    setVisibleSpots(visibleSpots);
  };

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <Flex>
      {showFilter && (
        <SpotFilter
          spots={spots}
          activeSpot={selectedSpot}
          onSpotChange={handleSpotChange}
          closeFilter={handleShowFilter}
        />
      )}

      <div className={filterButtonContainerStyle()}>
        <Button variant={BUTTON_VARIANTS.secondary} circle={true} onClick={handleShowFilter}>
          <MagnifyingGlassIcon width={16} height={16} />
        </Button>
      </div>

      <Map
        fullHeight={true}
        onMapClick={handleUnselectSpot}
        onChildClick={({ spot }) => handleSelectSpot(spot)}
        onMapChange={handleOnMapChange}
        initialCenter={mapCenter}
      >
        {visibleSpots.map((spot) => {
          return (
            <MarkerCoffee
              key={spot.id}
              lat={spot.coordinates.lat}
              lng={spot.coordinates.lng}
              spot={spot}
            />
          );
        })}

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
    </Flex>
  );
};

export default Spots;
