export const MISSING_DATA = 'Unknown';

const WIFI_OPTIONS = [
  'Up to 1mbps',
  'Up to 5mbps',
  'Up to 10mbps',
  'Up to 15mbps',
  'Up to 20mbps',
  'Up to 25mbps',
  'Up to 30mbps',
  'Up to 50mbps',
  'Up to 100mbps',
];

const PARKING_OPTIONS = ['On street', 'Off street', 'On and Off street'];

const COST_OPTIONS = ['Free', 'Paid', 'Free and Paid'];
const USAGE_OPTIONS = ['Capped', 'Unlimited'];

export const AMENITIES = [
  { name: 'WiFi', key: 'wifi', options: WIFI_OPTIONS, cost: COST_OPTIONS },
  { name: 'Plug Points', key: 'plugPoints', options: [], cost: [] },
  { name: 'Pet Friendly', key: 'petFriendly', options: [], cost: [] },
  { name: 'Parking', key: 'parking', options: PARKING_OPTIONS, cost: COST_OPTIONS },
  {
    name: 'Wheel Chair Accessible',
    key: 'wheelChairAccessible',
    options: [],
    cost: [],
  },
  {
    name: 'Generator',
    key: 'generator',
    options: [],
    cost: [],
  },
];
