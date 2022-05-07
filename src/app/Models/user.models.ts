export interface LoginData {
  userName: string,
  password: string,
}

export interface User {
  id?: number;
  idPlesk?: number;
  idNghost?: number;
  username: string;
  fullName: string,
  token?: string;
  role:string;
   cname?:string,
   pname?:string,
   login?:string,
   owner_login?:string,
  passwd?:string,
   status?:string,
  phone?:string,
   fax?:string,
   email?:string,
  address?:string,
   city? :string,
   locale?:string,
   state?:string,
   pcode?:string,
   country?:string,
   type?:string,
   description?:string
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
