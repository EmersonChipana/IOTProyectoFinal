import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, updateDoc, doc, setDoc, getDoc } from '@angular/fire/firestore';

import { Foco, Secuencia, User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs:Firestore) { }

  addUser(user:User){
    const userRef = collection(this.fs, 'users');
    return setDoc(doc(userRef, user.id), user);
  }

  getUser(id:string){
    const userRef = doc(this.fs, 'users', id);
    return getDoc(userRef).then(doc => {
      if(doc.exists()){
        return doc.data() as User;
      }else{
        return null;
      }
    });
  }

  updateUser(id:string, user:User){
    const userRef = doc(this.fs, 'users', id);
    return updateDoc(userRef, {
      focos: user.focos,
      secuencias: user.secuencias,
      id: user.id
    });
  }


  getSecuencias(id:string): Observable<Secuencia[]>{
    const userRef = collection(this.fs, 'users', id, 'secuencias');
    return collectionData(userRef) as Observable<Secuencia[]>;
  }


  userExist(id:string){
    const userRef = doc(this.fs, 'users', id);
    if(getDoc(userRef) == null){
      return false;
    }
    return true;
  }

}
