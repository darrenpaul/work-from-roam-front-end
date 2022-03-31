export interface AuthUserType {
  user: {
    uid: string;
    firstName: string;
    lastName: string;
    role: string;
    status: string;
    createdDate: Date;
    modifiedDate: Date;
  };
  accessToken: string;
}

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
