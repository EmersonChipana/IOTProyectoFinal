import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar-secuencia',
  templateUrl: './modificar-secuencia.component.html',
  styleUrls: ['./modificar-secuencia.component.css']
})
export class ModificarSecuenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputColor() {
    //obtener el color del input
    let color = (<HTMLInputElement>document.getElementById("color")).value;
    //convertir color a rgb
    let rgb = this.hexToRgb(color);
    console.log(rgb);
    
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
