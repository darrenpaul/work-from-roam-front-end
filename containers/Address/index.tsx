import MapIcon from 'assets/icons/Map';
import Paragraph from 'elements/typography/Paragraphy';
import { addressContainerStyle, addressDetailsContainerStyle } from './styles';

const AddressContainer = ({ address, suburb, city, zipCode, country, styles = '' }) => {
  return (
    <div className={addressContainerStyle(styles)}>
      <MapIcon />
      <div className={addressDetailsContainerStyle()}>
        <Paragraph>{address}</Paragraph>
        <Paragraph>{suburb}</Paragraph>
        <Paragraph>{city}</Paragraph>
        <Paragraph>{zipCode}</Paragraph>
        <Paragraph>{country}</Paragraph>
      </div>
    </div>
  );
};

export default AddressContainer;
