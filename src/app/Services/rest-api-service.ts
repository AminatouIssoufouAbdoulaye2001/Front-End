import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, switchMap, throwError} from "rxjs";
import {APIRequestResponse} from "../Models/api-response.model";
import {CreatNGhostAccount, LoginData, UserInfo} from "../Models/user.models";
import {environment} from "../../environments/environment";
import {Domain, DomainAvailable} from "../Models/domain.model";
import {PleskClientService} from "./plesk-client.service";
import {CreatePleskClientAccount} from "../Models/plesk-client.model";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  domainsAvailables: Domain[] = []

  constructor(private http: HttpClient,
              private pleskService: PleskClientService) {
  }

  login(loginObj: LoginData): Observable<APIRequestResponse> {
    return this.http.post<APIRequestResponse>(environment.SERVER_URL + 'users/login', loginObj).pipe(
      catchError(err => this.errorHandler(err.error)));
  }

  register(
    pleskAccount: CreatePleskClientAccount,
    ngHostAccount: CreatNGhostAccount
  ): Observable<any> {

    return this.pleskService.addClientOnPlesk(pleskAccount)
      .pipe(
        map(res => res.id),
        switchMap(id => {
          ngHostAccount.idPlesk = id;
          return this.http.post<APIRequestResponse>(
            environment.SERVER_URL + 'users',
            ngHostAccount)
        }),
        catchError(err => this.errorHandler(err.error()))
      );
  }

  getUserProfil(): Observable<UserInfo> {
    return this.http.get<APIRequestResponse>(
      environment.SERVER_URL + 'users/profil'
    )
      .pipe(
        map(res => res.payload),
        catchError(err => {
            return this.errorHandler(err.error)
          }
        )
      );
  }

  getAvailableDomain(domains: string[]): Observable<Domain[]> {
    return this.http.post<any>(
      environment.SERVER_URL + 'external-api/godaddy/domains/available',
      domains
    ).pipe(
      map(res => {
          this.domainsAvailables = [];
          let domains = res.payload as DomainAvailable[];
          domains.forEach(el => {
            this.domainsAvailables.push(new Domain(
              el?.available,
              el?.currency,
              el.definitive,
              el?.domain,
              el?.period,
              el?.price,
            ))
          })
          return this.domainsAvailables;
        }
      ),
      catchError(err => this.errorHandler(err.error)));
  }

  patchUserProfil(userInfo: UserInfo): Observable<UserInfo> {
    return this.http.patch<APIRequestResponse>(
      environment.SERVER_URL + `users/${userInfo.id}/profil`,
      userInfo)
      .pipe(
        map(res => res.payload),
        catchError(err => {
          return this.errorHandler(err);
        })
      )
  }

  patchPassword(data: any): Observable<APIRequestResponse> {
    return this.http.patch<APIRequestResponse>(
      environment.SERVER_URL + `users/${data.userId}/password`, data)
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      )
  }

  desableAccount(userId: number) {
    return this.http.delete<APIRequestResponse>(
      environment.SERVER_URL + `users/${userId}/is-active`)
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      )
  }

  getCustomer() {
    return this.http.get<APIRequestResponse>(environment.SERVER_URL + `users/customers`)
      .pipe(
        catchError(err => this.errorHandler(err))
      )
  }


  private errorHandler(error: any) {

    // todo: à travailler pour afficher les errors aux utilisateur
    // snackbar, toast
    return throwError({
      success: false,
      payload: null,
      message: error?.message
    } as APIRequestResponse)
  }
}
