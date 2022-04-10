import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginFormComponent } from './Components/login/login-form/login-form.component';
import { RegisterComponent } from './Components/register/register.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = [
{path:"home" , component:HomeComponent},
{path:"signup", component:LoginFormComponent},
{path:"register",component:RegisterComponent},
{path:"**",redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
