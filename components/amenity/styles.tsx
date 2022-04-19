export const amenityListContainerStyle = () => {
  const base = ['flex flex-col items-start', 'w-full'];
  return [...base].join(' ');
};

export const amenityContainerStyle = () => {
  const base = ['flex items-center', 'w-full', 'mb-4'];
  return [...base].join(' ');
};

export const amenitySelectorContainerStyle = () => {
  const base = ['flex', 'ml-4'];
  return [...base].join(' ');
};

export const amenityButtonStyle = (isActive: boolean) => {
  const base = ['flex flex-col', 'justify-center items-center', 'w-12 h-12', 'rounded-full'];
  const effects = [];
  if (isActive) {
    effects.push('bg-active');
  }
  return [...base, ...effects].join(' ');
};
