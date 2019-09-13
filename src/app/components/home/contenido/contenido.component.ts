import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  items: Array<any> = [];
  
  seller: any;

  buscar: string;

  constructor(private itemService: ItemsService, private router: Router) { }

  ngOnInit() {
      
   this.mostrar()
    }
    
  mostrar() {
    this.items = [];
    this.itemService.getAll(this.buscar)
      .subscribe(data => {
              this.items = data.products;
              console.log(this.items);
            })
  }

  onSelected(item: any){
    this.router.navigateByUrl("/items/" + item.id);
  }

  onKeydown(event){
    this.mostrar();
    console.log(event);
    
  }
}
