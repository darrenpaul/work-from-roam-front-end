const fontStyle = 'font-montserrat';

export const labelStyle = () => {
  const base = ['text-label'];
  return [...base].join(' ');
};

export const paragraphStyle = ({ color, mt, ml, styles }) => {
  const textColor = color ? color : 'text-dark-copy';
  const base = ['text-sm', fontStyle, textColor];
  if (mt) {
    base.push(`mt-${mt}`);
  }

  if (ml) {
    base.push(`ml-${ml}`);
  }
  return [...base, styles].join(' ');
};

export const heading1Style = (color?: string, styles?: string) => {
  const textColor = color ? color : 'text-dark-copy';
  const base = ['text-3xl md:text-5xl', fontStyle, 'font-bold', textColor, 'break-normal'];
  return [...base, styles].join(' ');
};

export const heading3Style = (color?: string, styles?: string) => {
  const textColor = color ? color : 'text-dark-copy';
  const base = ['text-2xl md:text-3xl', fontStyle, 'font-bold', textColor, 'break-normal'];
  return [...base, styles].join(' ');
};

export const heading4Style = (color?: string, styles?: string) => {
  const textColor = color ? color : 'text-dark-copy';
  const base = ['text-2xl', fontStyle, 'font-bold', textColor, 'break-normal'];
  return [...base, styles].join(' ');
};

export const heading5Style = (color?: string, styles?: string) => {
  const textColor = color ? color : 'text-dark-copy';
  const base = ['text-xl', fontStyle, 'font-bold', textColor, 'break-normal'];
  return [...base, styles].join(' ');
};

export const heading6Style = (color?: string, styles?: string) => {
  const textColor = color ? color : 'text-dark-copy';
  const base = ['text-lg', fontStyle, 'font-bold', textColor];
  return [...base, styles].join(' ');
};
