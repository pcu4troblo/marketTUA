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

  getAll(filtro: string, url: string): Observable<any> {
    
    return this.http.get(url+ "/search?q=" + filtro);
  }

  getItemById(id: string): Observable<any>{
    return this.http.get(this.APIHEROKU+ "/items/" + id);
  }

  getItemByCategory(category: string, url: string): Observable<any>{
    return this.http.get(url + "/items/category/" + category);
  }

 }
