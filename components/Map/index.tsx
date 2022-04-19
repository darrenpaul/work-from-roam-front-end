import GoogleMap from 'google-map-react';
import MapLoader from 'elements/Loaders/MapLoader';
import { mapContainerWrapperStyle } from './styles';
import { ReactNode, useEffect, useState } from 'react';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

interface Params {
  initialCenter: { lat: number; lng: number };
  fullHeight: boolean;
  onMapClick: Function;
  onChildClick: Function;
  onMapLoaded: Function;
  children: ReactNode;
}

const Map = ({
  initialCenter,
  fullHeight,
  onMapClick,
  onChildClick,
  onMapLoaded,
  children
}: Params) => {
  const [center, setCenter] = useState(initialCenter || null);
  const [zoom, setZoom] = useState(18);
  const [mapLoading, setMapLoading] = useState(true);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setCenter({ lat: latitude, lng: longitude });
      });
    }
  };

  const handleApiLoaded = () => {
    setMapLoading(false);
    onMapLoaded(true);
  };

  const handleOnMapClick = (event: any) => {
    const { lat, lng } = event;
    onMapClick({ lat, lng });
  };

  const handleOnChildClick = (key, childProps) => {
    onChildClick(childProps);
  };

  return (
    <div className={mapContainerWrapperStyle(fullHeight)}>
      {mapLoading && <MapLoader loading={mapLoading} />}

      {center && (
        <GoogleMap
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={handleApiLoaded}
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
          center={center}
          onClick={handleOnMapClick}
          onChildClick={handleOnChildClick}
        >
          {children}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
