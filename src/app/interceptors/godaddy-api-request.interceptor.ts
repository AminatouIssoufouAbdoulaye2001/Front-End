import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class GodaddyApiRequestInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (request.url.includes('https://api.ote-godaddy.com/v1/')) {
        request = request.clone({
          setHeaders: {
            accept: 'application/json',
            Authorization: `sso-key ${environment.GODADDY_API_Key}:${environment.GODADDY_SECRET}}`
          }
        });
      }
    return next.handle(request);
  }
}
