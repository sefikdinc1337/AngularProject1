import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import path from 'path';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

export const routes: Routes = [
    {path:"",pathMatch:"full",  component:ProductComponent},
    {path:"products", component:ProductComponent},
    {path:"products/category/:categoryId", component:ProductComponent},
    {path:"products/add", component:ProductAddComponent,  canActivate:[LoginGuard]},
    {path:"login", component:LoginComponent}


];
