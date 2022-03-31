import Loader from 'react-spinners/PuffLoader';
import { loaderContainerStyle } from './styles';
import { Params } from './params';

const PageLoader = ({ loading }: Params) => {
  return (
    <div className={loaderContainerStyle()}>
      <Loader loading={loading} size={150} />
    </div>
  );
};

export default PageLoader;
