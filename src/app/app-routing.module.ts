import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleItemComponent } from './components/detalle-item/detalle-item.component';
import { BuscarItemsComponent } from './components/buscar-items/buscar-items.component';
import { CarritoComponent } from './components/home/carrito/carrito.component';


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
  path: "detalles/:id",
  component: DetalleItemComponent
  },
  {
    path : "carrito",
    component: CarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
