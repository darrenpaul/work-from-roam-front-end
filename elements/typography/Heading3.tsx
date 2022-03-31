import { heading3Style } from './styles';
import { Params } from './params';

const Heading3 = ({ color, styles = '', children }: Params) => {
  return <h3 className={heading3Style(color, styles)}>{children}</h3>;
};

export default Heading3;
