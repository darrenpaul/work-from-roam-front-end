import Heading6 from 'elements/typography/Heading6';
import { containerStyle, contentContainerStyle } from './styles';

const Footer = () => {
  return (
    <div className={containerStyle()}>
      <div className={contentContainerStyle()}>
        <Heading6>Copyright © 2022 Work From Roam</Heading6>
      </div>
    </div>
  );
};

export default Footer;
