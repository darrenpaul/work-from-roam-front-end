import { DARK_COPY } from 'shared/styles/colors';
import { Params } from './params';

const TickIcon = ({ width, height, color }: Params) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 448 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M438.6 9.40001C451.1 21.9 451.1 42.1 438.6 54.6L182.6 310.6C170.1 323.1 149.9 323.1 137.4 310.6L9.372 182.6C-3.124 170.1 -3.124 149.9 9.372 137.4C21.87 124.9 42.13 124.9 54.63 137.4L159.1 242.7L393.4 9.40001C405.9 -3.11999 426.1 -3.11999 438.6 9.40001Z"
        fill={color || DARK_COPY}
      />
    </svg>
  );
};

export default TickIcon;
