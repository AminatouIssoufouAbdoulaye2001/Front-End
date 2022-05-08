export interface LoginData {
  userName: string,
  password: string,
}

export interface CreateUserForm {
  name: string;
  login: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  pcode: string;
  password: string;
  passwordConf: string;
}


export class UserInfo {
  constructor(
    public id: number,
    public username: string,
    public fullName: string,
    public email: string,
    public phone: string
  ) { }
}

export class CreatNGhostAccount {

  constructor(
    public userName: string,
    public fullName: string,
    public email: string,
    public password: string,
    public passwordConf: string,
    public phone: string,
    public idPlesk: number = 0,
  ) {
  }
}
 export interface UserAdd{
  id: string;
  userName: string,
  fullName: string,
  email:string
  role:string
 }
