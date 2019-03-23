import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'

import {ListaProductosComponent} from './components/lista-productos/lista-productos.component'
import {ErrorComponent} from './components/error/error.component'
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {UserEditComponent} from './components/user-edit/user-edit.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'products', component: ListaProductosComponent},
{path: 'registro', component: RegisterComponent},
{path: 'login', component: LoginComponent},
{path: 'mis-datos', component: UserEditComponent},
{path: '**', component: ErrorComponent}

];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
