import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './commentapp/comments/comments.component';
import { LoginGuard } from './auth/guard/login.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginNegateGuard } from './auth/guard/loginNegate.guard';


const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginNegateGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [LoginNegateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
