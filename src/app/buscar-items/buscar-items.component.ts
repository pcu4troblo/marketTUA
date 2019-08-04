import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-buscar-items',
  templateUrl: './buscar-items.component.html',
  styleUrls: ['./buscar-items.component.css']
})
export class BuscarItemsComponent implements OnInit {

items: Array<any>;

buscar : string;

  constructor(private itemService : ItemsService) { }

  ngOnInit() {
}

  
  mostrar(){
    this.itemService.getAll(this.buscar)
    .subscribe(data => {
    this.items = data.results;
  })
    
  }

  
  
  
}
