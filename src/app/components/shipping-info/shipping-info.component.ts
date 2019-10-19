import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup} from '@angular/forms';
import {CarritoInterface} from '../../interfaces/carrito-interface';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {

  shipping: FormGroup;
  submitted = false;
  total: string;
  success = false;
  items: Array<any> = [];
  user: any;
  username: any;
  carrito : Array<CarritoInterface> = [];
  body: {  };
  cantidad: any = 0;
  logedIn: any;

  constructor(private formBuilder: FormBuilder,
              private itemService: ItemsService) {
  }

  ngOnInit() {
    this.total = localStorage.getItem("init1");
    this.cantidad = localStorage.getItem("init2");
    this.user = JSON.parse(localStorage.getItem("user"));
    this.carrito = JSON.parse( localStorage.getItem("carrito"));
    this.carrito.forEach((item, index) =>{
      this.items[index] = {
        item_id : String(item.id),
        quantity: String(item.quantity),
        backend: "flask"
      }
    });
    this.shipping = this.formBuilder.group({
      'shipment_address': [''],
      'username': [this.user.name],
      'payment_method': [''],
      'items': [this.items],
      'total': [+this.total]
    });
  }

  onSubmit() {
    console.log(localStorage.getItem("user"));
    if (localStorage.getItem("user") != null){
      this.itemService.checkout(this.shipping.value).subscribe( resultado => {
        this.success = true;
        localStorage.removeItem("carrito")
      });
    }else{
      this.logedIn = false;
    }
    
  }
}
