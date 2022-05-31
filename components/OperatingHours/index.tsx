import Heading6 from 'elements/typography/Heading6';
import Button from 'elements/Button';
import Flex from 'containers/Flex';
import Grid from 'containers/Grid';
import SwitchButton from 'elements/SwitchButton';
import TimeSelector from 'components/TimeSelector';
import { dayNames, splitTime } from 'utils/dateUtils';
import { operatingHourContainerStyle, operatingHoursContainerStyle } from './styles';
import Heading4 from 'elements/typography/Heading4';
import Divider from 'elements/Divider';
import { getCopy } from 'utils/copyReader';
import { useState } from 'react';

const OperatingHours = ({ data, onChange, onBatchChange, styles }) => {
  const [individualHours, setIndividualHours] = useState(true);
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
      <Flex width="full" justify="between" align="center">
        <Heading4>{getCopy('spotFormCopy:openCloseTimes')}</Heading4>

        <SwitchButton
          label="Edit all"
          onChange={() => setIndividualHours(!individualHours)}
          initialValue={data.monday.open}
        />
      </Flex>

      <Divider styles={'mt-2'} />

      {individualHours === false && (
        <Grid width="full" justify="between" align="center" mt="item" columns="2" columns_md="4">
          <Heading6>All times</Heading6>

          <SwitchButton
            label="Open"
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
        </Grid>
      )}

      {individualHours === true &&
        dayNames.map(({ nice, key }, index) => (
          <Grid
            key={index}
            width="full"
            justify="between"
            align="center"
            mt="item"
            columns="2"
            columns_md="4"
          >
            <Heading6>{nice}</Heading6>

            <SwitchButton
              label="Open"
              id={key}
              onChange={handleIsOpenChange}
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
          </Grid>
        ))}
    </div>
  );
};

export default OperatingHours;
