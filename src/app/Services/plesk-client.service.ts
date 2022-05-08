import {Injectable} from "@angular/core";
import {catchError, Observable} from "rxjs";
import {tap,} from "rxjs/operators"
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreatePleskClientAccount} from "../Models/plesk-client.model";

@Injectable({providedIn: 'root'})
export class PleskClientService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-API-Key': `45261b34-1a23-8eef-75c8-c58166819c16`
    })
  };
  private pleskUrl = 'https://cps.tn:8443/api/v2/clients';  // URL to web api with client endpoint

  constructor(private http: HttpClient) {

  }

  /** GET: get clients from the server */

  getClientOnPlesk(): Observable<CreatePleskClientAccount[]> {
    return this.http.get<CreatePleskClientAccount[]>(this.pleskUrl, this.httpOptions)
      .pipe(
        tap(_ => console.log('fetched client'))
      );
  }

  /** POST: add a new client to the server */

  addClientOnPlesk(client: CreatePleskClientAccount): Observable<CreatedClientInfo> {
    return this.http.post<CreatedClientInfo>(
      this.pleskUrl,
      client,
      this.httpOptions
    ).pipe(
      tap(res => console.log(res)),
      catchError(err => {
        console.log(err);
        throw err;
      }));
  }

  /** PUT: update the hero on the server */
  updateClient(
    client: CreatePleskClientAccount,
    id: number): Observable<any> {
    const url = `${this.pleskUrl}/${id}`;

    return this.http.put(this.pleskUrl, client, this.httpOptions).pipe(
      tap(_ => console.log(`updated client id=${id}`))
    );
  }

  /** DELETE: delete the client from the server */
  deleteClient(id: number): Observable<CreatePleskClientAccount> {
    const url = `${this.pleskUrl}/${id}`;

    return this.http.delete<CreatePleskClientAccount>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted client id=${id}`))
    );
  }
}

class CreatedClientInfo {
  constructor(public id: number, public guid: string) {
  }
}
