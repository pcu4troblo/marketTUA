import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { CarritoInterface } from 'src/app/interfaces/carrito-interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalle-item.component.html',
  styleUrls: ['./detalle-item.component.css']
})
export class DetalleItemComponent implements OnInit {

  tablaOn : boolean;
  item : any = {};
  carrito : Array<CarritoInterface> = [];
  images: Array<any> = [];

  constructor(private itemService: ItemsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id  = this.route.snapshot.params["id"];
    this.itemService.getItemById(id).subscribe(data => {
       this.item = data;
       console.log(this.item);
       this.images = data.images;
    });

    if(JSON.parse( localStorage.getItem("carrito")))
    this.carrito = JSON.parse( localStorage.getItem("carrito"));
  }
  
  agregarCarrito(){
    let itemCarrito:CarritoInterface = {
      name : this.item.name,
      price : this.item.price,
      id : this.item.id,
      img : this.item.thumbnail,
      quantity: 1
    }

    let isItemInCar: boolean = false;

    this.carrito.forEach(itemInCar => {
      if(itemInCar.name == this.item.name){
        itemInCar.price = itemInCar.price + this.item.price;
        itemInCar.quantity = itemInCar.quantity + 1;
        isItemInCar = true;
      }
    })
    
    if(!isItemInCar){
      this.carrito.push(itemCarrito);  
    }
    
    localStorage.setItem("carrito" , JSON.stringify(this.carrito));
    this.tablaOn = true;
  }

}
