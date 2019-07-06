import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {
  
  private BASE_URL: String = "http://b20849a1.ngrok.io";
  private TOKEN_KEY: string = 'token';

constructor(private _route:Router,private _http: HttpClient){}
  
  gettoken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  deleteToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated() {
      return !!localStorage.getItem(this.TOKEN_KEY);
  }

  login(cred) {
    this._http.post(`${this.BASE_URL}/api/loginUser`,cred).subscribe(res=>{
      this.saveToken(res['token']);
      this._route.navigate(['']);
    },err=>{
      throw err;
    });
  }

  signup(cred) {
    // Store token you get in localStorage
    // else if bad req do nothing
    this._http.post(`${this.BASE_URL}/api/createUser`,cred).subscribe(res=>{
      this.saveToken(res['token']);
      this._route.navigate(['']);
    },err=>{
      throw err;
    });
  }


  logout():void{
    this.deleteToken();
    this._route.navigate(['login']);
  }

}