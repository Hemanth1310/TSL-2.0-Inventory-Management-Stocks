import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { CommonService } from './common/common.service';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component'
@NgModule({
  declarations: [
  	RootComponent,
    LoginComponent,
    HomeComponent,
    
    GroceryListComponent,
    
    CartComponent,
    
    AdminComponent,
    
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [RootComponent]
})
export class AppModule { }
