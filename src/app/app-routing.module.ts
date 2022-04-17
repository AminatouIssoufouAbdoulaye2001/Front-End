import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './ClientDashBoard/area/area.component';
import { DashboardComponent } from './ClientDashBoard/dashboard/dashboard.component';
import { TopComponent } from './ClientDashBoard/top/top.component';
import { DomaineComponent } from './Components/domaine/domaine.component';

const routes: Routes = [
{
  path:"dashboard",component:AreaComponent
},
{
  path:"ticket",component:TopComponent
},
{
path:"client", component:DashboardComponent
},
{
  path:"domaine" ,component:DomaineComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
