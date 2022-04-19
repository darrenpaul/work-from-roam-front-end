export const cleanUrl = (url: string) => {
  const urlObj = new URL(url);
  const { protocol, host, pathname, search, hash } = urlObj;
  return `${host}`;
};
