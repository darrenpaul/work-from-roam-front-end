import AmenityItem from '../AmenityItem';
import Heading5 from 'elements/typography/Heading5';
import ParkingIcon from 'assets/icons/Parking';
import PlugIcon from 'assets/icons/Plug';
import WifiIcon from 'assets/icons/Wifi';
import { ITEM_TOP_SPACE } from 'shared/styles/spacing';

const AmenityList = ({ amenities }) => {
  return (
    <div>
      <Heading5 styles={`${ITEM_TOP_SPACE}`}>Amenities</Heading5>
      <AmenityItem title="Wi-Fi" icon={WifiIcon} amenity={amenities.wifi} optionText="Speed" />
      <AmenityItem title="Plug Points" icon={PlugIcon} amenity={amenities.plugPoints} />
      <AmenityItem title="Parking" icon={ParkingIcon} amenity={amenities.parking} />
    </div>
  );
};

export default AmenityList;
