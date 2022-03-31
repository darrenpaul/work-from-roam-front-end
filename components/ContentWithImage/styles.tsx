interface contentContainerStyleParams {
  reverse?: boolean;
  styles?: string;
}

export const contentContainerStyle = ({ styles, reverse }: contentContainerStyleParams) => {
  let styleString = `flex items-center ${styles}`;
  if (reverse === true) styleString = `${styleString} flex-row-reverse`;
  return styleString;
};

export const imageContainerStyle = (styles?: string) => {
  return `w-full ${styles}`;
};

export const paragraphContainerStyle = (styles?: string) => {
  return `w-full ${styles}`;
};
