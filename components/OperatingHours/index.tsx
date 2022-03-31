import Flex from 'containers/Flex';
import Heading6 from 'elements/typography/Heading6';
import styled from 'styled-components';
import SwitchButton from 'elements/SwitchButton';
import TimeSelector from 'components/TimeSelector';
import { dayNames } from 'utils/dateUtils';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
`;

const OperatingHours = ({ initialData, onChange }) => {
  const handleIsOpenChange = (id, value) => {
    onChange(id, { open: value });
  };

  const handleOpenTimeChange = (id, value) => {
    const key = 'openTime';
    const merged = { ...initialData[id][key], ...value };
    onChange(id, { [key]: merged });
  };

  const handleCloseTimeChange = (id, value) => {
    const key = 'closeTime';
    const merged = { ...initialData[id][key], ...value };
    onChange(id, { [key]: merged });
  };

  return (
    <Flex>
      {dayNames.map(({ nice, key }, index) => (
        <Grid key={index}>
          <Heading6>{nice}</Heading6>

          <SwitchButton
            id={key}
            onChange={(id, value) => handleIsOpenChange(id, value)}
            initialValue={initialData[key]}
          />

          <TimeSelector
            onChange={handleOpenTimeChange}
            id={key}
            hour={initialData[key].openTime.hour}
            minute={initialData[key].openTime.minute}
          />

          <TimeSelector
            onChange={handleCloseTimeChange}
            id={key}
            hour={initialData[key].closeTime.hour}
            minute={initialData[key].closeTime.minute}
          />
        </Grid>
      ))}
    </Flex>
  );
};

export default OperatingHours;
