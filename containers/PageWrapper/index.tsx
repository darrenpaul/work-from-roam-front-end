import Footer from 'components/Footer';
import Head from 'next/head';
import Navigation from 'components/Navigation';
import { pageContainerStyle, pageContentContainerStyle } from './styles';
import { SITE_DESCRIPTION, SITE_URL } from 'shared/constants.ts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PageWrapper = ({ showFoooter = true, title, authUser, bottomMargin = true, children }) => {
  return (
    <div className={pageContainerStyle()}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
      </Head>

      <Navigation authUser={authUser} />

      <ToastContainer />

      <div className={pageContentContainerStyle(bottomMargin)}>{children}</div>

      {showFoooter && <Footer />}
    </div>
  );
};

export default PageWrapper;
