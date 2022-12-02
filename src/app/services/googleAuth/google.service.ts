import { Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider, Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(public auth: Auth, private route: Router) { }


  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  GoogleSignOut() {
    this.route.navigate(['/login']);
    localStorage.clear();
    return this.auth.signOut();
  }

  async AuthLogin(provider: GoogleAuthProvider) {
    try {
      const result = await signInWithPopup(getAuth(), provider);
      var name = result.user.displayName;
      var email = result.user.email;
      var photo = result.user.photoURL;
      var uid = result.user.uid;
      localStorage.setItem('name', name ? name : '');
      localStorage.setItem('email', email ? email : '');
      localStorage.setItem('photo', photo ? photo : '');
      localStorage.setItem('uid', uid);
      this.route.navigate(['/home']);
    } catch (error) {
      window.alert("Ocurrio un error al iniciar sesión con Google");
    }
  }


}
