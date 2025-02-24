import batchJsonData from 'data/batchData.json';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import { doCreateSpot } from 'services/spot';
import { NextRouter } from 'next/router';

const SPOT_ID_QUERY = 'spotId';

dayjs.extend(customParseFormat);

export const BASE_AMENITIES = () => {
  return {
    wifi: {
      available: false,
      option: '',
      cost: '',
    },
    plugPoints: {
      available: false,
      option: '',
      cost: '',
    },
    petFriendly: {
      available: false,
      option: '',
      cost: '',
    },
    parking: {
      available: false,
      option: '',
      cost: '',
    },
    wheelChairAccessible: {
      available: false,
      option: '',
      cost: '',
    },
  };
};

const BASE_TIME = {
  openTime: '09:00',
  closeTime: '17:00',
  open: true,
};

export const BASE_OPERATING_HOURS = {
  monday: {
    ...BASE_TIME,
  },
  tuesday: {
    ...BASE_TIME,
  },
  wednesday: {
    ...BASE_TIME,
  },
  thursday: {
    ...BASE_TIME,
  },
  friday: {
    ...BASE_TIME,
  },
  saturday: {
    ...BASE_TIME,
  },
  sunday: {
    ...BASE_TIME,
  },
};

export const batchAdd = (accessToken) => {
  const data = batchJsonData;
  let count = 0;
  data.forEach(async (place) => {
    const {
      business_status,
      name,
      formatted_address,
      international_phone_number,
      geometry,
      place_id,
      website,
      opening_hours,
    } = place;

    if (
      business_status === 'OPERATIONAL' &&
      geometry.location &&
      formatted_address &&
      opening_hours?.weekday_text
    ) {
      let phoneNumber = '';
      let phoneCode = '';
      if (international_phone_number) {
        phoneNumber = international_phone_number.replace(/(^\+.*?) /, '0').replaceAll(' ', '');
        phoneCode = international_phone_number.match(/(^\+.*?) /)[1].replace('+', '');
      }
      let operatingHours = {};
      if (opening_hours?.weekday_text) {
        opening_hours?.weekday_text.forEach((item) => {
          const day = item.split(':')[0].toLowerCase();
          let openTime = '09:00';
          let closeTime = '17:00';
          let open = false;
          const regex = item.match(/^(.+): (\d{1,2}:\d{1,2} \w+) .+ (\d{1,2}:\d{1,2} \w+)/);
          if (regex) {
            const openObject = dayjs(regex[2], 'h:mm A').format('HH:mm').split(':');
            const closeObject = dayjs(regex[3], 'h:mm A').format('HH:mm').split(':');
            openTime = dayjs(regex[2], 'h:mm A').format('HH:mm');
            closeTime = dayjs(regex[3], 'h:mm A').format('HH:mm');
            open = true;
          }

          operatingHours[day] = { openTime, closeTime, open };
        });
      }

      const addressData = swedenAddress(formatted_address);
      let address = addressData?.address;
      let city = addressData?.city;
      let suburb = addressData?.suburb;
      let zipCode = addressData?.zipCode;
      let country = addressData?.country;

      if (city && zipCode && country) {
        address = address.trim();
        suburb = suburb.trim();
        city = city.trim();
        zipCode = zipCode.trim();
        country = country.trim();

        const newData = {
          company: name,
          coordinates: geometry.location,
          address,
          suburb,
          city,
          zipCode,
          country,
          placeId: place_id,
          website: website,
          operatingHours,
          phoneNumber,
          phoneCode,
        };

        await doCreateSpot(accessToken, newData);
        count++;
        console.log(newData);
        console.log(count);
      }
    }
  });
};

const malaysiaAddress = (formattedAddress) => {
  const splitAddress = formattedAddress.split(',');
  const addressPieces = [];
  splitAddress.forEach((item) => {
    addressPieces.push(item.trim());
  });

  const city = addressPieces[addressPieces.length - 2];
  const suburbZipCodeRegex = /^.+ ((\d{5}) (.+)), .+ .+/gm.exec(formattedAddress);
  if (suburbZipCodeRegex) {
    const suburb = suburbZipCodeRegex[suburbZipCodeRegex.length - 1];
    const zipCode = suburbZipCodeRegex[suburbZipCodeRegex.length - 2];
    const country = addressPieces[addressPieces.length - 1];
    const justAddress = [];
    for (const item of addressPieces) {
      if (item.includes(suburb) || item.includes(zipCode)) {
        break;
      }

      justAddress.push(item);
    }

    const address = justAddress.join(' ');

    return { address, city, suburb, zipCode, country };
  }
};

const southAfricaAddress = (formattedAddress) => {
  // const splitAddress = formatted_address.split(',');
  // const addressPieces = [];
  // splitAddress.forEach((item) => {
  //   addressPieces.push(item.trim());
  // });
  // let address = addressPieces[0];
  // let city = addressPieces[1];
  // let zipCode = addressPieces[2];
  // let country = addressPieces[3];
  // if (addressPieces.length > 3) {
  //   address = `${addressPieces[0]}}`;
  //   city = addressPieces[1];
  //   zipCode = addressPieces[2];
  //   country = addressPieces[3];
  // }
  // if (addressPieces.length > 4) {
  //   address = `${addressPieces[0]}, ${addressPieces[1]}`;
  //   city = addressPieces[2];
  //   zipCode = addressPieces[3];
  //   country = addressPieces[4];
  // }
  // if (addressPieces.length > 5) {
  //   address = `${addressPieces[0]}, ${addressPieces[1]}, ${addressPieces[2]}`;
  //   city = addressPieces[3];
  //   zipCode = addressPieces[4];
  //   country = addressPieces[5];
  // }
  // if (addressPieces.length > 5) {
  //   address = `${addressPieces[0]}, ${addressPieces[1]}, ${addressPieces[2]}`;
  //   city = addressPieces[3];
  //   zipCode = addressPieces[4];
  //   country = addressPieces[5];
  // }
  // if (addressPieces.length > 6) {
  //   address = `${addressPieces[0]}, ${addressPieces[1]}, ${addressPieces[2]}, ${addressPieces[3]}`;
  //   city = addressPieces[4];
  //   zipCode = addressPieces[5];
  //   country = addressPieces[6];
  // }
  // if (addressPieces.length > 7) {
  //   address = `${addressPieces[0]}, ${addressPieces[1]}, ${addressPieces[2]}, ${addressPieces[3]}, ${addressPieces[4]}`;
  //   city = addressPieces[5];
  //   zipCode = addressPieces[6];
  //   country = addressPieces[7];
  // }
};

const swedenAddress = (formattedAddress) => {
  const splitAddress = formattedAddress.split(',');
  const addressPieces = [];
  splitAddress.forEach((item) => {
    addressPieces.push(item.trim());
  });

  const suburbZipCodeRegex = /(^.+), (\d{1,3} \d{1,3}) (.+), (.+)/gm.exec(formattedAddress);
  if (suburbZipCodeRegex) {
    const city = suburbZipCodeRegex[suburbZipCodeRegex.length - 2];
    const address = suburbZipCodeRegex[suburbZipCodeRegex.length - 4];
    const suburb = '';
    const zipCode = suburbZipCodeRegex[suburbZipCodeRegex.length - 3];
    const country = suburbZipCodeRegex[suburbZipCodeRegex.length - 1];
    const justAddress = [];
    for (const item of addressPieces) {
      if (item.includes(suburb) || item.includes(zipCode)) {
        break;
      }

      justAddress.push(item);
    }

    return { address, city, suburb, zipCode, country };
  }
};

export const addSelectedSpotUrlQuery = (router: NextRouter, spotId: string) => {
  router.replace(`?${SPOT_ID_QUERY}=${spotId}`, undefined, { shallow: true });
};
