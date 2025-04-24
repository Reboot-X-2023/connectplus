import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './app/product/product.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },

  { path: 'login', component: LoginComponent },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
