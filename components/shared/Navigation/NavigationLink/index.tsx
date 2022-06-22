import Link from 'next/link';
import { linkStyle } from './styles';

interface Params {
  href: string;
  text: string;
  currentPath: string;
}

const NavigationLink = ({ href, text, currentPath }: Params) => {
  return (
    <div className={linkStyle(href, currentPath)}>
      <Link href={href}>{text}</Link>
    </div>
  );
};

export default NavigationLink;
