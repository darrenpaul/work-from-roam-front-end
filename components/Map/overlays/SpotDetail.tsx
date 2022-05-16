import Heading5 from 'elements/typography/Heading5';
import Link from 'next/link';
import Paragraph from 'elements/typography/Paragraphy';
import { getAmenityIcon } from 'utils/amenity';
import {
  spotAmenitiesContainerStyle,
  spotDetailContainerStyle,
  spotDetailOverlayContainerStyle,
} from './styles';

interface Params {
  spot: any;
  onClick: Function;
  isLoggedIn: boolean;
}

const SpotDetail = ({ spot, onClick, isLoggedIn }: Params) => {
  const { amenities, company, description, id } = spot;
  const amenityKeys: string[] = [];
  Object.keys(amenities).forEach((key) => {
    if (amenities[key].available === true) amenityKeys.push(key);
  });

  return (
    <div onClick={() => onClick()} className={spotDetailOverlayContainerStyle()}>
      <div className={spotDetailContainerStyle()}>
        <Heading5>{company}</Heading5>
        <Paragraph styles="mt-item">{description}</Paragraph>
        {amenityKeys.length > 0 && (
          <div className={spotAmenitiesContainerStyle()}>
            {amenityKeys.map((amenity, index) => (
              <div key={index}>{getAmenityIcon(amenity)}</div>
            ))}
          </div>
        )}
        {isLoggedIn && <Link href={`/spot-suggestion/${id}`}>Add suggestion</Link>}
      </div>
    </div>
  );
};

export default SpotDetail;
