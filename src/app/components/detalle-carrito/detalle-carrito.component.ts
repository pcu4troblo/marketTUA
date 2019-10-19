import { Component, OnInit, Input } from '@angular/core';
import { CarritoInterface } from 'src/app/interfaces/carrito-interface';
import { Router } from '@angular/router';
import {FormBuilder,  FormGroup} from '@angular/forms';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-detalle-carrito',
  templateUrl: './detalle-carrito.component.html',
  styleUrls: ['./detalle-carrito.component.css']
})
export class DetalleCarritoComponent implements OnInit {

  carrito : Array<CarritoInterface> = [];
  user: any = {};
  items: Array<any> = [];
  suma: number = 0;
  cantidad: number = 0;
  success: boolean = false;
  carritoForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private itemService: ItemsService) { }

  ngOnInit() {
    if(localStorage.getItem('user') != null){
    this.user = JSON.parse(localStorage.getItem('user'));
    }else{
      this.user.name = "unlogedPerson";
    }
    
    this.carrito = JSON.parse( localStorage.getItem("carrito"));
    this.carrito.forEach((item, index) =>{
      this.items[index] = {
        item_id : String(item.id),
        quantity: String(item.quantity),
        backend: "flask"
      }
    });

    this.carritoForm = this.formBuilder.group({
      'username': [this.user.name],
      'items': [this.items],
      
    });

    this.getItems();
    this.sumar();
    this.getQuantity();
  }

  onSelected(item: CarritoInterface){
    this.router.navigateByUrl("/detalles/" + item.id);
  }

  getItems(){
    this.carrito = JSON.parse( localStorage.getItem("carrito"));
     console.log(this.carrito);
  }

  remove(item: any){
  this.carrito.splice(this.carrito.indexOf(item), 1);
  localStorage.setItem("carrito", JSON.stringify(this.carrito));
  this.suma = this.suma - item.price;
  }

  sumar(){
    this.carrito.forEach(item => {
      this.suma = this.suma + item.price;
      localStorage.setItem("init1", this.suma.toString());
    })
  }

  getQuantity() {
    this.carrito.forEach(item => {
      this.cantidad = this.cantidad + item.quantity;
    });
    localStorage.setItem("init2", this.cantidad.toString());
  }

  realizarCompra() {
    this.router.navigateByUrl("/envio");
  }

  guardarCarrito(){
    this.itemService.saveCart(this.carritoForm.value).subscribe(res => {
      console.log(res);
      this.success = true;
    });
    
  }

  compartirCarrito(){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = window.location.href;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
