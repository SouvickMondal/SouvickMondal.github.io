import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../coref/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;
  
  constructor(private _authService:AuthService) { }

  ngOnInit() {
  }
  
  login(){
    this._authService.login({email:this.email,password:this.password});
  }

}
