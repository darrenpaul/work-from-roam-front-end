import PageWrapper from 'containers/PageWrapper';
import Spots from 'components/Spots';
import { AuthUserType } from 'types/user';
import { COMPANY_NAME } from 'shared/constants';

const PAGE_TITLE = `${COMPANY_NAME} | View Spots`;

const ViewSpotsPage = ({ authUser }: AuthUserType) => {
  const accessToken: string = authUser?.accessToken;
  return (
    <PageWrapper title={PAGE_TITLE} authUser={authUser} bottomMargin={false}>
      <Spots accessToken={accessToken} />
    </PageWrapper>
  );
};

export default ViewSpotsPage;
