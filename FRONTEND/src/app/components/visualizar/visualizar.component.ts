import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {
  datos: any[] = [];
  usuarios: any = [];
  form: FormGroup;
  router = inject(Router);
  divVisible:boolean = false;
  deleteVisible:boolean = false;
  editingIndex: number | null = null;
  formDelete: FormGroup;

  constructor(private usersService: UsersService) {
    this.form = new FormGroup({
      id : new FormControl(),
      name: new FormControl(),
      lastname: new FormControl(),
      rut: new FormControl(),
      email : new FormControl(),
      score : new FormControl(),
    });

    this.formDelete = new FormGroup({
      id : new FormControl(),
    });
  }

  ngOnInit() {}

  obtenerTodos(): void {
    this.usersService.getUsuarios().then((data: any[]) => {
      this.usuarios = Object.values(data);
      console.log(this.usuarios);
    });
  }

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

  toggleDeleteVisibility(index: number) {
    this.deleteVisible = !this.deleteVisible;
    this.editingIndex = index;
  }

  borrarUsuario(id: number) {
    this.usersService.borrarUsuario(id).subscribe((data: any)=>{
      this.router.navigate(['/visualizar']);
      window.location.reload();
    });
  }

  actualizarUsuario(){
    this.usersService.updateUsuario(this.form.value).then((data: any)=>{
      this.router.navigate(['/visualizar']);
      window.location.reload();
    });
  }
  volverBoton(){
    this.divVisible = !this.divVisible;
  }

  negarDelete(){
    this.deleteVisible = !this.deleteVisible;
  }
}
