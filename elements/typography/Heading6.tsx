import { heading6Style } from './styles';
import { Params } from './params';

const Heading6 = ({ color, styles = '', children }: Params) => {
  return <h6 className={heading6Style(color, styles)}>{children}</h6>;
};

export default Heading6;
