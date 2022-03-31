import Button from 'elements/Button';
import PageWrapper from 'containers/PageWrapper';
import SpotForm from 'components/SpotForm';
import useSpot from 'hooks/useSpot';
import { AuthUserType } from 'types/user';
import { batchAdd } from 'utils/spot';
import { doCreateSpot } from 'services/spot';
import { SpotType } from 'types/spot';
import { useRouter } from 'next/router';

const SpotSuggestionPage = ({ authUser }: AuthUserType) => {
  const router = useRouter();
  const { accessToken } = authUser;
  const id = `${router.query.slug}`;
  const { spot, revalidate, loading } = useSpot({ accessToken, id });

  const handleSubmit = async (spotData: SpotType) => {
    const { accessToken } = authUser;
    await doCreateSpot(accessToken, { ...spotData });
    console.log('Spot submitted');
  };

  return (
    <PageWrapper authUser={authUser}>
      {!loading && <SpotForm initialSpot={spot} onSubmit={handleSubmit} />}
      <Button onClick={() => batchAdd(accessToken)}>batch add</Button>
    </PageWrapper>
  );
};

export default SpotSuggestionPage;
