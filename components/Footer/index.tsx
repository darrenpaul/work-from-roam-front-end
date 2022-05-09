import Heading6 from 'elements/typography/Heading6';
import { COMPANY_NAME } from '../../shared/constants';
import { containerStyle, contentContainerStyle } from './styles';

const Footer = () => {
  return (
    <div className={containerStyle()}>
      <div className={contentContainerStyle()}>
        <Heading6>Copyright © 2022 {COMPANY_NAME}</Heading6>
      </div>
    </div>
  );
};

export default Footer;
