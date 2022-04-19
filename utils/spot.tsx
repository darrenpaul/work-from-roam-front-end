import batchJsonData from 'data/batchData.json';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import { async } from '@firebase/util';
import { doCreateSpot } from 'services/spot';

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

      const addressPieces = formatted_address.split(',');
      let address = addressPieces[0];
      let city = addressPieces[1];
      let zipCode = addressPieces[2];
      let country = addressPieces[3];

      if (addressPieces.length > 4) {
        address = `${addressPieces[0]}, ${addressPieces[1]}`;
        city = addressPieces[2];
        zipCode = addressPieces[3];
        country = addressPieces[4];
      }

      if (addressPieces.length > 5) {
        address = `${addressPieces[0]}, ${addressPieces[1]}, ${addressPieces[2]}`;
        city = addressPieces[3];
        zipCode = addressPieces[4];
        country = addressPieces[5];
      }
      if (addressPieces.length > 5) {
        address = `${addressPieces[0]}, ${addressPieces[1]}, ${addressPieces[2]}`;
        city = addressPieces[3];
        zipCode = addressPieces[4];
        country = addressPieces[5];
      }
      if (addressPieces.length > 6) {
        address = `${addressPieces[0]}, ${addressPieces[1]}, ${addressPieces[2]}, ${addressPieces[3]}`;
        city = addressPieces[4];
        zipCode = addressPieces[5];
        country = addressPieces[6];
      }

      if (addressPieces.length > 7) {
        address = `${addressPieces[0]}, ${addressPieces[1]}, ${addressPieces[2]}, ${addressPieces[3]}, ${addressPieces[4]}`;
        city = addressPieces[5];
        zipCode = addressPieces[6];
        country = addressPieces[7];
      }

      if (address && city && zipCode && country) {
        address = address.trim();
        city = city.trim();
        zipCode = zipCode.trim();
        country = country.trim();

        const newData = {
          name,
          coordinates: geometry.location,
          address,
          city,
          zipCode,
          country,
          placeId: place_id,
          website: website,
          operatingHours,
          phoneNumber,
          phoneCode,
        };
        if (name.toLowerCase().includes('the scrub')) {
          console.log(newData);
        }
        await doCreateSpot(accessToken, newData);
        count++;
        console.log(count);
      }
    }
  });
};
