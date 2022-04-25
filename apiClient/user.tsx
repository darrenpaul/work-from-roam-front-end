import { httpRequest } from './httpRequest';
import { UserData } from 'types/user';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const API_VERSION = 'api/v1';
const KEY = 'user';

export const createUser = (accessToken: String, userData: UserData) => {
  const url = `${BASE_URL}/${API_VERSION}/${KEY}/create`;
  const { firstName, lastName } = userData;
  return httpRequest({
    url,
    method: 'POST',
    data: {
      firstName,
      lastName,
    },
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const getUser = (accessToken: String) => {
  const url = `${BASE_URL}/${API_VERSION}/user`;
  return httpRequest({
    url,
    method: 'GET',

    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const updateUser = (accessToken: String, userData: UserData, id: string) => {
  const url = `${BASE_URL}/${API_VERSION}/${KEY}/update/${id}`;
  const { firstName, lastName } = userData;

  return httpRequest({
    url,
    method: 'POST',
    data: {
      firstName,
      lastName,
    },
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

// export const getUser = (accessToken) => {
//   const baseRequestConfig = getBaseRequestConfig(accessToken);
//   const url = USER_API;

//   return httpRequest(
//     getRequestConfig(
//       {
//         url,
//         method: "GET",
//       },
//       baseRequestConfig
//     )
//   );
// };

// export const putUser = (accessToken, data) => {
//   const baseRequestConfig = getBaseRequestConfig(accessToken);
//   const url = `${USER_API}`;

//   return httpRequest(
//     getRequestConfig(
//       {
//         url,
//         method: "PUT",
//         data,
//       },
//       baseRequestConfig
//     )
//   );
// };

// export const getUser = (accessToken) => {
//   const baseRequestConfig = getBaseRequestConfig(accessToken);
//   const url = USER_API;

//   return httpRequest(
//     getRequestConfig(
//       {
//         url,
//         method: "GET",
//       },
//       baseRequestConfig
//     )
//   );
// };

// export const becomeHost = (accessToken) => {
//   const baseRequestConfig = getBaseRequestConfig(accessToken);
//   const url = `${USER_API}/become-host`;

//   return httpRequest(
//     getRequestConfig(
//       {
//         url,
//         method: "POST",
//       },
//       baseRequestConfig
//     )
//   );
// };

// export const logout = (accessToken) => {
//   const baseRequestConfig = getBaseRequestConfig(accessToken);
//   const url = `${USER_API}/logout`;

//   return httpRequest(
//     getRequestConfig(
//       {
//         url,
//         method: "POST",
//         params: {
//           all: false,
//         },
//       },
//       baseRequestConfig
//     )
//   );
// };
