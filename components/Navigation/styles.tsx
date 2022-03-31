const HEIGHT = 'h-14';
const BACKGROUND_COLOR = 'bg-zinc-50';
const BRAND_COLOR = 'text-zinc-900';
const LINK_COLOR = 'text-zinc-600';
const LINK_ACTIVE_COLOR = 'text-zinc-800';

export const navigationContainerStyle = () => {
  const base = [
    'flex',
    'items-center',
    'w-screen',
    HEIGHT,
    'fixed',
    'top-0',
    'left-0',
    BACKGROUND_COLOR,
    BRAND_COLOR,
    'z-50',
    'px-36',
    'drop-shadow-lg'
  ];
  return base.join(' ');
};

export const navigationLinksContainerStyle = () => {
  const base = ['flex', 'grow', 'ml-28'];
  return base.join(' ');
};

export const navigationButtonsContainerStyle = () => {
  const base = ['flex', 'ml-8'];
  return base.join(' ');
};

export const navigationLinkStyle = (currentPath: string, href: string) => {
  const base = ['w-24', 'text-center', LINK_COLOR];
  const active = [];
  if (currentPath === href) {
    active.push('font-bold');
    active.push(LINK_ACTIVE_COLOR);
    active.push('underline decoration-2 underline-offset-4');
  }
  const effects = ['hover:text-red-400'];
  return [...base, ...active, ...effects].join(' ');
};
