import ParkingIcon from 'assets/icons/Parking';
import PawIcon from 'assets/icons/Paw';
import PlugIcon from 'assets/icons/Plug';
import WheelChairIcon from 'assets/icons/WheelChair';
import WifiIcon from 'assets/icons/Wifi';
import BoltIcon from 'assets/icons/Bolt';

export const getAmenityIcon = (amenity: string, color?: string) => {
  switch (amenity) {
    case 'wifi':
      return <WifiIcon color={color} />;
    case 'plugPoints':
      return <PlugIcon color={color} />;
    case 'petFriendly':
      return <PawIcon color={color} />;
    case 'parking':
      return <ParkingIcon color={color} />;
    case 'wheelChairAccessible':
      return <WheelChairIcon color={color} />;
    case 'generator':
      return <BoltIcon color={color} />;
  }
};
