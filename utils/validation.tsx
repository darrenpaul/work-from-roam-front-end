import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isURL from 'validator/lib/isURL';

export const spotFormValidation = (spotData) => {
  const {
    name,
    email,
    phoneNumber,
    phoneCode,
    website,
    address,
    city,
    zipCode,
    country,
    coordinates,
  } = spotData;

  const errors = {};
  if (isEmpty(name)) {
    errors.name = 'Store name is required';
  }

  if (!isEmpty(email)) {
    if (!isEmail(email)) {
      errors.email = 'Email is invalid';
    }
  }

  if (!isEmpty(phoneNumber)) {
    let phoneError = [];
    if (isEmpty(phoneCode)) {
      phoneError.push('Phone code is required');
    }
    if (!isMobilePhone(phoneNumber)) {
      phoneError.push('Phone number is invalid');
    }
    if (phoneError.length > 0) {
      errors.phoneNumber = phoneError.join(', ');
    }
  }

  if (!isEmpty(website)) {
    if (!isURL(website)) {
      errors.website = 'Website is invalid';
    }
  }

  if (isEmpty(address)) {
    errors.address = 'Address is required';
  }

  if (isEmpty(city)) {
    errors.city = 'City is required';
  }

  if (isEmpty(zipCode)) {
    errors.zipCode = 'Zip code is required';
  }

  if (isEmpty(country)) {
    errors.country = 'Country is required';
  }

  if (isEmpty(coordinates.lat.toString())) {
    errors.coordinates = 'Coordinates are required';
  }
  if (isEmpty(coordinates.lng.toString())) {
    errors.coordinates = 'Coordinates are required';
  }

  let isValid = true;
  if (Object.keys(errors).length > 0) {
    isValid = false;
  }

  return { errors, isValid };
};

export const signInFormValidation = (signInData) => {
  const { email, password } = signInData;

  const errors = {};

  if (isEmpty(email)) {
    errors.email = 'Email is required';
  }
  if (!isEmpty(email)) {
    if (!isEmail(email)) {
      errors.email = 'Email is invalid';
    }
  }

  if (isEmpty(password)) {
    errors.password = 'Password is required';
  }

  let isValid = true;
  if (Object.keys(errors).length > 0) {
    isValid = false;
  }

  return { errors, isValid };
};
