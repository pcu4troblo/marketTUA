import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/categoria';


@Injectable({
    providedIn: 'root'
})

export class CategoriaService{
    //Mercadolibre
    //public API = 'https://api.mercadolibre.com/sites/MCO/categories';

    //Flask
    public API = 'https://marketuaflask.herokuapp.com/categories';
    //Ruby
    //public API = 'http://marketua-develop-api.herokuapp.com/categories';
    //Go
    //pubcli API = FALTA GO

    constructor(private http: HttpClient){

    }
    categories():Observable<any>{
        return this.http.get<any>(this.API);
    }
}
