import { paragraphStyle } from './styles';
import { Params } from './params';

const Paragraph = ({ color, styles = '', children }: Params) => {
  return <p className={paragraphStyle(color, styles)}>{children}</p>;
};

export default Paragraph;
