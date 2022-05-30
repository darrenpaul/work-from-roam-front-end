export const amenityListContainerStyle = (styles: string) => {
  const base = ['flex flex-col', styles];
  return [...base].join(' ');
};

export const amenityContainerStyle = () => {
  const base = ['flex', 'w-full', 'mb-4', 'mt-item'];
  return [...base].join(' ');
};

export const amenitySelectorContainerStyle = () => {
  const base = ['grid grid-cols-2', 'items-center', 'ml-item', 'grow'];
  return [...base].join(' ');
};

export const amenityButtonStyle = (isActive: boolean) => {
  const base = ['basis-12', 'flex', 'items-center justify-center', 'w-12 h-12', 'rounded-full'];
  const effects = [];
  if (isActive) {
    effects.push('bg-active');
  }
  return [...base, ...effects].join(' ');
};
