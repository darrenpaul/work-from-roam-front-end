import Button from 'elements/Button';
import PageWrapper from 'containers/PageWrapper';
import SpotForm from 'components/SpotForm';
import useSpot from 'hooks/useSpot';
import { AuthUserType } from 'types/user';
import { doCreateSpotSuggestion } from 'services/spotSuggestion';
import { SpotType } from 'types/spot';
import { useRouter } from 'next/router';

const SpotSuggestionPage = ({ authUser }: AuthUserType) => {
  const router = useRouter();
  const { accessToken } = authUser;
  const id = `${router.query.slug}`;
  const { spot, revalidate, loading } = useSpot({ accessToken, id });
  console.log(spot);
  const handleSubmit = async (spotData: SpotType) => {
    const { accessToken } = authUser;
    await doCreateSpotSuggestion(accessToken, { id, ...spotData });
    console.log('Spot suggestion submitted');
  };

  return (
    <PageWrapper authUser={authUser}>
      {!loading && <SpotForm initialSpot={spot} onSubmit={handleSubmit} />}
    </PageWrapper>
  );
};

// export async function getStaticProps(context) {
//   return {
//     props: {
//       protected: true
//     }
//   };
// }

export default SpotSuggestionPage;
