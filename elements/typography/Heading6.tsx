import { heading6Style } from './styles';
import { Params } from './params';

const Heading6 = ({ styles = '', children }: Params) => {
  return <h6 className={heading6Style(styles)}>{children}</h6>;
};

export default Heading6;
