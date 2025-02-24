import Button from 'elements/Button';
import Heading3 from 'elements/typography/Heading3';
import Image from 'next/image';
import Paragraph from 'elements/typography/Paragraphy';
import {
  contentContainerStyle,
  contentWrapperContainerStyle,
  imageContainerStyle,
  mainContainerStyle,
} from './styles';

interface Params {
  srcImage: string;
  altText: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonOnClick?: Function;
}

const PromotionBanner = ({
  srcImage,
  altText,
  title = '',
  description = '',
  buttonText,
  buttonOnClick = () => {},
  styles = '',
}: Params) => {
  return (
    <section className={mainContainerStyle(styles)}>
      <div className={imageContainerStyle()}>
        <Image src={srcImage} alt={altText} layout="fill" objectFit="cover" />
      </div>

      <div className={contentWrapperContainerStyle()}>
        <div className={contentContainerStyle()}>
          <Heading3 color="text-zinc-50">{title}</Heading3>
          <Paragraph color="text-zinc-200" styles={'mt-item'}>
            {description}
          </Paragraph>
          {buttonText && (
            <Button styles={'mt-item'} onClick={buttonOnClick}>
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
