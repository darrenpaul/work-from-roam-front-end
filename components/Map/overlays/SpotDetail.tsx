import Heading5 from 'elements/typography/Heading5';
import Link from 'next/link';
import Paragraph from 'elements/typography/Paragraphy';
import { getAmenityIcon } from 'utils/amenity';
import {
  spotAmenitiesContainerStyle,
  spotDetailContainerStyle,
  spotDetailOverlayContainerStyle,
} from './styles';

const divStyle = {
  position: 'relative',
  transform: 'translate(-50%, -150%)',
  width: 220,
  backgroundColor: 'white',
  boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
  padding: 10,
  fontSize: 14,
  zIndex: 100,
};

const SpotDetail = ({ spot, onClick }) => {
  const { amenities, name, description, id } = spot;
  const amenityKeys = [];
  Object.keys(amenities).forEach((key) => {
    if (amenities[key].available === true) amenityKeys.push(key);
  });

  return (
    <div onClick={onClick} className={spotDetailOverlayContainerStyle()}>
      <div className={spotDetailContainerStyle()}>
        <Heading5>{name}</Heading5>
        <Paragraph>{description}</Paragraph>
        <div className={spotAmenitiesContainerStyle()}>
          {amenityKeys.map((amenity, index) => (
            <div key={index}>{getAmenityIcon(amenity)}</div>
          ))}
        </div>
        <Link href={`/spot-suggestion/${id}`}>Add suggestion</Link>
      </div>
    </div>
  );
};

export default SpotDetail;
