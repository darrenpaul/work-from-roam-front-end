import ScaleLoader from 'react-spinners/ScaleLoader';
import { LOADER_COLOR, loaderContainerStyle } from './styles';
import { Params } from './params';

const MapLoader = ({ loading }: Params) => {
  return (
    <div className={loaderContainerStyle()}>
      <ScaleLoader color={LOADER_COLOR} loading={loading} size={150} />
    </div>
  );
};

export default MapLoader;
