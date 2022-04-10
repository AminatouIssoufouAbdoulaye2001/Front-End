import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './AdminDashBoard/adminpage/adminpage.component';
import { CientAreaComponent } from './CientDashBoard/cient-area/cient-area.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { TicketComponent } from './Components/ticket/ticket.component';
import { AddadminComponent } from './AdminDashBoard/addadmin/addadmin.component';
import { AddserviceComponent } from './AdminDashBoard/addservice/addservice.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cient-area', component: CientAreaComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'adminpage/dashboard', component: AdminpageComponent },
  {
    path: 'adminpage/add',
    component: AddadminComponent,
  },
  {
    path: 'adminpage/addservice',
    component: AddserviceComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
