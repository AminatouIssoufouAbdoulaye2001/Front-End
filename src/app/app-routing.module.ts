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
import {TopComponent} from './Components/top/top.component';
import {DashboardComponent} from "./ClientDashBoard/dashboard/dashboard.component";
import {UserProfilResolver} from "./guards/user-profil-resolver";
import { VpssaleComponent } from './Components/vpssale/vpssale.component';
import { TicketComponent } from './Components/ticket/ticket.component';
import { DomaineComponent } from './Components/domaine/domaine.component';
import { HerbergementwebComponent } from './Components/herbergementweb/herbergementweb.component';
import { HomesaleComponent } from './Components/homesale/homesale.component';
import { MailsuiteComponent } from './Components/mailsuite/mailsuite.component';
import { ProfileComponent } from './Profiles/profile/profile.component';
import { EnreistrerdomainComponent } from './Panier/enreistrerdomain/enreistrerdomain.component';
import { AdduserComponent } from './AdminDashBoard/adduser/adduser.component';
import { AbonnementaddComponent } from './AdminDashBoard/abonnementadd/abonnementadd.component';
import { PaymentComponent } from './Components/payment/payment.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
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
    path: 'dashboard/admin',
    component: AdminpageComponent,
    canActivate: [RoleGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'adminpage/adduser',
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
    path:"adminpage/clients", component:AdduserComponent
  },
  {
    path:"adminpage/abonnementadd" , component:AbonnementaddComponent
  },
  {
    path:"dashboard/client",
    component: AreaComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path:"profil", component:ProfileComponent
      },
    ],
    canActivate: [RoleGuard],
    data: {
      role: 'ROLE_CLIENT'
    },
    resolve: {
      userInfos: UserProfilResolver
    }
  },
  {
    path: "top", component: TopComponent
  },
  {
    path:"vpssales",component:VpssaleComponent
  },
  {
    path:"ticket",component:TicketComponent
  },
  {
    path:"search-domains",component:DomaineComponent
  },
  {
    path:"web",component:HerbergementwebComponent
  },
  {
    path:"sales",component:HomesaleComponent
  },
  {
    path:"mail",component:MailsuiteComponent
  },
  {
    path:"profile", component:ProfileComponent
  },
  {
    path:"paid", component:PaymentComponent
  },
  {
    path:"Edomain", component:EnreistrerdomainComponent
  }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}


