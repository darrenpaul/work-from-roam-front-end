import { DARK_COPY } from 'shared/styles/colors';
import { Params } from './params';

const ParkingIcon = ({ width, height, color }: Params) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 448 448"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M192 224V160H240C257.7 160 272 174.3 272 192C272 209.7 257.7 224 240 224H192ZM384 0C419.3 0 448 28.65 448 64V384C448 419.3 419.3 448 384 448H64C28.65 448 0 419.3 0 384V64C0 28.65 28.65 0 64 0H384ZM336 192C336 138.1 293 96 240 96H168C145.9 96 128 113.9 128 136V320C128 337.7 142.3 352 160 352C177.7 352 192 337.7 192 320V288H240C293 288 336 245 336 192Z"
        fill={color || DARK_COPY}
      />
    </svg>
  );
};

export default ParkingIcon;
