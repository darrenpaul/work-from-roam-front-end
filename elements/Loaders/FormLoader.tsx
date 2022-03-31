import MoonLoader from 'react-spinners/MoonLoader';
import { loaderBackdropStyle, loaderContainerStyle, loaderWrapperContainerStyle } from './styles';
import { Params } from './params';

const FormLoader = ({ loading }: Params) => {
  return (
    <div className={loaderWrapperContainerStyle()}>
      <div className={loaderBackdropStyle()}></div>
      <div className={loaderContainerStyle()}>
        <MoonLoader loading={loading} size={100} />
      </div>
    </div>
  );
};

export default FormLoader;
