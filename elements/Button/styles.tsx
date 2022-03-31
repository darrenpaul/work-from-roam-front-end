export const buttonStyle = (variant: { normal: string; hover: string }, styles: string) => {
  const base = [
    'w-max',
    'text-center',
    'text-white',
    variant.normal,
    'px-4 py-2',
    'rounded',
    'break-normal'
  ];
  const effects = [`hover:${variant.hover}`];

  return [...base, ...effects, styles].join(' ');
};
