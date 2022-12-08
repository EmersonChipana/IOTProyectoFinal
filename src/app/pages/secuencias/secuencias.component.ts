import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Secuencia, User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-secuencias',
  templateUrl: './secuencias.component.html',
  styleUrls: ['./secuencias.component.css']
})
export class SecuenciasComponent implements OnInit {

  user!: User;
  secuencias: Secuencia[] = [];

  constructor(private router: Router, private userService: UserService ) { }

  async ngOnInit(): Promise<void> {
    this.user = await this.userService.getUser(localStorage.getItem('uid') as string) as User;
    this.secuencias = this.user.secuencias;
  }


  modSec(){
    this.router.navigate(['/modificarSecuencia']);
  }
  
}
