import { Component } from '@angular/core';
import { AuthService } from './coref/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private _authService: AuthService){}
  signout() {
    this._authService.logout();
  }
  loggedin(){
    return this._authService.isAuthenticated();
  }
}
