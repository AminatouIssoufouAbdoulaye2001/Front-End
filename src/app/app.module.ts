import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './Components/header/header.component';
import {FooterComponent} from './Components/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SectionComponent} from './Components/section/section.component';
import {SignUpComponent} from './Components/sign-up/sign-up.component';
import {HomeComponent} from './Components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MessagesModule} from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {SkeletonModule} from 'primeng/skeleton';
import {PasswordModule} from 'primeng/password';
import {CarouselModule} from 'primeng/carousel';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { SingInComponent } from './Components/sign-in/form.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LogComponent } from './Components/log/log.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./interceptors/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SignUpComponent,
    HomeComponent,
    SingInComponent,
    LogComponent,

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
