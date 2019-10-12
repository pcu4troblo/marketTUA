import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  checkout(body: any): Observable<any> {
    /*let headers = new Headers();
    headers.append('idToken', '123');
    let options = new RequestOptions({ headers: headers });*/
    return this.http.post(this.API, body, {headers: new HttpHeaders().set('idToken', '123')});
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
