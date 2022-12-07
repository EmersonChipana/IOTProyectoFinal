import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secuencias',
  templateUrl: './secuencias.component.html',
  styleUrls: ['./secuencias.component.css']
})
export class SecuenciasComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  modSec(){
    this.router.navigate(['/modificarSecuencia']);
  }
  
}
