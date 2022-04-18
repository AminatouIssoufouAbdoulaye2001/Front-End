import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {APIRequestResponse, APIResquestError} from "../Models/api-response.model";
import {LoginData} from "../Models/user.models";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  constructor(private http: HttpClient) {
  }

  login(loginObj: LoginData): Observable<APIRequestResponse> {
    return this.http.post<APIRequestResponse>(environment.SERVER_URL + 'users/login', loginObj).pipe(
      catchError(err => this.errorHandler(err.error)));
  }

  register(data: any): Observable<APIRequestResponse> {
    return this.http.post<APIRequestResponse>(environment.SERVER_URL + 'users', data).pipe(
      catchError(err => this.errorHandler(err.error()))
    );
  }

  getUserProfil(): Observable<any> {
    return this.http.get(environment.SERVER_URL + 'users/profil' ).pipe(
      catchError(err => this.errorHandler(err.error)));
  }

  private errorHandler(error: APIResquestError) {

    // todo: à travailler pour afficher les errors aux utilisateur
    // snackbar, toast
    console.log(error);
    return of({
      success: false,
      payload: null,
      message: error?.message
    } as APIRequestResponse)
  }
}
