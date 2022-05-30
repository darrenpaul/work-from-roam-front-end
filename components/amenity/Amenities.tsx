import Selector from 'elements/Selector';
import { AMENITIES, getAmenityIcon } from 'utils/amenity';
import { LIGHT_COPY } from 'shared/styles/colors';
import { useState } from 'react';
import {
  amenityButtonStyle,
  amenityContainerStyle,
  amenityListContainerStyle,
  amenitySelectorContainerStyle,
} from './styles';
import Heading4 from 'elements/typography/Heading4';
import Divider from 'elements/Divider';
import { getCopy } from 'utils/copyReader';

interface Params {
  initialData: AmenityType;
  onChange: Function;
  styles?: string;
}

interface AmenityType {
  wifi: {
    available: boolean;
    option: string;
    cost: string;
  };
  plugPoints: {
    available: boolean;
    option: string;
    cost: string;
  };
  petFriendly: {
    available: boolean;
    option: string;
    cost: string;
  };
  parking: {
    available: boolean;
    option: string;
    cost: string;
  };
  wheelChairAccessible: {
    available: boolean;
    option: string;
    cost: string;
  };
}

const Amenities = ({ initialData, onChange, styles = '' }: Params) => {
  const [amenities, setAmenities] = useState<AmenityType>(initialData);

  const handleInputChange = (id: keyof AmenityType, value: object) => {
    const newState = { ...amenities, [id]: { ...amenities[id], ...value } };
    setAmenities(newState);
    onChange(newState);
  };

  return (
    <div className={amenityListContainerStyle(styles)}>
      <Heading4>{getCopy('spotFormCopy:amenities')}</Heading4>
      <Divider styles={'mt-2'} />

      {AMENITIES.map((amenity, index) => (
        <div key={index} className={amenityContainerStyle()}>
          <button
            className={amenityButtonStyle(
              amenities[amenity.key as keyof AmenityType]?.available as boolean,
            )}
            onClick={() =>
              handleInputChange(amenity.key, {
                available: !amenities[amenity.key as keyof AmenityType]?.available,
              })
            }
            value={amenity.name}
          >
            {getAmenityIcon(amenity.key, amenities[amenity.key]?.available && LIGHT_COPY)}
          </button>

          {amenity.options.length > 0 && amenities[amenity.key]?.available && (
            <div className={amenitySelectorContainerStyle()}>
              <Selector
                id={amenity.key}
                options={amenity.options}
                initialValue={amenities[amenity.key].option}
                onChange={(id: string, option: string) => handleInputChange(id, { option })}
              />

              <Selector
                id={amenity.key}
                options={amenity.cost}
                initialValue={amenities[amenity.key].cost}
                onChange={(id: string, cost: string) => handleInputChange(id, { cost })}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Amenities;
