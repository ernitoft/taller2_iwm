import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

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
  getUsuarios() {
    return this.httpClient.get<any[]>(this.baseURL+'/usuarios',this.crearHeader());
  }

  crearHeader() {
    return {
      headers: new HttpHeaders({
        'Autorization': localStorage.getItem('token')!
      })
    }
  }
  
}
