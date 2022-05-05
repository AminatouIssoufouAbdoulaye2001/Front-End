import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {APIRequestResponse, APIResquestError} from "../Models/api-response.model";
import {LoginData} from "../Models/user.models";
import {environment} from "../../environments/environment";
import {Domain, DomainAvailable} from "../Models/domain.model";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  domainsAvailables: Domain[] = []

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
    return this.http.get(environment.SERVER_URL + 'users/profil').pipe(
      catchError(err => this.errorHandler(err.error)));
  }

  getAvailableDomain(domains: string[]): Observable<Domain[]> {
    return this.http.post<any>(
      environment.SERVER_URL + 'external-api/godaddy/domains/available',
      domains
    ).pipe(
      map(res => {
        this.domainsAvailables = [];
          let domains = res.payload.domains as DomainAvailable[];
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

  private errorHandler(error: APIResquestError) {

    // todo: à travailler pour afficher les errors aux utilisateur
    // snackbar, toast
    return throwError({
      success: false,
      payload: null,
      message: error?.message
    } as APIRequestResponse)
  }
}
