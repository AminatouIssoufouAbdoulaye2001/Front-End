import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminpageComponent} from './AdminDashBoard/adminpage/adminpage.component';
import {HomeComponent} from './Components/home/home.component';
import {SignUpComponent} from './Components/sign-up/sign-up.component';
import {LogComponent} from "./Components/log/log.component";
import {SingInComponent} from "./Components/sign-in/form.component";
import {AddadminComponent} from "./AdminDashBoard/addadmin/addadmin.component";
import {AddserviceComponent} from "./AdminDashBoard/addservice/addservice.component";
import {RoleGuard} from "./guards/role.guard";
import {AreaComponent} from './ClientDashBoard/area/area.component';
import {TopComponent} from './ClientDashBoard/top/top.component';
import {DashboardComponent} from "./ClientDashBoard/dashboard/dashboard.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'adminpage/dashboard',
    component: AdminpageComponent,
    canActivate: [RoleGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'adminpage/add',
    component: AddadminComponent,
    canActivate: [RoleGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'adminpage/addservice',
    component: AddserviceComponent,
    canActivate: [RoleGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'account',
    component: LogComponent,
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
  {
    path:"dashboard",
    component: AreaComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]

  },
  {
    path: "ticket", component: TopComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}


