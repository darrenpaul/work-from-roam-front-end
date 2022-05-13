export interface SpotType {
  id?: string;
  company: string;
  email: string;
  phoneNumber: string;
  phoneCode: string;
  coordinates: { lat: string; lng: string };
  address: string;
  city: string;
  zipCode: string;
  country: string;
  amenities: Array<string>;
  website: string;
  operatingHours: {
    monday: {
      openTime: {
        hour: string;
        minute: string;
      };
      closeTime: {
        hour: '17';
        minute: string;
      };
      open: boolean;
    };
    tuesday: {
      openTime: {
        hour: string;
        minute: string;
      };
      closeTime: {
        hour: '17';
        minute: string;
      };
      open: boolean;
    };
    wednesday: {
      openTime: {
        hour: string;
        minute: string;
      };
      closeTime: {
        hour: '17';
        minute: string;
      };
      open: boolean;
    };
    thursday: {
      openTime: {
        hour: string;
        minute: string;
      };
      closeTime: {
        hour: '17';
        minute: string;
      };
      open: boolean;
    };
    friday: {
      openTime: {
        hour: string;
        minute: string;
      };
      closeTime: {
        hour: '17';
        minute: string;
      };
      open: boolean;
    };
    saturday: {
      openTime: {
        hour: string;
        minute: string;
      };
      closeTime: {
        hour: '17';
        minute: string;
      };
      open: boolean;
    };
    sunday: {
      openTime: {
        hour: string;
        minute: string;
      };
      closeTime: {
        hour: '17';
        minute: string;
      };
      open: boolean;
    };
  };
  images: Array<string>;
  placeId: string;
}
