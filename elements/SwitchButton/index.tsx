import { Switch } from './styles';

interface Params {
  id: string;
  onChange: Function;
  initialValue?: boolean;
}

const SwitchButton = ({ id, onChange, initialValue }: Params) => {
  const handleChange = () => {
    onChange(id, !initialValue);
  };

  return (
    <Switch onClick={handleChange}>
      <input type="checkbox" defaultChecked={initialValue} />
      <span />
    </Switch>
  );
};

export default SwitchButton;
