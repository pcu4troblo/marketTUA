import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleItemComponent } from './components/detalle-item/detalle-item.component';
import { BuscarItemsComponent } from './components/buscar-items/buscar-items.component';
import { DetalleCarritoComponent } from "././/components/detalle-carrito/detalle-carrito.component";
import {ShippingInfoComponent} from './components/shipping-info/shipping-info.component';
import {OrdersComponent} from './components/orders/orders.component';

const routes: Routes = [
  {
  path: "item", 
  component: DetalleItemComponent
  },
  {
  path: "", 
  component: BuscarItemsComponent
  },
  {
  path: "items/:id",
  component: DetalleItemComponent
  },
  {
    path: "carrito/:user",
    component: DetalleCarritoComponent
  },
  {
    path: "envio",
    component: ShippingInfoComponent
  },
  {
    path: "pedidos/:user",
    component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
