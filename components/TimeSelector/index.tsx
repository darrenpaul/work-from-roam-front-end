import Button from '../../elements/Button';
import Heading5 from 'elements/typography/Heading5';
import Input from '../../elements/Input';
import Modal from 'containers/Modal';
import Selector from '../../elements/Selector';
import useShowModal from 'hooks/useModal';
import {
  floatingWindowContainerStyle,
  inputContainerStyle,
  selectorContainerStyle,
  timeSelectorContainerStyle,
} from './styles';
import { generateHours, generateMinutes, splitTime } from '../../utils/dateUtils';

const hours = generateHours();
const minutes = generateMinutes();

const TimeSelector = ({ onChange, id, time, mt = 0, ml = 0 }) => {
  const { showModal, handleShowModal, handleCloseModal } = useShowModal();

  const styleProps = { mt, ml };

  const showSelector = () => {
    handleShowModal();
  };

  const hideSelector = () => {
    handleCloseModal();
  };

  const handleChange = (selectorId, value) => {
    onChange(id, { [selectorId]: value });
  };

  return (
    <div className={timeSelectorContainerStyle({ ...styleProps })}>
      <Input
        id={'mondayOpening'}
        placeholder={'Opening'}
        value={time}
        error={''}
        inputChange={() => {}}
        onFocusFn={showSelector}
      />
      <Modal showState={showModal} handleClose={handleCloseModal}>
        <div className={floatingWindowContainerStyle()}>
          <div className={inputContainerStyle()}>
            <Heading5>Select time</Heading5>

            <div className={selectorContainerStyle()}>
              <Selector
                id={'hour'}
                options={hours}
                onChange={handleChange}
                initialValue={splitTime(time).hour}
              />

              <Selector
                id={'minute'}
                options={minutes}
                onChange={handleChange}
                initialValue={splitTime(time).minute}
              />
            </div>

            <Button onClick={hideSelector}>Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TimeSelector;
