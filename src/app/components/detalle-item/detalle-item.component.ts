import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { CarritoInterface } from 'src/app/interfaces/carrito-interface';

@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalle-item.component.html',
  styleUrls: ['./detalle-item.component.css']
})
export class DetalleItemComponent implements OnInit {

  id : string = "MCO449131640"
  item : any = [];
  carrito : Array<CarritoInterface> = [];

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.itemService.getItemById(this.id).subscribe(data => {
       this.item = data;
       console.log(this.item);
    })
  }
  agregarCarrito(){
    let itemCarrito:CarritoInterface = {
      item : this.item.title,
      cost : this.item.price
    }
    this.carrito.push(itemCarrito);
  }

}
