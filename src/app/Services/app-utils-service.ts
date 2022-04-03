import {Injectable} from "@angular/core";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AppUtilsService {
  SERVER_URL = 'http://localhost:8080/api/v1/';
  USER_KEY = 'auth-user';
  TOKEN_KEY = 'jwt-token'
  HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  signOut(): void {
    window.sessionStorage.clear();
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
