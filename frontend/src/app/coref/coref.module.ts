import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './service/data.service';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [
    DataService,
    AuthService
  ]
})
export class CorefModule { }
