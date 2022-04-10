import {Injectable} from "@angular/core";
import {RestApiService} from "./rest-api-service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private restApi: RestApiService) {
  }

  registerUser(data: any) {
    return  this.restApi.register(data)
  }
}
