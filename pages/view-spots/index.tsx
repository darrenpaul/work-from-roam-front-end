import PageWrapper from 'containers/PageWrapper';
import Spots from 'components/Spots/Spots';
import { AuthUserType } from 'types/user';

const ViewSpotsPage = ({ authUser }: AuthUserType) => {
  const { accessToken } = authUser;
  return (
    <PageWrapper authUser={authUser}>
      <Spots accessToken={accessToken} />
    </PageWrapper>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      protected: true
    }
  };
}

export default ViewSpotsPage;
