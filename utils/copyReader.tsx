import { copyDictionary, homePageCopy } from '../copy/en/englishCopy';

const getCopyDocument = (copyKey: string) => {
  return copyDictionary[copyKey];
};

export const getCopy = (path) => {
  const keys = path.split(':');
  const copyFileKey = keys[0];
  keys.shift();

  let copy = getCopyDocument(copyFileKey);

  for (const key of keys) {
    copy = copy[key];
  }
  return copy;
};
