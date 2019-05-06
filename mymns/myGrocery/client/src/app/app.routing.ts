import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component'

export const AppRoutes: Routes = [
	{pathMatch: 'full',  path: 'login', component: LoginComponent },
	{pathMatch: 'full',  path: 'home', component: HomeComponent },
	{pathMatch: 'full',  path: 'grocery-list', component: GroceryListComponent },
	{pathMatch: 'full',  path: 'cart', component: CartComponent },
	{pathMatch: 'full',  path: 'admin', component: AdminComponent },
	{pathMatch: 'full',  path: 'register', component: RegisterComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);