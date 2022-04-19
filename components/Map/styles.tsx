export const mapContainerWrapperStyle = (fullHeight = false) => {
  const height = fullHeight ? 'h-[calc(100vh_-_168px)]' : 'h-screen-1/2';
  const base = ['w-full', height];
  return base.join(' ');
};
