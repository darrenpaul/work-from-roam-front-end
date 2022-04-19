import { buttonStyle } from './styles';

interface Params {
  children: React.ReactNode;
  onClick: Function;
  variant?: { normal: string; hover: string; text: string };
  styles?: string;
}

export const BUTTON_VARIANTS = {
  primary: {
    normal: 'bg-button-primary',
    hover: 'hover:bg-button-primary-hover',
    text: 'text-light-copy'
  },
  secondary: {
    normal: 'bg-transparent',
    hover: 'bg-transparent',
    text: 'text-dark-copy'
  },
  info: {
    normal: 'bg-transparent',
    hover: 'bg-transparent',
    text: 'text-dark-copy'
  },
  warning: { normal: 'bg-red-500', hover: 'bg-red-100' }
};

const Button = ({ children, onClick, variant = BUTTON_VARIANTS.primary, styles = '' }: Params) => {
  return (
    <button className={buttonStyle(variant, styles)} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
