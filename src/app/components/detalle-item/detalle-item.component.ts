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

  tablaOn :boolean;
  item : any = {};
  carrito : Array<any> = [];
  suma: number = 0;

  constructor(private itemService: ItemsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params["id"]);
    
    let id  = this.route.snapshot.params["id"];
    this.itemService.getItemById(id).subscribe(data => {
       //this.item = data;
       console.log(data);
       
    });

    if(JSON.parse( localStorage.getItem("carrito")))
    this.carrito = JSON.parse( localStorage.getItem("carrito"));
  }
  agregarCarrito(){
    let itemCarrito:any = {
      item : this.item.title,
      cost : this.item.price,
      id : this.item.id,
    }
    this.carrito.push(itemCarrito);
    localStorage.setItem("carrito" , JSON.stringify(this.carrito));
    this.tablaOn = true;
  }

}
