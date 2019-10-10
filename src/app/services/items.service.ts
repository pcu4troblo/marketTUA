import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { itemsInterface } from '../interfaces/itemsInterface';

@Injectable({providedIn: 'root'})
export class ItemsService {
  
  //Mercadolibre
  //public API = 'https://api.mercadolibre.com';
  //Flask
  public API = 'https://marketuaflask.herokuapp.com'
  //Ruby
  //public API = 'http://marketua-develop-api.herokuapp.com';
  //Go
   
  constructor(private http: HttpClient) {
  }

  getAll(filtro: string): Observable<any> {
    return this.http.get(this.API+ "/search?q=" + filtro);
  }

  getItemById(id: string): Observable<any>{
    return this.http.get(this.API+ "/items/" + id);
  }

  getItemByCategory(category: string): Observable<any>{
    return this.http.get(this.API + "/items/category/" + category);
  }

 }