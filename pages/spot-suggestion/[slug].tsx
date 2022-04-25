import PageWrapper from 'containers/PageWrapper';
import SpotForm from 'components/forms/SpotForm';
import useSpot from 'hooks/useSpot';
import { AuthUserType } from 'types/user';
import { doCreateSpotSuggestion } from 'services/spotSuggestion';
import { SpotType } from 'types/spot';
import { successNotification } from 'utils/notifications';
import { useRouter } from 'next/router';

const PAGE_TITLE = 'WFR | Spot Suggestion';

const SpotSuggestionPage = ({ authUser }: AuthUserType) => {
  const router = useRouter();
  const { accessToken } = authUser;
  const id = `${router.query.slug}`;
  const { spot, revalidate, loading } = useSpot({ accessToken, id });

  const handleSubmit = async (spotData: SpotType) => {
    const { accessToken } = authUser;
    await doCreateSpotSuggestion(accessToken, { id, ...spotData });
    successNotification('Spot suggestion created');
  };

  return (
    <PageWrapper title={PAGE_TITLE} authUser={authUser}>
      {!loading && <SpotForm initialSpot={spot} onSubmit={handleSubmit} />}
    </PageWrapper>
  );
};

export default SpotSuggestionPage;
