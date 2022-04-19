import Button from 'elements/Button';
import Heading3 from 'elements/typography/Heading3';
import Map from 'components/Map';
import MarkerCoffee from 'components/Map/markers/MarkerCoffee';
import Paragraph from 'elements/typography/Paragraphy';
import SpotDetail from 'components/Map/overlays/SpotDetail';
import SpotDetailPanel from 'components/SpotDetailPanel';
import { dayNames, formatTimeObject } from 'utils/dateUtils';
import { doSpotApprove } from 'services/spot';
import { getPendingSpots } from 'apiClient/spot';
import { spotDetailContainerStyle, spotsContainerStyle } from './styles';
import { successNotification } from 'utils/notifications';
import { useEffect, useState } from 'react';

const PendingSpots = ({ accessToken }) => {
  const [spots, setSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState();

  useEffect(() => {
    if (spots.length === 0) {
      getPendingSpots(accessToken).then((spots) => setSpots(spots));
    }
  }, []);

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

  return (
    <div className={spotsContainerStyle()}>
      <Map
        fullHeight={true}
        onMapClick={() => setSelectedSpot(null)}
        onChildClick={handleSelectSpot}
        onMapLoaded={() => setSelectedSpot(null)}
      >
        {spots.map((spot) => (
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
