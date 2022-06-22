import Button from 'elements/Button';
import Heading3 from 'elements/typography/Heading3';
import Map from 'components/shared/Map';
import MarkerCoffee from 'components/shared/Map/markers/MarkerCoffee';
import Paragraph from 'elements/typography/Paragraphy';
import SpotDetail from 'components/shared/Map/overlays/SpotDetail';
import SpotDetailPanel from 'components/SpotDetailPanel';
import { dayNames, formatTimeObject } from 'utils/dateUtils';
import { doSpotApprove } from 'services/spot';
import { getPendingSpots } from 'apiClient/spot';
import { DEFAULT_CENTER_COORDINATES, getVisibleSpots } from 'utils/map';
import { spotDetailContainerStyle, spotsContainerStyle } from './styles';
import { successNotification } from 'utils/notifications';
import { useEffect, useState } from 'react';

const PendingSpots = ({ accessToken, spots }) => {
  const [visibleSpots, setVisibleSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState();

  const handleSelectSpot = ({ spot }) => {
    if (selectedSpot?.id === spot.id) {
      setSelectedSpot(null);
    } else {
      setSelectedSpot(spot);
    }
  };

  const handleSpotApproval = async () => {
    await doSpotApprove(accessToken, selectedSpot?.id);
    successNotification('Spot approved successfully');
  };

  const handleOnMapChange = (mapData) => {
    const mapCenter = mapData?.center;
    const mapZoom = mapData?.zoom;
    const visibleSpots = getVisibleSpots(mapCenter, mapZoom, spots);
    setVisibleSpots(visibleSpots);
  };

  return (
    <div className={spotsContainerStyle()}>
      <Map
        fullHeight={true}
        onMapClick={() => setSelectedSpot(null)}
        onChildClick={handleSelectSpot}
        onMapLoaded={() => setSelectedSpot(null)}
        onMapChange={handleOnMapChange}
        initialCenter={DEFAULT_CENTER_COORDINATES}
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
          />
        )}
      </Map>

      {selectedSpot && <SpotDetailPanel {...selectedSpot} handleApproval={handleSpotApproval} />}
    </div>
  );
};

export default PendingSpots;
