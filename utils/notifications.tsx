import { toast } from 'react-toastify';

const SETTINGS = {
  position: 'bottom-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
};

export const successNotification = (message: string) => {
  toast.success(message, SETTINGS);
};

export const errorNotification = (message: string) => {
  toast.error(message, SETTINGS);
};

export const infoNotification = (message: string) => {
  toast.info(message, SETTINGS);
};

export const warningNotification = (message: string) => {
  toast.warn(message, SETTINGS);
};

export const defaultNotification = (message: string) => {
  toast(message, SETTINGS);
};
