interface contentContainerStyleParams {
  reverse?: boolean;
  styles?: string;
}

export const contentContainerStyle = ({ styles, reverse }: contentContainerStyleParams) => {
  const base = ['flex flex-col md:flex-row', 'items-center', styles];
  if (reverse === true) {
    base.push('md:flex-row-reverse');
  }
  return base.join(' ');
};

export const imageContainerStyle = (styles?: string) => {
  const base = ['w-full', styles];
  return base.join(' ');
};

export const paragraphContainerStyle = (styles?: string) => {
  const base = ['w-full', 'mt-4', styles];
  return base.join(' ');
};
