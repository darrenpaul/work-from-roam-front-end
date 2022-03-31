export const paragraphStyle = (color?: string, styles?: string) => {
  const textColor = color ? color : 'text-zinc-800';
  const base = ['text-sm', textColor];
  return [...base, styles].join(' ');
};

export const heading3Style = (color?: string, styles: string) => {
  const textColor = color ? color : 'text-zinc-800';
  const base = ['text-3xl', 'font-bold', textColor, 'break-normal'];
  return [...base, styles].join(' ');
};

export const heading6Style = (color?: string, styles: string) => {
  const textColor = color ? color : 'text-zinc-800';
  const base = ['text-lrg', 'font-bold', textColor];
  return [...base, styles].join(' ');
};
