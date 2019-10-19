import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {OrderInterface} from '../../interfaces/order';
import {UserService} from '../../services/user.service';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders : any = [];
  user: any;

  constructor(
    private itemService: ItemsService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getOrders();

  }

  getOrders() {
    this.itemService.getOrders(this.user.name).subscribe( resultado =>{
      console.log(resultado.orders);
      
      this.orders = resultado.orders;
    })
  }
}
