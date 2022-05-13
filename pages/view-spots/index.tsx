import PageWrapper from 'containers/PageWrapper';
import Spots from 'components/Spots';
import { AuthUserType } from 'types/user';
import { COMPANY_NAME } from 'shared/constants';
import PageLoader from 'elements/Loaders/PageLoader';
import { doGetSpots } from 'services/spot';
import { useEffect, useState } from 'react';

const PAGE_TITLE = `${COMPANY_NAME} | View Spots`;

const ViewSpotsPage = ({ authUser }: AuthUserType) => {
  const [spots, setSpots] = useState([]);
  const accessToken: string = authUser?.accessToken;
  const isLoggedIn = accessToken !== undefined;

  useEffect(() => {
    if (spots.length === 0) {
      doGetSpots(accessToken).then((spots) => setSpots(spots));
    }
  });

  return (
    <PageWrapper title={PAGE_TITLE} authUser={authUser} bottomMargin={false}>
      <PageLoader loading={spots.length === 0 ? true : false} />
      <Spots isLoggedIn={isLoggedIn} spots={spots} />
    </PageWrapper>
  );
};

export default ViewSpotsPage;
