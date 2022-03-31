import Selector from 'elements/Selector';
import { callCodes } from 'utils/countryCodes';
import { inputContainerStyle, inputErrorStyle, inputStyle } from './styles';
import { useEffect } from 'react';

interface InputParams {
  id: string;
  value: string;
  inputChange: Function;
  error: string;
  name?: string;
  placeholder?: string;
  nextInput?: string;
  type?: string;
  onFocusFn?: Function;
  onBlurFn?: Function;
  phoneCode?: string;
}

const Input = ({
  id,
  name,
  placeholder,
  value,
  phoneCode,
  inputChange,
  error,
  nextInput,
  type = 'text',
  onFocusFn = () => {},
  onBlurFn = () => {}
}: InputParams) => {
  const handleInputChange = (id, value) => {
    inputChange(id, value);
  };

  return (
    <div className={inputContainerStyle()}>
      {type === 'telephone' && (
        <Selector
          id={'phoneCode'}
          options={callCodes()}
          onChange={handleInputChange}
          initialValue={phoneCode}
        />
      )}

      <input
        className={inputStyle()}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(event) => handleInputChange(id, event.target.value)}
        type={type}
        onFocus={() => onFocusFn()}
        onBlur={() => onBlurFn()}
      />
      <small className={inputErrorStyle()}>{error}</small>
    </div>
  );
};

export default Input;
