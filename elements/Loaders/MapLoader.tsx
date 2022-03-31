import ScaleLoader from 'react-spinners/ScaleLoader';
import { loaderContainerStyle } from './styles';
import { Params } from './params';

const MapLoader = ({ loading }: Params) => {
  return (
    <div className={loaderContainerStyle()}>
      <ScaleLoader loading={loading} size={150} />
    </div>
  );
};

export default MapLoader;
