import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Esp32 } from 'src/app/interfaces/esp32';
import { Esp32Service } from 'src/app/services/esp32Service/esp32.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() titulo: String = '';
  @Input() id: String = '';
  estado: boolean = false;
  esp!: Esp32;

  constructor(private router:Router, private rdb:Esp32Service) { }

  async ngOnInit(): Promise<void> {
    this.esp = await this.rdb.getEsp32(this.id as string) as Esp32;
    this.estado = this.esp.estado;
  }


  iniciarsesion() {
    this.router.navigate(['/configuracion', this.id, this.titulo]);
  }

  async onOffEsp(newEstado: boolean){
    this.esp.estado = newEstado;
    await this.rdb.updateEsp32(this.id as string, this.esp );
    this.estado = newEstado;
  }
}
