import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetalleproductoComponent } from './pages/detalleproducto/detalleproducto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { Error404Component } from './components/error-404/error-404.component';
import { ProductoUnoComponent } from './pages/producto-uno/producto-uno.component';
import { LoginComponent } from './pages/login/login.component';
import { permissionsGuard } from './guards/permissions.guard';
import { CartFormComponent } from './pages/cart-form/cart-form.component';
import { warningsGuard } from './guards/warnings.guard';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './pages/register/register.component';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

export const routes: Routes =  [
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path: 'home', component:HomeComponent},
    { path: 'products', component:ProductsComponent},
  { path: 'products/:id', component:DetalleproductoComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
    { path: 'login', component:LoginComponent, canDeactivate: [warningsGuard] },
    { path: 'register', component:RegisterComponent },
    { path: 'nosotros', component:NosotrosComponent },
    {path: 'producto/uno', component: ProductoUnoComponent, canDeactivate: [warningsGuard], canActivate:[permissionsGuard]},
    {path: 'cart-form', component: CartFormComponent},
    
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
