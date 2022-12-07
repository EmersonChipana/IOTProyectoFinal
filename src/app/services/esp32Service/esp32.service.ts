import { Injectable } from '@angular/core';
import { getDatabase, ref, set, get, child } from '@angular/fire/database';
import { Esp32 } from 'src/app/interfaces/esp32';


@Injectable({
  providedIn: 'root'
})
export class Esp32Service {

  constructor() {
  }

  getEsp32(id:string){
    const esp32Ref = ref(getDatabase(), id);
    return get(esp32Ref).then(snapshot => {
      if(snapshot.exists()){
        return snapshot.val();
      }else{
        return null;
      }
    });
  }

  getAllEsp32(){
    const esp32Ref = ref(getDatabase(), '');
    return get(esp32Ref).then(snapshot => {
      if(snapshot.exists()){
        return snapshot.val();
      }else{
        return null;
      }
    });
  }

  updateEsp32(id:string, esp32: Esp32){
    const esp32Ref = ref(getDatabase(), id);
    return set(esp32Ref, esp32);
  }




}
