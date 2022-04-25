import PageWrapper from 'containers/PageWrapper';
import SpotForm from 'components/forms/SpotForm';
import useSpot from 'hooks/useSpot';
import { AuthUserType } from 'types/user';
import { doCreateSpot } from 'services/spot';
import { SpotType } from 'types/spot';
import { successNotification } from 'utils/notifications';
import { useRouter } from 'next/router';

const PAGE_TITLE = 'WFR | Add Spot';

const SpotSuggestionPage = ({ authUser }: AuthUserType) => {
  const router = useRouter();
  const { accessToken } = authUser;
  const id = `${router.query.slug}`;
  const { spot, revalidate, loading } = useSpot({ accessToken, id });

  const handleSubmit = async (spotData: SpotType) => {
    const { accessToken } = authUser;
    await doCreateSpot(accessToken, { ...spotData });
    successNotification('Spot created successfully');
    console.log('Spot submitted');
  };

  return (
    <PageWrapper title={PAGE_TITLE} authUser={authUser}>
      {!loading && <SpotForm initialSpot={spot} onSubmit={handleSubmit} showHomeMarker={false} />}
    </PageWrapper>
  );
};

export default SpotSuggestionPage;
