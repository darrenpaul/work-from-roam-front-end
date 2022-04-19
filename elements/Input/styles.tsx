export const inputContainerStyle = (styles = '') => {
  const base = ['flex flex-col', 'text-main-text-color', 'w-full', 'mb-4', styles];
  return [...base].join(' ');
};

export const inputStyle = () => {
  const base = ['p-2', 'w-full', 'rounded', 'bg-input'];
  return [...base].join(' ');
};

export const inputInnerContainerStyle = () => {
  const base = ['flex', 'grow', 'w-full'];
  return [...base].join(' ');
};

export const labelStyle = () => {
  const base = ['text-label'];
  return [...base].join(' ');
};

export const requiredSymbolStyle = () => {
  const base = ['text-label'];
  return [...base].join(' ');
};

export const inputErrorStyle = () => {
  const base = ['text-error'];
  return [...base].join(' ');
};
