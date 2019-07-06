import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CommentappModule } from './commentapp/commentapp.module';
import { CorefModule } from './coref/coref.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CommentappModule,
    CorefModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
