export interface LoginData {
  userName: string,
  password: string,
}

export interface User {
  id?: number;
  username: string;
  fullName: string,
  token?: string;
  role:string;
}

export interface UserInfo {
  username: string,
  fullName: string,
  email: string,
  phone: string,
}
