import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public usuario : any = {};

  //Flask checkout
  public API = 'https://marketuaflask.herokuapp.com/checkout'

  //Flask getOrders
  public APIorders = 'https://marketuaflask.herokuapp.com/user'

  constructor(private fireAuth: AngularFireAuth,
              private http: HttpClient) {

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

  getOrders(user_name: string): Observable<any> {
    return this.http.get<any>(this.APIorders+ "/"+user_name+"/orders");
  }

  /*checkout(typeRequest: string, body: any, idToken: 123): Observable<any> {
    let url = this.url + '/' + typeRequest;
    let postData = new FormData();
    postData = (body);
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      token: token
    });
    return this.http.post(url, postData, {headers});
  }*/

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
