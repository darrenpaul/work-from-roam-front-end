export const dayNames = [
  { nice: 'Monday', short: 'Mon', key: 'monday' },
  { nice: 'Tuesday', short: 'Tue', key: 'tuesday' },
  { nice: 'Wednesday', short: 'Wed', key: 'wednesday' },
  { nice: 'Thursday', short: 'Thu', key: 'thursday' },
  { nice: 'Friday', short: 'Fri', key: 'friday' },
  { nice: 'Saturday', short: 'Sat', key: 'saturday' },
  { nice: 'Sunday', short: 'Sun', key: 'sunday' }
];

export const generateHours = () => {
  const hours = [];
  for (let i = 1; i < 25; i++) {
    hours.push(String(i).padStart(2, '0'));
  }
  return hours;
};

export const generateMinutes = () => {
  const minutes = [];
  for (let i = 0; i < 61; i++) {
    minutes.push(String(i).padStart(2, '0'));
  }
  return minutes;
};

export const formatTimeObject = (timeObject: { hour: string; minute: string }) => {
  const { hour, minute } = timeObject;
  return `${hour}:${minute}`;
};
