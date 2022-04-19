export const buttonStyle = (
  variant: { normal: string; hover: string; text: string },
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
    'w-full',
  ];

  return [...base, styles].join(' ');
};
