import Button from 'elements/Button';
import PageWrapper from 'containers/PageWrapper';
import PendingSpots from 'components/Spots/PendingSpots';
import SpotApproval from 'components/SpotApproval';
import { AuthUserType } from 'types/user';
import { batchAdd } from 'utils/spot';

const AdminPage = ({ authUser }: AuthUserType) => {
  const { accessToken } = authUser;

  return (
    <PageWrapper authUser={authUser}>
      <PendingSpots accessToken={accessToken} />
      <SpotApproval accessToken={accessToken} />
      <Button onClick={() => batchAdd(accessToken)}>batch add</Button>
    </PageWrapper>
  );
};

export default AdminPage;
