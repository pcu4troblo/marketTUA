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
      if(!user){
        this.usuario = {};
        localStorage.removeItem('user');
        return;
      }
      console.log(user);
      
      this.usuario.name = user.displayName;
      this.usuario.email = user.email;
      this.usuario.uid = user.uid;
      localStorage.setItem('user', JSON.stringify(this.usuario));
    })
  }

  
  login(): any {
    this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    return this.usuario;
  }

  logout() {
    this.fireAuth.auth.signOut();
    localStorage.removeItem('user');
  }

  logedIn(){
    return !!localStorage.getItem('user')
  }

}
