import Paragraph from 'elements/typography/Paragraphy';
import { labelWithIconContainerStyle } from './styles';

const LabelWithIcon = ({ icon, children, styles = '' }) => {
  const Icon = icon;
  return (
    <div className={labelWithIconContainerStyle(styles)}>
      {icon && <Icon width={18} />}

      <Paragraph styles="ml-2">{children}</Paragraph>
    </div>
  );
};

export default LabelWithIcon;
