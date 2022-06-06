export const cleanUrl = (url: string) => {
  const urlObj = new URL(url);
  const { protocol, host, pathname, search, hash } = urlObj;
  return `${host}`;
};

export const splitUrlParams = (url) => {
  const urlParams = url.split('?')[1];
  if (!urlParams) return null;
  const urlParamsArray = urlParams.split('&');

  const urlParamsObject = {};
  urlParamsArray.forEach((param) => {
    const paramArray = param.split('=');
    urlParamsObject[paramArray[0]] = paramArray[1];
  });

  return urlParamsObject;
};
