import Selector from 'elements/Selector';
import { callCodes } from 'utils/countryCodes';
import {
  inputContainerStyle,
  inputErrorStyle,
  inputInnerContainerStyle,
  inputStyle,
  labelStyle,
} from './styles';

interface InputParams {
  id: string;
  value: string;
  inputChange: Function;
  error: string;
  name?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  nextInput?: string;
  type?: string;
  onFocusFn?: Function;
  onBlurFn?: Function;
  phoneCode?: string;
  styles?: string;
  autoComplete?: string;
}

const Input = ({
  id,
  name,
  label,
  required,
  placeholder,
  value,
  phoneCode,
  inputChange,
  error,
  nextInput,
  autoComplete = 'on',
  type = 'text',
  onFocusFn = () => {},
  onBlurFn = () => {},
  styles = '',
}: InputParams) => {
  const handleInputChange = (id, value) => {
    inputChange(id, value);
  };

  const labelText = () => {
    return `${label}${!required ? ' (optional)' : ''}`;
  };

  return (
    <div className={inputContainerStyle(styles)}>
      {label && <label className={labelStyle()}>{labelText()}</label>}

      <div className={inputInnerContainerStyle()}>
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
          autoComplete={autoComplete}
        />
      </div>

      <small className={inputErrorStyle()}>{error}</small>
    </div>
  );
};

export default Input;
