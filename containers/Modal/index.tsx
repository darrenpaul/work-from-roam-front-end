import {
  modalBackdropStyle,
  modalContainerStyle,
  modalContentContainerStyle,
  modalContentWrapperStyle
  } from './styles';

interface Params {
  showState: boolean;
  handleClose: Function;
  children: React.ReactNode;
}

const Modal = ({ showState, handleClose, children }: Params) => {
  if (showState) {
    return (
      <div className={modalContainerStyle()}>
        <div className={modalBackdropStyle()} onClick={() => handleClose()}></div>

        <div className={modalContentWrapperStyle()}>
          <div className={modalContentContainerStyle()}>{children}</div>
        </div>
      </div>
    );
  }
  return <span />;
};

export default Modal;
