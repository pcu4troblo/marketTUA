import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { itemsInterface } from '../interfaces/itemsInterface';

@Injectable({providedIn: 'root'})
export class ItemsService {
  //public API = 'https://api.mercadolibre.com';
  public API = 'https://marketuaflask.herokuapp.com'
  //public API = 'http://marketua-develop-api.herokuapp.com';
   
  //http://marketua-develop-api.herokuapp.com/items/category/{categoryName}

  constructor(private http: HttpClient) {
  }

  getAll(filtro: string): Observable<any> {
    return this.http.get(this.API+ "/search?q=" + filtro);
  }

  getItemById(id: string): Observable<any>{
    return this.http.get(this.API+ "/items/" + id);
  }

  getItemByCategory(category: string){
    return this.http.get(this.API + "/items/category/" + category);
  }

 }