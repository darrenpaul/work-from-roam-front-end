import { ITEM_LEFT_SPACE } from 'shared/styles/spacing';

export const amenityListContainerStyle = () => {
  const base = ['flex flex-col items-start', 'w-full'];
  return [...base].join(' ');
};

export const amenityContainerStyle = () => {
  const base = ['flex', 'w-full', 'mb-4'];
  return [...base].join(' ');
};

export const amenitySelectorContainerStyle = () => {
  const base = ['grid grid-cols-2', 'items-center', ITEM_LEFT_SPACE, 'grow'];
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
