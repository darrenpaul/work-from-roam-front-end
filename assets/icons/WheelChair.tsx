import { Params } from './params';

const WheelChairIcon = ({ width, height, color }: Params) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M510.3 421.9C504.706 405.15 486.77 396.06 469.83 401.68L450.45 408.118L408.75 308.148C403.9 295.1 392.2 288 379.1 288H281.32L270.92 240H336.03C353.72 240 368.03 225.69 368.03 208C368.03 190.31 353.72 176 336.03 176H257.05L255.6 169.2C251.8 142.1 227.2 124.8 201.2 128.5C174.1 132.2 156.7 156.5 160.5 182.8L184.18 323.2C185.8 339.6 199.6 352 216 352H357.4L402.26 459.9C407.3 472.3 419.3 480 432 480C435.344 480 438.781 479.469 442.12 478.344L490.12 462.344C506.9 456.8 515.9 438.7 510.3 421.9ZM160 464C98.24 464 48 413.76 48 352C48 297.75 86.78 252.45 138.06 242.2L130.1 195C56.06 209 0 273.9 0 352C0 440.37 71.63 512 160 512C237.4 512 301.9 457.03 316.8 384H267.7C252.9 430.1 210.6 464 160 464ZM192 96C218.51 96 240 74.51 240 48C240 21.49 218.5 0 192 0C165.5 0 144 21.49 144 48C144 74.51 165.5 96 192 96Z"
        fill={color || 'black'}
      />
    </svg>
  );
};

export default WheelChairIcon;
