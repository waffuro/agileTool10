import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NaveBarComponent } from './nave-bar/nave-bar.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { FirstSetupProfileComponent } from './first-setup-profile/first-setup-profile.component';
import { FirstSetupDoneComponent } from './first-setup-done/first-setup-done.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'confirm-email', component: ConfirmEmailComponent },
  { path: 'first-setup-profile', component: FirstSetupProfileComponent },
  { path: 'first-setup-done', component: FirstSetupDoneComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dash-board', component: DashBoardComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NaveBarComponent,
    HomeComponent,
    SignUpComponent,
    SignupFormComponent,
    PageNotFoundComponent,
    ConfirmEmailComponent,
    FirstSetupProfileComponent,
    FirstSetupDoneComponent,
    LoginComponent,
    LoginFormComponent,
    DashBoardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
