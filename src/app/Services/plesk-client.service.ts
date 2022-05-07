import { Inject, Injectable } from "@angular/core";
import { Observable,of } from "rxjs";
import {tap,catchError, map,} from "rxjs/operators"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Client } from "src/app/Models/Client.models";

@Injectable({ providedIn: 'root' })

export class PleskClientService{
    private pleskUrl = 'https://cps.tn:8443/api/v2/clients';  // URL to web api with client endpoint
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-API-Key':`45261b34-1a23-8eef-75c8-c58166819c16`})
      };
    constructor(private http:HttpClient){

    }
    ngOnInit()
    {

    }


     /** GET: get clients from the server */

     getClientOnPlesk(): Observable<Client[]> {
        return this.http.get<Client[]>(this.pleskUrl,this.httpOptions)
          .pipe(
            tap(_ => console.log('fetched client'))
          );
      }

     /** POST: add a new client to the server */
     
        addClientOnPlesk(client: Client): Observable<CreatedClientInfo> {
            
            return this.http.post<CreatedClientInfo>(this.pleskUrl, client, this.httpOptions).pipe(
            tap((response) => console.log(`added client \n ${response}`))
            );
        }

    /** PUT: update the hero on the server */
        updateClient(client: Client): Observable<any> {
            const url = `${this.pleskUrl}/${client.id}`;
            return this.http.put(this.pleskUrl,client, this.httpOptions).pipe(
            tap(_ => console.log(`updated client id=${client.id}`))
            );
        }

    /** DELETE: delete the client from the server */
        deleteClient(id: number): Observable<Client> {
            const url = `${this.pleskUrl}/${id}`;
        
            return this.http.delete<Client>(url, this.httpOptions).pipe(
            tap(_ => console.log(`deleted client id=${id}`))
            );
        }
}

class CreatedClientInfo{
    constructor(public id:number,public guid:string){}
}