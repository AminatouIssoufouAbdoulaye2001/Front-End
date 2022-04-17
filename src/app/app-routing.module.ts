import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './ClientDashBoard/area/area.component';
import { TopComponent } from './ClientDashBoard/top/top.component';
//import { DashboardComponent } from './ClientDashBoard/dashboard/dashboard.component';

const routes: Routes = [
{
  path:"dashboard",component:AreaComponent
},
{
  path:"ticket",component:TopComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
