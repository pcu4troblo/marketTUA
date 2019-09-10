import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { UserService } from 'src/app/services/user.service';
import { itemsInterface } from 'src/app/interfaces/itemsInterface';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  items: Array<itemsInterface> = [];

  seller: any;

  buscar: string;

  constructor(private itemService: ItemsService, private userService: UserService) { }

  ngOnInit() {
  }


  mostrar() {
    this.items = [];
    this.itemService.getAll(this.buscar)
      .subscribe(data => {
        let aux: Array<any> = data.results;
        aux.forEach((itemTemp) => {
          this.userService.getSeller(itemTemp.seller.id.toString())
            .subscribe(data => {
              let item: itemsInterface = {
                itemName: itemTemp.title,
                itemImg: itemTemp.thumbnail,
                sellerName: data.nickname,
                itemCost: itemTemp.price

              };
              this.items.push(item);
           
            })
        })
      });
  }
}
