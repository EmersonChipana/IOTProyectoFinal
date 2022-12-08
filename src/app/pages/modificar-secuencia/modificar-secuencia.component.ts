import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Esp32 } from 'src/app/interfaces/esp32';
import { Loop, Secuencia, User } from 'src/app/interfaces/user';
import { Esp32Service } from 'src/app/services/esp32Service/esp32.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-modificar-secuencia',
  templateUrl: './modificar-secuencia.component.html',
  styleUrls: ['./modificar-secuencia.component.css']
})
export class ModificarSecuenciaComponent implements OnInit {
  user!: User;
  loops: Loop[] = [];
  index!: number;
  nombre!: String;
  listaFocos: String[] = [];

  constructor(private userService:UserService, private rutaActiva:ActivatedRoute, private rdb: Esp32Service){ }

  async ngOnInit(): Promise<void> {
    this.index =  this.rutaActiva.snapshot.params['id'];
    this.user = await this.userService.getUser(localStorage.getItem('uid') as string) as User;
    this.loops = this.user.secuencias[this.index].loops;
    this.nombre = this.user.secuencias[this.index].nombre;
    this.listaFocos = await this.userService.getNombreFocos(localStorage.getItem('uid') as string); 
  }


  agregarSecuencia(){
    let foco = (<HTMLSelectElement>document.getElementById("foco")).value;
    var color = (<HTMLInputElement>document.getElementById("color")).value;
    let tiempo = (<HTMLInputElement>document.getElementById("tiempo")).value;
    let rgb = this.hexToRgb(color);
    if(foco!="-1"){
      if(rgb!=null){
        this.loops.push({
          foco: this.user.focos[parseInt(foco)].id,
          red: rgb.r,
          green: rgb.g,
          blue: rgb.b,
          time: parseInt(tiempo)
        });
      }
    }else{
      alert("Seleccione un foco");
    }
  }
  
  eliminarFila(row: any){
    let table = (<HTMLTableElement>document.getElementById("table"));
    let index = row.parentNode.parentNode.rowIndex;
    table.deleteRow(index);
    this.loops.splice(index-1,1);
  }

  eliminarFila2(index: number){
    let table = (<HTMLTableElement>document.getElementById("table"));
    table.deleteRow(index+1);
    this.loops.splice(index,1);
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


  async guardarCambios(){
    let secuencia: Secuencia = { 
      nombre: this.nombre,
      loops: this.loops
    };
    this.user.secuencias[this.index] = secuencia;
    await this.userService.updateUser(localStorage.getItem("uid") as string ,this.user);
    alert("Cambios guardados");
  }

  async iniciarSecuencia(){
    let esp: Esp32 = await this.rdb.getEsp32(this.user.focos[0].id as string) as Esp32;
    esp.estado = true;
    let total = 0;
    for(let i=0; i<this.loops.length; i++){
      if(i==0){
        esp.red = this.loops[i].red;
        esp.green = this.loops[i].green;
        esp.blue = this.loops[i].blue;
        this.rdb.updateEsp32(this.loops[i].foco as string, esp);
      }
      setTimeout(() => {
        esp.red = this.loops[i].red;
        esp.green = this.loops[i].green;
        esp.blue = this.loops[i].blue;
        this.rdb.updateEsp32(this.loops[i].foco as string, esp);
      }, total*1000);
      total += this.loops[i].time;
    }
    setTimeout(() => {
      esp.estado = false;
      this.rdb.updateEsp32(this.loops[0].foco as string, esp);
    }, total*1000);
  }

}
