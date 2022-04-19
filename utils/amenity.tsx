import ParkingIcon from 'assets/icons/Parking';
import PawIcon from 'assets/icons/Paw';
import PlugIcon from 'assets/icons/Plug';
import WheelChairIcon from 'assets/icons/WheelChair';
import WifiIcon from 'assets/icons/Wifi';

export const missingData = 'Unknown';

const WIFI_OPTIONS = [
  'Up to 1mbps',
  'Up to 5mbps',
  'Up to 10mbps',
  'Up to 20mbps',
  'Up to 50mbps',
  'Up to 100mbps'
];

const PARKING_OPTIONS = ['On street', 'Off street', 'On and Off street'];

const COST_OPTIONS = ['Free', 'Paid', 'Free and Paid'];

export const AMENITIES = [
  { name: 'WiFi', key: 'wifi', options: WIFI_OPTIONS, cost: COST_OPTIONS },
  { name: 'Plug Points', key: 'plugPoints', options: [], cost: [] },
  { name: 'Pet Friendly', key: 'petFriendly', options: [], cost: [] },
  { name: 'Parking', key: 'parking', options: PARKING_OPTIONS, cost: COST_OPTIONS },
  {
    name: 'Wheel Chair Accessible',
    key: 'wheelChairAccessible',
    options: [],
    cost: []
  }
];

export const getAmenityIcon = (amenity: string, color: string) => {
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
  }
};
