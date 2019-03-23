import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductosService} from '../../services/productos.service';
import {Producto} from '../../models/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
  providers: [ProductosService]
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[];

	public title: string;
  constructor(
    private _route: ActivatedRoute,
  	private _router: Router,
    private _productosService: ProductosService
) { 
  	this.title = 'listado de listado de productos';
  }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(){
    this.productos = this._productosService.getProductos();
    /*.subscribe( results: Producto[] => {
        this.productos = results;
      }, (error=>{
        console.log('ocurrio un error');
        });
    */  
  }

}
