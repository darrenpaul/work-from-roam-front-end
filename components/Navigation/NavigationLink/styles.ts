export const linkStyle = (currentPath: string, href: string) => {
  const base = [
    'px-4',
    'text-center',
    'text-dark-copy',
    'ease-in duration-100',
    'mt-item md:mt-0',
    'text-2xl md:text-base',
  ];
  const active = [];
  if (currentPath === href) {
    active.push('text-dark-link-active');
    active.push('underline decoration underline-offset-4');
  }
  const effects = ['hover:text-dark-link-hover'];
  return [...base, ...active, ...effects].join(' ');
};
