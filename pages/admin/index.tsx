import Button from 'elements/Button';
import PageWrapper from 'containers/PageWrapper';
import PendingSpots from 'components/Spots/PendingSpots';
import SpotApproval from 'components/SpotApproval';
import { AuthUserType } from 'types/user';
import { batchAdd } from 'utils/spot';
import { doMigration } from 'migrations/spot/0002-fix-address-pending';

const PAGE_TITLE = 'WFR | Admin';

const AdminPage = ({ authUser }: AuthUserType) => {
  const { accessToken } = authUser;

  return (
    <PageWrapper title={PAGE_TITLE} authUser={authUser}>
      <PendingSpots accessToken={accessToken} />
      <SpotApproval accessToken={accessToken} />
      <Button onClick={() => batchAdd(accessToken)}>batch add</Button>
      <Button onClick={() => doMigration(accessToken)}>Migrate</Button>
    </PageWrapper>
  );
};

export default AdminPage;
