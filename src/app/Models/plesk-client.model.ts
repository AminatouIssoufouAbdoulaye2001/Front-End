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

  constructor(formValue: CreateUserForm) {
    this.name = "John Smith";
    this.company = "Plesk";
    this.login = "john-unit-test";
    this.status = 0;
    this.email = "john_shmith@msn.com";
    this.locale = "en-US";
    this.owner_login = "admin";
    this.external_id = "link:12345"
    this.description = "Nice guy";
    this.password = "changeme1Q**";
    this.type = "reseller";
  }
}
