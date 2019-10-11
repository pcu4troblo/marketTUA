import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {

  shipping: FormGroup;
  submitted = false;
  total: String;
  success = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.total = localStorage.getItem("init1");
    this.shipping = this.formBuilder.group({
      'address': ['', Validators.required, Validators.minLength(4)],
      'apto': ['', Validators.required, Validators.minLength(3)],
      'municipality': ['', Validators.required, Validators.minLength(4)],
      'departament': ['', Validators.required, Validators.minLength(4)],
      'nameReceiver': ['', Validators.required, Validators.minLength(4)],
      'phone': ['', Validators.required, Validators.minLength(7), Validators.pattern('^[0-9]*$')],
      'shippingType': ['', Validators.required],
      'pay': ['', Validators.required]
    });
  }

  get f() { return this.shipping.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.shipping.invalid) {
      return;
    }
    this.success = true;
  }
}
