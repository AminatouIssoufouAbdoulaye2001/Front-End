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

export class UserInfo {
  constructor(
    public id: number,
    public username: string,
    public fullName: string,
    public email: string,
    public phone: string
  ) {
  }

}
