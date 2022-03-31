import Heading3 from 'elements/typography/Heading3';
import Map from 'components/Map';
import MarkerCoffee from 'components/Map/markers/MarkerCoffee';
import Paragraph from 'elements/typography/Paragraphy';
import SpotDetail from 'components/Map/overlays/SpotDetail';
import { dayNames, formatTimeObject } from 'utils/dateUtils';
import { getSpots } from 'apiClient/spot';
import { spotDetailContainerStyle, spotsContainerStyle } from './styles';
import { useEffect, useState } from 'react';

const Spots = ({ accessToken }) => {
  const [spots, setSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState();

  useEffect(() => {
    if (spots.length === 0) {
      getSpots(accessToken).then((spots) => setSpots(spots));
    }
  });

  const handleSelectSpot = ({ spot }) => {
    if (selectedSpot?.id === spot.id) {
      setSelectedSpot(null);
    } else {
      setSelectedSpot(spot);
    }
  };

  const operatingTime = (day) => {
    const { operatingHours } = selectedSpot;
    const openTime = formatTimeObject(operatingHours[day].openTime);
    const closeTime = formatTimeObject(operatingHours[day].closeTime);
    const isOpen = operatingHours[day].open;
    if (isOpen === false) {
      return 'Closed';
    }
    return `${openTime} - ${closeTime}`;
  };

  return (
    <div className={spotsContainerStyle()}>
      <Map
        fullHeight={true}
        onMapClick={() => setSelectedSpot(null)}
        onChildClick={handleSelectSpot}
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

      {selectedSpot && (
        <div className={spotDetailContainerStyle()}>
          <Heading3>{selectedSpot?.name}</Heading3>
          <Paragraph>{selectedSpot?.website}</Paragraph>
          <Paragraph>{selectedSpot?.address}</Paragraph>
          <Paragraph>{selectedSpot?.email}</Paragraph>
          <Paragraph>{selectedSpot?.phoneNumber}</Paragraph>

          {dayNames.map(({ nice, key }) => (
            <div key={key}>
              <Paragraph>{nice}</Paragraph>
              <Paragraph>{operatingTime(key)}</Paragraph>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Spots;
