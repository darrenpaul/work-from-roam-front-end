import AddressContainer from 'containers/Address';
import AmenityList from './AmenityList';
import Button from 'elements/Button';
import EnvelopeIcon from 'assets/icons/Envelope';
import GlobeIcon from 'assets/icons/Globe';
import Heading5 from 'elements/typography/Heading5';
import Heading6 from 'elements/typography/Heading6';
import LabelWithIcon from 'elements/LabelWithIcon';
import Link from 'next/link';
import LinkWithIcon from 'elements/LinkWithIcon';
import Paragraph from 'elements/typography/Paragraphy';
import PhoneIcon from 'assets/icons/Phone';
import { createDirectionURL } from 'utils/map';
import { dayNames } from 'utils/dateUtils';
import { spotDetailContainerStyle } from './styles';

const SpotDetailPanel = ({
  id,
  name,
  website,
  address,
  suburb,
  city,
  zipCode,
  country,
  email,
  phoneNumber,
  operatingHours,
  amenities,
  handleApproval,
  isLoggedIn,
  userLocation,
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

  const handleDirectionButtonClick = () => {
    const directionURL = createDirectionURL(name, userLocation, address, city, zipCode, country);
    window.open(directionURL);
  };

  return (
    <div className={spotDetailContainerStyle()}>
      <Heading5>{name}</Heading5>
      {isLoggedIn && <Link href={`/spot-suggestion/${id}`}>Add suggestion</Link>}

      {website && <LinkWithIcon styles={'mt-item'} icon={GlobeIcon} url={website}></LinkWithIcon>}

      <AddressContainer
        address={address}
        suburb={suburb}
        city={city}
        zipCode={zipCode}
        country={country}
        styles={'mt-item'}
      />

      {email && <LabelWithIcon icon={EnvelopeIcon}>{email}</LabelWithIcon>}

      {phoneNumber && (
        <LabelWithIcon styles={'mt-item'} icon={PhoneIcon}>
          {phoneNumber}
        </LabelWithIcon>
      )}

      <AmenityList amenities={amenities} />

      <Heading6 styles={'mt-item'}>Operating Hours</Heading6>
      {dayNames.map(({ nice, key }) => (
        <div key={key}>
          <Paragraph>{nice}</Paragraph>
          <Paragraph>{operatingTime(key)}</Paragraph>
        </div>
      ))}

      <Button styles="mt-item" onClick={handleDirectionButtonClick}>
        Directions
      </Button>

      {handleApproval && <Button onClick={handleApproval}>Approve</Button>}
    </div>
  );
};

export default SpotDetailPanel;
