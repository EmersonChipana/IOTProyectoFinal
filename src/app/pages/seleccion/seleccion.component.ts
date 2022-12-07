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

  inputColor() {
    //obtener el color del input
    let color = (<HTMLInputElement>document.getElementById("color")).value;
    //convertir color a rgb
    let rgb = this.hexToRgb(color);
    console.log(rgb);
    if(rgb != null) {
      //cambiar el color del background
      document.body.style.background = `radial-gradient(circle, rgba(33,38,34,1) 46%, rgba(${rgb.r},${rgb.g},${rgb.b}, 1) 87%`;
      console.log(document.body.style.background);
    }
  }

  hexToRgb(hex: string) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }


}
