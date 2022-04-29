import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
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
import { FlexLayoutModule } from '@angular/flex-layout';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule}from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {ButtonModule} from 'primeng/button';
import { CardModule} from 'primeng/card';
import {ScrollTopModule} from 'primeng/scrolltop';
import {MatToolbarModule} from '@angular/material/toolbar'
import { FeedsComponent } from './test/feeds/feeds.component';
import { AdminpageComponent } from './AdminDashBoard/adminpage/adminpage.component';
import { ToolbarComponent } from './AdminDashBoard/dashboards/toolbar/toolbar.component';
import{ SidebarModule} from 'primeng/sidebar';
import { SidebarComponent } from './AdminDashBoard/dashboards/sidebar/sidebar.component';
import {TooltipModule} from 'primeng/tooltip'
import {DialogModule} from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { TopCardsComponent } from './AdminDashBoard/dashboards/top-cards/top-cards.component';
import { SalesRatioComponent } from './AdminDashBoard/dashboards/sales-ratio/sales-ratio.component';
import{ ChartModule} from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { AddserviceComponent } from './AdminDashBoard/addservice/addservice.component';
import { InputNumberModule } from 'primeng/inputnumber';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {ToastModule} from 'primeng/toast';
import {FileUploadModule} from 'primeng/fileupload';
import { ProductserviceService } from './Services/productservice.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {SkeletonModule} from 'primeng/skeleton';
import {PasswordModule} from 'primeng/password';
import {CarouselModule} from 'primeng/carousel';
import { MatStepperModule } from '@angular/material/stepper';
import { SingInComponent } from './Components/sign-in/form.component';
import { LogComponent } from './Components/log/log.component';
import {TokenInterceptor} from "./interceptors/token.interceptor";
import { AddadminComponent } from './AdminDashBoard/addadmin/addadmin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidenavbarComponent } from './ClientDashBoard/sidenavbar/sidenavbar.component';
import { AreaComponent } from './ClientDashBoard/area/area.component';
import { DashboardComponent } from './ClientDashBoard/dashboard/dashboard.component';
import {NgModule} from "@angular/core";
import { HomesaleComponent } from './Components/homesale/homesale.component';
import { VpssaleComponent } from './Components/vpssale/vpssale.component';
import { DomaineComponent } from './Components/domaine/domaine.component';
import { HerbergementwebComponent } from './Components/herbergementweb/herbergementweb.component';
import { TopComponent } from './Components/top/top.component';
import { TopheaderComponent } from './ClientDashBoard/topheader/topheader.component';
import { TicketComponent } from './Components/ticket/ticket.component';
import { MailsuiteComponent } from './Components/mailsuite/mailsuite.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesRatioComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SignUpComponent,
    HomeComponent,
    AreaComponent,
    FeedsComponent,
    AdminpageComponent,
    ToolbarComponent,
    SidebarComponent,
    TopCardsComponent,
    AddserviceComponent,
    SingInComponent,
    LogComponent,
    AddadminComponent,
    SidenavbarComponent,
    AreaComponent,
    DashboardComponent,
    TopComponent,
    HomesaleComponent,
    VpssaleComponent,
    DomaineComponent,
    HerbergementwebComponent,
    TopheaderComponent,
    TicketComponent,
    MailsuiteComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    TableModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    ButtonModule,
    CardModule,
    ScrollTopModule,
    MatToolbarModule,
    SidebarModule,
    TooltipModule,
    DialogModule,
    EditorModule,
    ChartModule,
    InputTextModule,
    InputNumberModule,
    ConfirmDialogModule,
    ToastModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
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
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    CardModule
  ],
  providers:  [
    ProductserviceService,
    MessageService,
    ConfirmationService,
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

