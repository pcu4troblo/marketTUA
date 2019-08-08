import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { UserService } from '../services/user.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-buscar-items',
  templateUrl: './buscar-items.component.html',
  styleUrls: ['./buscar-items.component.css']
})
export class BuscarItemsComponent implements OnInit{

items: Array<any>;
seller : any;

buscar : string;

  constructor(private itemService : ItemsService, private userService: UserService) { }

  ngOnInit() {
}

  
  mostrar() {
    this.itemService.getAll(this.buscar)
    .subscribe(data => {
    this.items = data.results; 
  })

 /*this.userService.getSeller(this.items[0].seller.id.toString())
  .subscribe(data => {
    this.seller = data.nickname;
    console.log(this.seller);
  })*/
    
  }

  
  
  
}
