import { paragraphStyle } from './styles';
import { Params } from './params';

const Paragraph = ({ color, styles = '', mt = 0, ml = 0, children }: Params) => {
  const styleProps = { color, mt, ml, styles };
  return <p className={paragraphStyle({ ...styleProps })}>{children}</p>;
};

export default Paragraph;
