import { ServerErrorComponent } from './server-error/server-error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckListComponent } from './check-list/check-list.component';
import { SeverityComponent } from './severity/severity.component';
import { BackToLoginComponent } from './back-to-login/back-to-login.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : "", component : LoginComponent},  // login in beginning
  {path:"severity",component:SeverityComponent},
  {path : "login", component : LoginComponent},  // login
  {path : "checklist", component : CheckListComponent},  // checklists
  {path : "backToLogin", component : BackToLoginComponent}, // if unauthorized access happens
  {path : "error", component : ServerErrorComponent}, // if nothing matches
  {path : "**", component : LoginComponent} // if nothing matches

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
