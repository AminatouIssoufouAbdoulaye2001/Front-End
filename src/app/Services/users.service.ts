import {Injectable} from "@angular/core";
import {RestApiService} from "./rest-api-service";
import {CreateUserForm, CreatNGhostAccount, UserInfo} from "../Models/user.models";
import {CreatePleskClientAccount} from "../Models/plesk-client.model";
import {PleskClientService} from "./plesk-client.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {

  constructor(
    private restApi: RestApiService
  ) {
  }

  registerUser(data: CreateUserForm) {
    // plesk account model
    let pleskAccount = new CreatePleskClientAccount(data);

    // ngHost account model
    let ngHostAccount = new CreatNGhostAccount(
      data.login, data.name, data.email,
      data.password, data.passwordConf, data.phone
    );

    return this.restApi.register(pleskAccount,ngHostAccount)
  }

  getUserInfos() {
    return this.restApi.getUserProfil();
  }

  desableAccount(userId: number) {
    return this.restApi.desableAccount(userId);
  }

  patchProfil(userProfil: UserInfo) {
    return this.restApi.patchUserProfil(userProfil);
  }

  patchPassword(data: any) {
    return this.restApi.patchPassword(data);
  }

  getCustomer() {
    return this.restApi.getCustomer();
  }
}


