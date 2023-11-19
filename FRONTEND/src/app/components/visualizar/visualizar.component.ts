import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit{
  datos: any[]=[];
  
  constructor(private usersService: UsersService) {

  }
  usuarios: any = [];

ngOnInit() {
}
obtenerTodos():void{
  this.usersService.getUsuarios().subscribe((data)=>{
    this.usuarios=Object.values(data);
    console.log(this.usuarios);
  });
}

  
}
