import Flex from 'containers/Flex';
import Label from 'elements/typography/Label';
import { Switch } from './styles';

interface Params {
  label?: string;
  id: string;
  onChange: Function;
  initialValue?: boolean;
}

const SwitchButton = ({ label, id, onChange, initialValue }: Params) => {
  const handleChange = () => {
    onChange(id, !initialValue);
  };

  return (
    <Flex align="center" column>
      <Switch onChange={handleChange}>
        <input type="checkbox" defaultChecked={initialValue} />
        <span />
      </Switch>
      {label && <Label>{label}</Label>}
    </Flex>
  );
};

export default SwitchButton;
