import Button from 'elements/Button';
import PageWrapper from 'containers/PageWrapper';
import Paragraph from 'elements/typography/Paragraphy';
import useSpotCompare from 'hooks/useSpotCompare';
import { doSpotSuggestionAccept } from 'services/spotSuggestion';
import { successNotification } from 'utils/notifications';
import { useRouter } from 'next/router';
import { useState } from 'react';

const suggestionGroupStyle = () => {
  const base = ['grid grid-cols-4 grid-flow-col'];

  return [...base].join(' ');
};

const SpotSuggestionCompare = ({ authUser }: AuthUserType) => {
  const [spotData, setSpotData] = useState({});
  const router = useRouter();
  const { accessToken } = authUser;
  const id = `${router.query.slug}`;
  const { spotCompare } = useSpotCompare({ accessToken, id });

  const handleSubmit = async () => {
    await doSpotSuggestionAccept(accessToken, id, spotData);
    successNotification('Spot suggestion accepted');
    console.log('Spot suggestion accepted');
  };

  const handleCompareAccept = (key, value) => {
    const spotId = spotCompare.spot.id;
    setSpotData({ id: spotId, ...spotData, [key]: value });
  };

  const handleNestedCompareAccept = (parentKey, key, option, suggestedValue) => {
    const originalData = spotData?.[parentKey] || spotCompare.spot[parentKey];
    handleCompareAccept(parentKey, {
      ...originalData,
      [key]: { ...originalData[key], [option]: suggestedValue },
    });
  };

  const splitNestedData = (parentKey) => {
    const originalData = spotCompare?.spot?.[parentKey];
    const suggestedData = spotCompare?.spotSuggestion?.[parentKey];

    if (!originalData && !suggestedData) {
      return;
    }

    const mostData = originalData.length > suggestedData.length ? originalData : suggestedData;
    if (mostData) {
      const nestedKeys = Object.keys(mostData);

      return nestedKeys.map((key, index) => {
        const options = getNestedChildren(originalData, suggestedData, parentKey, key);

        if (options.length === 0) {
          return null;
        }

        return (
          <div key={index} className="mb-8">
            <Paragraph>{key}</Paragraph>
            {options}
          </div>
        );
      });
    }
  };

  const getNestedChildren = (originalData, suggestedData, parentKey, key) => {
    const componentNodes = [];

    const optionKeys = Object.keys(suggestedData[key]);

    for (const [index, option] of optionKeys.entries()) {
      const originalValue = originalData[key]?.[option];
      const suggestedValue = suggestedData[key]?.[option];

      if (originalValue !== suggestedValue) {
        componentNodes.push(
          <div className={suggestionGroupStyle()} key={index}>
            <Paragraph>{option}</Paragraph>
            <Paragraph>{originalValue?.toString()}</Paragraph>
            <Paragraph>{suggestedValue?.toString()}</Paragraph>
            <Button
              onClick={() => handleNestedCompareAccept(parentKey, key, option, suggestedValue)}
            >
              Accept
            </Button>
          </div>,
        );
      }
    }

    return componentNodes;
  };

  const getCompareComponent = (key) => {
    const spotValue = spotCompare?.spot?.[key];
    const spotSuggestionValue = spotCompare?.spotSuggestion?.[key];
    if (spotValue === spotSuggestionValue) {
      return null;
    }
    return (
      <div className={suggestionGroupStyle()}>
        <Paragraph>{key}</Paragraph>
        <Paragraph>{spotCompare?.spot?.[key]?.toString()}</Paragraph>
        <Paragraph>{spotCompare?.spotSuggestion?.[key]?.toString()}</Paragraph>
        <Button onClick={() => handleCompareAccept(key, spotCompare?.spotSuggestion?.[key])}>
          Accept
        </Button>
      </div>
    );
  };

  return (
    <PageWrapper authUser={authUser}>
      <Button onClick={() => console.log(spotData)}>Log</Button>
      <Button onClick={handleSubmit}>Submit</Button>
      {getCompareComponent('name')}
      {getCompareComponent('email')}
      {getCompareComponent('phoneCode')}
      {getCompareComponent('phoneNumber')}
      {getCompareComponent('address')}
      {getCompareComponent('suburb')}
      {getCompareComponent('city')}
      {getCompareComponent('zipCode')}
      {getCompareComponent('country')}
      {splitNestedData('amenities')}
      {splitNestedData('operatingHours')}
      {getCompareComponent('status')}
      {getCompareComponent('placeId')}
    </PageWrapper>
  );
};

export default SpotSuggestionCompare;
