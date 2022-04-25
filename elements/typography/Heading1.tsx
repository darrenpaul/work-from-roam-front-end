import { heading1Style } from './styles';
import { Params } from './params';

const Heading1 = ({ color, styles = '', children }: Params) => {
  return <h3 className={heading1Style(color, styles)}>{children}</h3>;
};

export default Heading1;
