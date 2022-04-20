import BannerWithImage from 'components/BannerWithImage';
import ContentWithImage from 'components/ContentWithImage';
import PageWrapper from 'containers/PageWrapper';
import PromotionBanner from 'components/PromotionBanner';
import { addSignUpUrlQuery } from 'utils/signInSignUp';
import { AuthUserType } from 'types/user';
import { getCopy } from 'utils/copyReader';
import { ITEM_TOP_SPACE } from 'shared/styles/spacing';
import { useRouter } from 'next/router';

const bannerContent = 'homePageCopy:banner';
const contentA = 'homePageCopy:contentBlockA';
const contentB = 'homePageCopy:contentBlockB';
const promotionBannerContent = 'homePageCopy:promotionBanner';

const Home = ({ authUser }: AuthUserType) => {
  const router = useRouter();
  const isLoggedIn = !!authUser && authUser.accessToken;

  const handleShowSignUp = () => {
    addSignUpUrlQuery(router);
  };

  return (
    <PageWrapper authUser={authUser}>
      <BannerWithImage
        srcImage={getCopy(`${bannerContent}:imageSrc`)}
        altText={getCopy(`${bannerContent}:imageAlt`)}
      />

      {/* CONTENT BLOCK A */}
      <ContentWithImage
        title={getCopy(`${contentA}:title`)}
        description={getCopy(`${contentA}:description`)}
        srcImage={getCopy(`${contentA}:imageSrc`)}
        altText={getCopy(`${contentA}:imageAlt`)}
      />

      {/* CONTENT BLOCK B */}
      <ContentWithImage
        title={getCopy(`${contentB}:title`)}
        description={getCopy(`${contentB}:description`)}
        srcImage={getCopy(`${contentB}:imageSrc`)}
        altText={getCopy(`${contentB}:imageAlt`)}
        reverse={true}
        styles="mt-4 md:mt-0"
      />

      {!isLoggedIn && (
        <PromotionBanner
          srcImage={getCopy(`${promotionBannerContent}:imageSrc`)}
          altText={getCopy(`${promotionBannerContent}:imageAlt`)}
          title={getCopy(`${promotionBannerContent}:title`)}
          description={getCopy(`${promotionBannerContent}:description`)}
          buttonText={getCopy(`${promotionBannerContent}:buttonText`)}
          buttonOnClick={handleShowSignUp}
          styles={`${ITEM_TOP_SPACE}`}
        />
      )}
    </PageWrapper>
  );
};

export default Home;
