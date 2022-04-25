import Button from 'elements/Button';
import Heading1 from 'elements/typography/Heading1';
import Image from 'next/image';
import Paragraph from 'elements/typography/Paragraphy';
import {
  contentContainerStyle,
  contentWrapperContainerStyle,
  gradientOverlayStyle,
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
const BannerWithImage = ({
  srcImage,
  altText,
  title = '',
  description = '',
  buttonText,
  buttonOnClick = () => {},
}: Params) => {
  return (
    <section className={mainContainerStyle()}>
      <div className={imageContainerStyle()}>
        <Image src={srcImage} alt={altText} layout="fill" objectFit="cover" />
      </div>

      <div className={gradientOverlayStyle()}></div>
      <div className={contentWrapperContainerStyle()}>
        <div className={contentContainerStyle()}>
          <Heading1 color="text-light-copy">{title}</Heading1>
          <Paragraph styles={'mt-item'}>{description}</Paragraph>
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

export default BannerWithImage;
