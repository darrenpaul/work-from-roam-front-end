import codes from 'country-calling-code';

export const callCodes = () => {
  const countryCodes: Array<string> = [];
  codes.forEach((item) => {
    countryCodes.push(...item.countryCodes);
  });
  return countryCodes;
};
