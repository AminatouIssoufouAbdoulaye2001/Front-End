import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionComponent } from './Components/section/section.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Components/register/register.component';
import { SidenavbarComponent } from './ClientDashBoard/sidenavbar/sidenavbar.component';
import { AreaComponent } from './ClientDashBoard/area/area.component';
import { DashboardComponent } from './ClientDashBoard/dashboard/dashboard.component';
import { TopComponent } from './ClientDashBoard/top/top.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { DomaineComponent } from './Components/domaine/domaine.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SignUpComponent,
    HomeComponent,
    RegisterComponent,
    SidenavbarComponent,
    AreaComponent,
    DashboardComponent,
    TopComponent,
    DomaineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
