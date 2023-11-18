import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  formulario: FormGroup;

  constructor(private usersService: UsersService) {
    this.formulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  async onSubmit() {
    const response = await this.usersService.login(this.formulario.value);
    console.log(response);
  }
}
