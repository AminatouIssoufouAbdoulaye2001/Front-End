import {Injectable} from "@angular/core";
import {RestApiService} from "./rest-api-service";
import {LoginData} from "../Models/user.models";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private apiService: RestApiService) {
  }

  signIn = (data: LoginData) => this.apiService.login(data);

  signUp = (data: any) => this.apiService.register(data);

}
