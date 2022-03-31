import { getPendingSpots, getSpots } from 'apiClient/spot';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

const SpotApproval = ({ accessToken }) => {
  const [spots, setSpots] = useState([]);

  console.log(spots);
  if (spots.length > 0) {
    console.log(spots[0]);
  }
  useEffect(() => {
    if (spots.length === 0) {
      getPendingSpots(accessToken).then((spots) => setSpots(spots));
    }
  }, []);

  return (
    <div>
      {spots.length > 0 ? (
        spots?.map((item, index) => {
          return <p key={index}>{item.name}</p>;
        })
      ) : (
        <p>there is something</p>
      )}
    </div>
  );
};

export default SpotApproval;
