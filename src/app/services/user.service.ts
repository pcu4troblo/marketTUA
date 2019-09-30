import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public usuario : any = {};

  constructor(private fireAuth: AngularFireAuth) {

    this.fireAuth.authState.subscribe( user => {
      console.log(user);
      
      if(!user){
        return;
      }
      
      this.usuario.name = user.displayName;
      this.usuario.email = user.email;
      console.log(this.usuario);
      
    })
  }

  
  login(): any {
    this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    return this.usuario;
  }
  logout() {
    this.fireAuth.auth.signOut();
  }

}
