import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {OrderInterface} from '../../interfaces/order';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders : Array<OrderInterface> = [];
  user: any;

  constructor(private userService: UserService
  ) { }

  ngOnInit() {
    this.user = localStorage.getItem("userName");
    this.getOrders();
  }

  getOrders() {
    //parametro quemado por el momento
    this.userService.getOrders(this.user).subscribe( resultado =>{
      this.orders = resultado.orders;
    })
  }
}
