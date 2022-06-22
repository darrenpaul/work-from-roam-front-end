import MoonLoader from 'react-spinners/MoonLoader';
import {
  LOADER_COLOR,
  loaderBackdropStyle,
  loaderWrapperContainerStyle,
  pageLoaderContainerStyle
  } from './styles';
import { Params } from './params';

const FormLoader = ({ loading }: Params) => {
  return (
    <div className={loaderWrapperContainerStyle()}>
      <div className={loaderBackdropStyle()}></div>
      <div className={pageLoaderContainerStyle()}>
        <MoonLoader color={LOADER_COLOR} loading={loading} size={100} />
      </div>
    </div>
  );
};

export default FormLoader;
