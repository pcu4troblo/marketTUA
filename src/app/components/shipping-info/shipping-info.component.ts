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
        Item_id : item.id,
        Quantity: item.quantity,
        Backend: "GO"
      }
    });
    this.shipping = this.formBuilder.group({
      'shipment_address': ['', Validators.required, Validators.minLength(4)],
      'username': ['', Validators.required, Validators.minLength(4)],
      'payment_method': ['', Validators.required],
      'items': [this.items, Validators.required],
      'total': [+this.total, Validators.required]
    });
  }

  get f() { return this.shipping.controls; }

  checkout() {
      console.log(this.shipping.value);
      this.userService.checkout(this.shipping.value).subscribe( resultado => {
        this.success = true;
        console.log(resultado);
      });
    
  }

  onSubmit() {
    this.submitted = true;
    if (this.shipping.invalid) {
      return;
    }
    this.checkout();
    console.log(this.shipping.value);
    
  }
}
