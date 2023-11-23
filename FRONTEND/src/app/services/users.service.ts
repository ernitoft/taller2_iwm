import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseURL:string = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) {

  }

  login(formValue: any) {
    return firstValueFrom(this.httpClient.post<any>(this.baseURL+'/login', formValue));
  }
  logout() {
    return firstValueFrom(this.httpClient.post<any>(this.baseURL+'/logout', this.crearHeader()));
  }
  getUsuarios() {
    return firstValueFrom(this.httpClient.get<any[]>(this.baseURL+'/usuarios', this.crearHeader()));
  }
  
  registrar(formValue: any) {
    return firstValueFrom(this.httpClient.post<any>(this.baseURL+'/register', formValue));
  }

  buscarUsuario(id: number) {
    return firstValueFrom(this.httpClient.get<any>(this.baseURL+'/usuarios/'+id, this.crearHeader()));
  }
  borrarUsuario(id: number) {
    return this.httpClient.delete<any>(this.baseURL+'/usuarios/'+id, this.crearHeader());
  }

  updateUsuario(formValue: any) {
    console.log(formValue);
    return firstValueFrom(this.httpClient.patch<any>(this.baseURL+'/update/'+formValue.id, formValue, this.crearHeader()));
  }

  crearHeader() {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer'+localStorage.getItem('token_auth')!
      })
    }
  }
  
}
