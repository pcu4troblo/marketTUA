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

    this.shipping = this.formBuilder.group({
      'shipment_address': ['', Validators.required, Validators.minLength(4)],
      'apto': ['', Validators.required, Validators.minLength(3)],
      'municipality': ['', Validators.required, Validators.minLength(4)],
      'departament': ['', Validators.required, Validators.minLength(4)],
      'user_name': ['', Validators.required, Validators.minLength(4)],
      'phone': ['', Validators.required, Validators.minLength(7)],
      'shippingType': ['', Validators.required],
      'payment_method': ['', Validators.required],
      'quantity': [this.cantidad, Validators.required],
      'total': [this.total, Validators.required]
    });
  }

  get f() { return this.shipping.controls; }

  checkout() {
    this.carrito.forEach(item => {
      this.userService.checkout(this.shipping.value).subscribe( resultado =>{
        localStorage.setItem("userName", this.shipping.value.user_name);
        this.success = true;
        console.log('Información almacenada con éxito');
      })
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.shipping.invalid) {
      return;
    }
    this.checkout();
  }
}
