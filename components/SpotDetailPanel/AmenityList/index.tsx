import AmenityItem from '../AmenityItem';
import Heading5 from 'elements/typography/Heading5';
import ParkingIcon from 'assets/icons/Parking';
import PawIcon from 'assets/icons/Paw';
import PlugIcon from 'assets/icons/Plug';
import WheelChairIcon from 'assets/icons/WheelChair';
import WifiIcon from 'assets/icons/Wifi';

const AmenityList = ({ amenities }) => {
  return (
    <div>
      <Heading5 styles={'mt-item'}>Amenities</Heading5>
      <AmenityItem title="Wi-Fi" icon={WifiIcon} amenity={amenities.wifi} optionText="Speed" />
      <AmenityItem title="Plug Points" icon={PlugIcon} amenity={amenities.plugPoints} />
      <AmenityItem title="Parking" icon={ParkingIcon} amenity={amenities.parking} />
      <AmenityItem title="Pet Friendly" icon={PawIcon} amenity={amenities.petFriendly} />
      <AmenityItem
        title="Wheel Chair"
        icon={WheelChairIcon}
        amenity={amenities.wheelChairAccessible}
      />
    </div>
  );
};

export default AmenityList;
