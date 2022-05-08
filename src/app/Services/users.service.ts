import {Injectable} from "@angular/core";
import {RestApiService} from "./rest-api-service";
import {CreateUserForm, CreatNGhostAccount, UserInfo} from "../Models/user.models";
import {CreatePleskClientAccount} from "../Models/plesk-client.model";
import {PleskClientService} from "./plesk-client.service";

@Injectable({
  providedIn: "root"
})
export class UsersService {

  constructor(
    private restApi: RestApiService,
    private pleskService: PleskClientService
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

    return this.pleskService.addClientOnPlesk(pleskAccount);
  }

  getUserInfos() {
    return this.restApi.getUserProfil();
  }

  patchProfil(userProfil: UserInfo) {
    return this.restApi.patchUserProfil(userProfil);
  }
}


