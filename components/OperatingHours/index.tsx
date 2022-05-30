import Heading6 from 'elements/typography/Heading6';
import Button from 'elements/Button';
import SwitchButton from 'elements/SwitchButton';
import TimeSelector from 'components/TimeSelector';
import { dayNames, splitTime } from 'utils/dateUtils';
import { operatingHourContainerStyle, operatingHoursContainerStyle } from './styles';
import Heading4 from 'elements/typography/Heading4';
import Divider from 'elements/Divider';
import { getCopy } from 'utils/copyReader';
import { useState } from 'react';

const OperatingHours = ({ data, onChange, onBatchChange, styles }) => {
  const [individualHours, setIndividualHours] = useState(false);
  const handleIsOpenChange = (id, value) => {
    onChange(id, { open: value });
  };

  const handleTimeChange = (key, id, value) => {
    const { hour, minute } = splitTime(data[id][key]);
    const timeObject = { hour, minute, ...value };
    const timeString = `${timeObject.hour}:${timeObject.minute}`;
    onChange(id, { [key]: timeString });
  };

  const handleBatchChange = (key, value) => {
    const { hour, minute } = splitTime(data.monday[key]);
    const timeObject = { hour, minute, ...value };
    const timeString = `${timeObject.hour}:${timeObject.minute}`;
    onBatchChange(key, timeString);
  };

  return (
    <div className={operatingHoursContainerStyle(styles)}>
      <Heading4>{getCopy('spotFormCopy:openCloseTimes')}</Heading4>

      <div className="flex">
        <Heading6>Edit All</Heading6>

        <SwitchButton
          onChange={() => setIndividualHours(!individualHours)}
          initialValue={data.monday.open}
        />
      </div>

      <Divider styles={'mt-2'} />

      {individualHours === false && (
        <div className={operatingHourContainerStyle()}>
          <Heading6>All times</Heading6>

          <SwitchButton
            onChange={(id, value) => onBatchChange('open', value)}
            initialValue={data.monday.open}
          />

          <TimeSelector
            onChange={(id, value) => handleBatchChange('openTime', value)}
            time={data.monday.openTime}
          />

          <TimeSelector
            onChange={(id, value) => handleBatchChange('closeTime', value)}
            time={data.monday.closeTime}
          />
        </div>
      )}

      {individualHours === true &&
        dayNames.map(({ nice, key }, index) => (
          <div className={operatingHourContainerStyle()} key={index}>
            <Heading6>{nice}</Heading6>

            <SwitchButton id={key} onChange={handleIsOpenChange} initialValue={data[key].open} />

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
