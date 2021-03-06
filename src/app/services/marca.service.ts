import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MarcaService{

    //Flask
    public API = 'https://marketuaflask.herokuapp.com/brands'

    constructor(private http: HttpClient){

    }

    brands():Observable<any>{
        return this.http.get<any>(this.API);
    }
}
