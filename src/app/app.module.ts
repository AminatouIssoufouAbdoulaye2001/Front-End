import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
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
import { AsideComponent } from './CientDashBoard/aside/aside.component';
import { AreaComponent } from './CientDashBoard/area/area.component';
import { CientAreaComponent } from './CientDashBoard/cient-area/cient-area.component';
import {HttpClientModule} from "@angular/common/http";
import { TicketComponent } from './Components/ticket/ticket.component';
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
import { AddadminComponent } from './AdminDashBoard/addadmin/addadmin.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    SalesRatioComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SignUpComponent,
    HomeComponent,
    RegisterComponent,
    AsideComponent,
    AreaComponent,
    CientAreaComponent,
    TicketComponent,
    FeedsComponent,
    AdminpageComponent,
    ToolbarComponent,
    SidebarComponent,
    TopCardsComponent,
    AddadminComponent,

  
  
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
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
