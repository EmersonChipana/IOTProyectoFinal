import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  iniciarsesion() {
    this.router.navigate(['/home']);

  }

}
