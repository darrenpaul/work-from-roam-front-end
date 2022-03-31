import axios from 'axios';

export const httpRequest = (requestConfig = {}) => {
  return axios(requestConfig).then(
    (response) => {
      return response.data;
    },
    (responseError) => {
      const error = responseError?.response;

      throw error;
    }
  );
};
