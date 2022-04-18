import {Injectable} from "@angular/core";
import {RestApiService} from "./rest-api-service";
import {of} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {

  constructor(private restApi: RestApiService) {
  }

  registerUser(data: any) {
    return  this.restApi.register(data)
  }

  getUserInfos() {
    return this.restApi.getUserProfil();
  }
}


