import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {LogComponent} from "./Components/log/log.component";
import {SingInComponent} from "./Components/sign-in/form.component";
import {SignUpComponent} from "./Components/sign-up/sign-up.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {
    path: 'account',
    component:LogComponent,
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
      },
      {
        path: 'sign-in',
        component: SingInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
    ]
  },

  {path: "**", redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
