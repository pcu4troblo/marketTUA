import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {CarritoInterface} from '../../interfaces/carrito-interface';

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
  carrito : Array<CarritoInterface> = [];
  body: {  };
  cantidad: any = 0;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit() {
    this.total = localStorage.getItem("init1");
    this.cantidad = localStorage.getItem("init2");
    this.user = localStorage.getItem("user");
    this.carrito = JSON.parse( localStorage.getItem("carrito"));
    this.carrito.forEach((item, index) =>{
      this.items[index] = {
        item_id : String(item.id),
        quantity: String(item.quantity),
        backend: "GO"
      }
    });
    this.shipping = this.formBuilder.group({
      'shipment_address': [''],
      'username': [''],
      'payment_method': [''],
      'items': [this.items],
      'total': [+this.total]
    });
  }

  



  onSubmit() {
    
    console.log(this.shipping.value);
      this.userService.checkout(this.shipping.value).subscribe( resultado => {
        this.success = true;
        console.log(resultado);
      });
    
  }
}
