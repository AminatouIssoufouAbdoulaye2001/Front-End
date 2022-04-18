import {Injectable} from "@angular/core";
import {UserInfo} from "../Models/user.models";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {UsersService} from "../Services/users.service";
import {map, Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class UserProfilResolver implements Resolve<UserInfo> {
  constructor(private userService: UsersService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserInfo> | Promise<UserInfo> | UserInfo {
    return this.userService.getUserInfos().pipe(
      map( res => res.payload)
    )
  }
}
