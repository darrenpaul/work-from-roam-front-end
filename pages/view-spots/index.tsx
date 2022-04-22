import PageWrapper from 'containers/PageWrapper';
import Spots from 'components/Spots/Spots';
import { AuthUserType } from 'types/user';

const PAGE_TITLE = 'WFR | View Spots';

const ViewSpotsPage = ({ authUser }: AuthUserType) => {
  const { accessToken } = authUser;
  return (
    <PageWrapper title={PAGE_TITLE} authUser={authUser}>
      <Spots accessToken={accessToken} />
    </PageWrapper>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
    },
  };
}

export default ViewSpotsPage;
