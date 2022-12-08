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
  estado: boolean = false;
  color: string = '';
  nombre: string = '';

  constructor(private router:Router, private rutaActiva: ActivatedRoute, private rdb:Esp32Service) { }

  async ngOnInit(): Promise<void> {
    this.id = this.rutaActiva.snapshot.params["id"];
    this.nombre = this.rutaActiva.snapshot.params["nombre"];
    this.esp = await this.rdb.getEsp32(this.id) as Esp32;
    this.estado = this.esp.estado;
    this.color = this.RgbToHex(this.esp.red, this.esp.green, this.esp.blue);
    if(this.estado){
      (<HTMLInputElement>document.getElementById("color")).value = this.color;
      this.inputColor();
      (<HTMLInputElement>document.getElementById("myonoffswitch")).checked = this.estado;
    }else{
      document.body.style.background = `radial-gradient(circle, rgba(33,38,34,1) 46%, rgba(${0},${0},${0}, 1) 87%`;
    }
  }

 

  inputColor() {
    if(this.estado){
      let color = (<HTMLInputElement>document.getElementById("color")).value;
      this.color = color;
      let rgb = this.hexToRgb(color);
      if(rgb != null){
        document.body.style.background = `radial-gradient(circle, rgba(33,38,34,1) 46%, rgba(${rgb.r},${rgb.g},${rgb.b}, 1) 87%`;
      }
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
    this.color = color;
    let rgb = this.hexToRgb(color);
    if(rgb != null){
      this.esp.blue = rgb.b;
      this.esp.green = rgb.g;
      this.esp.red = rgb.r;
      this.rdb.updateEsp32(this.id, this.esp);
    }
  }


  cambiarEstado(){
    let newEstado = (<HTMLInputElement>document.getElementById("myonoffswitch")).checked;
    this.esp.estado = newEstado;
    this.estado = newEstado;
    this.rdb.updateEsp32(this.id, this.esp);
    if(this.estado){
      (<HTMLInputElement>document.getElementById("color")).value = this.color;
      this.inputColor();
    }else{
      document.body.style.background = `radial-gradient(circle, rgba(33,38,34,1) 46%, rgba(${0},${0},${0}, 1) 87%`;
    }
  }

}
