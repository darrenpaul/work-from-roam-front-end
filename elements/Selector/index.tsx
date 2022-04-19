import Select from 'react-select';
import { selectorStyle } from './styles';

interface Params {
  id: String;
  value: String;
  options: Array<any>;
  onChange: Function;
  initialValue: { value: string; label: string };
}

const Selector = ({ id, options, onChange, value, initialValue, styles }: Params) => {
  const formatOptions = () => {
    return options.map((option) => ({
      value: option,
      label: option
    }));
  };

  const handleChange = ({ value }: { value: string }) => {
    onChange(id, value);
  };

  return (
    <Select
      className={selectorStyle(styles)}
      value={value}
      onChange={handleChange}
      options={formatOptions()}
      defaultValue={{ value: initialValue, label: initialValue }}
    />
  );
};

export default Selector;
