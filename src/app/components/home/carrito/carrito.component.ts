import { Component, OnInit, Input } from '@angular/core';
import { CarritoInterface } from 'src/app/interfaces/carrito-interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() itemsCarrito: Array<CarritoInterface>;

 /* aux: Array<any> = [
    {
      'item': "Camara",
      'precio' : 200000
    },
    {
      'item': "Mouse",
      'precio' : 100000
    }
  ]*/

  constructor() { }

  ngOnInit() {
    
  }

}
