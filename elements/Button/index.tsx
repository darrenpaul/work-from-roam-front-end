import { buttonStyle } from './styles';

interface Params {
  children: React.ReactNode;
  onClick: Function;
  variant?: { normal: string; hover: string; text: string };
  circle?: boolean;
  styles?: string;
}

export const BUTTON_VARIANTS = {
  primary: {
    normal: 'bg-button-primary',
    hover: 'hover:bg-button-primary-hover',
    text: 'text-light-copy',
  },
  secondary: {
    normal: 'bg-button-secondary',
    hover: 'hover:bg-button-secondary-hover',
    text: 'text-dark-copy',
  },
  info: {
    normal: 'bg-transparent',
    hover: 'bg-transparent',
    text: 'text-dark-copy',
  },
  warning: {
    normal: 'bg-button-warning',
    hover: 'hover:bg-button-warning-hover',
    text: 'text-light-copy',
  },
};

const Button = ({
  children,
  onClick,
  variant = BUTTON_VARIANTS.primary,
  circle = false,
  styles = '',
}: Params) => {
  return (
    <button className={buttonStyle(variant, circle, styles)} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
