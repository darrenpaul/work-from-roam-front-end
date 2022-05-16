export const buttonStyle = (
  variant: { normal: string; hover: string; text: string },
  circle: boolean,
  styles: string,
) => {
  const base = [
    'text-center',
    variant.normal,
    variant.hover,
    variant.text,
    'px-4 py-2',
    'rounded',
    'break-normal',
    'ease-in duration-300',
  ];

  if (circle) {
    base.push('rounded-full w-12 h-12');
  } else {
    base.push('w-full');
  }

  base.push(styles);

  return [...base, styles].join(' ');
};
