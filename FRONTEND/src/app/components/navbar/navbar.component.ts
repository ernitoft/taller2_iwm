import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
/**
 * Componente que contiene la barra de navegación de la aplicación.
 */
export class NavbarComponent {
  /**
   * Variables de la clase.
   */
  /**
   * Variable que indica si el menú está abierto o cerrado.
   */
  isNavbarOpen = false;

  /**
   * Injecciones de rutas y servicios.
   */
  router = inject(Router);
  usersService = inject(UsersService);

  /**
   * Funcion de navbar para ocultar o mostrar el menú.
   */
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  /**
   * Funcion de navbar para cerrar sesión.
   */
  logout() {
    localStorage.removeItem('token_auth');
    this.router.navigate(['/home']);
  }

}
