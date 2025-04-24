// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', redirectTo: 'login' }
];
