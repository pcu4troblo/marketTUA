import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleItemComponent } from './components/detalle-item/detalle-item.component';


const routes: Routes = [
  {
  path: "item", component: DetalleItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
