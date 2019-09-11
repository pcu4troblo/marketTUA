import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { CarritoInterface } from 'src/app/interfaces/carrito-interface';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalle-item.component.html',
  styleUrls: ['./detalle-item.component.css']
})
export class DetalleItemComponent implements OnInit {

  
  item : any = [];
  carrito : Array<CarritoInterface> = [];

  constructor(private itemService: ItemsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id  = this.route.snapshot.params["id"];
    this.itemService.getItemById(id).subscribe(data => {
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
