import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }      from './app.routes';


import { AppComponent } from './app.component';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
