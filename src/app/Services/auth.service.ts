import {Injectable} from "@angular/core";
import {RestApiService} from "./rest-api-service";
import {LoginData} from "../Models/user.models";
import {tap} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

const TOKEN_KEY = 'token'
const helper = new JwtHelperService();

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private apiService: RestApiService) {
  }

  signIn = (data: LoginData) => this.apiService.login(data);

  login (data: LoginData) {
    return this.apiService.login(data).pipe(
      tap( response => {
        if (response.success) {
          localStorage.setItem(TOKEN_KEY, response.payload);
        }
      })
    )
  }

  logOut() {

  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      return false
    }

    return !helper.isTokenExpired(token);
  }

  getRole() {

  }
}
