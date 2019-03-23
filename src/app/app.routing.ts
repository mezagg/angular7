import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'

import {ListaProductosComponent} from './components/lista-productos/lista-productos.component'
import {ErrorComponent} from './components/error/error.component'

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'products', component: ListaProductosComponent},

{path: '**', component: ErrorComponent}

];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);