import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './CientDashBoard/area/area.component';
import { CientAreaComponent } from './CientDashBoard/cient-area/cient-area.component';
import { DashboardComponent } from './CientDashBoard/dashboard/dashboard.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
{path:"area" , component:AreaComponent},
{path:"dashboard", component:DashboardComponent},
{path:"register",component:RegisterComponent},
{path:"",redirectTo:'client-area', component:CientAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
