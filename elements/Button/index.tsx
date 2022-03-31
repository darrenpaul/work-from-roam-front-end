import { buttonStyle } from './styles';

interface Params {
  children: React.ReactNode;
  onClick: Function;
  variant?: { normal: string; hover: string };
  styles?: string;
}

export const BUTTON_VARIANTS = {
  primary: { normal: 'bg-green-500', hover: 'bg-green-400' },
  secondary: { normal: 'bg-blue-500', hover: 'bg-blue-400' },
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
