import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseURL:string;
  constructor(private httpClient: HttpClient) {
    this.baseURL = 'http://127.0.0.1:8000/api';
   }

  login(formValue: any) {
    return this.httpClient.post<any>(`${this.baseURL}/login`, formValue);
  }
}
