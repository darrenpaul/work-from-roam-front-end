import Map from 'components/Map';
import MarkerCoffee from 'components/Map/markers/MarkerCoffee';
import SpotDetail from 'components/Map/overlays/SpotDetail';
import SpotDetailPanel from 'components/SpotDetailPanel';

import { getVisibleSpots } from 'utils/map';
import {
  spotsContainerStyle,
  filterButtonContainerStyle,
  filterContainerStyle,
  filterContentStyle,
} from './styles';
import { useEffect, useState } from 'react';
import Selector from 'elements/Selector';
import { LIST_OF_COUNTRIES } from 'constants/countries';
import { SpotType } from 'types/spot';
import { sortBy } from 'lodash';
import Button, { BUTTON_VARIANTS } from 'elements/Button';
import MagnifyingGlassIcon from 'assets/icons/MagnifyingGlass';
import Heading5 from 'elements/typography/Heading5';
import Paragraph from 'elements/typography/Paragraphy';

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
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    filterSpotsForArea();
    if (spots.length > 0) return;
  }, [spots]);

  const countriesWithSpots = () => {
    const countries = [];

    if (spots.length > 0) {
      spots.forEach((spot) => {
        if (!countries.includes(spot.country)) {
          countries.push(spot.country);
        }
      });
    }

    return countries;
  };

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

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={spotsContainerStyle()}>
      {showFilter && (
        <div className={filterContainerStyle()}>
          <div className={filterContentStyle()}>
            <Heading5>Search</Heading5>
            <Paragraph>Spot Name</Paragraph>
            <Selector
              id="spots"
              value={{ label: selectedSpot?.company, value: selectedSpot?.id }}
              options={spotsInArea}
              onChange={onSpotSelectChange}
            />

            <Paragraph>Country</Paragraph>
            <Selector
              id="country"
              initialValue={selectedCountry}
              options={countriesWithSpots()}
              onChange={handleCountrySelectChange}
            />

            <Button onClick={handleShowFilter} styles="mt-item">
              Close
            </Button>
          </div>
        </div>
      )}
      <div className={filterButtonContainerStyle()}>
        <Button variant={BUTTON_VARIANTS.secondary} circle={true} onClick={handleShowFilter}>
          <MagnifyingGlassIcon width={16} height={16} />
        </Button>
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
