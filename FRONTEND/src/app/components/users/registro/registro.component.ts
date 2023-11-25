import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

/**
 * Componente que contiene el formulario de registro.
 */
export class RegistroComponent {
  /**
   * Variables de la clase.
   */
  /**
   * Variable que contiene los mensajes de error.
   */
  errorMessages: string[] = [];

  /**
   * Variable que contiene el formulario de registro.
   */
  form: FormGroup;

  /**
   * Injecciones de rutas y servicios.
   */
  usersService = inject(UsersService);
  router = inject(Router);

  /**
   * Constructor de la clase.
   */
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      rut: new FormControl(),
      email: new FormControl(),
      score: new FormControl(),
    });
  }

  /**
   * Funcion que se ejecuta al enviar el formulario de registro.
   */
  async onSubmit() {
    try {
      await this.usersService.registrar(this.form.value);
      window.alert('Usuario creado correctamente');
      this.router.navigate(['/visualizar']);
    } catch (error: any) {
      if (error instanceof HttpErrorResponse && error.error && error.error.errors) {
        const emailErrors = error.error.errors.email;
        const rutErrors = error.error.errors.rut;
        const nameErrors = error.error.errors.name;
        const lastnameErrors = error.error.errors.lastname;
        const scoreErrors = error.error.errors.score;
        if (rutErrors && rutErrors.length > 0) {
          this.addErrorMessages(rutErrors);
        }
        if (nameErrors && nameErrors.length > 0) {
          this.addErrorMessages(nameErrors);
        }
        if (lastnameErrors && lastnameErrors.length > 0) {
          this.addErrorMessages(lastnameErrors);
        }
        if (scoreErrors && scoreErrors.length > 0) {
          this.addErrorMessages(scoreErrors);
        }
        if (emailErrors && emailErrors.length > 0) {
          this.addErrorMessages(emailErrors);
        }
      } else if (error instanceof HttpErrorResponse && error.status === 500) {
        const errorResponse = "Error al crear usuario";
        this.addErrorMessages([errorResponse]);
      }
    }
  }
  /**
   * Añaade mensajes de error al arreglo de mensajes de error.
   * @param messages mensajes de error
   */
  addErrorMessages(messages: string[]) {
    for (let index = 0; index < messages.length; index++) {
      const element = messages[index];
      this.errorMessages.push(element);
    }
  }
}

