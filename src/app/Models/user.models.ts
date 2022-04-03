export interface LoginData {
  userName: string,
  password: string,
}

export interface User {
  id: number;
  username: string;
  fullName: string,
  token: string;
}
