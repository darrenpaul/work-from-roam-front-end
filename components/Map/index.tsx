import GoogleMap from 'google-map-react';
import MapLoader from 'elements/Loaders/MapLoader';
import MarkerHome from 'components/Map/markers/MarkerHome';
import { DEFAULT_MAP_ZOOM } from 'utils/map';
import { mapContainerWrapperStyle } from './styles';
import { ReactNode, useEffect, useState } from 'react';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

interface Params {
  initialCenter: { lat: number; lng: number };
  fullHeight: boolean;
  onMapClick: Function;
  onChildClick: Function;
  onMapLoaded: Function;
  onMapChange: Function;
  showHomeMarker: boolean;
  children: ReactNode;
}

const Map = ({
  initialCenter,
  fullHeight,
  onMapClick,
  onChildClick,
  onMapLoaded,
  onMapChange,
  showHomeMarker = true,
  children,
}: Params) => {
  const [center, setCenter] = useState(
    initialCenter || { lat: -33.92706384916972, lng: 18.426755163696136 },
  );
  const [zoom, setZoom] = useState(DEFAULT_MAP_ZOOM);
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
          onChange={onMapChange}
          defaultCenter={center}
          defaultZoom={zoom}
          center={center}
          onClick={handleOnMapClick}
          onChildClick={handleOnChildClick}
        >
          {children}
          {center && showHomeMarker && (
            <MarkerHome onClick={() => {}} lat={center.lat} lng={center.lng} />
          )}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
