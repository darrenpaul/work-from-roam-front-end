import { DARK_COPY } from 'shared/styles/colors';
import { Params } from './params';

const boltIcon = ({ width, height, color }: Params) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 384 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.2701 514.7 77.1901 505.9C65.1001 497.1 60.7001 481.1 66.5901 467.4L143.5 288H31.1001C18.6701 288 6.73307 279.7 2.04407 267.3C-2.64493 254.8 0.894475 240.7 10.9301 231.9L266.9 7.91804C278.2 -1.91996 294.7 -2.66896 306.8 6.11404C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224Z"
        fill={color || DARK_COPY}
      />
    </svg>
  );
};

export default boltIcon;
