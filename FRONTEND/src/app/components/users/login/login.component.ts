import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/**
 * Componente que contiene el formulario de login.
 */
export class LoginComponent {
  /**
   * Variables de la clase.
   */

  /**
   * Variable que contiene el formulario de login.
   */
  formulario: FormGroup;

  /**
   * Injecciones de rutas y servicios.
   */
  usersService = inject(UsersService);
  router = inject(Router);

  /**
   * Variable que contiene los mensajes de error.
   */
  errorMessages: string[] = [];
  message: string = 'Credenciales incorrectas';
  
  /**
   * Constructor de la clase.
   */
  constructor() {
      this.formulario = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
      });
  }

  /**
   * Funcion que se ejecuta al enviar el formulario.
   */
  async onSubmit() {
    try {
      const response = await this.usersService.login(this.formulario.value);
      if (!response.error) {
        localStorage.setItem('token_auth', response.token);
        this.router.navigate(['/visualizar']);
      }
    } catch (error: any) {
      console.log(error);
      if (error instanceof HttpErrorResponse && error.error && error.error.errors) {
        const usernameErrors = error.error.errors.username;
        const passwordErrors = error.error.errors.password;
        if (usernameErrors && usernameErrors.length > 0) {
          this.addErrorMessages(usernameErrors);
        }
        if (passwordErrors && passwordErrors.length > 0) {
          this.addErrorMessages(passwordErrors);
        }
      } else if (error instanceof HttpErrorResponse && error.status === 500) {
          const errorResponse = "Credenciales incorrectas";
          this.addErrorMessages([errorResponse]);
      } else if (error instanceof HttpErrorResponse && error.status === 400) {
        const errorResponse = "Credenciales incorrectas";
        this.addErrorMessages([errorResponse]);
      }
    }
  }
  /**
   * Añade mensajes de error a la lista de mensajes de error.
   * @param messages Lista de mensajes de error.
   */
  addErrorMessages(messages: string[]) {
    for (let index = 0; index < messages.length; index++) {
      const element = messages[index];
      this.errorMessages.push(element);
    }
  }
}
