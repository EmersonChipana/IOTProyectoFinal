import { Component, OnInit } from '@angular/core';
import { Secuencia, User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-formulario-secuencia',
  templateUrl: './formulario-secuencia.component.html',
  styleUrls: ['./formulario-secuencia.component.css']
})
export class FormularioSecuenciaComponent implements OnInit {

  user!: User;
  secuencias: Secuencia[] = [];

  constructor(private userService: UserService, ) { }

  async ngOnInit(): Promise<void> {
    this.user = await this.userService.getUser(localStorage.getItem('uid') as string) as User;
    this.secuencias = this.user.secuencias;
  }

  async agregarSecuencia(){
    let nombre = (<HTMLInputElement>document.getElementById("nombre-sec")).value;
    this.secuencias.push({
      nombre: nombre,
      loops: []
    });
    this.user.secuencias = this.secuencias;
    await this.userService.updateUser(localStorage.getItem('uid') as string ,this.user);
    location.reload();
  }

}
