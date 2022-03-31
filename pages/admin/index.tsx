import PageWrapper from 'containers/PageWrapper';
import SpotApproval from 'components/SpotApproval';
import { AuthUserType } from 'types/user';

const AdminPage = ({ authUser }: AuthUserType) => {
  const { accessToken } = authUser;

  return (
    <PageWrapper authUser={authUser}>
      <SpotApproval accessToken={accessToken} />
    </PageWrapper>
  );
};

export default AdminPage;
