import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {
  memo,
  useCallback,
  useEffect,
  useState
  } from 'react';

const containerStyle = {
  width: '100vw',
  height: '50vh'
};

const Map = ({ onHandleMapClick = () => {}, children }) => {
  const [center, setCenter] = useState({
    lat: 59.95,
    lng: 30.33
  });
  const [zoom, setZoom] = useState(10);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCKc_iAEFoAJ4RqlpORFuyTm_NV5R_guIA' //TODO: move to env
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setCenter({ lat: latitude, lng: longitude });
        setZoom(18);
      });
    }
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: [{ elementType: 'labels', featureType: 'poi', stylers: [{ visibility: 'off' }] }]
      }}
      // options={{ mapTypeControl: false }}
      onClick={(event) => {
        const lat = event?.latLng.lat();
        const lng = event?.latLng.lng();
        onHandleMapClick({ lat, lng });
      }}
    >
      {children}

      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
