import Button from '../../elements/Button';
import Input from '../../elements/Input';
import Selector from '../../elements/Selector';
import styled from 'styled-components';
import { generateHours, generateMinutes } from '../../utils/dateUtils';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
`;
const FloatingWindow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: red;
  left: 0;
  top: 0;
  z-index: 100;
`;
const hours = generateHours();
const minutes = generateMinutes();

const TimeSelector = ({ onChange, id, hour, minute }) => {
  const [selectorState, setSelectorState] = useState(false);

  const showSelector = () => {
    setSelectorState(true);
  };

  const hideSelector = () => {
    setSelectorState(false);
  };

  const handleChange = (selectorId, value) => {
    onChange(id, { [selectorId]: value });
  };

  return (
    <Container>
      <Input
        id={'mondayOpening'}
        placeholder={'Opening'}
        value={`${hour}:${minute}`}
        error={''}
        inputChange={() => {}}
        onFocusFn={showSelector}
      />
      {selectorState && (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FloatingWindow>
            <Selector id={'hour'} options={hours} onChange={handleChange} initialValue={hour} />
            <Selector
              id={'minute'}
              options={minutes}
              onChange={handleChange}
              initialValue={minute}
            />
            <Button onClick={hideSelector}>Save</Button>
          </FloatingWindow>
        </div>
      )}
    </Container>
  );
};

export default TimeSelector;
