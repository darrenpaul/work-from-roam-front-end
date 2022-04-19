import { DARK_COPY } from 'shared/styles/colors';
import { Params } from './params';

const PhoneIcon = ({ width, height, color }: Params) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_110_8)">
        <path
          d="M511.2 387L487.95 487.8C484.684 502.05 472.16 512.02 457.49 512.02C205.2 512 0 306.8 0 54.5C0 39.84 9.969 27.3 24.22 24.05L125.02 0.8C139.7 -2.602 154.7 5.018 160.8 18.92L207.32 127.42C212.758 140.2 209.09 155.09 198.34 163.87L144.5 207.1C178.48 276.32 234.76 332.6 304 366.6L348.08 312.8C356.768 302.02 371.77 298.29 384.55 303.825L493.05 350.335C506.1 357.2 514.6 372.4 511.2 387Z"
          fill={color || DARK_COPY}
        />
      </g>
      <defs>
        <clipPath id="clip0_110_8">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PhoneIcon;
