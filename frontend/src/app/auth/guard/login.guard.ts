import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../coref/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {


  constructor(private _authService: AuthService, private _route: Router) { }
  
  canActivate(): boolean {
    if (this._authService.isAuthenticated()){
      return true;
    } else {
      this._route.navigate(['/login']);
    }
  }

}
