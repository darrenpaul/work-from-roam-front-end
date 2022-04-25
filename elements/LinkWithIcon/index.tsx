import Paragraph from 'elements/typography/Paragraphy';
import { cleanUrl } from 'utils/url';
import { linkWithIconContainerStyle } from './styles';

const LinkWithIcon = ({ icon, url, styles = '' }) => {
  const Icon = icon;
  return (
    <div className={linkWithIconContainerStyle(styles)}>
      {icon && <Icon width={18} />}

      <Paragraph styles="ml-2">
        <a target="_blank" href={url} rel="noreferrer">
          View Website
        </a>
      </Paragraph>
    </div>
  );
};

export default LinkWithIcon;
