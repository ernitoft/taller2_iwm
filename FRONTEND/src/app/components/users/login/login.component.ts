import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  formulario: FormGroup;
  usersService = inject(UsersService);
  router = inject(Router);
  message: string = 'Credenciales incorrectas';
  constructor() {
    this.formulario = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  async onSubmit() {
    const response = await this.usersService.login(this.formulario.value);
    if(!response.error){
      localStorage.setItem('token_auth', response.token);
      this.router.navigate(['/visualizar']);
      }
    if (response.error) {
      window.alert(this.message);
    }
  }
}
