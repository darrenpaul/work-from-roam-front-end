export const paragraphStyle = (color?: string, styles?: string) => {
  const textColor = color ? color : 'text-dark-copy';
  const base = ['text-sm', textColor];
  return [...base, styles].join(' ');
};

export const heading1Style = (color?: string, styles: string) => {
  const textColor = color ? color : 'text-dark-copy';
  const base = ['text-3xl md:text-5xl', 'font-bold', textColor, 'break-normal'];
  return [...base, styles].join(' ');
};

export const heading3Style = (color?: string, styles: string) => {
  const textColor = color ? color : 'text-dark-copy';
  const base = ['text-2xl md:text-3xl', 'font-bold', textColor, 'break-normal'];
  return [...base, styles].join(' ');
};

export const heading4Style = (color?: string, styles: string) => {
  const textColor = color ? color : 'text-dark-copy';
  const base = ['text-2xl', 'font-bold', textColor, 'break-normal'];
  return [...base, styles].join(' ');
};

export const heading5Style = (color?: string, styles: string) => {
  const textColor = color ? color : 'text-dark-copy';
  const base = ['text-xl', 'font-bold', textColor, 'break-normal'];
  return [...base, styles].join(' ');
};

export const heading6Style = (color?: string, styles: string) => {
  const textColor = color ? color : 'text-dark-copy';
  const base = ['text-lrg', 'font-bold', textColor];
  return [...base, styles].join(' ');
};
