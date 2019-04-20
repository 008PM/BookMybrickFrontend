import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup,FormControl  } from '@angular/forms';
import { HttpModule,Http, XHRBackend } from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CostOfDeliveryComponent } from './cost-of-delivery/cost-of-delivery.component';

const appRoutes: Routes =
[
 {path:'login',component:UserLoginComponent},
 {path:'deliveryCost/:id',component:CostOfDeliveryComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HeaderComponent,
    CostOfDeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
