import Heading6 from 'elements/typography/Heading6';
import Paragraph from 'elements/typography/Paragraphy';
import { amenityContainerStyle, amenityTitleContainerStyle } from './styles';
import { MISSING_DATA } from 'constants/amenity';

interface Params {
  amenity: { available: string; cost: string; option: string };
  title: string;
  icon: any;
  availableText?: string;
  costText?: string;
  optionText?: string;
}

const AmenityItem = ({
  amenity,
  title,
  icon,
  availableText = 'Available',
  costText = 'Cost',
  optionText = 'Option',
}: Params) => {
  const Icon = icon;

  const formatAvailable = () => {
    if (!amenity?.available) {
      return `${availableText}: ${MISSING_DATA}`;
    }

    return `${availableText}: ${amenity?.available ? 'Yes' : 'No'}`;
  };

  return (
    <div className={amenityContainerStyle()}>
      <div className={amenityTitleContainerStyle()}>
        <Icon />
        <Heading6 styles="ml-2">{title}</Heading6>
      </div>
      <Paragraph>{formatAvailable()}</Paragraph>
      {amenity?.cost && <Paragraph>{`${costText}: ${amenity?.cost}`}</Paragraph>}
      {amenity?.option && <Paragraph>{`${optionText}: ${amenity?.option}`}</Paragraph>}
    </div>
  );
};

export default AmenityItem;
