import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Esp32 } from 'src/app/interfaces/esp32';
import { Esp32Service } from 'src/app/services/esp32Service/esp32.service';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {

  esp!: Esp32;

  id: string = '';

  constructor(private router:Router, private rutaActiva: ActivatedRoute, private rdb:Esp32Service) { }

  async ngOnInit(): Promise<void> {
    this.id = this.rutaActiva.snapshot.params["id"];
    this.esp = await this.rdb.getEsp32(this.id) as Esp32;
    console.log(this.esp);
  }

  inputColor() {
    //obtener el color del input
    let color = (<HTMLInputElement>document.getElementById("color")).value;
    //convertir color a rgb
    let rgb = this.hexToRgb(color);
    if(rgb != null) {
      //cambiar el color del background
      document.body.style.background = `radial-gradient(circle, rgba(33,38,34,1) 46%, rgba(${rgb.r},${rgb.g},${rgb.b}, 1) 87%`;
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

  RgbToHex(r: number, g: number, b: number) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  cambiarColor(){
    let color = (<HTMLInputElement>document.getElementById("color")).value;
    let rgb = this.hexToRgb(color);
    if(rgb != null){
      this.esp.blue = rgb.b;
      this.esp.green = rgb.g;
      this.esp.red = rgb.r;
      this.rdb.updateEsp32(this.id, this.esp);
    }
  }


}
