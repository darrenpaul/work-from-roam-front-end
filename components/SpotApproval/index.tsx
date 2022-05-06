import Button from 'elements/Button';
import Link from 'next/link';
import { doGetSpotsSuggestions, doSpotSuggestionAccept } from 'services/spotSuggestion';
import { successNotification } from 'utils/notifications';
import { useEffect, useState } from 'react';

const SpotApproval = ({ accessToken }) => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    if (spots.length === 0) {
      doGetSpotsSuggestions(accessToken).then((spots) => setSpots(spots));
    }
  }, []);

  const handleApprove = async (spot) => {
    await doSpotSuggestionAccept(accessToken, spot);
    successNotification('Spot approved');
  };

  return (
    <div>
      {spots.length > 0 ? (
        spots?.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <Link href={`/admin/spot-suggestion-compare/${item.uid}`}>{item.company}</Link>
              <Button onClick={() => handleApprove(item)}>Accept</Button>
            </div>
          );
        })
      ) : (
        <p>there is something</p>
      )}
    </div>
  );
};

export default SpotApproval;
