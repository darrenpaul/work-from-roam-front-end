import { filterContainerStyle, filterContentStyle } from 'components/Spots/styles';
import Selector from 'elements/Selector';
import { useEffect, useState } from 'react';

import Button from 'elements/Button';
import Heading5 from 'elements/typography/Heading5';
import Paragraph from 'elements/typography/Paragraphy';
import { filterSpotsForArea, getCountriesWithSpots, getSuburbsInCountry } from 'utils/view-spots';

const SpotFilter = ({ spots, activeSpot, onSpotChange, closeFilter }) => {
  const [selectedSuburb, setSelectedSuburb] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [spotsInArea, setSpotsInArea] = useState([]);

  useEffect(() => {
    const filteredSpots = filterSpotsForArea(spots, 'country');
    setSpotsInArea(filteredSpots);

    if (spots.length > 0) return;
  }, [spots]);

  const handleSpotSelect = (id, value) => {
    const spot = spots.find((spot) => spot.id === value);
    onSpotChange(spot);
  };

  const handleCountrySelectChange = (id: string, value: string) => {
    const filteredSpots = filterSpotsForArea(spots, 'country', value);
    setSpotsInArea(filteredSpots);

    setSelectedCountry(value);
    onSpotChange();
  };

  const handleSuburbSelectChange = (id: string, value: string) => {
    const filteredSpots = filterSpotsForArea(spots, 'suburb', value);
    setSpotsInArea(filteredSpots);

    setSelectedSuburb(value);
    onSpotChange();
  };

  return (
    <div className={filterContainerStyle()}>
      <div className={filterContentStyle()}>
        <Heading5>Search</Heading5>
        <Paragraph styles="mt-item">Spot Name</Paragraph>
        <Selector
          id="spots"
          value={{ label: activeSpot?.company, value: activeSpot?.id }}
          options={spotsInArea}
          onChange={handleSpotSelect}
        />

        <Paragraph styles="mt-item">Country</Paragraph>
        <Selector
          id="country"
          initialValue={selectedCountry}
          options={getCountriesWithSpots(spots)}
          onChange={handleCountrySelectChange}
        />

        {selectedCountry && (
          <>
            <Paragraph styles="mt-item">Suburb</Paragraph>
            <Selector
              id="suburb"
              initialValue={selectedSuburb}
              options={getSuburbsInCountry(spots, selectedCountry)}
              onChange={handleSuburbSelectChange}
            />
          </>
        )}

        <Button onClick={closeFilter} styles="mt-item">
          Close
        </Button>
      </div>
    </div>
  );
};

export default SpotFilter;
