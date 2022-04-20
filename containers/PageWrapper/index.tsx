import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import { pageContainerStyle, pageContentContainerStyle } from './styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PageWrapper = ({ showFoooter = true, authUser, children }) => {
  return (
    <div className={pageContainerStyle()}>
      <Navigation authUser={authUser} />

      <ToastContainer />

      <div className={pageContentContainerStyle()}>{children}</div>

      {showFoooter && <Footer />}
    </div>
  );
};

export default PageWrapper;
