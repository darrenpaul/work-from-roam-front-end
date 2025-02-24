import { DARK_COPY } from 'shared/styles/colors';
import { Params } from './params';

const CrossIcon = ({ width, height, color }: Params) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 320 321"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M310.6 266.4C323.1 278.9 323.1 299.15 310.6 311.65C304.4 317.9 296.2 321 288 321C279.8 321 271.62 317.875 265.38 311.625L160 206.3L54.63 311.6C48.38 317.9 40.19 321 32 321C23.81 321 15.63 317.9 9.375 311.6C-3.125 299.1 -3.125 278.85 9.375 266.35L114.775 160.95L9.375 55.6C-3.125 43.1 -3.125 22.85 9.375 10.35C21.875 -2.15002 42.125 -2.15002 54.625 10.35L160 115.8L265.4 10.4C277.9 -2.10002 298.15 -2.10002 310.65 10.4C323.15 22.9 323.15 43.15 310.65 55.65L205.25 161.05L310.6 266.4Z"
        fill={color || DARK_COPY}
      />
    </svg>
  );
};

export default CrossIcon;
