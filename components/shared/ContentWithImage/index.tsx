import Heading3 from 'elements/typography/Heading3';
import Image from 'next/image';
import Paragraph from 'elements/typography/Paragraphy';
import { contentContainerStyle, imageContainerStyle, paragraphContainerStyle } from './styles';

interface Params {
  title: string;
  description: string;
  srcImage: string;
  altText: string;
  reverse?: boolean;
  styles?: string;
}

const ContentWithImage = ({ title, description, srcImage, altText, ...props }: Params) => {
  return (
    <div className={contentContainerStyle({ ...props })}>
      <div className={imageContainerStyle()}>
        <Image
          src={srcImage}
          alt={altText}
          layout="responsive"
          width={600}
          height={400}
          objectFit="cover"
        />
      </div>

      <div className={paragraphContainerStyle()}>
        <Heading3 styles="mx-sides">{title}</Heading3>
        <Paragraph styles="mt-4 mx-sides">{description}</Paragraph>
      </div>
    </div>
  );
};

export default ContentWithImage;
