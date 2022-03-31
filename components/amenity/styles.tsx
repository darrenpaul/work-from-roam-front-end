export const amenityListContainerStyle = () => {
  const base = ['flex items-start justify-center', 'w-fit'];
  return [...base].join(' ');
};

export const amenityContainerStyle = () => {
  const base = ['flex flex-col items-stretch justify-center', 'w-64'];
  return [...base].join(' ');
};

export const amenityButtonStyle = (isActive) => {
  const base = ['flex flex-col', 'items-center', 'p-4'];
  const effects = [];
  if (isActive) {
    effects.push('bg-green-500');
  }
  return [...base, ...effects].join(' ');
};
