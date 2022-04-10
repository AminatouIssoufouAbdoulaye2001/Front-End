import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {RegisterComponent} from './Components/register/register.component';
import {SignUpComponent} from './Components/sign-up/sign-up.component';
import {AuthTestComponent} from "./Components/auth-test/auth-test.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "signup", component: SignUpComponent},
  {path: "register", component: RegisterComponent},
  {
    path: 'auth-test',
    component: AuthTestComponent,
    canActivate: [AuthGuard]
  },
  {path: "**", redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
