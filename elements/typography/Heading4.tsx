import { heading4Style } from './styles';
import { Params } from './params';

const Heading4 = ({ color, styles = '', children }: Params) => {
  return <h3 className={heading4Style(color, styles)}>{children}</h3>;
};

export default Heading4;
