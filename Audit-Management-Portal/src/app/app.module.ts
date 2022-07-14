import { User } from './Models/User';
import { SpecialFLag } from './Models/SpecialFlag';
import { AuthorizationMSClientService } from './HttpClients/authorization-msclient.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SeverityComponent } from './severity/severity.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChecklistService } from './Services/checklist.service';
import { SeverityService } from './Services/severity.service';
import { DatePipe } from '@angular/common';

import { AuthenticationRequest } from './Models/AuthenticationRequest';
import { SecurityToken } from './Models/SecurityToken';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { BackToLoginComponent } from './back-to-login/back-to-login.component';
import { LoginStatus } from './Models/LoginStatus';
import { ProjectDetails } from './Models/ProjectDetails';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { ServerErrorComponent } from './server-error/server-error.component';
import { CheckListComponent } from './check-list/check-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CheckListComponent,
    SeverityComponent,
    NavHeaderComponent,
    BackToLoginComponent,
    ServerErrorComponent,
    CheckListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ChecklistService,
    SeverityService,
    DatePipe,
    AuthenticationRequest,
    SecurityToken,
    LoginStatus,
    ProjectDetails,
    SpecialFLag,
    User,
    AuthorizationMSClientService,
    {   // for token interceptor
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
