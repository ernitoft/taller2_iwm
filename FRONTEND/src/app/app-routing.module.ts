import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/users/login/login.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/users/registro/registro.component';
import { loginGuard } from './guards/login.guards';

/**
 * Rutas de la aplicación.
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
  ,
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'visualizar',
    component: VisualizarComponent, canActivate: [loginGuard]
  },{
    path: 'registro',
    component: RegistroComponent, canActivate: [loginGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
