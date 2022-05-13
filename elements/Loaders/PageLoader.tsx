import Loader from 'react-spinners/PuffLoader';
import {
  LOADER_COLOR,
  pageLoaderContainerStyle,
  loaderBackdropStyle,
  loaderWrapperContainerStyle,
} from './styles';
import { Params } from './params';

const PageLoader = ({ loading }: Params) => {
  return (
    <div className={loaderWrapperContainerStyle(loading)}>
      <div className={loaderBackdropStyle()}></div>
      <div className={pageLoaderContainerStyle()}>
        <Loader color={LOADER_COLOR} loading={loading} size={150} />
      </div>
    </div>
  );
};

export default PageLoader;
