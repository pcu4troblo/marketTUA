import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './services/items.service';
import { BuscarItemsComponent } from './components/buscar-items/buscar-items.component';
import { FormsModule } from '@angular/forms';
import { DetalleItemComponent } from './components/detalle-item/detalle-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarritoComponent } from './components/home/carrito/carrito.component';
import { FiltroComponent } from './components/home/filtro/filtro.component';
import { ContenidoComponent } from './components/home/contenido/contenido.component';
import { DetalleCarritoComponent } from './components/detalle-carrito/detalle-carrito.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAc55ZlP22-kElzYG-oUB7OpRmzn2GEzuI",
  authDomain: "front-petrolitos.firebaseapp.com",
  databaseURL: "https://front-petrolitos.firebaseio.com",
  projectId: "front-petrolitos",
  storageBucket: "",
  messagingSenderId: "929192726084",
  appId: "1:929192726084:web:dd28e3a7b65f18b8187611"
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
    DetalleCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
