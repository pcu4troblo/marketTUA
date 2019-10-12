import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Marca } from 'src/app/interfaces/marca';
import { MarcaService } from 'src/app/services/marca.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  items: Array<any> = [];

  itemsArray: Array<any> = [];
  
  seller: any;

  buscar: string;

  categorias: Array<any> = [];

  categoriaSeleccionada: string = null;

  marcas: Array<any> = [];

  marcaSeleccionada: string = null;

  constructor(private itemService: ItemsService, private categoriaService: CategoriaService, private marcaService: MarcaService , private router: Router) { }

  ngOnInit() {
    this.obtenerCategorias();
    this.obtenerMarcas();
  }
    
  mostrar() {
    this.items = [];
    this.itemsArray = [];
    this.itemService.API.forEach(item =>{
      this.itemService.getAll(this.buscar,item)
        .subscribe(data => {
              this.items = data.products;
              //this.itemsArray = data.products;
              console.log(data);
        });
        this.itemsArray.forEach(item =>{
          
            this.items.push(item);
       
        })
        
        console.log(this.items);
    })
    
    //this.itemService.getAll(this.buscar)
    //  .subscribe(data => {
    //          this.items = data.products;
    //          console.log(this.items);
    //        });
  }

  onSelected(item: any){
    this.router.navigateByUrl("/items/" + item.id);
  }

  onKeydown(event){
    this.mostrar();
    console.log(event);
    
  }
  obtenerCategorias(){
    this.categoriaService.categories().subscribe(resultado =>{
      this.categorias = resultado.data;
    });
  }

  obtenerMarcas(){
    this.marcaService.brands().subscribe(resultado => {
      this.marcas = resultado.brands;
    });
  }

  filtrarPorCategoria(){
    if(this.categoriaSeleccionada !== null){
      this.items = [];
      this.itemService.API.forEach(item =>{
          this.itemService.getItemByCategory(this.categoriaSeleccionada,item).subscribe( resultado =>{
          this.items.push(resultado.products);
        })
      })
    }
  }

  filtrarPorMarca(){
    if (this.marcaSeleccionada !== null){
      this.items = [];
      this.itemService.API.forEach(item =>{
        this.itemService.getAll(this.marcaSeleccionada,item).subscribe(resultado => {
          this.items.push(resultado.products);
        });
      })
    }
  }

}
