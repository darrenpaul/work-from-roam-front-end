import { DARK_COPY } from 'shared/styles/colors';
import { Params } from './params';

const MagnifyingGlassIcon = ({ width, height, color }: Params) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_201_4)">
        <path
          d="M500.3 443.7L380.6 324C407.82 283.59 421.25 233.1 414.06 179.3C401.8 87.79 326.8 13.32 235.2 1.72301C99.0101 -15.51 -15.5099 99.01 1.72406 235.2C13.3241 326.84 87.8041 401.9 179.324 414.1C233.124 421.289 283.624 407.864 324.024 380.64L443.724 500.34C459.344 515.96 484.674 515.96 500.294 500.34C515.9 484.7 515.9 459.3 500.3 443.7ZM79.1001 208C79.1001 137.42 136.52 80 207.1 80C277.68 80 335.1 137.42 335.1 208C335.1 278.58 277.68 336 207.1 336C136.52 336 79.1001 278.6 79.1001 208Z"
          fill={color || DARK_COPY}
        />
      </g>
      <defs>
        <clipPath id="clip0_201_4">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MagnifyingGlassIcon;
