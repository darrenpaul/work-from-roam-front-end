export const operatingHoursContainerStyle = (styles: string) => {
  const base = ['flex flex-col', styles];
  return base.join(' ');
};

export const operatingHourContainerStyle = () => {
  const base = ['grid grid-cols-4', 'mt-item'];
  return base.join(' ');
};
