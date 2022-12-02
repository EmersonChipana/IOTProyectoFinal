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
    return this.auth.signOut();
  }

  async AuthLogin(provider: GoogleAuthProvider) {
    try {
      const result = await signInWithPopup(getAuth(), provider);
      this.route.navigate(['home']);
      alert(result.user.displayName);
    } catch (error) {
      window.alert(error);
    }
  }


}
