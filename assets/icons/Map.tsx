import { DARK_COPY } from 'shared/styles/colors';
import { Params } from './params';

const MapIcon = ({ width, height, color }: Params) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 576 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M384 476.1L192 421.2V35.93L384 90.79V476.1ZM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37ZM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13Z"
        fill={color || DARK_COPY}
      />
    </svg>
  );
};

export default MapIcon;
