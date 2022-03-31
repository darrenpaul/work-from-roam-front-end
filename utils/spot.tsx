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
      cost: ''
    },
    plugPoints: {
      available: false,
      option: '',
      cost: ''
    },
    petFriendly: {
      available: false,
      option: '',
      cost: ''
    },
    parking: {
      available: false,
      option: '',
      cost: ''
    },
    wheelChairAccessible: {
      available: false,
      option: '',
      cost: ''
    }
  };
};

const BASE_TIME = {
  openTime: {
    hour: '09',
    minute: '00'
  },
  closeTime: {
    hour: '17',
    minute: '00'
  },
  open: true
};

export const BASE_OPERATING_HOURS = {
  monday: {
    ...BASE_TIME
  },
  tuesday: {
    ...BASE_TIME
  },
  wednesday: {
    ...BASE_TIME
  },
  thursday: {
    ...BASE_TIME
  },
  friday: {
    ...BASE_TIME
  },
  saturday: {
    ...BASE_TIME
  },
  sunday: {
    ...BASE_TIME
  }
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
      opening_hours
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
          let openTime = { hour: '09', minute: '00' };
          let closeTime = { hour: '17', minute: '00' };
          let open = false;
          const regex = item.match(/^(.+): (\d{1,2}:\d{1,2} \w+) .+ (\d{1,2}:\d{1,2} \w+)/);
          if (regex) {
            const openObject = dayjs(regex[2], 'h:mm A').format('HH:mm').split(':');
            const closeObject = dayjs(regex[3], 'h:mm A').format('HH:mm').split(':');
            openTime = { hour: openObject[0], minute: openObject[1] };
            closeTime = { hour: closeObject[0], minute: closeObject[1] };
            open = true;
          }

          operatingHours[day] = { openTime, closeTime, open };
        });
      }

      const newData = {
        name: name,
        coordinates: geometry.location,
        address: formatted_address,
        placeId: place_id,
        website: website,
        operatingHours,
        phoneNumber,
        phoneCode
      };
      if (name.toLowerCase().includes('the scrub')) {
        console.log(newData);
      }
      await doCreateSpot(accessToken, newData);
      count++;
      console.log(count);
    }
  });
};
