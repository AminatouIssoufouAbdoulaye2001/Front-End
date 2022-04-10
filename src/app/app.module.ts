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
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './Components/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import { ImageCarouselComponent } from './Components/login/image-carousel/image-carousel.component';
import { LoginFormTextComponent } from './Components/login/login-form-text/login-form-text.component';
import { LoginFormComponent } from './Components/login/login-form/login-form.component';
import { RegistrationComponent } from './Components/login/registration/registration.component';
import {MessagesModule} from 'primeng/messages';
import { MessageModule } from 'primeng/message';  
import {SkeletonModule} from 'primeng/skeleton';
import {PasswordModule} from 'primeng/password';
import {CarouselModule} from 'primeng/carousel';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ResetPasswordComponent } from './Components/login/reset-password/reset-password.component';
import { FormComponent } from './Components/login/form/form.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AgencyFormComponent } from './Components/login/agency-form/agency-form.component';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SignUpComponent,
    HomeComponent,
    RegisterComponent,
    ImageCarouselComponent,
    LoginFormTextComponent,
    LoginFormComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    FormComponent,
    AgencyFormComponent
    
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
    PasswordModule,
    MessageModule,
    MessagesModule,
    CarouselModule,
    SkeletonModule,
    DialogModule,
    ConfirmDialogModule,
    MatStepperModule,
    MatButtonModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
