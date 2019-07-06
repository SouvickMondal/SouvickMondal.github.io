import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginGuard } from './guard/login.guard';
import { LoginNegateGuard } from './guard/loginNegate.guard';
import { FormsModule } from '@angular/forms';
import {AuthInterceptorService} from './interceptor/auth.interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    LoginGuard,
    LoginNegateGuard,
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
  ]
})
export class AuthModule { }
