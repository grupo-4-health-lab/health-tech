import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PasswordResetComponent } from './password-reset/password-reset.page';
import { LoginComponent } from './login/login.page';

@NgModule({
  declarations: [
    AppComponent,
    PasswordResetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
