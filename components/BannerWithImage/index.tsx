import Button from 'elements/Button';
import Heading3 from 'elements/typography/Heading3';
import Image from 'next/image';
import Paragraph from 'elements/typography/Paragraphy';
import {
  contentContainerStyle,
  contentWrapperContainerStyle,
  imageContainerStyle,
  mainContainerStyle
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
  buttonOnClick = () => {}
}: Params) => {
  return (
    <section className={mainContainerStyle()}>
      <div className={imageContainerStyle()}>
        <Image src={srcImage} alt={altText} layout="fill" objectFit="cover" />
      </div>

      <div className={contentWrapperContainerStyle()}>
        <div className={contentContainerStyle()}>
          <Heading3>{title}</Heading3>
          <Paragraph styles="mt-4">{description}</Paragraph>
          {buttonText && (
            <Button styles="mt-4" onClick={buttonOnClick}>
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BannerWithImage;
