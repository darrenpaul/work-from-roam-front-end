import Heading6 from 'elements/typography/Heading6';
import SwitchButton from 'elements/SwitchButton';
import TimeSelector from 'components/TimeSelector';
import { dayNames, splitTime } from 'utils/dateUtils';
import { operatingHourContainerStyle, operatingHoursContainerStyle } from './styles';

const OperatingHours = ({ data, onChange }) => {
  const handleIsOpenChange = (id, value) => {
    onChange(id, { open: value });
  };

  const handleTimeChange = (key, id, value) => {
    const { hour, minute } = splitTime(data[id][key]);
    const timeObject = { hour, minute, ...value };
    const timeString = `${timeObject.hour}:${timeObject.minute}`;
    onChange(id, { [key]: timeString });
  };
  return (
    <div className={operatingHoursContainerStyle()}>
      {dayNames.map(({ nice, key }, index) => (
        <div className={operatingHourContainerStyle()} key={index}>
          <Heading6>{nice}</Heading6>

          <SwitchButton
            id={key}
            onChange={(id, value) => handleIsOpenChange(id, value)}
            initialValue={data[key].open}
          />

          <TimeSelector
            onChange={(id, value) => handleTimeChange('openTime', id, value)}
            id={key}
            time={data[key].openTime}
          />

          <TimeSelector
            onChange={(id, value) => handleTimeChange('closeTime', id, value)}
            id={key}
            time={data[key].closeTime}
          />
        </div>
      ))}
    </div>
  );
};

export default OperatingHours;
