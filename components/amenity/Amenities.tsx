import Selector from 'elements/Selector';
import { AMENITIES, getAmenityIcon } from 'utils/amenity';
import { amenityButtonStyle, amenityContainerStyle, amenityListContainerStyle } from './styles';
import { useState } from 'react';

interface Params {
  initialData: AmenityType;
  onChange: Function;
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

const Amenities = ({ initialData, onChange }: Params) => {
  const [amenities, setAmenities] = useState(initialData);

  const handleInputChange = (id: string, value: object) => {
    const newState = { ...amenities, [id]: { ...amenities[id], ...value } };
    setAmenities(newState);
    onChange(newState);
  };

  return (
    <div className={amenityListContainerStyle()}>
      {AMENITIES.map((amenity, index) => (
        <div key={index} className={amenityContainerStyle()}>
          <button
            className={amenityButtonStyle(amenities[amenity.key].available)}
            onClick={() =>
              handleInputChange(amenity.key, { available: !amenities[amenity.key].available })
            }
            value={amenity.name}
          >
            {getAmenityIcon(amenity.key)}
          </button>

          {amenity.options.length > 0 && amenities[amenity.key].available && (
            <>
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
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Amenities;
