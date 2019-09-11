import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleItemComponent } from './components/detalle-item/detalle-item.component';
import { BuscarItemsComponent } from './components/buscar-items/buscar-items.component';


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
  path: ":id",
  component: DetalleItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
