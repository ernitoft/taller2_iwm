import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio que contiene las funciones de la API.
 */
export class UsersService {
  /**
   * Variable que contiene la URL base de la API.
   */
  private baseURL:string = 'http://127.0.0.1:8000/api';

  /**
   * Constructor de la clase.
   * @param httpClient Parámetro que contiene el cliente HTTP.
   */
  constructor(private httpClient: HttpClient) {

  } 
/**
 * Login de usuario.
 * @param formValue Formulario de login.
 * @returns respuesta de la API.
 */
  login(formValue: any) {
    return firstValueFrom(this.httpClient.post<any>(this.baseURL+'/login', formValue));
  }
/**
 * Verifica si el usuario está logueado.
 * @returns booleano que indica si el usuario está logueado o no.
 */
  estaLogueado():boolean {
    return localStorage.getItem('token_auth') ? true : false; 
  }
/**
 * Obtiene los usuarios de la base de datos.
 * @returns respuesta de la API.
 */
  getUsuarios() {
    return firstValueFrom(this.httpClient.get<any[]>(this.baseURL+'/usuarios', this.crearHeader()));
  }
  /**
   * Registra un usuario.
   * @param formValue Formulario de registro.
   * @returns respuesta de la API.
   */
  registrar(formValue: any) {
    return firstValueFrom(this.httpClient.post<any>(this.baseURL+'/register', formValue, this.crearHeader()));
  }
/**
 * Busca un usuario por ID.
 * @param id ID del usuario a buscar.
 * @returns respuesta de la API.
 */
  buscarUsuario(id: number) {
    return firstValueFrom(this.httpClient.get<any>(this.baseURL+'/usuarios/'+id, this.crearHeader()));
  }

  /**
   * Borra un usuario.
   * @param id ID del usuario a eliminar.
   * @returns respuesta de la API.
   */
  borrarUsuario(id: number) {
    return this.httpClient.delete<any>(this.baseURL+'/usuarios/'+id, this.crearHeader());
  }


/**
 * Actualiza los datos de un usuario.
 * @param formValue Formulario de edición.
 * @returns respuesta de la API.
 */
  updateUsuario(formValue: any) {
    return firstValueFrom(this.httpClient.patch<any>(this.baseURL+'/update/'+formValue.id, formValue, this.crearHeader()));
  }
/**
 * Crear headers de la API.
 * @returns headers de la API.
 */
  crearHeader() {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer'+localStorage.getItem('token_auth')!
      })
    }
  }
  
}
