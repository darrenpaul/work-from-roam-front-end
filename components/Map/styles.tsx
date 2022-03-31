export const mapContainerWrapperStyle = (fullHeight = false) => {
  const height = fullHeight ? 'h-screen' : 'h-screen-1/2';
  const base = ['w-full', height];
  return base.join(' ');
};
