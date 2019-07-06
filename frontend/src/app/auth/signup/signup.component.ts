import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../coref/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: String;
  username: String;
  password: String;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  signup() {

    this._authService.signup({ name: this.username, password: this.password, email: this.email });
    // this._authService.login({username:this.username,password:this.password});
  }

}
