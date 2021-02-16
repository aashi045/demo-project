export interface SignupDetails {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
  mobile: string;
  city: string;
  state: string;
  zip: string;
}

export interface loginDetails {
  email: string;
  password: string;
}

export interface ChangePassword {
  id: number;
  oldPassword: string;
  newPassword: string;
}
