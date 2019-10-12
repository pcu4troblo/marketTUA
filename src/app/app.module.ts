import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './services/items.service';
import { BuscarItemsComponent } from './components/buscar-items/buscar-items.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetalleItemComponent } from './components/detalle-item/detalle-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarritoComponent } from './components/home/carrito/carrito.component';
import { FiltroComponent } from './components/home/filtro/filtro.component';
import { ContenidoComponent } from './components/home/contenido/contenido.component';
import { DetalleCarritoComponent } from './components/detalle-carrito/detalle-carrito.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {ShippingInfoComponent} from './components/shipping-info/shipping-info.component';
import {OrdersComponent} from './components/orders/orders.component';

const firebaseConfig = {
  apiKey: "AIzaSyDQ4YDAtPhkkBIu0TWRBnAi-bpBYFjmojM",
    authDomain: "marketua-b6b26.firebaseapp.com",
    databaseURL: "https://marketua-b6b26.firebaseio.com",
    projectId: "marketua-b6b26",
    storageBucket: "",
    messagingSenderId: "1094856102481",
    appId: "1:1094856102481:web:b399d72cb5102ff9b0de70",
    measurementId: "G-T865GDBV12"
};

@NgModule({
  declarations: [
    AppComponent,
    BuscarItemsComponent,
    DetalleItemComponent,
    NavbarComponent,
    CarritoComponent,
    FiltroComponent,
    ContenidoComponent,
    DetalleCarritoComponent,
    ShippingInfoComponent,
    OrdersComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        ReactiveFormsModule
    ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
