import AddressContainer from 'containers/Address';
import AmenityList from './AmenityList';
import Button from 'elements/Button';
import EnvelopeIcon from 'assets/icons/Envelope';
import GlobeIcon from 'assets/icons/Globe';
import Heading3 from 'elements/typography/Heading3';
import Heading5 from 'elements/typography/Heading5';
import LabelWithIcon from 'elements/LabelWithIcon';
import LinkWithIcon from 'elements/LinkWithIcon';
import Paragraph from 'elements/typography/Paragraphy';
import PhoneIcon from 'assets/icons/Phone';
import { dayNames } from 'utils/dateUtils';
import { ITEM_SPACE } from 'shared/styles/spacing';
import { spotDetailContainerStyle } from './styles';

const SpotDetailPanel = ({
  name,
  website,
  address,
  city,
  zipCode,
  country,
  email,
  phoneNumber,
  operatingHours,
  amenities,
  handleApproval,
}) => {
  const operatingTime = (day) => {
    const openTime = operatingHours[day].openTime;
    const closeTime = operatingHours[day].closeTime;
    const isOpen = operatingHours[day].open;
    if (isOpen === false) {
      return 'Closed';
    }
    return `${openTime} - ${closeTime}`;
  };

  return (
    <div className={spotDetailContainerStyle()}>
      <Heading3>{name}</Heading3>

      {website && (
        <LinkWithIcon styles={`${ITEM_SPACE}`} icon={GlobeIcon} url={website}></LinkWithIcon>
      )}

      <AddressContainer
        address={address}
        city={city}
        zipCode={zipCode}
        country={country}
        styles={`${ITEM_SPACE}`}
      />

      {email && <LabelWithIcon icon={EnvelopeIcon}>{email}</LabelWithIcon>}

      {phoneNumber && (
        <LabelWithIcon styles={`${ITEM_SPACE}`} icon={PhoneIcon}>
          {phoneNumber}
        </LabelWithIcon>
      )}

      <AmenityList amenities={amenities} />

      <Heading5 styles={`${ITEM_SPACE}`}>Operating Hours</Heading5>
      {dayNames.map(({ nice, key }) => (
        <div key={key}>
          <Paragraph>{nice}</Paragraph>
          <Paragraph>{operatingTime(key)}</Paragraph>
        </div>
      ))}

      {handleApproval && <Button onClick={handleApproval}>Approve</Button>}
    </div>
  );
};

export default SpotDetailPanel;
