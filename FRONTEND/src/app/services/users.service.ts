import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseURL:string = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) {

  }

  login(formValue: any) {
    return this.httpClient.post<any>(this.baseURL+'/login', formValue);
  }
  getUsuarios() {
    return this.httpClient.get<any[]>(this.baseURL+'/usuarios');
  }
  
}
