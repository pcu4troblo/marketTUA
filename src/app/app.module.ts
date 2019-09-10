import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './services/items.service';
import { BuscarItemsComponent } from './components/buscar-items/buscar-items.component';
import { FormsModule } from '@angular/forms';
import { DetalleItemComponent } from './components/detalle-item/detalle-item.component'


@NgModule({
  declarations: [
    AppComponent,
    BuscarItemsComponent,
    DetalleItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
