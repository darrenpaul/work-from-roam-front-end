import Heading3 from 'elements/typography/Heading3';
import PageWrapper from 'containers/PageWrapper';
import UserUpdateForm from 'components/forms/UserUpdateForm';
import { AuthUserType } from 'types/user';

const PAGE_TITLE = 'WFR | Account';

const ViewSpotsPage = ({ authUser }: AuthUserType) => {
  return (
    <PageWrapper title={PAGE_TITLE} authUser={authUser}>
      <Heading3>Account Settings</Heading3>
      <UserUpdateForm authUser={authUser} styles="mt-item" />
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
