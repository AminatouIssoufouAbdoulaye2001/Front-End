import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {DomainAvailable} from "../Models/DomainAvailable.model";

@Injectable({
  providedIn: 'root'
})
export class GodaddyAPIService {
  private GODADDY_API_URL = environment.GODADDY_API_URL;
  private DOLLAR_TO_DINARD = 3.05

  constructor(private http: HttpClient) {

  }

  getDomainAvailablity(domain: string): Observable<any> {
    return this.http.get<DomainAvailable>(
      this.GODADDY_API_URL + `domains/available?domain=${domain}`).pipe(
      map(res => {
        res.currency = 'TND';
        res.price = this.convertPrice(res.price);
        return res;
      }));
  }

  private convertPrice(priceToConvert: number) {
    return (priceToConvert / 1000000) * this.DOLLAR_TO_DINARD;
  }
}
