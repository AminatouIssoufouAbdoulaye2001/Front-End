import {CreateUserForm} from "./user.models";

export class CreatePleskClientAccount {
  public name: string;
  public login: string;
  public company: string;
  public status: number;
  public email: string;
  public locale: string;
  public owner_login: string;
  public external_id: string;
  public description: string;
  public type: string;
  public password: string;
  public idPlesk: number;

  constructor(formValue: CreateUserForm) {
    this.name = formValue.name;
    this.company = "";
    this.login = formValue.login;
    this.status = 0;
    this.email = formValue.email;
    this.locale = "fr-FR";
    this.owner_login = "admin";
    this.description = "";
    this.password = formValue.password;
    this.type = "customer";
  }
}
