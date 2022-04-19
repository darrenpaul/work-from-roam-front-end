import Loader from 'react-spinners/PuffLoader';
import { LOADER_COLOR, pageLoaderContainerStyle } from './styles';
import { Params } from './params';

const PageLoader = ({ loading }: Params) => {
  return (
    <div className={pageLoaderContainerStyle()}>
      <Loader color={LOADER_COLOR} loading={loading} size={150} />
    </div>
  );
};

export default PageLoader;
