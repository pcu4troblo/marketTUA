import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { itemsInterface } from '../interfaces/itemsInterface';

@Injectable({providedIn: 'root'})
export class ItemsService {
  public API: Array<string> = ['https://marketuaflask.herokuapp.com','http://marketua-develop-api.herokuapp.com','https://marketua-go-api.herokuapp.com'];
  //Mercadolibre
  //public API = 'https://api.mercadolibre.com';

  //Flask
  public APIHEROKU = 'https://marketuaflask.herokuapp.com'
  //Ruby

  //public APIHEROKU = 'http://marketua-develop-api.herokuapp.com';

  //Go
  //public APIHEROKU = 'https://marketua-go-api.herokuapp.com';


  constructor(private http: HttpClient) {
  }

  getAll(filtro: string): Observable<any> {
    
    return this.http.get(this.APIHEROKU+ "/search?q=" + filtro);
  }

  getItemById(id: string): Observable<any>{
    return this.http.get(this.APIHEROKU + "/items/" + id);
  }

  getItemByCategory(category: string): Observable<any>{
    return this.http.get(this.APIHEROKU + "/items/category/" + category);
  }

  saveCart(cart: any){
    return this.http.post(this.APIHEROKU + "/save-cart/", cart);
  }

  shareCart(user: any){
    return this.http.get(this.APIHEROKU+"/share-cart/"+ user)
  }

  getOrders(user_name: string): Observable<any> {
    return this.http.get<any>(this.APIHEROKU+"/orders/"+user_name);
  }

  checkout(body: any): Observable<any> {
    return this.http.post(this.APIHEROKU+"/checkout/", body);
  }
 }
