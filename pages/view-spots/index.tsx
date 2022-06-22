import PageWrapper from 'containers/PageWrapper';
import Spots from 'components/view-spots/Spots';
import { AuthUserType } from 'types/user';
import { COMPANY_NAME } from 'constants/site';
import PageLoader from 'components/shared/Loaders/PageLoader';
import { doGetSpots } from 'services/spot';
import { useEffect, useState } from 'react';

const PAGE_TITLE = `${COMPANY_NAME} | View Spots`;

const ViewSpotsPage = ({ authUser }: AuthUserType) => {
  const [spots, setSpots] = useState([]);
  const accessToken: string = authUser?.accessToken;
  const isLoggedIn = accessToken !== undefined;

  const isLoading = spots.length === 0;

  useEffect(() => {
    if (spots.length === 0) {
      doGetSpots(accessToken).then((spots) => setSpots(spots));
    }
  });

  return (
    <PageWrapper title={PAGE_TITLE} authUser={authUser} bottomMargin={false}>
      <PageLoader loading={isLoading} />
      {isLoading === false && <Spots isLoggedIn={isLoggedIn} spots={spots} />}
    </PageWrapper>
  );
};

export default ViewSpotsPage;
