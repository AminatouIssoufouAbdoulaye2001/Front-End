import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {AppUtilsService} from "./app-utils-service";
import {APIRequestResponse, APIResquestError} from "../Models/api-response.model";
import {LoginData} from "../Models/user.models";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  constructor(private http: HttpClient, private appUtilService: AppUtilsService) {
  }

  login(loginObj: LoginData): Observable<APIRequestResponse> {
    return this.http.post<APIRequestResponse>(this.appUtilService.SERVER_URL + 'users/login', loginObj, this.appUtilService.HTTP_OPTIONS).pipe(
      tap(res => {
        if (res.success) {
          this.appUtilService.saveToken(res.payload);
        }
      }),
      catchError( err => this.errorHandler(err.error)));
  }

  register(data: any): Observable<APIRequestResponse> {
    return this.http.post<APIRequestResponse>(this.appUtilService.SERVER_URL + 'users', data, this.appUtilService.HTTP_OPTIONS).pipe(
      catchError( err => this.errorHandler(err.error()))
    );
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
