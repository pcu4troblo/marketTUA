import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalle-item.component.html',
  styleUrls: ['./detalle-item.component.css']
})
export class DetalleItemComponent implements OnInit {

  id : string = "MCO449131640"
  item : any = [];

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.itemService.getItemById(this.id).subscribe(data => {
       this.item = data;
       console.log(this.item);
       
    })
  }

}
