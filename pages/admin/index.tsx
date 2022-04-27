import Button from 'elements/Button';
import PageWrapper from 'containers/PageWrapper';
import PendingSpots from 'components/Spots/PendingSpots';
import SpotApproval from 'components/SpotApproval';
import SpotsTable from 'components/Spots/SpotsTable';
import { AuthUserType } from 'types/user';
import { batchAdd } from 'utils/spot';
import { doGetPendingSpots } from 'services/spot';
import { doMigration } from 'migrations/spot/0002-fix-address-pending';
import { doSpotApprove } from 'services/spot';
import { successNotification } from 'utils/notifications';
import { useEffect, useState } from 'react';

const PAGE_TITLE = 'WFR | Admin';

const AdminPage = ({ authUser }: AuthUserType) => {
  const [spots, setSpots] = useState([]);
  const { accessToken } = authUser;

  useEffect(() => {
    if (spots.length === 0) {
      doGetPendingSpots(accessToken).then((spots) => setSpots(spots));
    }
  }, []);

  const handleSpotApproval = async (spotId) => {
    await doSpotApprove(accessToken, spotId);
    successNotification('Spot approved successfully');
  };

  return (
    <PageWrapper title={PAGE_TITLE} authUser={authUser}>
      {spots.length > 0 && <PendingSpots accessToken={accessToken} spots={spots} />}
      {spots.length > 0 && <SpotsTable spots={spots} onSpotApproval={handleSpotApproval} />}
      <SpotApproval accessToken={accessToken} />
      <Button onClick={() => batchAdd(accessToken)}>batch add</Button>
      <Button onClick={() => doMigration(accessToken)}>Migrate</Button>
    </PageWrapper>
  );
};

export default AdminPage;
