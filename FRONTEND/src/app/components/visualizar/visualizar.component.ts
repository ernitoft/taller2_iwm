import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})

/**
 * Componente que contiene la tabla de usuarios.
 */
export class VisualizarComponent implements OnInit {
  /**
   * Variables de la clase.
   * 
   * Variable que contiene los datos de la tabla.
   */
  datos: any[] = [];
  usuarios: any = [];

  /**
   * Variable que contiene el formulario de edición.
   */
  form: FormGroup;

  /**
   * Injeccion de rutas
   */
  router = inject(Router);

  /**
   * Variable booleana que indica si el formulario de edición está visible o no.
   */
  divVisible:boolean = false;

  /**
   * Variable booleana que indica si el formulario de eliminación está visible o no.
   */
  deleteVisible:boolean = false;

  /**
   * Variable que contiene el índice del usuario que se está editando/eliminando.
   */
  editingIndex: number | null = null;

  /**
   * Variable que contiene el formulario de eliminación.
   */
  formDelete: FormGroup;
  
  /**
   * Variable que contiene los mensajes de error.
   */
  errorMessages: string[] = [];

  /**
   * Variable que contiene el término de búsqueda.
   */
  resultados: any[] = [];
  searchTerm: string = '';
  filteredUsuarios: any[] = [];

  /**
   * C
   * @param usersService Servicio de usuarios.
   */
  constructor(private usersService: UsersService) {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      lastname: new FormControl(),
      rut: new FormControl(),
      email: new FormControl(),
      score: new FormControl(),
    });
    this.formDelete = new FormGroup({
      id: new FormControl(),
    });
  }

  /**
   * Funcion que se ejecuta al iniciar el componente.
   */
  ngOnInit() {
    this.obtenerTodos();
  }

  /**
   * Funcion que se ejecuta para obtener todos los usuarios.
   */
  obtenerTodos(): void {
    this.usersService.getUsuarios().then((data: any[]) => {
      this.usuarios = Object.values(data);
    });
    this.filteredUsuarios = this.usuarios[0];
  }

  /**
   * Funcion que ejecuta la visibilidad del formulario de edición.
   * @param item es el usuario que se quiere editar
   * @param index es el indice del usuario que se quiere editar
   */
  toggleDivVisibility(item: any,index: number) {
    this.divVisible = !this.divVisible;
    this.editingIndex = index;
    if (this.divVisible) {
      this.form.setValue({
        id: item.id,
        name: item.name,
        lastname: item.lastname,
        rut: item.rut,
        email: item.email,
        score: item.score,
      });
    } else {
      this.form.reset();
      this.editingIndex = null;
    }
  }
/**
 * Funcion que ejecuta la visibilidad del formulario de eliminación.
 * @param index es el indice del usuario que se quiere eliminar
 */
  toggleDeleteVisibility(index: number) {
    this.deleteVisible = !this.deleteVisible;
    this.editingIndex = index;
  }

  /**
   * Funcion que ejecuta la eliminación de un usuario.
   * @param id es el id del usuario que se quiere eliminar
   */
  borrarUsuario(id: number) {
    this.usersService.borrarUsuario(id).subscribe(()=>{
      this.router.navigate(['/visualizar']);
      window.location.reload();
    });
  }
/**
 * Funcion que ejecuta la actualizacion de un usuario.
 */
  async actualizarUsuario(){
    try{
      await this.usersService.updateUsuario(this.form.value);
      this.router.navigate(['/visualizar']);
      window.location.reload();

    }catch(error: any){
      if (error.status === 500 || error.status === 400 || error.status == 422){
        const message = "Error al actualizar usuario";
        this.addErrorMessages([message]);
      }
      if (error instanceof HttpErrorResponse && error.error && error.error.errors){
        const nameErrors = error.error.errors.name;
        const lastnameErrors = error.error.errors.lastname;
        const rutErrors = error.error.errors.rut;
        const emailErrors = error.error.errors.email;
        const scoreErrors = error.error.errors.score;
        if(nameErrors && nameErrors.length > 0){
          this.addErrorMessages(nameErrors);
        }
        if(lastnameErrors && lastnameErrors.length > 0){
          this.addErrorMessages(lastnameErrors);
        }
        if(rutErrors && rutErrors.length > 0){
          this.addErrorMessages(rutErrors);
        }
        if(emailErrors && emailErrors.length > 0){
          this.addErrorMessages(emailErrors);
        }
        if(scoreErrors && scoreErrors.length > 0){
          this.addErrorMessages(scoreErrors);
        }else{
          const message = "Error al actualizar usuario";
          this.addErrorMessages([message]);
        }
      }
    }
  }

  /**
   * Funcion que ejecuta el salirse del formulario de edición.
   */
  volverBoton(){
    this.divVisible = !this.divVisible;
  }

  /**
   * Funcion que ejecuta el salirse del formulario de eliminación.
   */
  negarDelete(){
    this.deleteVisible = !this.deleteVisible;
  }

  /**
   * Añade mensajes de error a la lista de mensajes de error.
   * @param messages Mensajes de error
   */
  addErrorMessages(messages: string[]) {
    for (let index = 0; index < messages.length; index++) {
      const element = messages[index];
      this.errorMessages.push(element);
    }
  }
}
