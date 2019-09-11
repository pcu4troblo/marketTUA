import { Component, OnInit, Input } from '@angular/core';
import { CarritoInterface } from 'src/app/interfaces/carrito-interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {

  @Input() itemsCarrito: Array<CarritoInterface>;
  
  suma: number = 0;

  constructor() { }

  ngOnInit() {
    if(this.itemsCarrito){
    this.itemsCarrito.forEach(item => {
      this.suma = this.suma + item.cost;
      })}
      }

 
    
  }




