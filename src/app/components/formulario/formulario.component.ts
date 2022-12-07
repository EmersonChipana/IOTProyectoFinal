import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Esp32Service } from 'src/app/services/esp32Service/esp32.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  user!: User;

  constructor(private userService: UserService, private rdb: Esp32Service) { }

  async ngOnInit(): Promise<void> {
    const user = await this.userService.getUser(localStorage.getItem('uid') ?? '');
    if(user != null){
      this.user = user;
    }
    console.log(this.user);
  }

  async addFoco(){
    let nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    let uid = (<HTMLInputElement>document.getElementById("uid")).value;
    if(await this.rdb.getEsp32(uid) != null){
      let focos = this.user.focos;
      focos.push({nombre: nombre, id: uid});
      this.user.focos = focos;
      try{
        await this.userService.updateUser(this.user.id, this.user );
        location.reload();
      }catch(error){
        alert("Error al agregar el foco");
      }
    }else{
      alert("No se encontro el foco");
    }
  }

}
