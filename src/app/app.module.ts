import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminModule } from './admin/admin.module'
import { HttpClientModule } from '@angular/common/http';

import {routing, appRoutingProviders} from './app.routing';
import { ErrorComponent } from './components/error/error.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {EditComponent} from './admin/components/edit/edit.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    RegisterComponent,
    LoginComponent,
    UserEditComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    HttpClientModule,
    routing
  ],
  providers: [
  	appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
