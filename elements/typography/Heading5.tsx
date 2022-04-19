import { heading5Style } from './styles';
import { Params } from './params';

const Heading5 = ({ color, styles = '', children }: Params) => {
  return <h3 className={heading5Style(color, styles)}>{children}</h3>;
};

export default Heading5;
